@echo off
echo #######################################
echo ###### Installing all dependencys #####
echo #######################################

setlocal
:PROMPT
SET /P AREYOUSURE=Are you sure you want to proceed (Y/[N])?
IF /I "%AREYOUSURE%" NEQ "Y" GOTO END

echo Installing bower dependencies
cd htdocs
call bower install angular

echo Installing npm dependencies
cd ..
call npm install

echo #######################################
echo ######           END             ######
echo #######################################
echo now we go on and starting the client application
:END
endlocal
@pause
start-client