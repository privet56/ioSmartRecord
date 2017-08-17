import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SoundService } from '../../app/services/SoundService';
import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Events, TextInput } from 'ionic-angular';
import { ToastController	}	from	'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media';
import { File, Entry, FileEntry } from '@ionic-native/file';
import { OnInit, AfterViewInit } from '@angular/core';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';

@Component({
  selector: 'page-record',
  templateUrl: 'record.html'
})
export class RecordPage implements /*OnInit, */AfterViewInit
{
  public static MAX_RECORDING_SECONDS:number = 33;
  public static MIN_RECORDING_SECONDS:number = 3; //TODO: should be min 6

  @ViewChild('nameInputField') nameInputField:TextInput;
  public timer:any = null;  //TODO: interrupt after 1 min recording
  public recordingStart:Date = null;
  public sounds:Array<Entry> = Array<Entry>();
  protected fileOfRecording: MediaObject = null;
  protected fileNameOfRecording: string = null;
  public msg:string="";

  constructor(public navCtrl:NavController,
              public soundService:SoundService,
              public changeDetector:ChangeDetectorRef,
              public alertCtrl: AlertController,
              public events: Events,
              public toastCtrl:ToastController,
              private media: Media,
              private file: File,
              private mediaCapture: MediaCapture)
  {

  }
  //ionViewWillEnter()    //comes after ionViewDidLoad
  //ngOnInit()
  ngAfterViewInit()
  {
    this.soundService.errors$.subscribe((error:string) => {
      this.addMsg(error);
    });
    this.soundService.sounds$.subscribe((sounds: Array<Entry> ) => {
      this.sounds = sounds;
    });
    this.soundService.name$.subscribe((name: string) => {

      this.nameInputField.setValue(name);
      //this.nameInputField.nativeElement.value = name; //works with <input>
    });

    this.soundService.initName();
    this.soundService.initSounds(true);

    /*{ //.T.ODO: remove temporary code
      this.file.listDir(this.file.applicationDirectory,'www').then(list => {

        this.addMsg('RECORD:ONINIT:FOUND files#: '+list.length);

        let f = (value:Entry, index:number, array) => {

            this.addMsg('RECORD:ONINIT:FOUND: '+value.nativeURL);
        }
        list.forEach(f);
        }).catch((error) => {
            this.addMsg('RECORD:ONINIT: ERR: !list');
        })
    }*/
  }

  //https://stackoverflow.com/questions/42675727/how-to-block-navigation-to-other-tab-if-form-isnt-valid/42676245 	
  //Unfortunately, the IonViewCanLeave doesn't seem to work (yet) in ionic2, when navigating between tabs :(
  //This Nav guard only works if you do a manual navController.pop() at the moment – Doek Apr 4 at 5:41
  ionViewCanLeave(): boolean
  {
    if(this.isRecording())
    {
      let	toast	=	this.toastCtrl.create({
        message:	'Recording is running...',
        position:	'middle', //top,bottom,middle
        showCloseButton: true, closeButtonText:'x', dismissOnPageChange:true, //cssClass:'toast',
        duration:	2000});
      toast.present();
      return false;
    }
    return true;
  }
  public onRecordStartStop()
  {
    if(this.timer)
    {
      let recordingTime:number= this.recordingTime();
      let timer               = this.timer;
      this.timer              = null;
      this.recordingStart     = null;
      clearInterval(timer);
      this.saveRecording(recordingTime);
      this.fileOfRecording = null;
      this.fileNameOfRecording = null;
    }
    else
    {
      this.timer = setInterval(() => {
        this.onRecordingRunning();
      }, 1000/*=1sec*/);
      this.recordingStart = new Date();

      this.fileNameOfRecording = (new Date()).getTime()+SoundService.SOUNDFNPOSTFIX;
      try
      {
        let dir:string = this.soundService.getSoundDir(true)+'/';

        this.file.createFile(dir, this.fileNameOfRecording, true/*replace*/).then(() => {
          let absFN = dir.replace(/^file:\/\//, '') + this.fileNameOfRecording;

          this.addMsg("Record:onRecordStart INF: absFN:'"+absFN+"'");

          this.fileOfRecording = this.media.create(absFN);
          this.fileOfRecording.onError.subscribe(error => {
            //error:MEDIA_ERROR
            //MediaError.MEDIA_ERR_ABORTED = 1
            this.addMsg("Record:onRecordStart ERR: fileOfRecording.onError");
            this.addMsg(JSON.stringify(error));
          });
          this.fileOfRecording.startRecord();
        },
        error => 
        {
            console.error("Record:onRecordStart ERR");
            console.error(error);
            this.addMsg("Record:onRecordStart ERR");
            this.addMsg(error);
        });
      }
      catch(e)
      {
        console.log("CATCH");
        this.addMsg("CATCH");
        this.addMsg(e);
      }
    }
  }
  public saveRecording(recordingTime:number)
  {
    this.fileOfRecording.stopRecord();
    this.fileOfRecording.release();
    let fn:string = this.fileNameOfRecording;
    this.fileOfRecording = null;
    this.fileNameOfRecording = null;

    if(recordingTime < RecordPage.MIN_RECORDING_SECONDS)
    {
      let	toast	=	this.toastCtrl.create({
        message:	"Recoring is too short, so won't be saved",
        position:	'top', //top,bottom,middle
        showCloseButton: true, closeButtonText:'x', dismissOnPageChange:true, //cssClass:'toast',
        duration:	2000});
      toast.present();
      this.file.removeFile(this.soundService.getSoundDir(true), fn);
      this.fileOfRecording    = null;
      this.fileNameOfRecording= null;
      return;
    }
    this.soundService.addSound(this.fileNameOfRecording);
    { //TODO: remove temporary code on device!
      this.file.checkFile(this.soundService.getSoundDir(true)+'/', fn).then(
          (bExist) => this.addMsg("RECORD:checkfile INF: file exists:"+bExist+" ==>\n"+
          this.soundService.getSoundDir(true)+'/'+fn),
           error => {
             this.addMsg("RECORD:checkfile ERR:"+this.soundService.getSoundDir(true)+'/'+fn);
             this.addMsg(JSON.stringify(error));
           }
        );
      this.file.resolveLocalFilesystemUrl(this.soundService.getSoundDir(true)+'/'+fn)
        .then((file: FileEntry) => {
          file.file(meta => {
            this.addMsg("RECORD:meta INF: size:"+meta.size+" fn:"+this.soundService.getSoundDir(true)+'/'+fn);
          }, error => {
             this.addMsg("RECORD:meta ERR:"+this.soundService.getSoundDir(true)+'/'+fn);
             this.addMsg(JSON.stringify(error));
            });
      });
    }
  }
  public onRecordingRunning()
  {
    this.changeDetector.markForCheck(); // as stated by the angular team: the following is required, otherwise the view will not be updated

    let recordingTime:number= this.recordingTime();
    if (recordingTime > RecordPage.MAX_RECORDING_SECONDS)
    {
      let	toast	=	this.toastCtrl.create({
        message:	"Maximum recoring time reached.",
        position:	'top', //top,bottom,middle
        showCloseButton: true, closeButtonText:'x', dismissOnPageChange:true, //cssClass:'toast',
        duration:	2000});
      toast.present();
      this.onRecordStartStop();
    }
  }
  public isRecording() : boolean
  {
    return (this.timer != null);
  }
  public recordingTime() : number
  {
    if(!this.isRecording()) return 0;
    let diff_ms:number = (new Date()).getTime() - this.recordingStart.getTime();
    return Math.round(diff_ms / 1000);
  }
  public onNameChanged($event) : boolean
  {
    this.soundService.setName($event.target.value);
    return false;
  }
  public addMsg(msg:string):void
  {
    this.msg += msg+"\n";
      /*let	toast	=	this.toastCtrl.create({
        message:	msg,
        position:	'top', //top,bottom,middle
        showCloseButton: true, closeButtonText:'x', dismissOnPageChange:true, //cssClass:'toast',
        duration:	2000});
      toast.present();*/
  }
}
