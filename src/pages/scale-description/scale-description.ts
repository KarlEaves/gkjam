import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Scales } from '../../assets/music-classes/Scales';

/**
 * Generated class for the ScaleDescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scale-description',
  templateUrl: 'scale-description.html',
})
export class ScaleDescriptionPage {
  key: string;
  scale_name: string;
  page_name: string;
  scale:string[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public scales:Scales) {
  }

  ionViewDidLoad() {
    this.key = this.navParams.get('note_to_page');
    this.scale_name = this.navParams.get('scale_to_page');
    if (this.scale_name =="majpentatonic")
    {
      this.scale_name = "Major Pentatonic";
    }
    if (this.scale_name =="minpentatonic")
    {
      this.scale_name = "Minor Pentatonic";
    }
    this.page_name = this.key + " " + this.scale_name;
    
    
    this.write_discription();
  }

  write_discription() {
    //create the para to write to
    var para = document.createElement("P");
    
    para.appendChild(document.createTextNode("The " + this.key + " " + this.scale_name + " contains the following notes: "));

    //change info based on scale..long process
    if (this.page_name=="A major")
    {
      this.scale = this.scales.a_major_scale;
    }
    if (this.page_name=="A# major")
    {
      this.scale = this.scales.a_sharp_major_scale;
    }
    if (this.page_name=="B major")
    {
      this.scale = this.scales.b_major_scale;
    }
    if (this.page_name=="C major")
    {
      this.scale = this.scales.c_major_scale;
    }
    if (this.page_name=="C# major")
    {
      this.scale = this.scales.c_sharp_major_scale;
    }
    if (this.page_name=="D major")
    {
      this.scale = this.scales.d_major_scale;
    }
    if (this.page_name=="D# major")
    {
      this.scale = this.scales.d_sharp_major_scale;
    }
    if (this.page_name=="E major")
    {
      this.scale = this.scales.e_major_scale;
    }
    if (this.page_name=="F major")
    {
      this.scale = this.scales.f_major_scale;
    }
    if (this.page_name=="F# major")
    {
      this.scale = this.scales.f_sharp_major_scale;
    }
    if (this.page_name=="G major")
    {
      this.scale = this.scales.g_major_scale;
    }
    if (this.page_name=="G# major")
    {
      this.scale = this.scales.g_sharp_major_scale;
    }
    if (this.page_name=="A minor")
    {
      this.scale = this.scales.a_minor_scale;
    }
    if (this.page_name=="A# minor")
    {
      this.scale = this.scales.a_sharp_minor_scale;
    }
    if (this.page_name=="B minor")
    {
      this.scale = this.scales.b_minor_scale;
    }
    if (this.page_name=="C minor")
    {
      this.scale = this.scales.c_minor_scale;
    }
    if (this.page_name=="C# minor")
    {
      this.scale = this.scales.c_sharp_minor_scale;
    }
    if (this.page_name=="D minor")
    {
      this.scale = this.scales.d_minor_scale;
    }
    if (this.page_name=="D# minor")
    {
      this.scale = this.scales.d_sharp_minor_scale;
    }
    if (this.page_name=="E minor")
    {
      this.scale = this.scales.e_minor_scale;
    }
    if (this.page_name=="F minor")
    {
      this.scale = this.scales.f_minor_scale;
    }
    if (this.page_name=="F# minor")
    {
      this.scale = this.scales.f_sharp_minor_scale;
    }
    if (this.page_name=="G minor")
    {
      this.scale = this.scales.g_minor_scale;
    }
    if (this.page_name=="G# minor")
    {
      this.scale = this.scales.g_sharp_minor_scale;
    }
    if (this.page_name=="A majpentatonic")
    {
      this.scale = this.scales.a_major_p_scale;
    }
    if (this.page_name=="A# majpentatonic")
    {
      this.scale = this.scales.a_sharp_major_p_scale;
    }
    if (this.page_name=="B majpentatonic")
    {
      this.scale = this.scales.b_major_p_scale;
    }
    if (this.page_name=="C majpentatonic")
    {
      this.scale = this.scales.c_major_p_scale;
    }
    if (this.page_name=="C# majpentatonic")
    {
      this.scale = this.scales.c_sharp_major_p_scale;
    }
    if (this.page_name=="D majpentatonic")
    {
      this.scale = this.scales.d_major_p_scale;
    }
    if (this.page_name=="D# majpentatonic")
    {
      this.scale = this.scales.d_sharp_major_p_scale;
    }
    if (this.page_name=="E majpentatonic")
    {
      this.scale = this.scales.e_major_p_scale;
    }
    if (this.page_name=="F majpentatonic")
    {
      this.scale = this.scales.f_major_p_scale;
    }
    if (this.page_name=="F# majpentatonic")
    {
      this.scale = this.scales.f_sharp_major_p_scale;
    }
    if (this.page_name=="G majpentatonic")
    {
      this.scale = this.scales.g_major_p_scale;
    }
    if (this.page_name=="G# majpentatonic")
    {
      this.scale = this.scales.g_sharp_major_p_scale;
    }
    if (this.page_name=="A minpentatonic")
    {
      this.scale = this.scales.a_minor_p_scale;
    }
    if (this.page_name=="A# minpentatonic")
    {
      this.scale = this.scales.a_sharp_minor_p_scale;
    }
    if (this.page_name=="B minpentatonic")
    {
      this.scale = this.scales.b_minor_p_scale;
    }
    if (this.page_name=="C minpentatonic")
    {
      this.scale = this.scales.c_minor_p_scale;
    }
    if (this.page_name=="C# minpentatonic")
    {
      this.scale = this.scales.c_sharp_minor_p_scale;
    }
    if (this.page_name=="D minpentatonic")
    {
      this.scale = this.scales.d_minor_p_scale;
    }
    if (this.page_name=="D# minpentatonic")
    {
      this.scale = this.scales.d_sharp_minor_p_scale;
    }
    if (this.page_name=="E minpentatonic")
    {
      this.scale = this.scales.e_minor_p_scale;
    }
    if (this.page_name=="F minpentatonic")
    {
      this.scale = this.scales.f_minor_p_scale;
    }
    if (this.page_name=="F# minpentatonic")
    {
      this.scale = this.scales.f_sharp_minor_p_scale;
    }
    if (this.page_name=="G minpentatonic")
    {
      this.scale = this.scales.g_minor_p_scale;
    }
    if (this.page_name=="G# minpentatonic")
    {
      this.scale = this.scales.g_sharp_minor_p_scale;
    }

    for (let i = 0; i < this.scale.length;i++)
    {
      para.appendChild(document.createTextNode(this.scale[i]+ " "));
    }

    document.getElementById("description").appendChild(para);
    
  }
}



