//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyD13iYx0wk04S46tkOOk_GfQHJw7Eh1FEE",
      authDomain: "kwitter-f2c55.firebaseapp.com",
      databaseURL: "https://kwitter-f2c55-default-rtdb.firebaseio.com",
      projectId: "kwitter-f2c55",
      storageBucket: "kwitter-f2c55.appspot.com",
      messagingSenderId: "843847412798",
      appId: "1:843847412798:web:05c4b379fe7848235cf56f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("Username");
document.getElementById("username").innerHTML = "Welcome " + username + "!";

function add_room() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      })

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name -" + Room_names);
                  row = "<div class = 'room_names' id = " + Room_Names + " onclick = 'redirectToRoomName(this.id)'># " + Room_names + " </div> <hr>"
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}

getData();

function redirectToRoomName() {
      console.log("name");
      localStorage.setItem("room_name", names);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}