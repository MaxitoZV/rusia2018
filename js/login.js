
var config = {
  apiKey: "AIzaSyC9Defk0oP7ZQOu8wfrrlQIzE96pZbm1g0",
  authDomain: "polla2018v1.firebaseapp.com",
  databaseURL: "https://polla2018v1.firebaseio.com",
  projectId: "polla2018v1",
  storageBucket: "polla2018v1.appspot.com",
  messagingSenderId: "823725769579"
};
firebase.initializeApp(config);


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    app.sinLog=false;
    app.usuario={
      nombre:user.displayName,
      mail:user.email,
      foto:user.photoURL,
      id:user.uid};
  } else {
    app.sinLog=true;
  }
});

function login() {
  var provider = new firebase.auth.GoogleAuthProvider();
  try {
    firebase.auth().signInWithRedirect(provider);

  } catch (e) {
      console.log("Erroooooor");
  } finally {

  }
}

function onLoad() {
  document.getElementById("app").style.display = "block";
  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      var token = result.credential.accessToken;
    }
    var user = result.user;
  }).catch(function(error) {
    // Handle Errors here.
    console.log(error);
    var errorCode = error.code;
    var errorMessage = error.message;
    app.err={flag:true,code:error.code, mesj:error.message};
    console.log(app.err);
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

  // ...
  });

}

function salir() {
  firebase.auth().signOut().then(function() {
    }, function(error) {
      console.log(error);
      // An error happened.
    });
}
