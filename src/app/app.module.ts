import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//import {Http} from '@angular/http';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { SoundService } from './services/SoundService';
import { FnPipe } from './services/FnPipe';

import { AboutPage } from '../pages/about/about';
import { RecordPage } from '../pages/record/record';
import { ConversationPage } from '../pages/conversation/conversation';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SoundList } from '../app/lexng-soundlist/lexng-soundlist';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';
import { Media } from '@ionic-native/media';
import { File } from '@ionic-native/file';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    RecordPage,
	ConversationPage,
    HomePage,
    TabsPage,
    SoundList,
    FnPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    RecordPage,
	ConversationPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SoundService,
    NativeStorage,
    File,
    Media,
    //Http, //-> Uncaught (in promise): Error: No provider for ConnectionBackend! Error: No provider for ConnectionBackend! at injectionError
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
