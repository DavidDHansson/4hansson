import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyByj9ZccNKUlHYK2rkRvbYavOnJUoDPmHA",
    authDomain: "hansson-4.firebaseapp.com",
    databaseURL: "https://hansson-4.firebaseio.com",
    projectId: "hansson-4",
    storageBucket: "hansson-4.appspot.com",
    messagingSenderId: "870517585908",
    appId: "1:870517585908:web:e588a98b33bb4e2b656ba1",
    measurementId: "G-57QYPPMYRG"
};

const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;