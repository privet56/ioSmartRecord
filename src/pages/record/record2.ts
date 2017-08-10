import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SoundService } from '../../app/services/SoundService';
import { ChangeDetectorRef } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { ToastController	}	from	'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media';
import { File, Entry, FileEntry } from '@ionic-native/file';
import { OnInit } from '@angular/core';
//https://ionicframework.com/docs/native/media-capture/
import { MediaCapture, MediaFile, CaptureError, CaptureAudioOptions } from '@ionic-native/media-capture';
//trying to record|convert? better? -> check
  //https://github.com/keenan/cordova-phonegap-audio-encode
  //https://github.com/emj365/cordova-plugin-audio-recorder-api
  //https://github.com/SidneyS/cordova-plugin-nativeaudio
  //https://github.com/remoorejr/cordova-plugin-media-with-compression  //m4a 

@Component({
  selector: 'page-record',
  templateUrl: 'record.html'
})
export class RecordPage2 implements OnInit
{
  public static RECORDING_LENGTH_IN_SECONDS:number = 7;
  //public static MAX_RECORDING_SECONDS:number = 33;
  //public static MIN_RECORDING_SECONDS:number = 3; //TODO: should be min 6

  @ViewChild('nameInputField') nameInputField;
  public timer:any = null;  //TODO: interrupt after 1 min recording
  public recordingStart:Date = null;
  protected fileNameOfRecording: string = null;
  public msg:string="";

  constructor(public navCtrl:NavController,
              public soundService:SoundService,
              public changeDetector:ChangeDetectorRef,
              public alertCtrl: AlertController,
              public events: Events,
              public toastCtrl:ToastController,
              protected file:File,
              private mediaCapture: MediaCapture)
  {

  }
  //ionViewWillEnter()    //comes after ionViewDidLoad
  ngOnInit()
  {
    this.soundService.errors$.subscribe((error:string) => {
      this.addMsg(error);
    });
    this.soundService.name$.subscribe((name: string) => {
      this.nameInputField.nativeElement.value = name;
    });

    this.soundService.initName();
    this.soundService.initSounds(true);

    this.mediaCapture.onPendingCaptureError().subscribe(captureError => {
      this.addMsg("RECORD:PendingCaptureERROR:"+JSON.stringify(captureError));
    });
    this.mediaCapture.onPendingCaptureResult().subscribe(captureResult => {
      this.addMsg("RECORD:PendingCaptureResult:"+JSON.stringify(captureResult));
    });    
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
    { //STOP
      //stop not possible!
      this.addMsg("RECORD:StopINFO:stop not possible");
      return;
    }
    else
    { //START
      this.timer = setInterval(() => {
        this.onRecordingRunning();
      }, 1000/*=1sec*/);
      this.recordingStart = new Date();

      this.fileNameOfRecording = (new Date()).getTime()+SoundService.SOUNDFNPOSTFIX;

      try
      {
        let destDir:string = this.soundService.getSoundDir(true)+'/';

        this.addMsg("SUPPORTEDAUDIOMODES:"+JSON.stringify(this.mediaCapture.supportedAudioModes));

        let options = {limit: 1, duration: RecordPage2.RECORDING_LENGTH_IN_SECONDS};
        this.mediaCapture.captureAudio(options).then(
            (data: MediaFile[]) => {
              let absFnOfRecording  = data[0].fullPath;
              let dirOfRecording    = absFnOfRecording.substring(0, absFnOfRecording.lastIndexOf('/')+1);
              let fnOfRecording     = absFnOfRecording.substring(absFnOfRecording.lastIndexOf('/')+1);

              this.addMsg("RECORD:BEFORECOPYINFO:"+"\n\tabsFnOfRecording:"+absFnOfRecording+"\n\tdirOfRecording:"+dirOfRecording+"\n\tfnOfRecording:"+fnOfRecording);

              this.file.copyFile(dirOfRecording, fnOfRecording, destDir, this.fileNameOfRecording).then(
                (re) => {
                  this.addMsg("RECORD:COPYINFO:"+JSON.stringify(re));
                  let recordingTime:number= this.recordingTime();
                  let timer               = this.timer;
                  this.timer              = null;
                  this.recordingStart     = null;
                  clearInterval(timer);
                  this.saveRecording(recordingTime);
                  this.fileNameOfRecording = null;
                },
                err => {
                  this.addMsg("RECORD:COPYERROR:"+JSON.stringify(err));
                });
            },
            (err: CaptureError) => {
              this.addMsg("RECORD:CAPTUREERROR:"+JSON.stringify(err));
            }
          );
      }
      catch(e)
      {
        this.addMsg("CATCH");
        this.addMsg(e);
      }
    }
  }
  public saveRecording(recordingTime:number)
  {
    let fn:string = this.fileNameOfRecording;
    this.fileNameOfRecording = null;
    /*
    if(recordingTime < RecordPage.MIN_RECORDING_SECONDS)
    {
      let	toast	=	this.toastCtrl.create({
        message:	"Recoring is too short, so won't be saved",
        position:	'top', //top,bottom,middle
        showCloseButton: true, closeButtonText:'x', dismissOnPageChange:true, //cssClass:'toast',
        duration:	2000});
      toast.present();
      this.fileNameOfRecording = null;      
      return;
    }*/
    this.soundService.addSound(this.fileNameOfRecording);
    /*{ //TODO: remove temporary code
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
    }*/
  }
  public onRecordingRunning()
  {
    this.changeDetector.markForCheck(); // as stated by the angular team: the following is required, otherwise the view will not be updated
    /*
    let recordingTime:number= this.recordingTime();
    if (recordingTime > RecordPage.MAX_RECORDING_SECONDS)
    {
      let	toast	=	this.toastCtrl.create({
        message:	"Maximum recoring time reached.",
        position:	'top', //top,bottom,middle
        showCloseButton: true, closeButtonText:'x', dismissOnPageChange:true, //cssClass:'toast',
        duration:	2000});
      toast.present();
      //this.onRecordStartStop(); //Promises are not cancellable! protected currentRecording : Promise<MediaFile[] | CaptureError> = null;
    }*/
  }
  public isRecording() : boolean
  {
    return (this.timer != null);
  }
  public recordingTime() : number
  {
    if(!this.isRecording()) return 0;
    let diff_ms:number = (new Date()).getTime() - this.recordingStart.getTime();
    Math.round(diff_ms / 1000);
  }
  public remainingTime() : number
  {
    return RecordPage2.RECORDING_LENGTH_IN_SECONDS - this.recordingTime();
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
