# MEARN-Starter
Ready-to-Code template with Angular 10 OR React 16

## Folder structure

### Angular 10
+ **client-angular/src**: *Angular app created using ```angular/cli```.*
+ **client-angular/index.js**: *File that is used to start the node server*

### React.js
+ **client-react/src**: *React app created using ```npx create-react-app```.*
+ **client-react/src/index.js**: *File that is used to start the node server*

### Typescript Back-end
+ **server/src/index.ts**: *File that is used to start the node server*


## Prerequisites

+ **[Node.js & npm](https://nodejs.org/en/download/)**: *Please be sure you have installed Node.js and npm module on your computer before running the application*
+ **[MongoDB](https://www.mongodb.com/download-center)**: *Download & Install MongoDB, and make sure it's running on the default port (27017).*
+ **[Typescript](https://www.typescriptlang.org/)**: *Is used to build back-end application.*
+ **[AngularCLI](https://cli.angular.io/)**: *Is used to build front-end Angular application.*
### or
+ **[React](https://reactjs.org/)**: *Is used to build front-end React application.*


## Usage

### Angular
+ Clone this project on your computer
+ Navigate on project folder
+ Run ```ng build``` on here to generate Angular necessary files. Output files are by default created on ```/dist``` subfolder
+ Now run ```node index.js``` This is the last step and if everything goes right, server will start listening for requests
+ You can open your browser and navigate to localhost:3000 to see if application works

### React
+ Clone this project on your computer
+ Navigate on project folder
+ Run ```npm run start``` on here to start React as Developer Mode.
+ You can open your browser and navigate to localhost:3000 to see if application works

### Typescript
+ Clone this project on your computer
+ Be sure you have started MongoDB service before running the application
+ Navigate on project folder
+ Run ```npm run start``` on here to Transpile TS to JS and start the server.
+ You can open now send a Post request to http://localhost:3000/api/createRoute with username, password and email.
