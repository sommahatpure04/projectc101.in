// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAQISxqpde7CFDYaO5IEnEuJNTuiV3ssbM",
    authDomain: "lets-chat-6b7fd.firebaseapp.com",
    databaseURL: "https://lets-chat-6b7fd-default-rtdb.firebaseio.com",
    projectId: "lets-chat-6b7fd",
    storageBucket: "lets-chat-6b7fd.appspot.com",
    messagingSenderId: "1057805977683",
    appId: "1:1057805977683:web:a8240243aa7ffca4af1ea6"
};
//ADD YOUR FIREBASE LINKS HERE
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}