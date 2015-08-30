echo 'Now installing bower and so one'
pause
call npm install -g bower
cd htdocs
call bower install angular
cd ..
call npm install
echo '--end--'
pause
