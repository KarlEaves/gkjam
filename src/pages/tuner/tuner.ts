import { Scales } from './../../assets/music-classes/Scales';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
//This... 
import { MediaPlugin } from 'ionic-native';

import {HttpModule}

/**
 * Generated class for the TunerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tuner',
  templateUrl: 'tuner.html',
})

export class TunerPage {

  




  constructor( public scales: Scales, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public plt: Platform) {

  }

  public startApplicationRecording() {

    console.log("new record button");
    try {
      let media = new MediaPlugin('../Library/NoCloud/recording.wav');
      media.startRecord();
    }
    catch (e) {
      this.showAlert('Could not start recording.');
    }

  }

  public startWebRecording(){
      console.log("desktop");
  }

  //start recording is called when the button is clicked. it checks which device the user is on, and does code based on that
  public startRecording(){
    if ((this.plt.is('ios')) || (this.plt.is('android')))
    {
      this.startApplicationRecording();
    }
    if (this.plt.is('core'))
    {
      this.startWebRecording();
    }
  }

  showAlert(message) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {

    this.scales.make_scales();
    var C2 = 65.41; // C2 note, in Hz.

    var notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    var test_frequencies = [];
    for (var i = 0; i < 30; i++) {
      var note_frequency = C2 * Math.pow(2, i / 12);
      var note_name = notes[i % 12];
      var note = { "frequency": note_frequency, "name": note_name };
      var just_above = { "frequency": note_frequency * Math.pow(2, 1 / 48), "name": note_name + " (a bit sharp)" };
      var just_below = { "frequency": note_frequency * Math.pow(2, -1 / 48), "name": note_name + " (a bit flat)" };
      test_frequencies = test_frequencies.concat([just_below, note, just_above]);
    }
    if (typeof (correlation_worker) == "undefined") {
      var correlation_worker = new Worker("./assets/correlation_worker.js");
    }

    correlation_worker.addEventListener("message", interpret_correlation_result);

    //called when button is hit, calls initialize
    function start_recording() {
      if (recording == false) {
        initialize();
        recording = true;
      }
    }

    //asks user to use mic, calls use_stream
    function initialize() {
      var get_user_media = navigator.getUserMedia;
      //  get_user_media = get_user_media || navigator.webkitGetUserMedia;
      //  get_user_media = get_user_media || navigator.mozGetUserMedia;
      get_user_media.call(navigator, { "audio": true }, use_stream, function () { });
    }

    function add_to_recorded_notes(note) {
      let note_to_add: string;
      note_to_add = note[0];
      if (note[1] == "#") {
        note_to_add = note_to_add + note[1];
      }
      if (recorded_notes.indexOf(note_to_add) == -1) {
        recorded_notes.push(note_to_add);
      }
    }

    function use_stream(stream) {
      var AudioContext = (<any>window).AudioContext // Default
      || (<any>window).webkitAudioContext // Safari and old versions of Chrome
      || false;      
      
      
      var audio_context = new AudioContext();

      var microphone = audio_context.createMediaStreamSource(stream);
      (<any>window).source = microphone; // Workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=934512
      console.log("set mic");
      var script_processor = audio_context.createScriptProcessor(1024, 1, 1);
      script_processor.connect(audio_context.destination);
      microphone.connect(script_processor);
      var buffer = [];
      var sample_length_milliseconds = 100;
      var recording = true;
      // Need to leak this function into the global namespace so it doesn't get
      // prematurely garbage-collected.
      // http://lists.w3.org/Archives/Public/public-audio/2013JanMar/0304.html
      (<any>window).capture_audio = function (event) {
        if (!recording) {
          return;
        }
        buffer = buffer.concat(Array.prototype.slice.call(event.inputBuffer.getChannelData(0)));

        // Stop recording after sample_length_milliseconds.
        if (buffer.length > sample_length_milliseconds * audio_context.sampleRate / 1000) {
          //    console.log("wut");
          recording = false;
          correlation_worker.postMessage
            (
            {
              "timeseries": buffer,
              "test_frequencies": test_frequencies,
              "sample_rate": audio_context.sampleRate
            }
            );
          buffer = [];
          //  console.log("why god");
          setTimeout(function () { recording = true; }, 250);
        }
      };
      script_processor.onaudioprocess = (<any>window).capture_audio;
    }

    function interpret_correlation_result(event) {
      if (recording == true) {
        var timeseries = event.data.timeseries;
        var frequency_amplitudes = event.data.frequency_amplitudes;
        // Compute the (squared) magnitudes of the complex amplitudes for each
        // test frequency.
        var magnitudes = frequency_amplitudes.map(function (z) { return z[0] * z[0] + z[1] * z[1]; });
        // Find the maximum in the list of magnitudes.
        var maximum_index = -1;
        var maximum_magnitude = 0;
        for (var i = 0; i < magnitudes.length; i++) {
          if (magnitudes[i] <= maximum_magnitude)
            continue;
          maximum_index = i;
          maximum_magnitude = magnitudes[i];
        }
        // Compute the average magnitude. We'll only pay attention to frequencies
        // with magnitudes significantly above average.
        var average = magnitudes.reduce(function (a, b) { return a + b; }, 0) / magnitudes.length;
        var confidence = maximum_magnitude / average;
        var confidence_threshold = 10; // empirical, arbitrary.
        if (confidence > confidence_threshold) {
          var dominant_frequency = test_frequencies[maximum_index];
          document.getElementById("note-name").textContent = dominant_frequency.name;
          document.getElementById("frequency").textContent = dominant_frequency.frequency;
          console.log("name: " + dominant_frequency.name);
          console.log("frequency:" + dominant_frequency.frequency);
          add_to_recorded_notes(dominant_frequency.name);
          console.log(recorded_notes);
        }
      }
    }
    // Unnecessary addition of button to play an E note.
    var note_context = new AudioContext();
    var note_node = note_context.createOscillator();
    var gain_node = note_context.createGain();
    (<any>note_node).frequency
    {
      // value:  C2 * Math.pow(2, 4 / 12); // E, ~82.41 Hz.
      // writable: true
    }
    //  (<any>note_node).frequency = C2 * Math.pow(2, 4 / 12); // E, ~82.41 Hz.
    gain_node.gain.value = 0;
    note_node.connect(gain_node);
    gain_node.connect(note_context.destination);
    note_node.start();
    var playing = false;


    function toggle_playing_note() {
      playing = !playing;
      if (playing)
        gain_node.gain.value = 0.1;
      else
        gain_node.gain.value = 0;
    }



    document.getElementById("play-note").addEventListener("click", toggle_playing_note);

    document.getElementById("start_recording").addEventListener("click", start_recording);

    document.getElementById("stop_recording").addEventListener("click", find_scale);

    document.getElementById("reset_recording").addEventListener("click", reset_recorded_notes);

  }
}
//-----------------------------------------------------------------------------------------------------------------------------------------

var recording = false;



var recorded_notes = [];



//receives list of notes, loops through each scale to see if it contains a subset of the notes, and calls write_scales_to_html on scales
function find_scale() {
  if (recording == false) {
    console.log("must be recording");
  }
  else {
    console.log(recorded_notes);
    console.log("notes to find: " + recorded_notes);
    //ADD EXTRA SCALES TO LOOP HERE
    //loop through all scales, check if they contain subset of notes in parameter, add to list if they do
    let containing_scales = [];
    for (let i = 0; i < this.scales.major_scales.length; i++) {
      if (recorded_notes.every(val => this.scales.major_scales[i].indexOf(val) >= 0) == true) {
        containing_scales.push(this.scales.major_scales[i][0] + " major (ionian)");
        containing_scales.push(this.scales.dorian_scales[(i + 2) % 12][1] + " dorian");
        containing_scales.push(this.scales.phrygian_scales[(i + 4) % 12][2] + " phrygian");
        containing_scales.push(this.scales.lydian_scales[(i + 5) % 12][3] + " lydian");
        containing_scales.push(this.scales.mixolydian_scales[(i + 7) % 12][4] + " mixolydian");
        containing_scales.push(this.scales.locrian_scales[(i + 11) % 12][6] + " locrian");
      }
    }

    for (let i = 0; i < this.scales.minor_scales.length; i++) {
      if (recorded_notes.every(val => this.scales.minor_scales[i].indexOf(val) >= 0) == true) {
        containing_scales.push(this.scales.minor_scales[i][0] + " minor (aeolian)");
      }
    }

    for (let i = 0; i < this.scales.minor_pentatonic_scales.length; i++) {
      if (recorded_notes.every(val => this.scales.minor_pentatonic_scales[i].indexOf(val) >= 0) == true) {
        containing_scales.push(this.scales.minor_pentatonic_scales[i][0] + " minor pentatonic");
      }
    }

    for (let i = 0; i < this.scales.major_pentatonic_scales.length; i++) {
      if (recorded_notes.every(val => this.scales.major_pentatonic_scales[i].indexOf(val) >= 0) == true) {
        containing_scales.push(this.scales.major_pentatonic_scales[i][0] + " major pentatonic");
      }
    }
    for (let i = 0; i < this.scales.minor_melodic_scales.length; i++) {
      if (recorded_notes.every(val => this.scales.minor_melodic_scales[i].indexOf(val) >= 0) == true) {
        containing_scales.push(this.scales.minor_melodic_scales[i][0] + " melodic minor");
      }
    }

    for (let i = 0; i < this.scales.minor_harmonic_scales.length; i++) {
      if (recorded_notes.every(val => this.scales.minor_harmonic_scales[i].indexOf(val) >= 0) == true) {
        containing_scales.push(this.scales.minor_harmonic_scales[i][0] + " harmonic minor");
      }
    }

    for (let i = 0; i < this.scales.minor_blues_scales.length; i++) {
      if (recorded_notes.every(val => this.scales.minor_blues_scales[i].indexOf(val) >= 0) == true) {
        containing_scales.push(this.scales.minor_blues_scales[i][0] + " blues minor");
      }
    }

    for (let i = 0; i < this.scales.major_blues_scales.length; i++) {
      if (recorded_notes.every(val => this.scales.major_blues_scales[i].indexOf(val) >= 0) == true) {
        containing_scales.push(this.scales.major_blues_scales[i][0] + " blues major");
      }
    }

    for (let i = 0; i < this.scales.major_bebop_scales.length; i++) {
      if (recorded_notes.every(val => this.scales.major_bebop_scales[i].indexOf(val) >= 0) == true) {
        containing_scales.push(this.scales.major_bebop_scales[i][0] + " bebop major");
      }
    }

    for (let i = 0; i < this.scales.minor_bebop_scales.length; i++) {
      if (recorded_notes.every(val => this.scales.minor_bebop_scales[i].indexOf(val) >= 0) == true) {
        containing_scales.push(this.scales.minor_bebop_scales[i][0] + " bebop minor");
      }
    }
    //sends the containing scales list to be written to html and displayed
    write_scale_to_html(containing_scales);
    recording = false;
    recorded_notes = [];
  }

}

function reset_recorded_notes() {
  recorded_notes = [];
}
function scale_to_notes(scale: string) {
  let music_notes_to_return = [];
  console.log("scale: " + scale);
  let root: number = this.scales.music_notes.indexOf(scale[0]);

  //if the chord has a #, it starts at 1 + the index of the letter
  if (scale[1] == "#") {
    root = root + 1;
  }

  music_notes_to_return.push(this.scales.music_notes[root]);
  if (scale.includes("major pentatonic")) {
    console.log("major pentatonic");
    music_notes_to_return.push(this.scales.music_notes[(root + 2) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 4) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 7) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 9) % 12]);

  }
  else if (scale.includes("dorian")) {
    console.log("dorian");
    music_notes_to_return.push(this.scales.music_notes[(root + 2) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 3) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 5) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 7) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 9) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 10) % 12]);
  }
  else if (scale.includes("phrygian")) {

    console.log("phrygian");
    music_notes_to_return.push(this.scales.music_notes[(root + 1) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 3) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 5) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 7) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 8) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 10) % 12]);
  }
  else if (scale.includes("lydian")) {
    console.log("lydian");
    music_notes_to_return.push(this.scales.music_notes[(root + 2) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 4) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 6) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 7) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 9) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 11) % 12]);
  }
  else if (scale.includes("mixolydian")) {
    console.log("mixolydian");
    music_notes_to_return.push(this.scales.music_notes[(root + 2) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 4) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 5) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 7) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 9) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 10) % 12]);
  }
  else if (scale.includes("locrian")) {
    console.log("locrian");
    music_notes_to_return.push(this.scales.music_notes[(root + 1) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 3) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 5) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 6) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 8) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 10) % 12]);
  }
  else if (scale.includes("bebop major")) {
    console.log("bebop major");
    music_notes_to_return.push(this.scales.music_notes[(root + 2) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 4) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 5) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 7) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 8) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 9) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 11) % 12]);
  }
  else if (scale.includes("blues major")) {
    console.log("blues major");
    music_notes_to_return.push(this.scales.music_notes[(root + 2) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 3) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 4) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 7) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 9) % 12]);
  }
  else if (scale.includes("major")) {
    console.log("major");
    music_notes_to_return.push(this.scales.music_notes[(root + 2) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 4) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 5) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 7) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 9) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 11) % 12]);

  }
  else if (scale.includes("minor pentatonic")) {
    console.log("minor pentatonic");
    music_notes_to_return.push(this.scales.music_notes[(root + 3) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 5) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 7) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 10) % 12]);
  }

  else if (scale.includes("blues minor")) {
    console.log("blues minor");
    music_notes_to_return.push(this.scales.music_notes[(root + 3) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 5) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 6) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 7) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 10) % 12]);
  }
  else if (scale.includes("bebop minor")) {
    console.log("bebop minor");
    music_notes_to_return.push(this.scales.music_notes[(root + 2) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 3) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 4) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 5) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 7) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 8) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 10) % 12]);
  }
  else if (scale.includes("harmonic minor")) {
    console.log("harmonic minor");
    music_notes_to_return.push(this.scales.music_notes[(root + 2) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 3) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 5) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 7) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 8) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 11) % 12]);
  }
  else if (scale.includes("melodic minor")) {
    console.log("melodic minor");
    music_notes_to_return.push(this.scales.music_notes[(root + 2) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 3) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 5) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 7) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 9) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 11) % 12]);
  }
  else if (scale.includes("minor")) {
    console.log("minor");
    music_notes_to_return.push(this.scales.music_notes[(root + 2) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 3) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 5) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 7) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 8) % 12]);
    music_notes_to_return.push(this.scales.music_notes[(root + 10) % 12]);
  }
  return music_notes_to_return;
}
function write_scale_to_html(these_scales: string[]) {

  clearBox("scalePrinter");
  var para = document.createElement("h3");
  para.appendChild(document.createTextNode("Scales Containing Your Notes: "));
  document.getElementById("scalePrinter").appendChild(para);

  // Create the list element:
  var list = document.createElement('ul');
  list.classList.add("list-group")

  for (var i = 0; i < these_scales.length; i++) {
    // Create the list item:
    var item = document.createElement('li');
    item.classList.add("list-group-item");

    // Set its contents:
    item.appendChild(document.createTextNode(these_scales[i]));
    let these_notes = scale_to_notes(these_scales[i]);
    for (let i = 0; i < these_notes.length; i++) {
      item.appendChild(document.createTextNode(" - " + these_notes[i]));
    }

    // Add it to the list:
    list.appendChild(item);
  }
  document.getElementById('scalePrinter').appendChild(list);

  // Finally, return the constructed list:
  return list;
}




//clears an html element
function clearBox(elementID) {
  document.getElementById(elementID).innerHTML = "";
}

function compute_correlations(timeseries, test_frequencies, sample_rate) {
  // 2pi * frequency gives the appropriate period to sine.
  // timeseries index / sample_rate gives the appropriate time coordinate.
  var scale_factor = 2 * Math.PI / sample_rate;
  var amplitudes = test_frequencies.map
    (
    function (f) {
      var frequency = f.frequency;

      // Represent a complex number as a length-2 array [ real, imaginary ].
      var accumulator = [0, 0];
      for (var t = 0; t < timeseries.length; t++) {
        accumulator[0] += timeseries[t] * Math.cos(scale_factor * frequency * t);
        accumulator[1] += timeseries[t] * Math.sin(scale_factor * frequency * t);
      }

      return accumulator;
    }
    );

  return amplitudes;
}
 // Define the set of test frequencies that we'll use to analyze microphone data.