var mainApp = {};
(function(){

	var firebase = app_firebase;
	var uid = null;

	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			// User is signed in.
			uid = user.uid;
			console.log("stay");
		} else {
			// No user is signed in.
				console.log("redirect");
				uid = null;
			window.location.replace("login.html");
		}
	});

	function logOut(){
		firebase.auth().signOut();
	}

	function messageHandler(err) {
		if(!!err){
			console.log(err);
		}else{
			console.log("Success");
		} 
	}

	function fnCreate(){
		var path = 'users/' + uid;
		var data = {
			name: "Luan",
			age: 27,
			message: "HELLOOOshdfosiahfkajsdhflksdjhfkjsdhfkjsd"
		}
		app_firebase.databaseApi.create(path, data, messageHandler);
	}
	function fnRead(){
		var path = 'users/' + uid;
		app_firebase.databaseApi.read(path, successFn, messageHandler);
		function successFn(snapShot) {
			if (!!snapShot && !!snapShot.val()) {
				console.log(snapShot.val());
			}else{
				console.log("Sem dados!");
			}
		}
	}

	function fnUpdate(){
		var path = 'users/' + uid;
		var data = {
			name: "Luan Estilizado",
			age: 18
		}
		app_firebase.databaseApi.update(path, data, messageHandler)
	}
	function fnDelete(){
		var path = 'users/' + uid;
		app_firebase.databaseApi.delete(path, messageHandler)
	}

	mainApp.Create = fnCreate;
	mainApp.Read = fnRead;
	mainApp.Update = fnUpdate;
	mainApp.Delete = fnDelete;
	mainApp.logOut = logOut;
})();
