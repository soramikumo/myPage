import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyACNdDziR-vkA5_MWkrcPkNA9R-6lkh9xU",
    authDomain: "line-demo-190ce.firebaseapp.com",
    projectId: "line-demo-190ce",
    storageBucket: "line-demo-190ce.appspot.com",
    messagingSenderId: "166946244649",
    appId: "1:166946244649:web:3fb0729443aa7850877438"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth}