import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

const config = {
    apiKey: "AIzaSyCaZhd23S0WsM-q6ybWJKdRrQE_eWVSAq0",
    authDomain: "netflix-50f2b.firebaseapp.com",
    databaseURL: "https://netflix-50f2b.firebaseio.com",
    projectId: "netflix-50f2b",
    storageBucket: "netflix-50f2b.appspot.com",
    messagingSenderId: "273763528157",
    appId: "1:273763528157:web:0fbe4da8d3e667b6549a34",
    measurementId: "G-8B0D5XBB44"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase }