const firebaseConfig = {
    apiKey: "AIzaSyBZsqhaOCDMVHPjfNusjSXiW0rLrfUPJ3s",
    authDomain: "kwitter-a5eec.firebaseapp.com",
    databaseURL: "https://kwitter-a5eec-default-rtdb.firebaseio.com",
    projectId: "kwitter-a5eec",
    storageBucket: "kwitter-a5eec.appspot.com",
    messagingSenderId: "369363676316",
    appId: "1:369363676316:web:bac89374d965da41669159"
  };
  firebase.initializeApp(firebaseConfig)
  user_name=localStorage.getItem("user_name")
  room_name=localStorage.getItem("room_name")

  function send() {
    msg=document.getElementById("msg").value 
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    })
    document.getElementById("msg").value=" "
  }