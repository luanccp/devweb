var app_firebase = {};

(function(){

 // Your web app's Firebase configuration
 var firebaseConfig = {
   apiKey: "AIzaSyB922bUVUc28QaFSwNbeMw-TpiEvZPw0kk",
   authDomain: "js-project-2dbe2.firebaseapp.com",
   databaseURL: "https://js-project-2dbe2.firebaseio.com",
   projectId: "js-project-2dbe2",
   storageBucket: "",
   messagingSenderId: "71281397002",
   appId: "1:71281397002:web:7019a68e9c19488b"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 app_firebase = firebase;

 function fnCreate(path, body, callBack) {
   if(!path || !body) return;
   app_firebase.database().ref(path).set(body, callBack);
 }

  function fnRead(path, succsessFunction, errorFunction) {
    if(!path || !succsessFunction || !errorFunction) return;
    app_firebase.database().ref(path).once('value').then(succsessFunction, errorFunction);
  }

 function fnUpdate(path, body, callBack) {
  if(!path || !body) return;
  app_firebase.database().ref(path).update(body), callBack;
}

function fnDelete(path, callBack) {
  if(!path) return;
  app_firebase.database().ref(path).remove(callBack);
}

 app_firebase.databaseApi ={
   create : fnCreate,
   read   : fnRead,
   update : fnUpdate,
   delete : fnDelete
 }
})();