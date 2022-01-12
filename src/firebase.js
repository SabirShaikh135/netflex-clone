// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyA0ilIt0c_gdlMV3V7jyt3XG1VDgfkI8_A",
    authDomain: "netflex-clone-a7267.firebaseapp.com",
    projectId: "netflex-clone-a7267",
    storageBucket: "netflex-clone-a7267.appspot.com",
    messagingSenderId: "218069298079",
    appId: "1:218069298079:web:8286a3cca051213cf26baa",
    measurementId: "G-S5YR50NWEN"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db =firebase.firestore();
  const auth = firebase.auth(); 

  export {auth}
  export default db