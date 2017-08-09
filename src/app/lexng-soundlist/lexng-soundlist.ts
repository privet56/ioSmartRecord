import { Component } from '@angular/core';
import { ItemSliding } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { SoundService } from '../services/SoundService';
import { OnInit } from '@angular/core';
import { File, Entry } from '@ionic-native/file';
import { Media, MediaObject } from '@ionic-native/media';

@Component({
  selector: 'lexng-soundlist',
  templateUrl: 'lexng-soundlist.html'
})
export class SoundList implements OnInit
{
  public sounds:Array<Entry> = Array<Entry>();
  protected fileOfPlaying:MediaObject = null;

  constructor(protected navCtrl: NavController,
              protected soundService:SoundService,
              private media: Media)
  {

  }
  ngOnInit()
  {
    this.soundService.sounds$.subscribe( ( sounds: Array<Entry> ) => {
      this.sounds = sounds;
    });
  }
  public stopSound()
  {
    if(this.fileOfPlaying)
    {
      this.fileOfPlaying.stop();
      this.fileOfPlaying.release();
      this.fileOfPlaying = null;
    }
  }  
  public playSound(slidingItem: ItemSliding, sound: Entry)
  {
    this.stopSound();
    this.fileOfPlaying = this.media.create(sound.fullPath);
    this.fileOfPlaying.play();
  }
  public removeSound(slidingItem: ItemSliding, sound: Entry)
  {
    this.soundService.removeSound(sound.name);
  }
}
