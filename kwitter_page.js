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
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: username,
        Message: msg,
        likes: 0
    });
    document.getElementById("msg").value = "";
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                console.log(firebase_message_id);
                console.log(message_data);
                Name = message_data("name");
                message = message_data('message');
                likes = message_data('likes');
                name_with_tag = "<h4>" + Name + "<img src = 'user_tick' src = 'tick.png'</h4>";
                message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                like_button = "<button class= 'btn btn_warning' id=" + firebase_message_id + "value=" + like + " onclick='updateLike(this.id)'>";
                span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Like :" + like + "</span></button><hr>";
                row = name_with_tag + message_with_tag + like_button + span_with_tag;
                document.getElementsById("output").innerHTML += row;
            }
        });
    });
}
getData();

function updateLike() {
    console.log("clicked on like button -" + message_id);
    button_id = message_id;
    likes = document.getElementsById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);
    firebase.database().ref(room_name).child(message_id).update({
        like: updated_likes
    });
}



function logout() {
    localStorage.removeItem("User_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}