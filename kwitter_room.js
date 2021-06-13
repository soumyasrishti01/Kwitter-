  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
        apiKey: "AIzaSyC5v9mKQ-_LZp6KF_lJ9952D1TxRJ_pNcY",
        authDomain: "rocky-eagle.firebaseapp.com",
        databaseURL: "https://rocky-eagle-default-rtdb.firebaseio.com",
        projectId: "rocky-eagle",
        storageBucket: "rocky-eagle.appspot.com",
        messagingSenderId: "344512378706",
        appId: "1:344512378706:web:70c0606d3e625b36b82c8b",
        measurementId: "G-5YSJ92766R"
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom() {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose: "adding room name"
        });
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
                    console.log("Room Name - " + Room_names);
                    row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                    document.getElementById("output").innerHTML += row;
                    //End code
              });
        });
  }
  getData();

  function redirectToRoomName(name) {
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "kwitter_room.html";
  }

  function logout() {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location = "index.html";
  }