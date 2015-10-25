@echo off
echo #######################################
echo ###### Installing all dependencys #####
echo #######################################

setlocal
:PROMPT
SET /P AREYOUSURE=Are you sure you want to proceed (Y/[N])?
IF /I "%AREYOUSURE%" NEQ "Y" GOTO END

echo Installing npm dependencies
call npm install

::echo Installing bower dependencies
mkdir htdocs
::cd htdocs
::call bower install angular
::call bower install angular-route
::cd ..

echo #######################################
echo ######           END             ######
echo #######################################
echo starting the client application...
:END
endlocal
@pause
start-client