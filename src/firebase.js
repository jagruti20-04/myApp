// Filename - firebase.js

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCE6qhMWPs6VAFKdg8N0WlbY7Vj9npfWVM",
    authDomain: "<my-app-1fd18>.firebaseapp.com",
    projectId: "my-app-1fd18",
    storageBucket: "<my-app-1fd18>.appspot.com",
    messagingSenderId: "257679825312",
    appId: "1:257679825312:web:0f62f81e194946a90b6cc5"
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export default auth;
