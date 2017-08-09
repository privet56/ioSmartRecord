cls
rem do it ONCE: ionic cordova build --release android
rem needs Java 8.x
SET JAVA_HOME=c:\android\jdk1.8.0.win32
SET JAVA_OPTS=%JAVA_OPTS% -Xms512M -Xmx1024M
set JAVA_OPTIONS=%JAVA_OPTS%
set _JAVA_OPTIONS=%JAVA_OPTS%
SET ANDROID_HOME=c:\android\sdk
set ANDROID_SDK_ROOT=%ANDROID_HOME%
set GRADLE_HOME=c:\android\AndroidStudio\gradle\gradle-3.2
rem SET ANDROID_NDK_HOME=c:\android\android-ndk-r10e-windows-x86
SET ANT_EXECUTABLE=C:\android\apache-ant-1.9.5\bin\ant.bat
SET PATH=%JAVA_HOME%\bin;%ANDROID_HOME%\bin;%ANDROID_HOME%\build-tools\25.0.3;%ANDROID_HOME%\emulator;%ANDROID_HOME%\emulator\bin;%ANDROID_HOME%\tools;%ANDROID_HOME%\tools\bin;%GRADLE_HOME%;%GRADLE_HOME%\bin;%PATH%;

rem if 'run' -> START FIRST: c:\android\sdk\emulator\startemulator.bat
rem --device                                    // optional flag
rem ionic build --release --prod android        //--prod destroys css
rem ionic run --release --prod android          //--prod destroys css
cls
rem BUILD:
rem ionic build --release --prod android
rem RUN:
ionic cordova run --release android
