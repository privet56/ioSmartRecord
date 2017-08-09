import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SoundService } from '../../app/services/SoundService';
import { ChangeDetectorRef } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { ToastController	}	from	'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media';
import { File, Entry } from '@ionic-native/file';

@Component({
  selector: 'page-record',
  templateUrl: 'record.html'
})
export class RecordPage
{
  public static MAX_RECORDING_SECONDS:number = 33;
  public static MIN_RECORDING_SECONDS:number = 5;

  @ViewChild('nameInputField') nameInputField;
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
              private file: File)
  {

  }
	ionViewWillEnter()    //comes after ionViewDidLoad 
  {
    this.soundService.errors$.subscribe((error:string) => {
      this.addMsg(error);
    });
    this.soundService.sounds$.subscribe((sounds: Array<Entry> ) => {
      this.sounds = sounds;
    });
    this.soundService.name$.subscribe((name: string) => {
      this.nameInputField.nativeElement.value = name;
    });

    this.soundService.initName();
    this.soundService.initSounds(true);
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
  public onRecordStart()
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
        let dir:string = this.soundService.getSoundDir(true);

        this.file.createFile(dir, this.fileNameOfRecording, true/*replace*/).then(() => {
          let absFN = dir.replace(/^file:\/\//, '') + this.fileNameOfRecording;
          this.fileOfRecording = this.media.create(absFN);
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
      /*  //playing code:
      file.play();
      file.stop();
      file.release();
      */
    }
  }
  public saveRecording(recordingTime:number)
  {
    this.fileOfRecording.stopRecord();
    this.fileOfRecording.release();

    if(recordingTime < RecordPage.MIN_RECORDING_SECONDS)
    {
      let	toast	=	this.toastCtrl.create({
        message:	"Recoring is too short, so won't be saved",
        position:	'top', //top,bottom,middle
        showCloseButton: true, closeButtonText:'x', dismissOnPageChange:true, //cssClass:'toast',
        duration:	2000});
      toast.present();
      this.file.removeFile(this.soundService.getSoundDir(true), this.fileNameOfRecording);
      this.fileOfRecording = null;
      this.fileNameOfRecording = null;      
      return;
    }
    /*{
      let fn:string = this.fileNameOfRecording;
      this.file.checkFile(this.soundService.getSoundDir(true), fn).then(
          (bExist) => this.addMsg("checkfile INF: file exists:"+bExist+" = "+this.soundService.getSoundDir(true)+fn),
           error => {
             this.addMsg("checkfile ERR:"+this.soundService.getSoundDir(true)+fn);
             this.addMsg(JSON.stringify(error));
           }
        );
    }*/
    this.soundService.addSound(this.fileNameOfRecording);

    this.fileOfRecording = null;
    this.fileNameOfRecording = null;
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
      this.onRecordStart();
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
