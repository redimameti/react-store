import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBnLwEt0m5lzGhTbYkvcPeSgm7hgBYYfQ8",
	authDomain: "wingtip-shoes-dc4cd.firebaseapp.com",
	projectId: "wingtip-shoes-dc4cd",
	storageBucket: "wingtip-shoes-dc4cd.appspot.com",
	messagingSenderId: "116243243237",
	appId: "1:116243243237:web:be5480d71909c44a19340c",
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const firestore = firebase.firestore();
export default firestore;
