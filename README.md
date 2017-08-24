## ioSmartRecord: IONIC 3 App; recording & maintaining voice

## UI
![smartrecord](https://raw.githubusercontent.com/privet56/ioSmartRecord/master/lexngclient.on.smartphone.gif)

### Hints
#### use ionic g page {mypage} , because it generates a new lazy-loaded NgModule
#### debug with chrome://inspect & ionic cordova emulate android --livereload

### //TODO:

. styles / images nicer
```
  1.1. header with partially opaque background, with nice colors
  1.2. home pic with better transparency, eg. with gimp
  1.3. sound list with better background gradient, with nice colors
  1.4. ...
  UNFINISHED
```

. recherche: why does --prod destroy some styles?
  UNFINISHED

. implement soundService with media & filesystem plugins
```
  used native cordova/ioni plugins:
  $ ionic cordova plugin add cordova-plugin-nativestorage
  $ npm install --save @ionic-native/native-storage
  $ ionic cordova plugin add cordova-plugin-media
  $ npm install --save @ionic-native/media
  $ ionic cordova plugin add cordova-plugin-file
  $ npm install --save @ionic-native/file
  $ ionic cordova plugin add cordova-plugin-media-capture
  $ npm install --save @ionic-native/media-capture
 ```

. conversation tab

. settings tab: configure min & max recording length

. soundlist: track by name & animation
```
  partly DONE:
  'ngfor' css class works, but do better with @animations
```

. record: use wav & MONO
```
  //https://ionicframework.com/docs/native/media-capture/
  //https://github.com/keenan/cordova-phonegap-audio-encode
  //https://github.com/emj365/cordova-plugin-audio-recorder-api
  //https://github.com/SidneyS/cordova-plugin-nativeaudio
  //https://github.com/remoorejr/cordova-plugin-media-with-compression  //m4a 
  UNFINISHED(because should be tested on DEVICE)
```

. name area: factor out into its own component

. git: -UI -pic
