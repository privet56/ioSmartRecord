cls
rem set PATH=%PATH%;%CD%;%~dp0;%~dp0\Scripts
start http://localhost:9000/doc.htm
..\ppwwyyxx-speaker-recognition\PythonAnaconda2\python -m SimpleHTTPServer 9000
pause
