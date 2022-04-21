import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB3cZncYx6aRfVbLfO1xgO-y3mdo1FT5X0",
	authDomain: "react-shop-7f48f.firebaseapp.com",
	projectId: "react-shop-7f48f",
	storageBucket: "react-shop-7f48f.appspot.com",
	messagingSenderId: "77614059527",
	appId: "1:77614059527:web:b45a3cfcd40e1de9631aa2",
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const firestore = firebase.firestore();
export default firestore;
