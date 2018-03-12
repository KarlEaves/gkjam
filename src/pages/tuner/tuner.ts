import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {

    make_scales();
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

var major_scales = [];

var minor_scales = [];

var major_pentatonic_scales = [];

var minor_pentatonic_scales = [];

var minor_melodic_scales = [];

var minor_harmonic_scales = [];

var minor_blues_scales = [];

var major_blues_scales = [];

var major_bebop_scales = [];

var minor_bebop_scales = [];

let ionian_scales = [];

let dorian_scales = [];

let phrygian_scales = [];

let lydian_scales = [];

let mixolydian_scales = [];

let aeolian_scales = [];

let locrian_scales = [];

var music_notes: string[] = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
//declare major scales
let a_major_scale = make_major("A", music_notes);
let a_sharp_major_scale = make_major("A#", music_notes);
let b_major_scale = make_major("B", music_notes);
let c_major_scale = make_major("C", music_notes);
let c_sharp_major_scale = make_major("C#", music_notes);
let d_major_scale = make_major("D", music_notes);
let d_sharp_major_scale = make_major("D#", music_notes);
let e_major_scale = make_major("E", music_notes);
let f_major_scale = make_major("F", music_notes);
let f_sharp_major_scale = make_major("F#", music_notes);
let g_major_scale = make_major("G", music_notes);
let g_sharp_major_scale = make_major("G#", music_notes);

//declare minor scales
let a_minor_scale = make_minor("A", music_notes);
let a_sharp_minor_scale = make_minor("A#", music_notes);
let b_minor_scale = make_minor("B", music_notes);
let c_minor_scale = make_minor("C", music_notes);
let c_sharp_minor_scale = make_minor("C#", music_notes);
let d_minor_scale = make_minor("D", music_notes);
let d_sharp_minor_scale = make_minor("D#", music_notes);
let e_minor_scale = make_minor("E", music_notes);
let f_minor_scale = make_minor("F", music_notes);
let f_sharp_minor_scale = make_minor("F#", music_notes);
let g_minor_scale = make_minor("G", music_notes);
let g_sharp_minor_scale = make_minor("G#", music_notes);

//declare major pentatonic scales
let a_major_p_scale = make_pentatonic_major("A", music_notes);
let a_sharp_major_p_scale = make_pentatonic_major("A#", music_notes);
let b_major_p_scale = make_pentatonic_major("B", music_notes);
let c_major_p_scale = make_pentatonic_major("C", music_notes);
let c_sharp_major_p_scale = make_pentatonic_major("C#", music_notes);
let d_major_p_scale = make_pentatonic_major("D", music_notes);
let d_sharp_major_p_scale = make_pentatonic_major("D#", music_notes);
let e_major_p_scale = make_pentatonic_major("E", music_notes);
let f_major_p_scale = make_pentatonic_major("F", music_notes);
let f_sharp_major_p_scale = make_pentatonic_major("F#", music_notes);
let g_major_p_scale = make_pentatonic_major("G", music_notes);
let g_sharp_major_p_scale = make_pentatonic_major("G#", music_notes);

//declare minor pentatonic scales
let a_minor_p_scale = make_pentatonic_minor("A", music_notes);
let a_sharp_minor_p_scale = make_pentatonic_minor("A#", music_notes);
let b_minor_p_scale = make_pentatonic_minor("B", music_notes);
let c_minor_p_scale = make_pentatonic_minor("C", music_notes);
let c_sharp_minor_p_scale = make_pentatonic_minor("C#", music_notes);
let d_minor_p_scale = make_pentatonic_minor("D", music_notes);
let d_sharp_minor_p_scale = make_pentatonic_minor("D#", music_notes);
let e_minor_p_scale = make_pentatonic_minor("E", music_notes);
let f_minor_p_scale = make_pentatonic_minor("F", music_notes);
let f_sharp_minor_p_scale = make_pentatonic_minor("F#", music_notes);
let g_minor_p_scale = make_pentatonic_minor("G", music_notes);
let g_sharp_minor_p_scale = make_pentatonic_minor("G#", music_notes);

//declare melodic minor scales
let a_minor_melodic_scale = make_melodic_minor("A", music_notes);
let a_sharp_minor_melodic_scale = make_melodic_minor("A#", music_notes);
let b_minor_melodic_scale = make_melodic_minor("B", music_notes);
let c_minor_melodic_scale = make_melodic_minor("C", music_notes);
let c_sharp_minor_melodic_scale = make_melodic_minor("C#", music_notes);
let d_minor_melodic_scale = make_melodic_minor("D", music_notes);
let d_sharp_minor_melodic_scale = make_melodic_minor("D#", music_notes);
let e_minor_melodic_scale = make_melodic_minor("E", music_notes);
let f_minor_melodic_scale = make_melodic_minor("F", music_notes);
let f_sharp_minor_melodic_scale = make_melodic_minor("F#", music_notes);
let g_minor_melodic_scale = make_melodic_minor("G", music_notes);
let g_sharp_minor_melodic_scale = make_melodic_minor("G#", music_notes);

//declare harmonic minor scales
let a_minor_harmonic_scale = make_harmonic_minor("A", music_notes);
let a_sharp_minor_harmonic_scale = make_harmonic_minor("A#", music_notes);
let b_minor_harmonic_scale = make_harmonic_minor("B", music_notes);
let c_minor_harmonic_scale = make_harmonic_minor("C", music_notes);
let c_sharp_minor_harmonic_scale = make_harmonic_minor("C#", music_notes);
let d_minor_harmonic_scale = make_harmonic_minor("D", music_notes);
let d_sharp_minor_harmonic_scale = make_harmonic_minor("D#", music_notes);
let e_minor_harmonic_scale = make_harmonic_minor("E", music_notes);
let f_minor_harmonic_scale = make_harmonic_minor("F", music_notes);
let f_sharp_minor_harmonic_scale = make_harmonic_minor("F#", music_notes);
let g_minor_harmonic_scale = make_harmonic_minor("G", music_notes);
let g_sharp_minor_harmonic_scale = make_harmonic_minor("G#", music_notes);

//declare  minor blues scales
let a_minor_blues_scale = make_minor_blues("A", music_notes);
let a_sharp_minor_blues_scale = make_minor_blues("A#", music_notes);
let b_minor_blues_scale = make_minor_blues("B", music_notes);
let c_minor_blues_scale = make_minor_blues("C", music_notes);
let c_sharp_minor_blues_scale = make_minor_blues("C#", music_notes);
let d_minor_blues_scale = make_minor_blues("D", music_notes);
let d_sharp_minor_blues_scale = make_minor_blues("D#", music_notes);
let e_minor_blues_scale = make_minor_blues("E", music_notes);
let f_minor_blues_scale = make_minor_blues("F", music_notes);
let f_sharp_minor_blues_scale = make_minor_blues("F#", music_notes);
let g_minor_blues_scale = make_minor_blues("G", music_notes);
let g_sharp_minor_blues_scale = make_minor_blues("G#", music_notes);

//declare  major blues scales
let a_major_blues_scale = f_sharp_minor_blues_scale;
let a_sharp_major_blues_scale = g_minor_blues_scale;
let b_major_blues_scale = g_sharp_minor_blues_scale;
let c_major_blues_scale = a_minor_blues_scale;
let c_sharp_major_blues_scale = a_sharp_minor_blues_scale;
let d_major_blues_scale = b_minor_blues_scale;
let d_sharp_major_blues_scale = c_minor_blues_scale;
let e_major_blues_scale = c_sharp_minor_blues_scale;
let f_major_blues_scale = d_minor_blues_scale;
let f_sharp_major_blues_scale = d_sharp_minor_blues_scale;
let g_major_blues_scale = e_minor_blues_scale;
let g_sharp_major_blues_scale = f_minor_blues_scale;

//declare  minor bebop scales
let a_minor_bebop_scale = make_bebop_minor("A", music_notes);
let a_sharp_minor_bebop_scale = make_bebop_minor("A#", music_notes);
let b_minor_bebop_scale = make_bebop_minor("B", music_notes);
let c_minor_bebop_scale = make_bebop_minor("C", music_notes);
let c_sharp_minor_bebop_scale = make_bebop_minor("C#", music_notes);
let d_minor_bebop_scale = make_bebop_minor("D", music_notes);
let d_sharp_minor_bebop_scale = make_bebop_minor("D#", music_notes);
let e_minor_bebop_scale = make_bebop_minor("E", music_notes);
let f_minor_bebop_scale = make_bebop_minor("F", music_notes);
let f_sharp_minor_bebop_scale = make_bebop_minor("F#", music_notes);
let g_minor_bebop_scale = make_bebop_minor("G", music_notes);
let g_sharp_minor_bebop_scale = make_bebop_minor("G#", music_notes);

//declare major bebop scales
let a_major_bebop_scale = make_bebop_major("A", music_notes);
let a_sharp_major_bebop_scale = make_bebop_major("A#", music_notes);
let b_major_bebop_scale = make_bebop_major("B", music_notes);
let c_major_bebop_scale = make_bebop_major("C", music_notes);
let c_sharp_major_bebop_scale = make_bebop_major("C#", music_notes);
let d_major_bebop_scale = make_bebop_major("D", music_notes);
let d_sharp_major_bebop_scale = make_bebop_major("D#", music_notes);
let e_major_bebop_scale = make_bebop_major("E", music_notes);
let f_major_bebop_scale = make_bebop_major("F", music_notes);
let f_sharp_major_bebop_scale = make_bebop_major("F#", music_notes);
let g_major_bebop_scale = make_bebop_major("G", music_notes);
let g_sharp_major_bebop_scale = make_bebop_major("G#", music_notes);

//declare dorian scales
let a_dorian_scale = make_major("G", music_notes);
let a_sharp_dorian_scale = make_major("G#", music_notes);
let b_dorian_scale = make_major("A", music_notes);
let c_dorian_scale = make_major("A#", music_notes);
let c_sharp_dorian_scale = make_major("B", music_notes);
let d_dorian_scale = make_major("C", music_notes);
let d_sharp_dorian_scale = make_major("C#", music_notes);
let e_dorian_scale = make_major("D", music_notes);
let f_dorian_scale = make_major("D#", music_notes);
let f_sharp_dorian_scale = make_major("E", music_notes);
let g_dorian_scale = make_major("F", music_notes);
let g_sharp_dorian_scale = make_major("F#", music_notes);

//declare phrygian scales
let a_phrygian_scale = make_major("F", music_notes);
let a_sharp_phrygian_scale = make_major("F#", music_notes);
let b_phrygian_scale = make_major("G", music_notes);
let c_phrygian_scale = make_major("G#", music_notes);
let c_sharp_phrygian_scale = make_major("A", music_notes);
let d_phrygian_scale = make_major("A#", music_notes);
let d_sharp_phrygian_scale = make_major("B", music_notes);
let e_phrygian_scale = make_major("C", music_notes);
let f_phrygian_scale = make_major("C#", music_notes);
let f_sharp_phrygian_scale = make_major("D", music_notes);
let g_phrygian_scale = make_major("D#", music_notes);
let g_sharp_phrygian_scale = make_major("E", music_notes);

//declare lydian scales
let a_lydian_scale = make_major("E", music_notes);
let a_sharp_lydian_scale = make_major("F", music_notes);
let b_lydian_scale = make_major("F#", music_notes);
let c_lydian_scale = make_major("G", music_notes);
let c_sharp_lydian_scale = make_major("G#", music_notes);
let d_lydian_scale = make_major("A", music_notes);
let d_sharp_lydian_scale = make_major("A#", music_notes);
let e_lydian_scale = make_major("B", music_notes);
let f_lydian_scale = make_major("C", music_notes);
let f_sharp_lydian_scale = make_major("C#", music_notes);
let g_lydian_scale = make_major("D", music_notes);
let g_sharp_lydian_scale = make_major("D#", music_notes);

//declare mixolydian scales
let a_mixolydian_scale = make_major("D", music_notes);
let a_sharp_mixolydian_scale = make_major("D#", music_notes);
let b_mixolydian_scale = make_major("E", music_notes);
let c_mixolydian_scale = make_major("F", music_notes);
let c_sharp_mixolydian_scale = make_major("F#", music_notes);
let d_mixolydian_scale = make_major("G", music_notes);
let d_sharp_mixolydian_scale = make_major("G#", music_notes);
let e_mixolydian_scale = make_major("A", music_notes);
let f_mixolydian_scale = make_major("A#", music_notes);
let f_sharp_mixolydian_scale = make_major("B", music_notes);
let g_mixolydian_scale = make_major("C", music_notes);
let g_sharp_mixolydian_scale = make_major("C#", music_notes);

//declare aeolian scales
let a_aeolian_scale = make_minor("A", music_notes);
let a_sharp_aeolian_scale = make_minor("A#", music_notes);
let b_aeolian_scale = make_minor("B", music_notes);
let c_aeolian_scale = make_minor("C", music_notes);
let c_sharp_aeolian_scale = make_minor("C#", music_notes);
let d_aeolian_scale = make_minor("D", music_notes);
let d_sharp_aeolian_scale = make_minor("D#", music_notes);
let e_aeolian_scale = make_minor("E", music_notes);
let f_aeolian_scale = make_minor("F", music_notes);
let f_sharp_aeolian_scale = make_minor("F#", music_notes);
let g_aeolian_scale = make_minor("G", music_notes);
let g_sharp_aeolian_scale = make_minor("G#", music_notes);

//declare locrian scales
let a_locrian_scale = make_major("A#", music_notes);
let a_sharp_locrian_scale = make_major("B", music_notes);
let b_locrian_scale = make_major("C", music_notes);
let c_locrian_scale = make_major("C#", music_notes);
let c_sharp_locrian_scale = make_major("D", music_notes);
let d_locrian_scale = make_major("D#", music_notes);
let d_sharp_locrian_scale = make_major("E", music_notes);
let e_locrian_scale = make_major("F", music_notes);
let f_locrian_scale = make_major("F#", music_notes);
let f_sharp_locrian_scale = make_major("G", music_notes);
let g_locrian_scale = make_major("G#", music_notes);
let g_sharp_locrian_scale = make_major("A", music_notes);


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
    for (let i = 0; i < major_scales.length; i++) {
      if (recorded_notes.every(val => major_scales[i].indexOf(val) >= 0) == true) {
        containing_scales.push(major_scales[i][0] + " major (ionian)");
        containing_scales.push(dorian_scales[(i + 2) % 12][1] + " dorian");
        containing_scales.push(phrygian_scales[(i + 4) % 12][2] + " phrygian");
        containing_scales.push(lydian_scales[(i + 5) % 12][3] + " lydian");
        containing_scales.push(mixolydian_scales[(i + 7) % 12][4] + " mixolydian");
        containing_scales.push(locrian_scales[(i + 11) % 12][6] + " locrian");
      }
    }

    for (let i = 0; i < minor_scales.length; i++) {
      if (recorded_notes.every(val => minor_scales[i].indexOf(val) >= 0) == true) {
        containing_scales.push(minor_scales[i][0] + " minor (aeolian)");
      }
    }

    for (let i = 0; i < minor_pentatonic_scales.length; i++) {
      if (recorded_notes.every(val => minor_pentatonic_scales[i].indexOf(val) >= 0) == true) {
        containing_scales.push(minor_pentatonic_scales[i][0] + " minor pentatonic");
      }
    }

    for (let i = 0; i < major_pentatonic_scales.length; i++) {
      if (recorded_notes.every(val => major_pentatonic_scales[i].indexOf(val) >= 0) == true) {
        containing_scales.push(major_pentatonic_scales[i][0] + " major pentatonic");
      }
    }
    for (let i = 0; i < minor_melodic_scales.length; i++) {
      if (recorded_notes.every(val => minor_melodic_scales[i].indexOf(val) >= 0) == true) {
        containing_scales.push(minor_melodic_scales[i][0] + " melodic minor");
      }
    }

    for (let i = 0; i < minor_harmonic_scales.length; i++) {
      if (recorded_notes.every(val => minor_harmonic_scales[i].indexOf(val) >= 0) == true) {
        containing_scales.push(minor_harmonic_scales[i][0] + " harmonic minor");
      }
    }

    for (let i = 0; i < minor_blues_scales.length; i++) {
      if (recorded_notes.every(val => minor_blues_scales[i].indexOf(val) >= 0) == true) {
        containing_scales.push(minor_blues_scales[i][0] + " blues minor");
      }
    }

    for (let i = 0; i < major_blues_scales.length; i++) {
      if (recorded_notes.every(val => major_blues_scales[i].indexOf(val) >= 0) == true) {
        containing_scales.push(major_blues_scales[i][0] + " blues major");
      }
    }

    for (let i = 0; i < major_bebop_scales.length; i++) {
      if (recorded_notes.every(val => major_bebop_scales[i].indexOf(val) >= 0) == true) {
        containing_scales.push(major_bebop_scales[i][0] + " bebop major");
      }
    }

    for (let i = 0; i < minor_bebop_scales.length; i++) {
      if (recorded_notes.every(val => minor_bebop_scales[i].indexOf(val) >= 0) == true) {
        containing_scales.push(minor_bebop_scales[i][0] + " bebop minor");
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
  let root: number = music_notes.indexOf(scale[0]);

  //if the chord has a #, it starts at 1 + the index of the letter
  if (scale[1] == "#") {
    root = root + 1;
  }

  music_notes_to_return.push(music_notes[root]);
  if (scale.includes("major pentatonic")) {
    console.log("major pentatonic");
    music_notes_to_return.push(music_notes[(root + 2) % 12]);
    music_notes_to_return.push(music_notes[(root + 4) % 12]);
    music_notes_to_return.push(music_notes[(root + 7) % 12]);
    music_notes_to_return.push(music_notes[(root + 9) % 12]);

  }
  else if (scale.includes("dorian")) {
    console.log("dorian");
    music_notes_to_return.push(music_notes[(root + 2) % 12]);
    music_notes_to_return.push(music_notes[(root + 3) % 12]);
    music_notes_to_return.push(music_notes[(root + 5) % 12]);
    music_notes_to_return.push(music_notes[(root + 7) % 12]);
    music_notes_to_return.push(music_notes[(root + 9) % 12]);
    music_notes_to_return.push(music_notes[(root + 10) % 12]);
  }
  else if (scale.includes("phrygian")) {

    console.log("phrygian");
    music_notes_to_return.push(music_notes[(root + 1) % 12]);
    music_notes_to_return.push(music_notes[(root + 3) % 12]);
    music_notes_to_return.push(music_notes[(root + 5) % 12]);
    music_notes_to_return.push(music_notes[(root + 7) % 12]);
    music_notes_to_return.push(music_notes[(root + 8) % 12]);
    music_notes_to_return.push(music_notes[(root + 10) % 12]);
  }
  else if (scale.includes("lydian")) {
    console.log("lydian");
    music_notes_to_return.push(music_notes[(root + 2) % 12]);
    music_notes_to_return.push(music_notes[(root + 4) % 12]);
    music_notes_to_return.push(music_notes[(root + 6) % 12]);
    music_notes_to_return.push(music_notes[(root + 7) % 12]);
    music_notes_to_return.push(music_notes[(root + 9) % 12]);
    music_notes_to_return.push(music_notes[(root + 11) % 12]);
  }
  else if (scale.includes("mixolydian")) {
    console.log("mixolydian");
    music_notes_to_return.push(music_notes[(root + 2) % 12]);
    music_notes_to_return.push(music_notes[(root + 4) % 12]);
    music_notes_to_return.push(music_notes[(root + 5) % 12]);
    music_notes_to_return.push(music_notes[(root + 7) % 12]);
    music_notes_to_return.push(music_notes[(root + 9) % 12]);
    music_notes_to_return.push(music_notes[(root + 10) % 12]);
  }
  else if (scale.includes("locrian")) {
    console.log("locrian");
    music_notes_to_return.push(music_notes[(root + 1) % 12]);
    music_notes_to_return.push(music_notes[(root + 3) % 12]);
    music_notes_to_return.push(music_notes[(root + 5) % 12]);
    music_notes_to_return.push(music_notes[(root + 6) % 12]);
    music_notes_to_return.push(music_notes[(root + 8) % 12]);
    music_notes_to_return.push(music_notes[(root + 10) % 12]);
  }
  else if (scale.includes("bebop major")) {
    console.log("bebop major");
    music_notes_to_return.push(music_notes[(root + 2) % 12]);
    music_notes_to_return.push(music_notes[(root + 4) % 12]);
    music_notes_to_return.push(music_notes[(root + 5) % 12]);
    music_notes_to_return.push(music_notes[(root + 7) % 12]);
    music_notes_to_return.push(music_notes[(root + 8) % 12]);
    music_notes_to_return.push(music_notes[(root + 9) % 12]);
    music_notes_to_return.push(music_notes[(root + 11) % 12]);
  }
  else if (scale.includes("blues major")) {
    console.log("blues major");
    music_notes_to_return.push(music_notes[(root + 2) % 12]);
    music_notes_to_return.push(music_notes[(root + 3) % 12]);
    music_notes_to_return.push(music_notes[(root + 4) % 12]);
    music_notes_to_return.push(music_notes[(root + 7) % 12]);
    music_notes_to_return.push(music_notes[(root + 9) % 12]);
  }
  else if (scale.includes("major")) {
    console.log("major");
    music_notes_to_return.push(music_notes[(root + 2) % 12]);
    music_notes_to_return.push(music_notes[(root + 4) % 12]);
    music_notes_to_return.push(music_notes[(root + 5) % 12]);
    music_notes_to_return.push(music_notes[(root + 7) % 12]);
    music_notes_to_return.push(music_notes[(root + 9) % 12]);
    music_notes_to_return.push(music_notes[(root + 11) % 12]);

  }
  else if (scale.includes("minor pentatonic")) {
    console.log("minor pentatonic");
    music_notes_to_return.push(music_notes[(root + 3) % 12]);
    music_notes_to_return.push(music_notes[(root + 5) % 12]);
    music_notes_to_return.push(music_notes[(root + 7) % 12]);
    music_notes_to_return.push(music_notes[(root + 10) % 12]);
  }

  else if (scale.includes("blues minor")) {
    console.log("blues minor");
    music_notes_to_return.push(music_notes[(root + 3) % 12]);
    music_notes_to_return.push(music_notes[(root + 5) % 12]);
    music_notes_to_return.push(music_notes[(root + 6) % 12]);
    music_notes_to_return.push(music_notes[(root + 7) % 12]);
    music_notes_to_return.push(music_notes[(root + 10) % 12]);
  }
  else if (scale.includes("bebop minor")) {
    console.log("bebop minor");
    music_notes_to_return.push(music_notes[(root + 2) % 12]);
    music_notes_to_return.push(music_notes[(root + 3) % 12]);
    music_notes_to_return.push(music_notes[(root + 4) % 12]);
    music_notes_to_return.push(music_notes[(root + 5) % 12]);
    music_notes_to_return.push(music_notes[(root + 7) % 12]);
    music_notes_to_return.push(music_notes[(root + 8) % 12]);
    music_notes_to_return.push(music_notes[(root + 10) % 12]);
  }
  else if (scale.includes("harmonic minor")) {
    console.log("harmonic minor");
    music_notes_to_return.push(music_notes[(root + 2) % 12]);
    music_notes_to_return.push(music_notes[(root + 3) % 12]);
    music_notes_to_return.push(music_notes[(root + 5) % 12]);
    music_notes_to_return.push(music_notes[(root + 7) % 12]);
    music_notes_to_return.push(music_notes[(root + 8) % 12]);
    music_notes_to_return.push(music_notes[(root + 11) % 12]);
  }
  else if (scale.includes("melodic minor")) {
    console.log("melodic minor");
    music_notes_to_return.push(music_notes[(root + 2) % 12]);
    music_notes_to_return.push(music_notes[(root + 3) % 12]);
    music_notes_to_return.push(music_notes[(root + 5) % 12]);
    music_notes_to_return.push(music_notes[(root + 7) % 12]);
    music_notes_to_return.push(music_notes[(root + 9) % 12]);
    music_notes_to_return.push(music_notes[(root + 11) % 12]);
  }
  else if (scale.includes("minor")) {
    console.log("minor");
    music_notes_to_return.push(music_notes[(root + 2) % 12]);
    music_notes_to_return.push(music_notes[(root + 3) % 12]);
    music_notes_to_return.push(music_notes[(root + 5) % 12]);
    music_notes_to_return.push(music_notes[(root + 7) % 12]);
    music_notes_to_return.push(music_notes[(root + 8) % 12]);
    music_notes_to_return.push(music_notes[(root + 10) % 12]);
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


//adds scales to a list
function make_scales() {
  //push major scales into array
  major_scales.push(a_major_scale);
  major_scales.push(a_sharp_major_scale);
  major_scales.push(b_major_scale);
  major_scales.push(c_major_scale);
  major_scales.push(c_sharp_major_scale);
  major_scales.push(d_major_scale);
  major_scales.push(d_sharp_major_scale);
  major_scales.push(e_major_scale);
  major_scales.push(f_major_scale);
  major_scales.push(f_sharp_major_scale);
  major_scales.push(g_major_scale);
  major_scales.push(g_sharp_major_scale);

  //push minor scales into array
  minor_scales.push(a_minor_scale);
  minor_scales.push(a_sharp_minor_scale);
  minor_scales.push(b_minor_scale);
  minor_scales.push(c_minor_scale);
  minor_scales.push(c_sharp_minor_scale);
  minor_scales.push(d_minor_scale);
  minor_scales.push(d_sharp_minor_scale);
  minor_scales.push(e_minor_scale);
  minor_scales.push(f_minor_scale);
  minor_scales.push(f_sharp_minor_scale);
  minor_scales.push(g_minor_scale);
  minor_scales.push(g_sharp_minor_scale);

  //push major pentatonic into array
  major_pentatonic_scales.push(a_major_p_scale);
  major_pentatonic_scales.push(a_sharp_major_p_scale);
  major_pentatonic_scales.push(b_major_p_scale);
  major_pentatonic_scales.push(c_major_p_scale);
  major_pentatonic_scales.push(c_sharp_major_p_scale);
  major_pentatonic_scales.push(d_major_p_scale);
  major_pentatonic_scales.push(d_sharp_major_p_scale);
  major_pentatonic_scales.push(e_major_p_scale);
  major_pentatonic_scales.push(f_major_p_scale);
  major_pentatonic_scales.push(f_sharp_major_p_scale);
  major_pentatonic_scales.push(g_major_p_scale);
  major_pentatonic_scales.push(g_sharp_major_p_scale);

  //push minor pentatonic into array
  minor_pentatonic_scales.push(a_minor_p_scale);
  minor_pentatonic_scales.push(a_sharp_minor_p_scale);
  minor_pentatonic_scales.push(b_minor_p_scale);
  minor_pentatonic_scales.push(c_minor_p_scale);
  minor_pentatonic_scales.push(c_sharp_minor_p_scale);
  minor_pentatonic_scales.push(d_minor_p_scale);
  minor_pentatonic_scales.push(d_sharp_minor_p_scale);
  minor_pentatonic_scales.push(e_minor_p_scale);
  minor_pentatonic_scales.push(f_minor_p_scale);
  minor_pentatonic_scales.push(f_sharp_minor_p_scale);
  minor_pentatonic_scales.push(g_minor_p_scale);
  minor_pentatonic_scales.push(g_sharp_minor_p_scale);

  minor_melodic_scales.push(a_minor_melodic_scale);
  minor_melodic_scales.push(a_sharp_minor_melodic_scale);
  minor_melodic_scales.push(b_minor_melodic_scale);
  minor_melodic_scales.push(c_minor_melodic_scale);
  minor_melodic_scales.push(c_sharp_minor_melodic_scale);
  minor_melodic_scales.push(d_minor_melodic_scale);
  minor_melodic_scales.push(d_sharp_minor_melodic_scale);
  minor_melodic_scales.push(e_minor_melodic_scale);
  minor_melodic_scales.push(f_minor_melodic_scale);
  minor_melodic_scales.push(f_sharp_minor_melodic_scale);
  minor_melodic_scales.push(g_minor_melodic_scale);
  minor_melodic_scales.push(g_sharp_minor_melodic_scale);

  minor_harmonic_scales.push(a_minor_harmonic_scale);
  minor_harmonic_scales.push(a_sharp_minor_harmonic_scale);
  minor_harmonic_scales.push(b_minor_harmonic_scale);
  minor_harmonic_scales.push(c_minor_harmonic_scale);
  minor_harmonic_scales.push(c_sharp_minor_harmonic_scale);
  minor_harmonic_scales.push(d_minor_harmonic_scale);
  minor_harmonic_scales.push(d_sharp_minor_harmonic_scale);
  minor_harmonic_scales.push(e_minor_harmonic_scale);
  minor_harmonic_scales.push(f_minor_harmonic_scale);
  minor_harmonic_scales.push(f_sharp_minor_harmonic_scale);
  minor_harmonic_scales.push(g_minor_harmonic_scale);
  minor_harmonic_scales.push(g_sharp_minor_harmonic_scale);

  minor_blues_scales.push(a_minor_blues_scale);
  minor_blues_scales.push(a_sharp_minor_blues_scale);
  minor_blues_scales.push(b_minor_blues_scale);
  minor_blues_scales.push(c_minor_blues_scale);
  minor_blues_scales.push(c_sharp_minor_blues_scale);
  minor_blues_scales.push(d_minor_blues_scale);
  minor_blues_scales.push(d_sharp_minor_blues_scale);
  minor_blues_scales.push(e_minor_blues_scale);
  minor_blues_scales.push(f_minor_blues_scale);
  minor_blues_scales.push(f_sharp_minor_blues_scale);
  minor_blues_scales.push(g_minor_blues_scale);
  minor_blues_scales.push(g_sharp_minor_blues_scale);

  major_blues_scales.push(a_major_blues_scale);
  major_blues_scales.push(a_sharp_major_blues_scale);
  major_blues_scales.push(b_major_blues_scale);
  major_blues_scales.push(c_major_blues_scale);
  major_blues_scales.push(c_sharp_major_blues_scale);
  major_blues_scales.push(d_major_blues_scale);
  major_blues_scales.push(d_sharp_major_blues_scale);
  major_blues_scales.push(e_major_blues_scale);
  major_blues_scales.push(f_major_blues_scale);
  major_blues_scales.push(f_sharp_major_blues_scale);
  major_blues_scales.push(g_major_blues_scale);
  major_blues_scales.push(g_sharp_major_blues_scale);

  locrian_scales.push(a_locrian_scale);
  locrian_scales.push(a_sharp_locrian_scale);
  locrian_scales.push(b_locrian_scale);
  locrian_scales.push(c_locrian_scale);
  locrian_scales.push(c_sharp_locrian_scale);
  locrian_scales.push(d_locrian_scale);
  locrian_scales.push(d_sharp_locrian_scale);
  locrian_scales.push(e_locrian_scale);
  locrian_scales.push(f_locrian_scale);
  locrian_scales.push(f_sharp_locrian_scale);
  locrian_scales.push(g_locrian_scale);
  locrian_scales.push(g_sharp_locrian_scale);

  dorian_scales.push(a_dorian_scale);
  dorian_scales.push(a_sharp_dorian_scale);
  dorian_scales.push(b_dorian_scale);
  dorian_scales.push(c_dorian_scale);
  dorian_scales.push(c_sharp_dorian_scale);
  dorian_scales.push(d_dorian_scale);
  dorian_scales.push(d_sharp_dorian_scale);
  dorian_scales.push(e_dorian_scale);
  dorian_scales.push(f_dorian_scale);
  dorian_scales.push(f_sharp_dorian_scale);
  dorian_scales.push(g_dorian_scale);
  dorian_scales.push(g_sharp_dorian_scale);

  mixolydian_scales.push(a_mixolydian_scale);
  mixolydian_scales.push(a_sharp_mixolydian_scale);
  mixolydian_scales.push(b_mixolydian_scale);
  mixolydian_scales.push(c_mixolydian_scale);
  mixolydian_scales.push(c_sharp_mixolydian_scale);
  mixolydian_scales.push(d_mixolydian_scale);
  mixolydian_scales.push(d_sharp_mixolydian_scale);
  mixolydian_scales.push(e_mixolydian_scale);
  mixolydian_scales.push(f_mixolydian_scale);
  mixolydian_scales.push(f_sharp_mixolydian_scale);
  mixolydian_scales.push(g_mixolydian_scale);
  mixolydian_scales.push(g_sharp_mixolydian_scale);

  lydian_scales.push(a_lydian_scale);
  lydian_scales.push(a_sharp_lydian_scale);
  lydian_scales.push(b_lydian_scale);
  lydian_scales.push(c_lydian_scale);
  lydian_scales.push(c_sharp_lydian_scale);
  lydian_scales.push(d_lydian_scale);
  lydian_scales.push(d_sharp_lydian_scale);
  lydian_scales.push(e_lydian_scale);
  lydian_scales.push(f_lydian_scale);
  lydian_scales.push(f_sharp_lydian_scale);
  lydian_scales.push(g_lydian_scale);
  lydian_scales.push(g_sharp_lydian_scale);

  phrygian_scales.push(a_phrygian_scale);
  phrygian_scales.push(a_sharp_phrygian_scale);
  phrygian_scales.push(b_phrygian_scale);
  phrygian_scales.push(c_phrygian_scale);
  phrygian_scales.push(c_sharp_phrygian_scale);
  phrygian_scales.push(d_phrygian_scale);
  phrygian_scales.push(d_sharp_phrygian_scale);
  phrygian_scales.push(e_phrygian_scale);
  phrygian_scales.push(f_phrygian_scale);
  phrygian_scales.push(f_sharp_phrygian_scale);
  phrygian_scales.push(g_phrygian_scale);
  phrygian_scales.push(g_sharp_phrygian_scale);

  aeolian_scales.push(a_aeolian_scale);
  aeolian_scales.push(a_sharp_aeolian_scale);
  aeolian_scales.push(b_aeolian_scale);
  aeolian_scales.push(c_aeolian_scale);
  aeolian_scales.push(c_sharp_aeolian_scale);
  aeolian_scales.push(d_aeolian_scale);
  aeolian_scales.push(d_sharp_aeolian_scale);
  aeolian_scales.push(e_aeolian_scale);
  aeolian_scales.push(f_aeolian_scale);
  aeolian_scales.push(f_sharp_aeolian_scale);
  aeolian_scales.push(g_aeolian_scale);
  aeolian_scales.push(g_sharp_aeolian_scale);

  major_bebop_scales.push(a_major_bebop_scale);
  major_bebop_scales.push(a_sharp_major_bebop_scale);
  major_bebop_scales.push(b_major_bebop_scale);
  major_bebop_scales.push(c_major_bebop_scale);
  major_bebop_scales.push(c_sharp_major_bebop_scale);
  major_bebop_scales.push(d_major_bebop_scale);
  major_bebop_scales.push(d_sharp_major_bebop_scale);
  major_bebop_scales.push(e_major_bebop_scale);
  major_bebop_scales.push(f_major_bebop_scale);
  major_bebop_scales.push(f_sharp_major_bebop_scale);
  major_bebop_scales.push(g_major_bebop_scale);
  major_bebop_scales.push(g_sharp_major_bebop_scale);

  minor_bebop_scales.push(a_minor_bebop_scale);
  minor_bebop_scales.push(a_sharp_minor_bebop_scale);
  minor_bebop_scales.push(b_minor_bebop_scale);
  minor_bebop_scales.push(c_minor_bebop_scale);
  minor_bebop_scales.push(c_sharp_minor_bebop_scale);
  minor_bebop_scales.push(d_minor_bebop_scale);
  minor_bebop_scales.push(d_sharp_minor_bebop_scale);
  minor_bebop_scales.push(e_minor_bebop_scale);
  minor_bebop_scales.push(f_minor_bebop_scale);
  minor_bebop_scales.push(f_sharp_minor_bebop_scale);
  minor_bebop_scales.push(g_minor_bebop_scale);
  minor_bebop_scales.push(g_sharp_minor_bebop_scale);

}

//these functions turn one note into a scale
function make_major(start_note, notes) {
  let return_scale: string[] = [];
  for (var i = 0; i < 12; i++) {
    if (notes[i] == start_note) {
      break;
    }
  }
  return_scale.push(notes[i % 12]);
  return_scale.push(notes[(i + 2) % 12]);
  return_scale.push(notes[(i + 4) % 12]);
  return_scale.push(notes[(i + 5) % 12]);
  return_scale.push(notes[(i + 7) % 12]);
  return_scale.push(notes[(i + 9) % 12]);
  return_scale.push(notes[(i + 11) % 12]);
  return return_scale;

}

function make_minor(start_note, notes) {
  let return_scale: string[] = [];
  for (var i = 0; i < 12; i++) {
    if (notes[i] == start_note) {
      break;
    }
  }
  return_scale[0] = notes[i % 12];
  return_scale[1] = notes[(i + 2) % 12];
  return_scale[2] = notes[(i + 3) % 12];
  return_scale[3] = notes[(i + 5) % 12];
  return_scale[4] = notes[(i + 7) % 12];
  return_scale[5] = notes[(i + 8) % 12];
  return_scale[6] = notes[(i + 10) % 12];

  return return_scale;

}

function make_pentatonic_major(start_note, notes) {
  let return_scale: string[] = [];
  for (var i = 0; i < 12; i++) {
    if (notes[i] == start_note) {
      break;
    }
  }
  return_scale[0] = notes[i % 12];
  return_scale[1] = notes[(i + 2) % 12];
  return_scale[2] = notes[(i + 4) % 12];
  return_scale[3] = notes[(i + 7) % 12];
  return_scale[4] = notes[(i + 9) % 12];

  return return_scale;

}

function make_pentatonic_minor(start_note, notes) {
  let return_scale: string[] = [];
  for (var i = 0; i < 12; i++) {
    if (notes[i] == start_note) {
      break;
    }
  }
  return_scale[0] = notes[i % 12];
  return_scale[1] = notes[(i + 3) % 12];
  return_scale[2] = notes[(i + 5) % 12];
  return_scale[3] = notes[(i + 7) % 12];
  return_scale[4] = notes[(i + 10) % 12];

  return return_scale;

}

function make_melodic_minor(start_note, notes) {
  let return_scale: string[] = [];
  for (var i = 0; i < 12; i++) {
    if (notes[i] == start_note) {
      break;
    }
  }
  return_scale[0] = notes[i % 12];
  return_scale[1] = notes[(i + 2) % 12];
  return_scale[2] = notes[(i + 3) % 12];
  return_scale[3] = notes[(i + 5) % 12];
  return_scale[4] = notes[(i + 7) % 12];
  return_scale[5] = notes[(i + 9) % 12];
  return_scale[6] = notes[(i + 11) % 12];

  return return_scale;
}

function make_harmonic_minor(start_note, notes) {
  let return_scale: string[] = [];
  for (var i = 0; i < 12; i++) {
    if (notes[i] == start_note) {
      break;
    }
  }
  return_scale[0] = notes[i % 12];
  return_scale[1] = notes[(i + 2) % 12];
  return_scale[2] = notes[(i + 3) % 12];
  return_scale[3] = notes[(i + 5) % 12];
  return_scale[4] = notes[(i + 7) % 12];
  return_scale[5] = notes[(i + 8) % 12];
  return_scale[6] = notes[(i + 11) % 12];

  return return_scale;
}

function make_minor_blues(start_note, notes) {
  let return_scale: string[] = [];
  for (var i = 0; i < 12; i++) {
    if (notes[i] == start_note) {
      break;
    }
  }
  return_scale[0] = notes[i % 12];
  return_scale[2] = notes[(i + 3) % 12];
  return_scale[3] = notes[(i + 5) % 12];
  return_scale[4] = notes[(i + 6) % 12];
  return_scale[5] = notes[(i + 7) % 12];
  return_scale[6] = notes[(i + 10) % 12];

  return return_scale;

}

function make_bebop_major(start_note, notes) {
  let return_scale: string[] = [];
  for (var i = 0; i < 12; i++) {
    if (notes[i] == start_note) {
      break;
    }
  }
  return_scale.push(notes[i % 12]);
  return_scale.push(notes[(i + 2) % 12]);
  return_scale.push(notes[(i + 4) % 12]);
  return_scale.push(notes[(i + 5) % 12]);
  return_scale.push(notes[(i + 7) % 12]);
  return_scale.push(notes[(i + 8) % 12]);
  return_scale.push(notes[(i + 9) % 12]);
  return_scale.push(notes[(i + 11) % 12]);
  return return_scale;

}

function make_bebop_minor(start_note, notes) {
  let return_scale: string[] = [];
  for (var i = 0; i < 12; i++) {
    if (notes[i] == start_note) {
      break;
    }
  }
  return_scale.push(notes[i % 12]);
  return_scale.push(notes[(i + 2) % 12]);
  return_scale.push(notes[(i + 3) % 12]);
  return_scale.push(notes[(i + 4) % 12]);
  return_scale.push(notes[(i + 5) % 12]);
  return_scale.push(notes[(i + 7) % 12]);
  return_scale.push(notes[(i + 9) % 12]);
  return_scale.push(notes[(i + 10) % 12]);

  return return_scale;

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
