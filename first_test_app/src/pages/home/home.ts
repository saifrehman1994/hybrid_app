import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VideoPlayer , VideoOptions } from '@ionic-native/video-player';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  videoOptions: VideoOptions;
  videoUrl: string;
  constructor(private videoplayer: VideoPlayer,public navCtrl: NavController) {

  }
async playvideo()
{

try
{
this.videoUrl="https://www.youtube.com/watch?v=E4S1yVBUPpk";
this.videoOptions={
volume: 0.7
}
this.videoplayer.play(this.videoUrl,this.videoOptions);
}
catch(e)
{console.log(e);}

}
}
