# angular-codeigniter-rest
Seed Template for an AngularJS App with a RESTful Backend based on Codeigniter. Ready to start coding!

Version: 0.1.2 | 2015-10-25

# Running a WAMP (Windows, Apache, MySQL, and PHP) local
When you start developing, you oft don't have a live-server to test or you don't want to develop on it. To use the Angular-Codeigniter-REST Template you can use any kind of PHP/MySQL Webserver. Here is an easy way to get started if you don't have a webserver localy installed.

## 1. Install WAMP
You can download it from [http://www.wampserver.com/en/](http://www.wampserver.com/en/). It is a Windows Installer. If you have more than one Harddrives, you can chose another than your c: drive. Install it in the root if possible, than it is easier to find.

## 2. Link to your Development folder
When you don't want to store your development files inside the www-folder of the wamp server, you can create a virtual link.

Lets say you have installed your wamp-server on the d: drive, then you want to have this link inside d:\wamp\www and you have your development directory on d:\projects\my-new-app. We want to trigger the htdocs file, like we configure it on the live-server later.

Open an console (cmd) with admin rights and execute this:

```
mklink /d "D:\wamp\www\codeigniterangularjs" "D:\projects\my-new-app\htdocs"
```

Now you have a link inside the www folder of your wamp and the trick is, that it works like your folder are realy in there.

## 3. Create a virtual host
With the Angular-Codeigniter-REST Template you will have two virtual servers running for development. If you later go in live mode, then all runs on your webserver. At first we must edit the httpd.conf.

Go to D:\wamp\bin\apache\apache2.4.9\conf (or where ever you installed wamp on your maschine) and open the httpd.conf file with an Editor. At the end of the file stands something like this:

```
#IncludeOptional "d:/wamp/vhosts/*"
Include "d:/wamp/alias/*"
```

And this is what we want to enable. So add this:

```
#IncludeOptional "d:/wamp/vhosts/*"
Include "d:/wamp/alias/*"
Include "d:/wamp/vhosts/*"
```

Now we go in the folder d:/wamp/vhosts/ and create an new file called codeigniterangular.conf and add the following content:

```
<VirtualHost 127.0.0.4:80>
    DocumentRoot "D:/wamp/www/codeigniterangularjs"
    ServerName codeigniterangularjs.server
</VirtualHost>
```

Save the file.

If you want, you can also add the virtal host name to your local windows hosts.

To use the apache mod_rewirte module, you have to activate it.
#. Click on the WAMP icon in your taskbar and open the wamp tray menu.
#. Go to Apache > Apache Modules
#. Activate the mod_rewirte by selecting it (since version 2.5 it is named as rewrite module)

If the server not automatically restart the server, do it manually by selecting `Restart all Services` on the WAMP tray menu.

## 4. Install NPM packages
Of course, to run your project local we will use grunt. If your are not familiar with it, it's no problem. Follow the steps.
#. Install node.js if it isn't installed on your system [https://nodejs.org/](https://nodejs.org/)
#. Start a command line interface like `cmd` or `node.js command promt`
#. navigate to your project directory, for example `cd D:/projectfolder/` and run `install`

## 5. Run project
After all npm dependencies are successfull installed, you can use the two Batch-Files inside your projectfolder (`start-client.bat` and `start-server.bat`). Now you can start to develop your application. It will be automatically reload, if you made a change inside your projectfolder.


## Changelog
*2015-10-25*
* Extend readme
* extend install.bat
* added unistall.bat
* add SASS compiling configuration and folder in client directory
* change gitignore for htdocs files