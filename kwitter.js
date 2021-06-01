function Add_User()
{
    var username = document.getElementById("user_name").value ;
    localStorage.setItem("Username" , username);
    window.location = "kwitter_room.html";
}
