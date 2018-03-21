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
    this.navCtrl.push(ScaleDescriptionPage,{
      note_to_page : note_passed_in, scale_to_page: this.test
    });
  }


  ionViewDidLoad() {


    this.test = this.navParams.get('test');
    
    if (this.test == "major") {
      this.print_major_scale_info();
      this.write_scales(this.test);
    }
    if (this.test == "minor") {
      this.print_minor_scale_info();
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
  print_major_scale_info() {
    this.write_scale_name("Major (Ionian) Scales");
  }
  print_minor_scale_info() {
    this.write_scale_name("Minor (Aeolian) Scales");
  }
  print_major_pent_scale_info() {
    this.write_scale_name("Major Pentatonic Scales");
  }
  print_minor_pent_scale_info() {
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

  write_scale_name(scale_name) {
    console.log("");
  }

  write_scales(scale_type) {
    for (let i = 0; i < this.notes.length; i++) {
      let returned_notes;
      if (scale_type == "major") {
        returned_notes = this.scales.make_major(this.notes[i], this.notes);
      }
      if (scale_type == "minor") {
        returned_notes = this.scales.make_minor(this.notes[i], this.notes);
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
      if (scale_type == "majblues") {
        returned_notes = this.scales.make_major_blues(this.notes[i], this.notes);
      }
      if (scale_type == "minblues") {
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


