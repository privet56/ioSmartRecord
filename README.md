## ioSmartRecord: IONIC 3 App; recording & maintaining voice

## UI
![smartrecord](https://raw.githubusercontent.com/privet56/ioSmartRecord/master/lexngclient.on.smartphone.gif)

### //TODO:

. styles / images nicer
    1.1. header with partially opaque background, with nice colors
    1.2. home pic with better transparency, eg. with gimp
    1.3. sound list with better background gradient, with nice colors
    1.4. ...
    UNFINISHED

. create apk and copy it to lexng-client-for-android-apilevel-26.apk

. recherche: why does --prod destroy some styles?
    UNFINISHED

. implement soundService with media & filesystem plugins
	used native cordova/ioni plugins:
    $ ionic cordova plugin add cordova-plugin-nativestorage
    $ npm install --save @ionic-native/native-storage
    $ ionic cordova plugin add cordova-plugin-media
    $ npm install --save @ionic-native/media
    $ ionic cordova plugin add cordova-plugin-file
    $ npm install --save @ionic-native/file

. remove debug <textarea>

. conversation tab

. settings tab: configure min & max recording length

. soundlist: track by name & animation
	partly DONE:
	'ngfor' css class works, but do better with @animations

. replace onIonViewEnter code into ngOnInit
    DONE

. soundList: show size

. soundService: use wav & MONO

. name area: factor out into its own component

. rename pipe to Fn2Ts
    DONE

. onPlaySound: just stop if same(=now playing) sound clicked again

. replace About icon

. when -git: -UI -pic
