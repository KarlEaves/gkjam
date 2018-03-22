import { ScaleDescriptionPage } from './../scale-description/scale-description';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Scales } from './../../assets/music-classes/Scales';

/**
 * Generated class for the ScalesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scales',
  templateUrl: 'scales.html',
})
export class ScalesPage {
  test: string;
  notes: string[] = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

  //push array to this 2D array to loop through in html
  all_arrays = [];

  constructor(public scales: Scales, public navCtrl: NavController, public navParams: NavParams) { }

  openScaleDescriptionPage(note_passed_in) {
    console.log(note_passed_in);
    this.navCtrl.push(ScaleDescriptionPage, {
      note_to_page: note_passed_in, scale_to_page: this.test
    });
  }


  ionViewDidLoad() {


    this.test = this.navParams.get('test');
    console.log(this.test);

    if (this.test == "major") {
      this.print_major_scale_info();
      this.write_scales(this.test);
    }
    if (this.test == "Natural Minor") {
      console.log("here");
      this.print_minor_scale_info();
      this.write_scales(this.test);
    }
    if (this.test == "Melodic Minor") {
      this.print_melodic_minor_scale_info();
      this.write_scales(this.test);
    }
    if (this.test == "Harmonic Minor") {
      this.print_harmonic_minor_scale_info();
      this.write_scales(this.test);
    }
    if (this.test == "Minor Blues") {
      this.print_minor_blues_scale_info();
      this.write_scales(this.test);
    }
    if (this.test == "Major Blues") {
      this.print_major_blues_scale_info();
      this.write_scales(this.test);
    }
    if (this.test == "majpentatonic") {
      this.print_major_pent_scale_info();
      this.write_scales(this.test);
    }
    if (this.test == "minpentatonic") {
      this.print_minor_pent_scale_info();
      this.write_scales(this.test);
    }
    if (this.test == "ionian") {
      this.print_major_scale_info();
      this.write_scales("major");
    }
    if (this.test == "dorian") {
      this.print_dorian_scale_info();
      this.write_scales(this.test);
    }
    if (this.test == "phrygian") {
      this.print_phrygian_scale_info();
      this.write_scales(this.test);
    }
    if (this.test == "lydian") {
      this.print_lydian_scale_info();
      this.write_scales(this.test);
    }
    if (this.test == "mixolydian") {
      this.print_mixolydian_scale_info();
      this.write_scales(this.test);
    }
    if (this.test == "aeolian") {
      this.print_minor_scale_info();
      this.write_scales("minor");
    }
    if (this.test == "locrian") {
      this.print_locrian_scale_info();
      this.write_scales(this.test);
    }


  }

  //done
  print_major_scale_info() {
    let para = document.createElement("P");
    let root = document.createElement("P");
    let second = document.createElement("P");
    let third = document.createElement("P");
    let fourth = document.createElement("P");
    let fifth = document.createElement("P");
    let sixth = document.createElement("P");
    let seventh = document.createElement("P");
    let last = document.createElement("P");
    let endingparagraph = document.createElement("P");

    para.appendChild(document.createTextNode("The major scales, also referred to as Ionian scales, are the most important scales. Playing in major scales results in happy sounding music. "));
    document.getElementById("scale info").appendChild(para);

    root.appendChild(document.createTextNode("A major scale starts with the root note. If you are playing in G major, the root note is G. "));
    document.getElementById("scale info").appendChild(root);

    second.appendChild(document.createTextNode("The next note in a major scale is a whole step up. This means you go forward two notes from the root. "));
    second.appendChild(document.createTextNode("For example, if the root note is G, a whole step will take you to A. If the root note was E, a whole step will be F#. "));
    document.getElementById("scale info").appendChild(second);
    
    third.appendChild(document.createTextNode("The third note in the major scale is another whole step from the second note. In the key of G, this will take us from A to B. "));
    document.getElementById("scale info").appendChild(third);

    fourth.appendChild(document.createTextNode("The fourth note is a half step up from the third. Following our scale in G, this will go from B to C. "));
    document.getElementById("scale info").appendChild(fourth);

    fifth.appendChild(document.createTextNode("The fifth note is whole step from the fourth, C to D. "));
    document.getElementById("scale info").appendChild(fifth);
   
    sixth.appendChild(document.createTextNode("The sixth note is another whole step up, D to E. "));
    document.getElementById("scale info").appendChild(sixth);

    seventh.appendChild(document.createTextNode("The seventh note is a whole step up, E to F#. "));
    document.getElementById("scale info").appendChild(seventh);

    last.appendChild(document.createTextNode("Finally, you take a half step up to arrive back at the root, G. "));
    document.getElementById("scale info").appendChild(last);

    endingparagraph.appendChild(document.createTextNode("This method works for ALL major scales, not just G. Let's walk through the B major scale next. "));
    endingparagraph.appendChild(document.createTextNode("The root note is B, whole step to C#, whole step to D#, half step to E, whole step to F#, whole step to G#, whole step to A#, half step back to B. "));
    endingparagraph.appendChild(document.createTextNode("Below we take a look at all the major scales and walk through the notes. "));
    endingparagraph.appendChild(document.createTextNode("Try to pick a key and walk through all the notes yourself without help. Practicing this will allow you to find the notes in every scale from memorization. Practice makes perfect! "));
    document.getElementById("scale info").appendChild(endingparagraph);


    
    this.write_scale_name("Major (Ionian) Scales");
  }

  print_minor_scale_info() {
    let para = document.createElement("P");
    let root = document.createElement("P");
    let second = document.createElement("P");
    let third = document.createElement("P");
    let fourth = document.createElement("P");
    let fifth = document.createElement("P");
    let sixth = document.createElement("P");
    let seventh = document.createElement("P");
    let last = document.createElement("P");
    let extracontent = document.createElement("P");
    let endingparagraph = document.createElement("P");

    para.appendChild(document.createTextNode("The minor scale, also known as the natural minor scale and Aeolian scale, produces a sad sound when played. "));
    document.getElementById("scale info").appendChild(para);

    root.appendChild(document.createTextNode("Just like major scales and all other scales, minor scales start with the root note. For G minor, the root note is G. Let's walk through the steps to find the rest of the notes in a minor scale. "));
    document.getElementById("scale info").appendChild(root);

    second.appendChild(document.createTextNode("The second note in a minor scale is a whole step from the root. "));
    second.appendChild(document.createTextNode("Exactly like we did with the major scale, a whole step up from G is A. "));
    document.getElementById("scale info").appendChild(second);
    
    third.appendChild(document.createTextNode("The third note in the minor scale is where things differ between major and minor. The third note is a half step up from the second. In the key of G, this will take us from A to A#. "));
    document.getElementById("scale info").appendChild(third);

    fourth.appendChild(document.createTextNode("The fourth note is a whole step up from the third. Following our scale in G, this will go from A# to C. "));
    document.getElementById("scale info").appendChild(fourth);

    fifth.appendChild(document.createTextNode("The fifth note is whole step from the fourth, C to D. Notice that the fourth and fifth notes are the same in the major and minor scale. "));
    document.getElementById("scale info").appendChild(fifth);
   
    sixth.appendChild(document.createTextNode("The sixth note is a half step up, D to D#. "));
    document.getElementById("scale info").appendChild(sixth);

    seventh.appendChild(document.createTextNode("The seventh note is a whole step up, D# to F. "));
    document.getElementById("scale info").appendChild(seventh);

    last.appendChild(document.createTextNode("Finally, you take a whole step up to arrive back at the root, G. "));
    document.getElementById("scale info").appendChild(last);

    
    extracontent.appendChild(document.createTextNode("All minor scales are a relative key of a major scale. Relative keys are keys that contain exactly the same notes. "));
    extracontent.appendChild(document.createTextNode("Take a look at the notes in A minor and C major. Both scales contain A, B, C, D, E, F, and G. The difference is A minor's root note is A, and C major's root note is C. "))
    extracontent.appendChild(document.createTextNode("Major scales' minor relative starts at the major scales sixth note. For example, the sixth note in G major is E. G major and E minor are relative keys. "));
    extracontent.appendChild(document.createTextNode("Knowing relative keys can help you find the notes in a scale faster. If you know how to play in A major, you can play in F# minor by focusing on F# instead of A. "));
    document.getElementById("scale info").appendChild(extracontent);

    endingparagraph.appendChild(document.createTextNode("This method works for ALL minor scales, not just G. "));
    endingparagraph.appendChild(document.createTextNode("Below we take a look at all the minor scales and walk through the notes. "));
    endingparagraph.appendChild(document.createTextNode("Try to pick a key and walk through all the notes yourself without help. Practicing this will allow you to find the notes in every scale from memorization. Practice makes perfect! "));
    document.getElementById("scale info").appendChild(endingparagraph);
    this.write_scale_name("Minor (Natural Minor/Aeolian) Scales");
  }

  print_melodic_minor_scale_info() {
    let para = document.createElement("P");
    let root = document.createElement("P");
    let second = document.createElement("P");
    let third = document.createElement("P");
    let fourth = document.createElement("P");
    let fifth = document.createElement("P");
    let sixth = document.createElement("P");
    let seventh = document.createElement("P");
    let last = document.createElement("P");
    let endingparagraph = document.createElement("P");

    para.appendChild(document.createTextNode("Melodic minor scales are similar to natural minor scales except that the sixth and seventh notes are raised half a step. "));
    para.appendChild(document.createTextNode("Melodic minor scales can be used in a couple weird situations. In classical music, the melodic minor scale is played when ascending while the natural minor is played when descending. "));
    para.appendChild(document.createTextNode("For example, in G melodic scale you will ascend with the notes G, A, A#, C, D, E, F# and descend with G, A, A#, C, D, D#, F. "));
    para.appendChild(document.createTextNode("In jazz, the melodic minor scale is played the same ascending and descending. "));
    
    document.getElementById("scale info").appendChild(para);

    root.appendChild(document.createTextNode("Melodic minor scales start with the root note. We'll walk through the G melodic minor scale. The root note is G. "));
    document.getElementById("scale info").appendChild(root);

    second.appendChild(document.createTextNode("The second note in a melodic minor scale is a whole step up. "));
    second.appendChild(document.createTextNode("A whole step from G will take you to A. "));
    document.getElementById("scale info").appendChild(second);
    
    third.appendChild(document.createTextNode("The third note in melodic minor scales is a half step up. This will take us from A to A#. "));
    document.getElementById("scale info").appendChild(third);

    fourth.appendChild(document.createTextNode("The fourth note is a whole step up from the third. Following our scale in G, this will go from A# to C. "));
    document.getElementById("scale info").appendChild(fourth);

    fifth.appendChild(document.createTextNode("The fifth note is whole step from the fourth, C to D. "));
    document.getElementById("scale info").appendChild(fifth);
   
    sixth.appendChild(document.createTextNode("The sixth note is another whole step up, D to E. "));
    document.getElementById("scale info").appendChild(sixth);

    seventh.appendChild(document.createTextNode("The seventh note is a whole step up, E to F#. "));
    document.getElementById("scale info").appendChild(seventh);

    last.appendChild(document.createTextNode("Finally, you take a half step up to arrive back at the root, G. "));
    document.getElementById("scale info").appendChild(last);

    endingparagraph.appendChild(document.createTextNode("This method works for ALL melodic minor scales, not just G. "));
    endingparagraph.appendChild(document.createTextNode("Below we take a look at all the melodic minor scales and walk through the notes. "));
    endingparagraph.appendChild(document.createTextNode("Try to pick a key and walk through all the notes yourself without help. Practicing this will allow you to find the notes in every scale from memorization. Practice makes perfect! "));
    document.getElementById("scale info").appendChild(endingparagraph);
    this.write_scale_name("Melodic Minor Scales");
  }

  print_harmonic_minor_scale_info() {
    let para = document.createElement("P");
    let root = document.createElement("P");
    let second = document.createElement("P");
    let third = document.createElement("P");
    let fourth = document.createElement("P");
    let fifth = document.createElement("P");
    let sixth = document.createElement("P");
    let seventh = document.createElement("P");
    let last = document.createElement("P");
    let endingparagraph = document.createElement("P");

    para.appendChild(document.createTextNode("Harmonic minor scales are the same as natural minor scales except for the seventh note being raised a half step. "));
    para.appendChild(document.createTextNode("Harmonic minor scales produce a sound commonly heard in Middle-Eastern music. "));

    
    document.getElementById("scale info").appendChild(para);

    root.appendChild(document.createTextNode("Harmonic minor scales start with the root note. We'll walk through the G harmonic minor scale. The root note is G. "));
    document.getElementById("scale info").appendChild(root);

    second.appendChild(document.createTextNode("The second note in a harmonic minor scale is a whole step up. "));
    second.appendChild(document.createTextNode("A whole step from G will take you to A. "));
    document.getElementById("scale info").appendChild(second);
    
    third.appendChild(document.createTextNode("The third note in harmonic minor scales is a half step up. This will take us from A to A#. "));
    document.getElementById("scale info").appendChild(third);

    fourth.appendChild(document.createTextNode("The fourth note is a whole step up from the third. Following our scale in G, this will go from A# to C. "));
    document.getElementById("scale info").appendChild(fourth);

    fifth.appendChild(document.createTextNode("The fifth note is whole step from the fourth, C to D. "));
    document.getElementById("scale info").appendChild(fifth);
   
    sixth.appendChild(document.createTextNode("The sixth note is half step up, D to D#. "));
    document.getElementById("scale info").appendChild(sixth);

    seventh.appendChild(document.createTextNode("The seventh note is a whole step and a half up (3 tones), taking us from D# to F#. "));
    document.getElementById("scale info").appendChild(seventh);

    last.appendChild(document.createTextNode("Finally, you take a half step up to arrive back at the root, G. "));
    document.getElementById("scale info").appendChild(last);

    endingparagraph.appendChild(document.createTextNode("This method works for ALL harmonic minor scales, not just G. "));
    endingparagraph.appendChild(document.createTextNode("Below we take a look at all the harmonic minor scales and walk through the notes. "));
    endingparagraph.appendChild(document.createTextNode("Try to pick a key and walk through all the notes yourself without help. Practicing this will allow you to find the notes in every scale from memorization. Practice makes perfect! "));
    document.getElementById("scale info").appendChild(endingparagraph);
    this.write_scale_name("Harmonic Minor Scales");
  }

  print_major_pent_scale_info() {
    let para = document.createElement("P");
    let root = document.createElement("P");
    let second = document.createElement("P");
    let third = document.createElement("P");
    let fourth = document.createElement("P");
    let fifth = document.createElement("P");
    let last = document.createElement("P");
    let endingparagraph = document.createElement("P");

    para.appendChild(document.createTextNode("Major pentatonic scales are very common in today's music, from pop to country to rock to gospel to EDM. They have a happy sound associated with them. "));
    para.appendChild(document.createTextNode("The major pentatonic scales are exactly like major scales with the fourth and seventh notes removed. "));
    para.appendChild(document.createTextNode("Just like major and minor scales, major pentatonic scales have a relative minor pentatonic scale. "));
    document.getElementById("scale info").appendChild(para);

    root.appendChild(document.createTextNode("Let's walk through the G major pentatonic scale. The root note is G. "));
    document.getElementById("scale info").appendChild(root);

    second.appendChild(document.createTextNode("The next note in a major pentatonic scale is a whole step up. "));
    second.appendChild(document.createTextNode("A whole step from G will take you to A. "));
    document.getElementById("scale info").appendChild(second);
    
    third.appendChild(document.createTextNode("The third note in a major pentatonic scale is another whole step from the second note. In the key of G, this will take us from A to B. "));
    document.getElementById("scale info").appendChild(third);

    fourth.appendChild(document.createTextNode("The fourth note in a major pentatonic scale is NOT the same as the fourth note in a major scale. "));
    fourth.appendChild(document.createTextNode("Instead, the fourth note takes a step and a half up. In G, this takes us from B to D. Notice that the fourth note in the major pentatonic scale is the same as the fifth note in the major scale. "));
    document.getElementById("scale info").appendChild(fourth);

    fifth.appendChild(document.createTextNode("The fifth note is whole step from the fourth, D to E. "));
    document.getElementById("scale info").appendChild(fifth);

    last.appendChild(document.createTextNode("Finally, you take a whole plus half step up to arrive back at the root, G. "));
    document.getElementById("scale info").appendChild(last);

    endingparagraph.appendChild(document.createTextNode("This method works for ALL major pentatonic scales, not just G. "));
    endingparagraph.appendChild(document.createTextNode("Below we take a look at all the major scales and walk through the notes. "));
    endingparagraph.appendChild(document.createTextNode("Try to pick a key and walk through all the notes yourself without help. Practicing this will allow you to find the notes in every scale from memorization. Practice makes perfect! "));
    document.getElementById("scale info").appendChild(endingparagraph);

    this.write_scale_name("Major Pentatonic Scales");
  }

  print_minor_pent_scale_info() {
    let para = document.createElement("P");
    let root = document.createElement("P");
    let second = document.createElement("P");
    let third = document.createElement("P");
    let fourth = document.createElement("P");
    let fifth = document.createElement("P");
    let last = document.createElement("P");
    let endingparagraph = document.createElement("P");

    para.appendChild(document.createTextNode("Minor pentatonic scales are heavily used in rock, EDM, and pop. They are perfect for soloing and result in a sad sound when played. "));
    para.appendChild(document.createTextNode("Minor pentatonic scales have the same notes as minor scales, except they do not have the second or sixth note. "));
    para.appendChild(document.createTextNode("All minor pentatonic scales have a relative major pentatonic scale. For example, D minor pentatonic and F major pentatonic contain the same notes. The difference is your root note. "));
    document.getElementById("scale info").appendChild(para);

    root.appendChild(document.createTextNode("As always, the scale's root note is the key that the scale is in. Let's look at G minor pentatonic. The root note is G. "));
    document.getElementById("scale info").appendChild(root);

    second.appendChild(document.createTextNode("The second note in a minor pentatonic scale is a whole plus half step from the root. "));
    second.appendChild(document.createTextNode("Three steps from G takes us to A#. Notice that the second note of minor pentatonic scales is different than the second note of minor scales"));
    document.getElementById("scale info").appendChild(second);
    
    third.appendChild(document.createTextNode("The third note in minor pentatonic scales is a whole step from the second. This takes us from A# to C. "));
    document.getElementById("scale info").appendChild(third);

    fourth.appendChild(document.createTextNode("The fourth note is a whole step up from the third. Following our scale in G, this will go from C to D. "));
    document.getElementById("scale info").appendChild(fourth);

    fifth.appendChild(document.createTextNode("The fifth note is whole plus half step (three tones) from the fourth, D to F. "));
    document.getElementById("scale info").appendChild(fifth);
   

    last.appendChild(document.createTextNode("Finally, you take a whole step up to arrive back at the root, G. "));
    document.getElementById("scale info").appendChild(last);

    endingparagraph.appendChild(document.createTextNode("This method works for ALL minor pentatonic scales, not just G. "));
    endingparagraph.appendChild(document.createTextNode("Below we take a look at all the minor pentatonic scales and walk through the notes. "));
    endingparagraph.appendChild(document.createTextNode("Try to pick a key and walk through all the notes yourself without help. Practicing this will allow you to find the notes in every scale from memorization. Practice makes perfect! "));
    document.getElementById("scale info").appendChild(endingparagraph);
    this.write_scale_name("Minor Pentatonic Scales");
  }

  print_dorian_scale_info() {
    this.write_scale_name("Dorian Scales");
  }
  print_lydian_scale_info() {
    this.write_scale_name("Lydian Scales");
  }
  print_mixolydian_scale_info() {
    this.write_scale_name("Mixolydian Scales");
  }
  print_aeolian_pent_scale_info() {
    this.write_scale_name("Aeolian Scales");
  }
  print_locrian_scale_info() {
    this.write_scale_name("Locrian Scales");
  }
  print_phrygian_scale_info() {
    this.write_scale_name("Phrygian Scales");
  }

  print_major_blues_info(){

  }
  print_minor_blues_info(){
    
  }

  write_scale_name(scale_name) {
    console.log("");
  }

  write_scales(scale_type) {
    for (let i = 0; i < this.notes.length; i++) {
      let returned_notes;
      if (scale_type == "major") {
        returned_notes = this.scales.make_major(this.notes[i], this.notes);
      }
      if (scale_type == "Natural Minor") {
        returned_notes = this.scales.make_minor(this.notes[i], this.notes);
      }
      if (scale_type == "Harmonic Minor") {
        returned_notes = this.scales.make_harmonic_minor(this.notes[i], this.notes);
      }
      if (scale_type == "Melodic Minor") {
        returned_notes = this.scales.make_melodic_minor(this.notes[i], this.notes);
      }
      if (scale_type == "minpentatonic") {
        returned_notes = this.scales.make_pentatonic_minor(this.notes[i], this.notes);
      }
      if (scale_type == "majpentatonic") {
        returned_notes = this.scales.make_pentatonic_major(this.notes[i], this.notes);
      }
      if (scale_type == "majbeb") {
        returned_notes = this.scales.make_bebop_major(this.notes[i], this.notes);
      }
      if (scale_type == "minbeb") {
        returned_notes = this.scales.make_bebop_minor(this.notes[i], this.notes);
      }
      if (scale_type == "Major Blues") {
        returned_notes = this.scales.make_major_blues(this.notes[i], this.notes);
      }
      if (scale_type == "Minor Blues") {
        returned_notes = this.scales.make_minor_blues(this.notes[i], this.notes);
      }
      if (scale_type == "harmonic") {
        returned_notes = this.scales.make_harmonic_minor(this.notes[i], this.notes);
      }
      if (scale_type == "melodic") {
        returned_notes = this.scales.make_melodic_minor(this.notes[i], this.notes);
      }
      if (scale_type == "dorian") {
        returned_notes = this.scales.make_dorian(this.notes[i], this.notes);
      }
      if (scale_type == "phrygian") {
        returned_notes = this.scales.make_phrygian(this.notes[i], this.notes);
      }
      if (scale_type == "lydian") {
        returned_notes = this.scales.make_lydian(this.notes[i], this.notes);
      }
      if (scale_type == "mixolydian") {
        returned_notes = this.scales.make_mixolydian(this.notes[i], this.notes);
      }
      if (scale_type == "locrian") {
        returned_notes = this.scales.make_locrian(this.notes[i], this.notes);
      }
      this.all_arrays[i] = returned_notes;
    }
  }

}


