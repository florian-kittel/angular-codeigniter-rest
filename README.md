# angular-codeigniter-rest
Seed Template for an AngularJS App with a RESTful Backend based on Codeigniter. Ready to start coding!

Version: 0.1


# Running a WAMP (Windows, Apache, MySQL, and PHP) local
When you start developing, you oft don't have a live-server to test or you don't want to develop on it. To use the Angular-Codeigniter-REST Template
you can use any kind of PHP/MySQL Webserver. Here is an easy way to get started if you don't have a webserver localy installed.

## 1. Install WAMP 
You can download it from http://www.wampserver.com/en/. It is a Windows Installer. If you have more than one Harddrives, you can chose another than your c: drive.
Install it in the root if possible, than it is easier to find.

## 2. Link to your Development folder
When you don't want to store your development files inside the www-folder of the wamp server, you can create a virtual link.

Lets say you have installed your wamp-server on the d: drive, then you want to have this link inside d:\wamp\www and you have your development directory on d:\projects\my-new-app.
We want to trigger the htdocs file, like we configure it on the live-server later.

Open an console (cmd) with admin rights and execute this:

mklink /d "D:\wamp\www\codeigniterangularjs" "D:\projects\my-new-app\htdocs" 

Now you have a link inside the www folder of your wamp and the trick is, that it works like your folder are realy in there.

## 3. Create a virtual host
With the Angular-Codeigniter-REST Template you will have two virtual servers running for development. If you later go in live mode, then all runs on your webserver.
At first we must edit the httpd.conf.

Go to D:\wamp\bin\apache\apache2.4.9\conf (or where ever you installed wamp on your maschine) and open the httpd.conf file with an Editor. At the end of the file stands something
like this:
#IncludeOptional "d:/wamp/vhosts/*"
Include "d:/wamp/alias/*"

And this is what we want to enable. So add this:

#IncludeOptional "d:/wamp/vhosts/*"
Include "d:/wamp/alias/*"
Include "d:/wamp/vhosts/*"

Now we go in the folder d:/wamp/vhosts/ and create an new file called codeigniterangular.conf and add the following content:

<VirtualHost 127.0.0.2:80>
    DocumentRoot "D:/wamp/www/codeigniterangularjs"
    ServerName codeigniterangularjs.server
</VirtualHost>

If you want, you can also add the virtal host name to your local windows hosts. 

Save the file and restart the server (if its running) or start the server first time with the wampmanager.exe in the wamp directory. When you open a webbrowser and