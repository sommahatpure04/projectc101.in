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

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);

      window.location = "chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
}

function logout() 
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
        window.location = "index.html";
}
