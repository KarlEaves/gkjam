import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FinderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var $:any;

@IonicPage()
@Component({
  selector: 'page-finder',
  templateUrl: 'finder.html',
})
export class FinderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {};
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinderPage');

    make_scales();
    check_for_input();
    document.getElementById("shownotesinscale").onclick = show_notes_in_scale;
    document.getElementById("buttonToTurnChordsToKey").onclick = function(){
      chords_to_scale(chord_buttons_clicked);
    }
  }
}


//------------------------------------------------------------------------------
//declare global variables
var notes: string[]=['A','A#', 'B','C','C#','D','D#','E','F','F#','G','G#'];

let key_buttons_clicked = [];

let chord_buttons_clicked = [];

var major_scales = [];

var minor_scales = [];

var major_pentatonic_scales = [];

var minor_pentatonic_scales= [];

var minor_melodic_scales =[];

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

//declare major scales
let a_major_scale = make_major("A",notes);
let a_sharp_major_scale = make_major("A#",notes);
let b_major_scale = make_major("B",notes);
let c_major_scale = make_major("C",notes);
let c_sharp_major_scale = make_major("C#",notes);
let d_major_scale = make_major("D",notes);
let d_sharp_major_scale = make_major("D#",notes);
let e_major_scale = make_major("E",notes);
let f_major_scale = make_major("F",notes);
let f_sharp_major_scale = make_major("F#",notes);
let g_major_scale = make_major("G",notes);
let g_sharp_major_scale = make_major("G#",notes);

//declare minor scales
let a_minor_scale = make_minor("A",notes);
let a_sharp_minor_scale = make_minor("A#",notes);
let b_minor_scale = make_minor("B",notes);
let b_sharp_minor_scale = make_minor("B#",notes);
let c_minor_scale = make_minor("C",notes);
let c_sharp_minor_scale = make_minor("C#",notes);
let d_minor_scale = make_minor("D",notes);
let d_sharp_minor_scale = make_minor("D#",notes);
let e_minor_scale = make_minor("E",notes);
let f_minor_scale = make_minor("F",notes);
let f_sharp_minor_scale = make_minor("F#",notes);
let g_minor_scale = make_minor("G",notes);
let g_sharp_minor_scale = make_minor("G#",notes);

//declare major pentatonic scales
let a_major_p_scale = make_pentatonic_major("A",notes);
let a_sharp_major_p_scale = make_pentatonic_major("A#",notes);
let b_major_p_scale = make_pentatonic_major("B",notes);
let c_major_p_scale = make_pentatonic_major("C",notes);
let c_sharp_major_p_scale = make_pentatonic_major("C#",notes);
let d_major_p_scale = make_pentatonic_major("D",notes);
let d_sharp_major_p_scale = make_pentatonic_major("D#",notes);
let e_major_p_scale = make_pentatonic_major("E",notes);
let f_major_p_scale = make_pentatonic_major("F",notes);
let f_sharp_major_p_scale = make_pentatonic_major("F#",notes);
let g_major_p_scale = make_pentatonic_major("G",notes);
let g_sharp_major_p_scale = make_pentatonic_major("G#",notes);

//declare minor pentatonic scales
let a_minor_p_scale = make_pentatonic_minor("A",notes);
let a_sharp_minor_p_scale = make_pentatonic_minor("A#",notes);
let b_minor_p_scale = make_pentatonic_minor("B",notes);
let c_minor_p_scale = make_pentatonic_minor("C",notes);
let c_sharp_minor_p_scale = make_pentatonic_minor("C#",notes);
let d_minor_p_scale = make_pentatonic_minor("D",notes);
let d_sharp_minor_p_scale = make_pentatonic_minor("D#",notes);
let e_minor_p_scale = make_pentatonic_minor("E",notes);
let f_minor_p_scale = make_pentatonic_minor("F",notes);
let f_sharp_minor_p_scale = make_pentatonic_minor("F#",notes);
let g_minor_p_scale = make_pentatonic_minor("G",notes);
let g_sharp_minor_p_scale = make_pentatonic_minor("G#",notes);

//declare melodic minor scales
let a_minor_melodic_scale = make_melodic_minor("A",notes);
let a_sharp_minor_melodic_scale = make_melodic_minor("A#",notes);
let b_minor_melodic_scale = make_melodic_minor("B",notes);
let c_minor_melodic_scale = make_melodic_minor("C",notes);
let c_sharp_minor_melodic_scale = make_melodic_minor("C#",notes);
let d_minor_melodic_scale = make_melodic_minor("D",notes);
let d_sharp_minor_melodic_scale = make_melodic_minor("D#",notes);
let e_minor_melodic_scale = make_melodic_minor("E",notes);
let f_minor_melodic_scale = make_melodic_minor("F",notes);
let f_sharp_minor_melodic_scale = make_melodic_minor("F#",notes);
let g_minor_melodic_scale = make_melodic_minor("G",notes);
let g_sharp_minor_melodic_scale = make_melodic_minor("G#",notes);

//declare harmonic minor scales
let a_minor_harmonic_scale = make_harmonic_minor("A",notes);
let a_sharp_minor_harmonic_scale = make_harmonic_minor("A#",notes);
let b_minor_harmonic_scale = make_harmonic_minor("B",notes);
let c_minor_harmonic_scale = make_harmonic_minor("C",notes);
let c_sharp_minor_harmonic_scale = make_harmonic_minor("C#",notes);
let d_minor_harmonic_scale = make_harmonic_minor("D",notes);
let d_sharp_minor_harmonic_scale = make_harmonic_minor("D#",notes);
let e_minor_harmonic_scale = make_harmonic_minor("E",notes);
let f_minor_harmonic_scale = make_harmonic_minor("F",notes);
let f_sharp_minor_harmonic_scale = make_harmonic_minor("F#",notes);
let g_minor_harmonic_scale = make_harmonic_minor("G",notes);
let g_sharp_minor_harmonic_scale = make_harmonic_minor("G#",notes);

//declare  minor blues scales
let a_minor_blues_scale = make_minor_blues("A",notes);
let a_sharp_minor_blues_scale = make_minor_blues("A#",notes);
let b_minor_blues_scale = make_minor_blues("B",notes);
let c_minor_blues_scale = make_minor_blues("C",notes);
let c_sharp_minor_blues_scale = make_minor_blues("C#",notes);
let d_minor_blues_scale = make_minor_blues("D",notes);
let d_sharp_minor_blues_scale = make_minor_blues("D#",notes);
let e_minor_blues_scale = make_minor_blues("E",notes);
let f_minor_blues_scale = make_minor_blues("F",notes);
let f_sharp_minor_blues_scale = make_minor_blues("F#",notes);
let g_minor_blues_scale = make_minor_blues("G",notes);
let g_sharp_minor_blues_scale = make_minor_blues("G#",notes);

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
let a_minor_bebop_scale = make_bebop_minor("A",notes);
let a_sharp_minor_bebop_scale = make_bebop_minor("A#",notes);
let b_minor_bebop_scale = make_bebop_minor("B",notes);
let c_minor_bebop_scale = make_bebop_minor("C",notes);
let c_sharp_minor_bebop_scale = make_bebop_minor("C#",notes);
let d_minor_bebop_scale = make_bebop_minor("D",notes);
let d_sharp_minor_bebop_scale = make_bebop_minor("D#",notes);
let e_minor_bebop_scale = make_bebop_minor("E",notes);
let f_minor_bebop_scale = make_bebop_minor("F",notes);
let f_sharp_minor_bebop_scale = make_bebop_minor("F#",notes);
let g_minor_bebop_scale = make_bebop_minor("G",notes);
let g_sharp_minor_bebop_scale = make_bebop_minor("G#",notes);

//declare major bebop scales
let a_major_bebop_scale = make_bebop_major("A",notes);
let a_sharp_major_bebop_scale = make_bebop_major("A#",notes);
let b_major_bebop_scale = make_bebop_major("B",notes);
let c_major_bebop_scale = make_bebop_major("C",notes);
let c_sharp_major_bebop_scale = make_bebop_major("C#",notes);
let d_major_bebop_scale = make_bebop_major("D",notes);
let d_sharp_major_bebop_scale = make_bebop_major("D#",notes);
let e_major_bebop_scale = make_bebop_major("E",notes);
let f_major_bebop_scale = make_bebop_major("F",notes);
let f_sharp_major_bebop_scale = make_bebop_major("F#",notes);
let g_major_bebop_scale = make_bebop_major("G",notes);
let g_sharp_major_bebop_scale = make_bebop_major("G#",notes);

//declare dorian scales
let a_dorian_scale = make_major("G",notes);
let a_sharp_dorian_scale = make_major("G#",notes);
let b_dorian_scale = make_major("A",notes);
let c_dorian_scale = make_major("A#",notes);
let c_sharp_dorian_scale = make_major("B",notes);
let d_dorian_scale = make_major("C",notes);
let d_sharp_dorian_scale = make_major("C#",notes);
let e_dorian_scale = make_major("D",notes);
let f_dorian_scale = make_major("D#",notes);
let f_sharp_dorian_scale = make_major("E",notes);
let g_dorian_scale = make_major("F",notes);
let g_sharp_dorian_scale = make_major("F#",notes);

//declare phrygian scales
let a_phrygian_scale = make_major("F",notes);
let a_sharp_phrygian_scale = make_major("F#",notes);
let b_phrygian_scale = make_major("G",notes);
let c_phrygian_scale = make_major("G#",notes);
let c_sharp_phrygian_scale = make_major("A",notes);
let d_phrygian_scale = make_major("A#",notes);
let d_sharp_phrygian_scale = make_major("B",notes);
let e_phrygian_scale = make_major("C",notes);
let f_phrygian_scale = make_major("C#",notes);
let f_sharp_phrygian_scale = make_major("D",notes);
let g_phrygian_scale = make_major("D#",notes);
let g_sharp_phrygian_scale = make_major("E",notes);

//declare lydian scales
let a_lydian_scale = make_major("E",notes);
let a_sharp_lydian_scale = make_major("F",notes);
let b_lydian_scale = make_major("F#",notes);
let c_lydian_scale = make_major("G",notes);
let c_sharp_lydian_scale = make_major("G#",notes);
let d_lydian_scale = make_major("A",notes);
let d_sharp_lydian_scale = make_major("A#",notes);
let e_lydian_scale = make_major("B",notes);
let f_lydian_scale = make_major("C",notes);
let f_sharp_lydian_scale = make_major("C#",notes);
let g_lydian_scale = make_major("D",notes);
let g_sharp_lydian_scale = make_major("D#",notes);

//declare mixolydian scales
let a_mixolydian_scale = make_major("D",notes);
let a_sharp_mixolydian_scale = make_major("D#",notes);
let b_mixolydian_scale = make_major("E",notes);
let c_mixolydian_scale = make_major("F",notes);
let c_sharp_mixolydian_scale = make_major("F#",notes);
let d_mixolydian_scale = make_major("G",notes);
let d_sharp_mixolydian_scale = make_major("G#",notes);
let e_mixolydian_scale = make_major("A",notes);
let f_mixolydian_scale = make_major("A#",notes);
let f_sharp_mixolydian_scale = make_major("B",notes);
let g_mixolydian_scale = make_major("C",notes);
let g_sharp_mixolydian_scale = make_major("C#",notes);

//declare aeolian scales
let a_aeolian_scale = make_minor("A",notes);
let a_sharp_aeolian_scale = make_minor("A#",notes);
let b_aeolian_scale = make_minor("B",notes);
let c_aeolian_scale = make_minor("C",notes);
let c_sharp_aeolian_scale = make_minor("C#",notes);
let d_aeolian_scale = make_minor("D",notes);
let d_sharp_aeolian_scale = make_minor("D#",notes);
let e_aeolian_scale = make_minor("E",notes);
let f_aeolian_scale = make_minor("F",notes);
let f_sharp_aeolian_scale = make_minor("F#",notes);
let g_aeolian_scale = make_minor("G",notes);
let g_sharp_aeolian_scale = make_minor("G#",notes);

//declare locrian scales
let a_locrian_scale = make_major("A#",notes);
let a_sharp_locrian_scale = make_major("B",notes);
let b_locrian_scale = make_major("C",notes);
let c_locrian_scale = make_major("C#",notes);
let c_sharp_locrian_scale = make_major("D",notes);
let d_locrian_scale = make_major("D#",notes);
let d_sharp_locrian_scale = make_major("E",notes);
let e_locrian_scale = make_major("F",notes);
let f_locrian_scale = make_major("F#",notes);
let f_sharp_locrian_scale = make_major("G",notes);
let g_locrian_scale = make_major("G#",notes);
let g_sharp_locrian_scale = make_major("A",notes);


//------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------------------------------
//turn chords into scale. first turns chords into notes, then gets a list of all notes, removes duplicates and sends to find_scale()-------------
function chords_to_scale(input_buttons)
{
  let all_notes = [];
  let notes_in_chord = [];

  //clear box here for html to be printed to
  clearBox("notesInChordsSelected");

  //loop through input (buttons that were clicked containing chords)
  for (let i = 0; i<input_buttons.length;i++)
  {
    //turn each chord into notes
    notes_in_chord = chord_to_notes(input_buttons[i]);
    //loop through returned notes and pushes to all notes list
    for (let j = 0; j < notes_in_chord.length; j++)
    {
      all_notes.push(notes_in_chord[j]);
    }
  }
  //checks for individual buttons clicked as well
  for (let i = 0; i<key_buttons_clicked.length; i++)
  {
    all_notes.push(key_buttons_clicked[i]);
  }

  //removes duplicates and passes to find_scale
  let unique_all_notes = [];
  $.each(all_notes, function(i, el){
    if($.inArray(el, unique_all_notes) === -1) unique_all_notes.push(el);
  });   
  find_scale(unique_all_notes);
}
//-------------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------------------------------
//receive chord, return  notes in chord
function chord_to_notes(chord:string)
{
  let notes_in_chord:string[] = [];
  let root:number = notes.indexOf(chord[0]);

  //if the chord has a #, it starts at 1 + the index of the letter
  if (chord[1]=="#")
  {
    root = root+1;
  }
  
  notes_in_chord.push(notes[root]);

  //if the chord is minor, push the minor 3rd
  if (chord[1]=="m" || chord[2] == "m")
  {
      notes_in_chord.push(notes[(root+3)%12]);
  }
  //else push major 3rd
  else 
  {
    notes_in_chord.push(notes[(root+4)%12]);
  }

  notes_in_chord.push(notes[(root+7)%12]);
  
  if (chord.includes("Maj7") || chord.includes("maj7") || chord.includes("M7"))
  {
    notes_in_chord.push(notes[(root+11)%12]);
  }
  else if (chord.includes("7"))
  {
    notes_in_chord.push(notes[(root+10)%12]);
  }

  //-------------------------print the notes to screen that are in the chords selected-----------------------------
  
  var para = document.createElement("P"); 
  para.appendChild(document.createTextNode(chord +" contains the following notes: "));    
  for (let i = 0;i<notes_in_chord.length; i++) 
        {                     // Create a <p> node
          var t = document.createTextNode(notes_in_chord[i]+ "  ");      // Create a text node
          para.appendChild(t);                 // Append the text to <p>
          document.getElementById("notesInChordsSelected").appendChild(para); 
        }
  return notes_in_chord;
}
//-----------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------------
//receives list of notes, loops through each scale to see if it contains a subset of the notes, and calls write_scales_to_html on scales
function find_scale(notes_to_find)
{

  //ADD EXTRA SCALES TO LOOP HERE
  //loop through all scales, check if they contain subset of notes in parameter, add to list if they do
  let containing_scales = [];
  for (let i = 0;i <major_scales.length;i++)
  {
    if (notes_to_find.every(val => major_scales[i].indexOf(val) >= 0)==true)
    {
      containing_scales.push(major_scales[i][0]+" major (ionian)");
      containing_scales.push(dorian_scales[(i+2)%12][1]+ " dorian");
      containing_scales.push(phrygian_scales[(i+4)%12][2] + " phrygian");
      containing_scales.push(lydian_scales[(i+5)%12][3]+ " lydian");
      containing_scales.push(mixolydian_scales[(i+7)%12][4]+ " mixolydian");
      containing_scales.push(locrian_scales[(i+11)%12][6]+ " locrian");
    }
  }

  for (let i = 0;i <minor_scales.length;i++)
  {
    if (notes_to_find.every(val => minor_scales[i].indexOf(val) >= 0)==true)
    {
      containing_scales.push(minor_scales[i][0]+" minor (aeolian)");
    }
  }

  for (let i = 0;i <minor_pentatonic_scales.length;i++)
  {
    if (notes_to_find.every(val => minor_pentatonic_scales[i].indexOf(val) >= 0)==true)
    {
      containing_scales.push(minor_pentatonic_scales[i][0]+" minor pentatonic");
    }
  }

  for (let i = 0;i <major_pentatonic_scales.length;i++)
  {
    if (notes_to_find.every(val => major_pentatonic_scales[i].indexOf(val) >= 0)==true)
    {
      containing_scales.push(major_pentatonic_scales[i][0]+" major pentatonic");
    }
  }
  for (let i = 0;i <minor_melodic_scales.length;i++)
  {
    if (notes_to_find.every(val => minor_melodic_scales[i].indexOf(val) >= 0)==true)
    {
      containing_scales.push(minor_melodic_scales[i][0]+" melodic minor");
    }
  }

  for (let i = 0;i <minor_harmonic_scales.length;i++)
  {
    if (notes_to_find.every(val => minor_harmonic_scales[i].indexOf(val) >= 0)==true)
    {
      containing_scales.push(minor_harmonic_scales[i][0]+" harmonic minor");
    }
  }

  for (let i = 0;i <minor_blues_scales.length;i++)
  {
    if (notes_to_find.every(val => minor_blues_scales[i].indexOf(val) >= 0)==true)
    {
      containing_scales.push(minor_blues_scales[i][0]+" blues minor");
    }
  }

  for (let i = 0;i <major_blues_scales.length;i++)
  {
    if (notes_to_find.every(val => major_blues_scales[i].indexOf(val) >= 0)==true)
    {
      containing_scales.push(major_blues_scales[i][0]+" blues major");
    }
  }

  for (let i = 0;i <major_bebop_scales.length;i++)
  {
    if (notes_to_find.every(val => major_bebop_scales[i].indexOf(val) >= 0)==true)
    {
      containing_scales.push(major_bebop_scales[i][0]+" bebop major");
    }
  }

  for (let i = 0;i <minor_bebop_scales.length;i++)
  {
    if (notes_to_find.every(val => minor_bebop_scales[i].indexOf(val) >= 0)==true)
    {
      containing_scales.push(minor_bebop_scales[i][0]+" bebop minor");
    }
  }

  //sends the containing scales list to be written to html and displayed
  write_scale_to_html(containing_scales);
}
//--------------------------------------------------------------------------------------------------------------
function scale_to_notes(scale:string)
{
  let notes_to_return =[];
  console.log("scale: "+scale);
  let root:number = notes.indexOf(scale[0]);

  //if the chord has a #, it starts at 1 + the index of the letter
  if (scale[1]=="#")
  {
    root = root+1;
  }
  
  notes_to_return.push(notes[root]);
  if (scale.includes("major pentatonic"))
  {
    console.log("major pentatonic");
    notes_to_return.push(notes[(root+2)%12]);
    notes_to_return.push(notes[(root+4)%12]);
    notes_to_return.push(notes[(root+7)%12]);
    notes_to_return.push(notes[(root+9)%12]);

  }
  else if (scale.includes("dorian"))
  {
    console.log("dorian");
    notes_to_return.push(notes[(root+2)%12]);
    notes_to_return.push(notes[(root+3)%12]);
    notes_to_return.push(notes[(root+5)%12]);
    notes_to_return.push(notes[(root+7)%12]);
    notes_to_return.push(notes[(root+9)%12]);
    notes_to_return.push(notes[(root+10)%12]);
  }
  else if (scale.includes("phrygian"))
  {

    console.log("phrygian");
    notes_to_return.push(notes[(root+1)%12]);
    notes_to_return.push(notes[(root+3)%12]);
    notes_to_return.push(notes[(root+5)%12]);
    notes_to_return.push(notes[(root+7)%12]);
    notes_to_return.push(notes[(root+8)%12]);
    notes_to_return.push(notes[(root+10)%12]);
  }
  else if (scale.includes("lydian"))
  {
    console.log("lydian");
    notes_to_return.push(notes[(root+2)%12]);
    notes_to_return.push(notes[(root+4)%12]);
    notes_to_return.push(notes[(root+6)%12]);
    notes_to_return.push(notes[(root+7)%12]);
    notes_to_return.push(notes[(root+9)%12]);
    notes_to_return.push(notes[(root+11)%12]);
  }
  else if (scale.includes("mixolydian"))
  {
    console.log("mixolydian");
    notes_to_return.push(notes[(root+2)%12]);
    notes_to_return.push(notes[(root+4)%12]);
    notes_to_return.push(notes[(root+5)%12]);
    notes_to_return.push(notes[(root+7)%12]);
    notes_to_return.push(notes[(root+9)%12]);
    notes_to_return.push(notes[(root+10)%12]);
  }
  else if (scale.includes("locrian"))
  {
    console.log("locrian");
    notes_to_return.push(notes[(root+1)%12]);
    notes_to_return.push(notes[(root+3)%12]);
    notes_to_return.push(notes[(root+5)%12]);
    notes_to_return.push(notes[(root+6)%12]);
    notes_to_return.push(notes[(root+8)%12]);
    notes_to_return.push(notes[(root+10)%12]);
  }
  else if (scale.includes("bebop major"))
  {
    console.log("bebop major");
    notes_to_return.push(notes[(root+2)%12]);
    notes_to_return.push(notes[(root+4)%12]);
    notes_to_return.push(notes[(root+5)%12]);
    notes_to_return.push(notes[(root+7)%12]);
    notes_to_return.push(notes[(root+8)%12]);
    notes_to_return.push(notes[(root+9)%12]);
    notes_to_return.push(notes[(root+11)%12]);
  }
  else if (scale.includes("blues major"))
  {
    console.log("blues major");
    notes_to_return.push(notes[(root+2)%12]);
    notes_to_return.push(notes[(root+3)%12]);
    notes_to_return.push(notes[(root+4)%12]);
    notes_to_return.push(notes[(root+7)%12]);
    notes_to_return.push(notes[(root+9)%12]);
  }
  else if (scale.includes("major"))
  {
    console.log("major");
    notes_to_return.push(notes[(root+2)%12]);
    notes_to_return.push(notes[(root+4)%12]);
    notes_to_return.push(notes[(root+5)%12]);
    notes_to_return.push(notes[(root+7)%12]);
    notes_to_return.push(notes[(root+9)%12]);
    notes_to_return.push(notes[(root+11)%12]);
    
  }
  else if (scale.includes("minor pentatonic"))
  {
    console.log("minor pentatonic");
    notes_to_return.push(notes[(root+3)%12]);
    notes_to_return.push(notes[(root+5)%12]);
    notes_to_return.push(notes[(root+7)%12]);
    notes_to_return.push(notes[(root+10)%12]);
  }
  
  else if (scale.includes("blues minor"))
  {
    console.log("blues minor");
    notes_to_return.push(notes[(root+3)%12]);
    notes_to_return.push(notes[(root+5)%12]);
    notes_to_return.push(notes[(root+6)%12]);
    notes_to_return.push(notes[(root+7)%12]);
    notes_to_return.push(notes[(root+10)%12]);
  }
  else if (scale.includes("bebop minor"))
  {
    console.log("bebop minor");
    notes_to_return.push(notes[(root+2)%12]);
    notes_to_return.push(notes[(root+3)%12]);
    notes_to_return.push(notes[(root+4)%12]);
    notes_to_return.push(notes[(root+5)%12]);
    notes_to_return.push(notes[(root+7)%12]);
    notes_to_return.push(notes[(root+8)%12]);
    notes_to_return.push(notes[(root+10)%12]);
  }
  else if (scale.includes("harmonic minor"))
  {
    console.log("harmonic minor");
    notes_to_return.push(notes[(root+2)%12]);
    notes_to_return.push(notes[(root+3)%12]);
    notes_to_return.push(notes[(root+5)%12]);
    notes_to_return.push(notes[(root+7)%12]);
    notes_to_return.push(notes[(root+8)%12]);
    notes_to_return.push(notes[(root+11)%12]);
  }
  else if (scale.includes("melodic minor"))
  {
    console.log("melodic minor");
    notes_to_return.push(notes[(root+2)%12]);
    notes_to_return.push(notes[(root+3)%12]);
    notes_to_return.push(notes[(root+5)%12]);
    notes_to_return.push(notes[(root+7)%12]);
    notes_to_return.push(notes[(root+9)%12]);
    notes_to_return.push(notes[(root+11)%12]);
  }
  else if (scale.includes("minor"))
  {
    console.log("minor");
    notes_to_return.push(notes[(root+2)%12]);
    notes_to_return.push(notes[(root+3)%12]);
    notes_to_return.push(notes[(root+5)%12]);
    notes_to_return.push(notes[(root+7)%12]);
    notes_to_return.push(notes[(root+8)%12]);
    notes_to_return.push(notes[(root+10)%12]);
  }
  return notes_to_return;
}
//--------------------------------------------------------------------------------------------------------------
//takes a list of notes and the root to write to html
function write_notes_to_html(these_notes,root)
{
	$( "li" ).each(function( index ) {
		$( this ).show();
	});
	for (let i = 0;i<these_notes.length;i++)
	{
		$( "li" ).each(function( index ) {
			if (!(these_notes.includes($( this ).text())))
			{
				$(this).hide();
			}
			if ($( this ).text() == root )
			{
				$( this ).style.color("red");
			}
		});
	}

  clearBox("notePrinter");
  var para = document.createElement("P"); 
  para.appendChild(document.createTextNode("Notes Selected: "));    
  for (let i = 0;i<these_notes.length; i++) 
  {                     // Create a <p> node
    var t = document.createTextNode(these_notes[i]+ "  ");      // Create a text node
    para.appendChild(t);                 // Append the text to <p>
    document.getElementById("notePrinter").appendChild(para); 
  }
}
//----------------------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------------
//takes list of scales and writes them to HTML in list format
function write_scale_to_html(these_scales:string[])
{

	clearBox("scalePrinter");
	var para = document.createElement("h3");
	para.appendChild(document.createTextNode("Scales Containing Your Notes: "));
	document.getElementById("scalePrinter").appendChild(para);
	
	// Create the list element:
	var list = document.createElement('ul');
	list.classList.add("list-group")

	for(var i = 0; i < these_scales.length; i++) {
		 // Create the list item:
		 var item = document.createElement('li');
		 item.classList.add("list-group-item");
		
		 // Set its contents:
     item.appendChild(document.createTextNode(these_scales[i]));
     let these_notes = scale_to_notes(these_scales[i]);
     for (let i = 0; i< these_notes.length;i++)
     {
      item.appendChild(document.createTextNode(" - "+these_notes[i]));
     }

		 // Add it to the list:
		 list.appendChild(item);
	}
  document.getElementById('scalePrinter').appendChild(list);

	// Finally, return the constructed list:
	return list;
}

//gets the button clicked, calls write_notes_to_html on notes in that scale
function show_notes_in_scale()
{
	var noteradios = (document.getElementsByName('radionotebutton'));
	let scale_value='';
	let note_value ;
	let scale;
	let root_note;

	for (var i = 0, length = noteradios.length; i < length; i++)
	{
		if ((<HTMLInputElement>noteradios[i]).checked)
		{
			// do whatever you want with the checked radio
			note_value = (<HTMLInputElement>noteradios[i]).getAttribute("id");;

			// only one radio can be logically checked, don't check the rest
			break;
		}
	}
	
	var scaleradios = (document.getElementsByName('radioscalebutton'));

	for (var i = 0, length = scaleradios.length; i < length; i++)
	{
		if ((<HTMLInputElement>scaleradios[i]).checked)
		{
			// do whatever you want with the checked radio
			scale_value =(<HTMLInputElement>scaleradios[i]).getAttribute("id");;

			// only one radio can be logically checked, don't check the rest
			break;
		}
	}

	scale = note_value[0].toLowerCase();
	root_note = note_value[0].toLowerCase();
	
	if (note_value[1]=="s")
	{
		scale = scale + "_sharp";
		root_note = root_note +"#";
	}

	scale = scale + "_"+scale_value+"_scale";
	write_notes_to_html(eval(scale),root_note);
}
//-----------------------------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------------------
//these functions turn one note into a scale
function make_major(start_note,notes)
{
  let return_scale:string[] = [];
  for (var i = 0; i<12; i++)
  {
    if (notes[i]==start_note)
    {
      break;
    }
  }
  return_scale.push(notes[i%12]);
  return_scale.push(notes[(i+2)%12]);
  return_scale.push(notes[(i+4)%12]);
  return_scale.push(notes[(i+5)%12]);
  return_scale.push(notes[(i+7)%12]);
  return_scale.push(notes[(i+9)%12]);
  return_scale.push(notes[(i+11)%12]);
  return return_scale;
  
}

function make_minor(start_note,notes)
{
  let return_scale:string[] = [];
  for (var i = 0; i<12; i++)
  {
    if (notes[i]==start_note)
    {
      break;
    }
  }
  return_scale[0] = notes[i%12];
  return_scale[1] = notes[(i+2)%12];
  return_scale[2] = notes[(i+3)%12];
  return_scale[3] = notes[(i+5)%12];
  return_scale[4] = notes[(i+7)%12];
  return_scale[5] = notes[(i+8)%12];
  return_scale[6] = notes[(i+10)%12];

  return return_scale;
  
}

function make_pentatonic_major(start_note,notes)
{
  let return_scale:string[]= [];
  for (var i = 0; i<12; i++)
  {
    if (notes[i]==start_note)
    {
      break;
    }
  }
  return_scale[0] = notes[i%12];
  return_scale[1] = notes[(i+2)%12];
  return_scale[2] = notes[(i+4)%12];
  return_scale[3] = notes[(i+7)%12];
  return_scale[4] = notes[(i+9)%12];

  return return_scale;
  
}

function make_pentatonic_minor(start_note,notes)
{
  let return_scale:string[] = [];
  for (var i = 0; i<12; i++)
  {
    if (notes[i]==start_note)
    {
      break;
    }
  }
  return_scale[0] = notes[i%12];
  return_scale[1] = notes[(i+3)%12];
  return_scale[2] = notes[(i+5)%12];
  return_scale[3] = notes[(i+7)%12];
  return_scale[4] = notes[(i+10)%12];

  return return_scale;
  
}

function make_melodic_minor(start_note,notes)
{
  let return_scale:string[] = [];
  for (var i = 0; i<12; i++)
  {
    if (notes[i]==start_note)
    {
      break;
    }
  }
  return_scale[0] = notes[i%12];
  return_scale[1] = notes[(i+2)%12];
  return_scale[2] = notes[(i+3)%12];
  return_scale[3] = notes[(i+5)%12];
  return_scale[4] = notes[(i+7)%12];
  return_scale[5] = notes[(i+9)%12];
  return_scale[6] = notes[(i+11)%12];

  return return_scale;
}

function make_harmonic_minor(start_note,notes)
{
  let return_scale:string[] = [];
  for (var i = 0; i<12; i++)
  {
    if (notes[i]==start_note)
    {
      break;
    }
  }
  return_scale[0] = notes[i%12];
  return_scale[1] = notes[(i+2)%12];
  return_scale[2] = notes[(i+3)%12];
  return_scale[3] = notes[(i+5)%12];
  return_scale[4] = notes[(i+7)%12];
  return_scale[5] = notes[(i+8)%12];
  return_scale[6] = notes[(i+11)%12];

  return return_scale;
}

function make_minor_blues(start_note,notes)
{
  let return_scale:string[] = [];
  for (var i = 0; i<12; i++)
  {
    if (notes[i]==start_note)
    {
      break;
    }
  }
  return_scale[0] = notes[i%12];
  return_scale[2] = notes[(i+3)%12];
  return_scale[3] = notes[(i+5)%12];
  return_scale[4] = notes[(i+6)%12];
  return_scale[5] = notes[(i+7)%12];
  return_scale[6] = notes[(i+10)%12];

  return return_scale;
  
}

function make_bebop_major(start_note,notes)
{
  let return_scale:string[] = [];
  for (var i = 0; i<12; i++)
  {
    if (notes[i]==start_note)
    {
      break;
    }
  }
  return_scale.push(notes[i%12]);
  return_scale.push(notes[(i+2)%12]);
  return_scale.push(notes[(i+4)%12]);
  return_scale.push(notes[(i+5)%12]);
  return_scale.push(notes[(i+7)%12]);
  return_scale.push(notes[(i+8)%12]);
  return_scale.push(notes[(i+9)%12]);
  return_scale.push(notes[(i+11)%12]);
  return return_scale;
  
}

function make_bebop_minor(start_note,notes)
{
  let return_scale:string[] = [];
  for (var i = 0; i<12; i++)
  {
    if (notes[i]==start_note)
    {
      break;
    }
  }
  return_scale.push(notes[i%12]);
  return_scale.push(notes[(i+2)%12]);
  return_scale.push(notes[(i+3)%12]);
  return_scale.push(notes[(i+4)%12]);
  return_scale.push(notes[(i+5)%12]);
  return_scale.push(notes[(i+7)%12]);
  return_scale.push(notes[(i+9)%12]);
  return_scale.push(notes[(i+10)%12]);

  return return_scale;
  
}
//--------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------
//clears an html element
function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}

//---------------------------------------------------------------------------------------------------------------------
//adds or removes a note from a list
function add_or_remove(letter)
{
  if(key_buttons_clicked.indexOf(letter)==-1)
  {
    key_buttons_clicked.push(letter);
  }
  else{
    let index = key_buttons_clicked.indexOf(letter);
    if (index > -1) {
      key_buttons_clicked.splice(index, 1);
    }
  }
}
//-------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------
//add or remove a chord from a list
function add_or_remove_chords(letter)
{
  if(chord_buttons_clicked.indexOf(letter)==-1)
  {
    chord_buttons_clicked.push(letter);
  }
  else{
    let index = chord_buttons_clicked.indexOf(letter);
    if (index > -1) {
      chord_buttons_clicked.splice(index, 1);
    }
  }
}

//adds scales to a list
function make_scales()
{
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

//continuously check for user input in check boxes
function check_for_input()
{
  $( "#A" ).click(function() {
    $(this).toggleClass('btn-outline-primary btn-primary');
    $(this).toggleClass("mystyle");
    add_or_remove("A");
  });
  $( "#Asharp" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove("A#");
  });
  $( "#B" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove("B");
  });
  $( "#C" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove("C");
  });
  $( "#Csharp" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove("C#");
  });
  $( "#D" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove("D");
  });
  $( "#Dsharp" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove("D#");
  });
  $( "#E" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove("E");
  });
  $( "#F" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove("F");
  });
  $( "#Fsharp" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove("F#");
  });
  $( "#G" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove("G");
  });
  $( "#Gsharp" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove("G#");
  });


  //listen for button clicks for chord buttons --------------------------------------------------------
  $( "#AMajorChord" ).click(function() {
    $(this).toggleClass('btn-outline-primary btn-primary');
    $(this).toggleClass("mystyle");
    add_or_remove_chords("AMaj");
  });
  $( "#ASharpMajorChord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("A#Maj");
  });
  $( "#BMajorChord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("BMaj");
  });
  $( "#CMajorChord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("CMaj");
  });
  $( "#CSharpMajorChord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("C#Maj");
  });
  $( "#DMajorChord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("DMaj");
  });
  $( "#DSharpMajorChord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("D#Maj");
  });
  $( "#EMajorChord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("EMaj");
  });
  $( "#FMajorChord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("FMaj");
  });
  $( "#FSharpMajorChord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("F#Maj");
  });
  $( "#GMajorChord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("GMaj");
  });
  $( "#GSharpMajorChord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("G#Maj");
  });

  $( "#AMajor7Chord" ).click(function() {
    $(this).toggleClass('btn-outline-primary btn-primary');
    $(this).toggleClass("mystyle");
    add_or_remove_chords("AMaj7");
  });
  $( "#ASharpMajor7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("A#Maj7");
  });
  $( "#BMajor7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("BMaj7");
  });
  $( "#CMajor7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("CMaj7");
  });
  $( "#CSharpMajor7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("C#Maj7");
  });
  $( "#DMajor7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("DMaj7");
  });
  $( "#DSharpMajor7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("D#Maj7");
  });
  $( "#EMajor7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("EMaj7");
  });
  $( "#FMajor7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("FMaj7");
  });
  $( "#FSharpMajor7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("F#Maj7");
  });
  $( "#GMajor7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("GMaj7");
  });
  $( "#GSharpMajor7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("G#Maj7");
  });

  //7th chords
  $( "#A7Chord" ).click(function() {
    $(this).toggleClass('btn-outline-primary btn-primary');
    $(this).toggleClass("mystyle");
    add_or_remove_chords("A7");
  });
  $( "#ASharp7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("A#7");
  });
  $( "#B7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("B7");
  });
  $( "#C7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("C7");
  });
  $( "#CSharp7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("C#7");
  });
  $( "#D7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("D7");
  });
  $( "#DSharp7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("D#7");
  });
  $( "#E7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("E7");
  });
  $( "#F7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("F7");
  });
  $( "#FSharp7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("F#7");
  });
  $( "#G7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("G7");
  });
  $( "#GSharp7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("G#7");
  })

  $( "#AMinorChord" ).click(function() {
    $(this).toggleClass('btn-outline-primary btn-primary');
    $(this).toggleClass("mystyle");
    add_or_remove_chords("Am");
  });
  $( "#ASharpMinorChord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("A#m");
  });
  $( "#BMinorChord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("Bm");
  });
  $( "#CMinorChord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("Cm");
  });
  $( "#CSharpMinorChord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("C#m");
  });
  $( "#DMinorChord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("Dm");
  });
  $( "#DSharpMinorChord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("D#m");
  });
  $( "#EMinorChord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("Em");
  });
  $( "#FMinorChord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("Fm");
  });
  $( "#FSharpMinorChord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("F#m");
  });
  $( "#GMinorChord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("Gm");
  });
  $( "#GSharpMinorChord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("G#m");
  });
  //minor7
  $( "#AMinor7Chord" ).click(function() {
    $(this).toggleClass('btn-outline-primary btn-primary');
    $(this).toggleClass("mystyle");
    add_or_remove_chords("Am7");
  });
  $( "#ASharpMinor7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("A#m7");
  });
  $( "#BMinor7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("Bm7");
  });
  $( "#CMinor7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("Cm7");
  });
  $( "#CSharpMinor7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("C#m7");
  });
  $( "#DMinor7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("Dm7");
  });
  $( "#DSharpMinor7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("D#m7");
  });
  $( "#EMinor7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("Em7");
  });
  $( "#FMinor7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("Fm7");
  });
  $( "#FSharpMinor7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("F#m7");
  });
  $( "#GMinor7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("Gm7");
  });
  $( "#GSharpMinor7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("G#m7");
  });
  //minor maj 7 
  $( "#AMinorMajor7Chord" ).click(function() {
    $(this).toggleClass('btn-outline-primary btn-primary');
    $(this).toggleClass("mystyle");
    add_or_remove_chords("AmM7");
  });
  $( "#ASharpMinorMajor7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("A#mM7");
  });
  $( "#BMinorMajor7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("BmM7");
  });
  $( "#CMinorMajor7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("CmM7");
  });
  $( "#CSharpMinorMajor7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("C#mM7");
  });
  $( "#DMinorMajor7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("DmM7");
  });
  $( "#DSharpMinorMajor7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("D#mM7");
  });
  $( "#EMinorMajor7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("EmM7");
  });
  $( "#FMinorMajor7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("FmM7");
  });
  $( "#FSharpMinorMajor7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("F#mM7");
  });
  $( "#GMinorMajor7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("GmM7");
  });
  $( "#GSharpMinorMajor7Chord" ).click(function() {
    $(this).toggleClass("mystyle");
    $(this).toggleClass('btn-outline-primary btn-primary');
    add_or_remove_chords("G#mM7");
  });

  //---------------------------------------------------------------------------------------------------
}
