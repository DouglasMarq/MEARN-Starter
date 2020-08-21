# MEARN-Starter
Ready-to-Code template

### Server Based on Marcelo Guimarães da Silva api-rest
+ **[M-Guimaraes Api-Rest Repo](https://github.com/M-Guimaraes/api-rest)**: Please be sure you have followed him and starred his repo

### Folder structure

+ **/src**: *Angular app created using ```angular/cli```.*
+ **/repo**: *Contains mongoose Schemas*
+ **/server**: *Files to be used on server-side*
    * **/routes**: *Declared routes to be imported on ```index.js```*
+ **/index.js**: *File that is used to start the node server*


### Prerequisites

+ **[Node.js & npm](https://nodejs.org/en/download/)**: *Please be sure you have installed Node.js and npm module on your computer before running the application*
+ **[MongoDB](https://www.mongodb.com/download-center)**: *Download & Install MongoDB, and make sure it's running on the default port (27017).*
+ **[AngularCLI](https://cli.angular.io/)**: *Is used to build front-end application.*


### Usage

+ Download this project on your computer
+ Be sure you have started MongoDB service before running the application
+ Navigate on project folder 
+ Run ```ng build``` on here to generate Angular necessary files. Output files are by default created on ```/dist``` subfolder
+ Now run ```node index.js``` This is the last step and if everything goes right, server will start listening for requests
+ You can open your browser and navigate to localhost:3000 to see if application works
