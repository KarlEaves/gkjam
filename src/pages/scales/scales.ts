import { ScaleDescriptionPage } from './../scale-description/scale-description';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  test:string;
  notes:string[] = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  openScaleDescriptionPage(){
    this.navCtrl.push(ScaleDescriptionPage)
  }


  ionViewDidLoad() {
    this.test = this.navParams.get('test');
    if (this.test =="major")
    {
      this.print_major_scale_info();
      this.write_scales(this.test);
    }
    if (this.test =="minor")
    {
      this.print_minor_scale_info();
      this.write_scales(this.test);
    }
    if (this.test =="majpentatonic")
    {
      this.print_major_pent_scale_info();
      this.write_scales(this.test);
    }
    if (this.test =="minpentatonic")
    {
      this.print_minor_pent_scale_info();
      this.write_scales(this.test);
    }
    if (this.test =="ionian")
    {
      this.print_major_scale_info();
      this.write_scales("major");
    }
    if (this.test =="dorian")
    {
      this.print_dorian_scale_info();
      this.write_scales(this.test);
    }
    if (this.test =="phrygian")
    {
      this.print_phrygian_scale_info();
      this.write_scales(this.test);
    }
    if (this.test =="lydian")
    {
      this.print_lydian_scale_info();
      this.write_scales(this.test);
    }
    if (this.test =="mixolydian")
    {
      this.print_mixolydian_scale_info();
      this.write_scales(this.test);
    }
    if (this.test =="aeolian")
    {
      this.print_minor_scale_info();
      this.write_scales("minor");
    }
    if (this.test =="locrian")
    {
      this.print_locrian_scale_info();
      this.write_scales(this.test);
    }
  }
  print_major_scale_info()
  {
    this.write_scale_name("Major (Ionian) Scales");   
  }
  print_minor_scale_info()
  {
    this.write_scale_name("Minor (Aeolian) Scales");
  }
  print_major_pent_scale_info()
  {
    this.write_scale_name("Major Pentatonic Scales");
  }
  print_minor_pent_scale_info()
  {
    this.write_scale_name("Minor Pentatonic Scales");
  }
  print_dorian_scale_info()
  {
    this.write_scale_name("Dorian Scales");   
  }
  print_lydian_scale_info()
  {
    this.write_scale_name("Lydian Scales");
  }
  print_mixolydian_scale_info()
  {
    this.write_scale_name("Mixolydian Scales");
  }
  print_aeolian_pent_scale_info()
  {
    this.write_scale_name("Aeolian Scales");
  }
  print_locrian_scale_info()
  {
    this.write_scale_name("Locrian Scales");
  }
  print_phrygian_scale_info()
  {
    this.write_scale_name("Phrygian Scales");
  }

  write_scale_name(scale_name)
  {
    var para = document.createElement("h1"); 
    para.appendChild(document.createTextNode(scale_name));
    document.getElementById("scaleName").appendChild(para);  
  }

  write_scales(scale_type)
  {
    for (let i = 0 ;i<this.notes.length; i++)
    {
      var item = document.createElement('p');
      let returned_notes;
      if (scale_type =="major")
      {
        returned_notes = this.make_major(this.notes[i],this.notes);
      }
      if (scale_type =="minor")
      {
        returned_notes = this.make_minor(this.notes[i],this.notes);
      }
      if (scale_type =="minpentatonic")
      {
        returned_notes = this.make_pentatonic_minor(this.notes[i],this.notes);
      }
      if (scale_type =="majpentatonic")
      {
        returned_notes = this.make_pentatonic_major(this.notes[i],this.notes);
      }
      if(scale_type =="majbeb")
      {
        returned_notes = this.make_bebop_major(this.notes[i],this.notes);
      }
      if(scale_type =="minbeb")
      {
        returned_notes = this.make_bebop_minor(this.notes[i],this.notes);
      }
      if(scale_type =="majblues")
      {
        returned_notes = this.make_major_blues(this.notes[i],this.notes);
      }
      if(scale_type =="minblues")
      {
        returned_notes = this.make_minor_blues(this.notes[i],this.notes);
      }
      if(scale_type =="harmonic")
      {
        returned_notes = this.make_harmonic_minor(this.notes[i],this.notes);
      }
      if(scale_type =="melodic")
      {
        returned_notes = this.make_melodic_minor(this.notes[i],this.notes);
      }
      if(scale_type =="dorian")
      {
        returned_notes = this.make_dorian(this.notes[i],this.notes);
      }
      if(scale_type =="phrygian")
      {
        returned_notes = this.make_phrygian(this.notes[i],this.notes);
      }
      if(scale_type =="lydian")
      {
        returned_notes = this.make_lydian(this.notes[i],this.notes);
      }
      if(scale_type =="mixolydian")
      {
        returned_notes = this.make_mixolydian(this.notes[i],this.notes);
      }
      if(scale_type =="locrian")
      {
        returned_notes = this.make_locrian(this.notes[i],this.notes);
      }

      for (let j = 0;j<returned_notes.length;j++) 
      {
        
        item.appendChild(document.createTextNode(returned_notes[j])); 
        if (j!=returned_notes.length-1)
        {
          item.appendChild(document.createTextNode(" - "))
        }
      }
      //list.appendChild(item);

      let appendTo="notesIn"+this.notes[i]+"Scale";
      console.log(appendTo);
      document.getElementById(appendTo).appendChild(item);
    }
  }
  

  
  // write_to_html(content,wheretowrite)
  // {
  //   var para = document.createElement("P"); 
  //   para.appendChild(document.createTextNode(chord +" contains the following notes: "));    
  //   for (let i = 0;i<notes_in_chord.length; i++) 
  //         {                     // Create a <p> node
  //           var t = document.createTextNode(notes_in_chord[i]+ "  ");      // Create a text node
  //           para.appendChild(t);                 // Append the text to <p>
  //           document.getElementById("notesInChordsSelected").appendChild(para); 
  //         }
  // }
  make_major(start_note,notes)
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
  
  make_minor(start_note,notes)
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
  
  make_pentatonic_major(start_note,notes)
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
  
  make_pentatonic_minor(start_note,notes)
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
  
  make_melodic_minor(start_note,notes)
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
  
  make_harmonic_minor(start_note,notes)
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
  
  make_minor_blues(start_note,notes)
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
  make_major_blues(start_note,notes)
  {
    let return_scale:string[]= [];
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
    return_scale.push(notes[(i+7)%12]);
    return_scale.push(notes[(i+9)%12]);
  
    return return_scale;
    
  }
  make_bebop_major(start_note,notes)
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
  
  make_bebop_minor(start_note,notes)
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
  make_dorian(start_note,notes)
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
    return_scale.push(notes[(i+5)%12]);
    return_scale.push(notes[(i+7)%12]);
    return_scale.push(notes[(i+9)%12]);
    return_scale.push(notes[(i+10)%12]);
    return return_scale;
    
  }
  make_phrygian(start_note,notes)
  {
    console.log('made it');
    let return_scale:string[] = [];
    for (var i = 0; i<12; i++)
    {
      if (notes[i]==start_note)
      {
        break;
      }
    }
    return_scale.push(notes[i%12]);
    return_scale.push(notes[(i+1)%12]);
    return_scale.push(notes[(i+3)%12]);
    return_scale.push(notes[(i+5)%12]);
    return_scale.push(notes[(i+7)%12]);
    return_scale.push(notes[(i+8)%12]);
    return_scale.push(notes[(i+10)%12]);
    return return_scale;
    
  }
  make_lydian(start_note,notes)
  {
    console.log('made it');
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
    return_scale.push(notes[(i+6)%12]);
    return_scale.push(notes[(i+7)%12]);
    return_scale.push(notes[(i+9)%12]);
    return_scale.push(notes[(i+11)%12]);
    return return_scale;
    
  }

  make_mixolydian(start_note,notes)
  {
    console.log('made it');
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
    return_scale.push(notes[(i+10)%12]);
    return return_scale;
    
  }

  make_locrian(start_note,notes)
  {
    console.log('made it');
    let return_scale:string[] = [];
    for (var i = 0; i<12; i++)
    {
      if (notes[i]==start_note)
      {
        break;
      }
    }
    return_scale.push(notes[i%12]);
    return_scale.push(notes[(i+1)%12]);
    return_scale.push(notes[(i+3)%12]);
    return_scale.push(notes[(i+5)%12]);
    return_scale.push(notes[(i+6)%12]);
    return_scale.push(notes[(i+8)%12]);
    return_scale.push(notes[(i+10)%12]);
    return return_scale;
    
  }

  
}


