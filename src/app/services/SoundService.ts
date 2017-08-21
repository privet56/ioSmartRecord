import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Events } from 'ionic-angular';
import { BehaviorSubject } from 'rxjs/Rx';
import 'rxjs/Rx';
import { NativeStorage } from '@ionic-native/native-storage';
import { File, Entry/*, RemoveResult*/ } from '@ionic-native/file';
//import { Media } from '@ionic-native/media';

@Injectable()
export class SoundService
{
    public static NAME = "name";
    public static SOUNDFNPOSTFIX = '.lexng.mp3';    //.wav,.mp3,.m4a,.amr
    public static SOUNDSUBDIR = 'lexng';

    sounds: Array<Entry> = null;
    soundsSubject: BehaviorSubject<Array<Entry>> = new BehaviorSubject([]);
    sounds$: Observable<Array<Entry>> = this.soundsSubject.asObservable();

    name: string = null;
    nameSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
    name$: Observable<string> = this.nameSubject.asObservable();

    errors: string = null;
    errorsSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
    errors$: Observable<string> = this.errorsSubject.asObservable();

    constructor(public http:Http, public events: Events, private nativeStorage: NativeStorage,
//                private media: Media,
                private file: File)
    {

    }
    initName():void
    {
        if(this.name)
        {
            return;//already inited!
        }
        this.nativeStorage.getItem(SoundService.NAME)
        .then(
            data => 
            {
                if(data && data.value)
                {
                    this.name = data.value;
                    this.nameSubject.next(this.name);
                }
            },
            error => 
            {
                //Native: tried calling NativeStorage.getItem, but Cordova is not available. Make sure to include cordova.js or run in a device/simulator
                //  ionic cordova platform add browser
                //  ionic cordova run browser
                this.onerror(error, "SoundService:initName ERR");
            }
        );
    }
    initSounds(force:boolean):void
    {
        if(!force && this.sounds)
        {
            return;//already inited!
        }

        this.file.createDir(this.getSoundDir(false), SoundService.SOUNDSUBDIR, false/*replace*/).then(direcoryEntry => {
            
        }).catch((error) => {
            if((error.code === 12) || error.message === 'PATH_EXISTS_ERR')
            {
                //np!
            }
            else
            {
                this.onerror(error, '!initSounds ERR: !createDir');
            }
        })

        this.sounds = new Array<Entry>();

        this.file.listDir(this.getSoundDir(false), SoundService.SOUNDSUBDIR).then(list => {

            //this.onerror(null, 'found: '+list.length+' sounds in dir:'+this.getSoundDir(true));

            let f = (value:Entry, index:number, array) => {

                //this.onerror(null, 'SERVICE:FOUND: '+value.nativeURL);

                if(value.isFile && value.name.endsWith(SoundService.SOUNDFNPOSTFIX))
                {
                    this.sounds.unshift(value);
                }
            }
            list.forEach(f);
            this.refreshSounds();

        }).catch((error) => {
            this.onerror(error, '!initSounds ERR');
        })
    }
    public getSoundDir(withSoundsSubdir:boolean) : string
    {
        let dir:string = this.file.tempDirectory ? this.file.tempDirectory : this.file.documentsDirectory;
        if(!dir)
            dir = this.file.applicationStorageDirectory;
        if(!dir)
            dir = this.file.dataDirectory;
        if(withSoundsSubdir)
            dir +=  SoundService.SOUNDSUBDIR;
        return dir;
    }
    protected refreshSounds()
    {
        this.soundsSubject.next(this.sounds);
    }
    /**
    * @deprecated use observer
    */
    public getSounds()
    {
        return Promise.resolve(this.sounds);
    }
    public addSound(soundFileName:string) : void
    {
        //this.sounds.unshift(soundFileName);
        //this.events.publish('sounds:added', soundFileName);
        //this.refreshSounds();
        this.initSounds(true);
    }
    public removeSound(soundFileName:string) : void
    {
        this.file.removeFile(this.getSoundDir(true), soundFileName).then(removeResult => {
            if(!removeResult.success)
            {
                this.onerror(removeResult, '!removeSound ERR fn:'+soundFileName);
            }
            this.events.publish('sounds:deleted', soundFileName);
            this.initSounds(true);
        });
    }
    /**
    * @deprecated use observer
    */
    public getName()
    {
        return Promise.resolve(this.name);
    }
    public setName(name:string)
    {
        this.name = name;
        this.nameSubject.next(this.name);
        this.nativeStorage.setItem(SoundService.NAME, {value: this.name})
        .then(
            () => console.log(SoundService.NAME + ' saved.'),
            error => this.onerror(error, 'Error saving '+SoundService.NAME)
        );
    }
    public onerror(error, msg:string):void
    {
        if(msg)     console.error(msg);
        if(error)   console.error(error);
        this.errors = "ERR:"+error+" msg:"+msg+"\n";
        this.errors = "";
        if(msg)     this.errors += msg + "\n";
        if(error)   this.errors += (JSON.stringify(error)) + "\n";
        this.errorsSubject.next(this.errors);
    }
}
