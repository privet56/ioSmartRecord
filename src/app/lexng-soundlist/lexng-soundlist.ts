import { Component } from '@angular/core';
import { ItemSliding } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { SoundService } from '../services/SoundService';
import { OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { File, Entry, FileEntry, IFile } from '@ionic-native/file';
import { Media, MediaObject,MEDIA_STATUS } from '@ionic-native/media';
/*import { trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
Input } from '@angular/core';*/

@Component({
  selector: 'lexng-soundlist',
  templateUrl: 'lexng-soundlist.html'/*,
 animations: [
  trigger('flyInOut', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
      animate(300, keyframes([
        style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
        style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
        style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
      ]))
    ]),
    transition('* => void', [
      animate(300, keyframes([
        style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
        style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
        style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
      ]))
    ])
  ])
 ]*/
})
export class SoundList implements OnInit
{
  public sounds:Array<Entry> = Array<Entry>();
  protected fileOfPlaying:MediaObject = null;
  protected soundCurrentlyPlaying:Entry = null;

  constructor(protected navCtrl: NavController,
              protected soundService:SoundService,
              private media: Media,
              private file: File,
              public changeDetector:ChangeDetectorRef)
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
      this.soundCurrentlyPlaying = null;
    }
  }  
  public playSound(slidingItem: ItemSliding, sound: Entry)
  {
    let bOnlyStop:boolean = (sound == this.soundCurrentlyPlaying);
    this.stopSound();
    if (bOnlyStop)
    {
      slidingItem.close();
      return;
    }
    let absFN:string = sound.nativeURL.replace(/^file:\/\//, '');
    let soundsDir = this.soundService.getSoundDir(true)+'/';
    let onlyFN = sound.name;
    { //TODO: remove temporary code
      //play works with demo file!
      soundsDir = this.file.applicationDirectory + "www/assets/";
      onlyFN = "kabeljau.wav";
      absFN = soundsDir + onlyFN;
      this.soundService.onerror(null, "SOUNDLIST:onPlay ERR: as record not supported on the sim, play demo file. Remove this code on device!:\n"+absFN);
    }

    this.fileOfPlaying = this.media.create(absFN);

    this.fileOfPlaying.onStatusUpdate.subscribe(status => {
      this.onPlayStatusUpdate(status);
    });    
    this.fileOfPlaying.onError.subscribe(error => {

      if(error == this.media.MEDIA_NONE)
      { //no real error, happens after the 'real' onError call...
        return;
      }
      {
        this.file.checkFile(soundsDir, onlyFN).then(
            (bExist) => this.soundService.onerror(null, "SOUNDLIST:checkfile INF: file exists:"+bExist+" ==>\n"+absFN),
            error => {
              this.soundService.onerror(error, "SOUNDLIST:checkfile ERR:\n"+absFN);
              this.soundService.onerror(error, JSON.stringify(error));
            }
          );
      }

      //error:MEDIA_ERROR
      //MediaError.MEDIA_ERR_ABORTED = 1
      this.soundService.onerror(error, 'SOUNDLIST:play ERR fileOfPlaying.onError fn:\n'+absFN);
      this.stopSound();
    });
    let duration:number = this.fileOfPlaying.getDuration();
    this.fileOfPlaying.play();
    this.soundCurrentlyPlaying = sound;
    slidingItem.close();
  }
  public removeSound(slidingItem: ItemSliding, sound: Entry)
  {
    slidingItem.close();
    this.soundService.removeSound(sound.name);
  }
  public identifier(sound:Entry) : string
  {
    return sound.name;
  }

  public onPlayStatusUpdate(status:MEDIA_STATUS):void
  {
    this.soundService.onerror(null, 'lexng-soundlist INF onPlayStatusUpdate status:'+status+" <?> "+this.media.MEDIA_STOPPED);

    if(status == this.media.MEDIA_STOPPED/*4*/)
    {
      this.stopSound();
    }
  }

  public isPlaying(sound:Entry):boolean
  {
    return (sound == this.soundCurrentlyPlaying);
  }
  public sizeAsync(sound:Entry):Promise<number>
  {
    if(sound["size"])
    {
      return Promise.resolve(sound["size"]);
    }
    let p : Promise<any> = new Promise<any>(resolve =>
    {
      this.file.resolveLocalFilesystemUrl(sound.nativeURL)
        .then((file: FileEntry) => {
          file.file((meta:IFile) => {
            this.soundService.onerror(null, 'lexng-soundlist INF fsize:'+meta.size);
            sound["size"] = meta.size;
            resolve(meta.size);
          }, error => {
             this.soundService.onerror(error, 'lexng-soundlist ERR !size:');
             resolve(-1);
            });
      });
    });

    return p;
    //return this.file.resolveLocalFilesystemUrl(sound.nativeURL);
  }
  public size(sound:Entry):number
  {
    if((sound["size"] !== undefined) && (sound["size"] !== null))
    {
      return sound["size"];
    }

    this.file.resolveLocalFilesystemUrl(sound.nativeURL)
      .then((file: FileEntry) => {
        file.file((meta:IFile) => {
          this.soundService.onerror(null, 'lexng-soundlist INF size:'+meta.size);
          sound["size"] = meta.size;
          this.changeDetector.markForCheck(); // the following is required, otherwise the view will not be updated
        }, error => {
            this.soundService.onerror(error, 'lexng-soundlist ERR !size:');
            sound["size"] = -1;
          });
    });

    return 0;
    //return this.file.resolveLocalFilesystemUrl(sound.nativeURL);
  }
  
}
