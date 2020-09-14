import firebase from "firebase";

const firebaseConfig = {
	
	//Your Firebase App Config from https://console.firebase.google.com/

};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

