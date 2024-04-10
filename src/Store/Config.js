import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA9ZSPcY_U21LZ65YVavrwRFCxEr9NWFxo",
  authDomain: "my-market-89d91.firebaseapp.com",
  databaseURL: "https://my-market-89d91-default-rtdb.firebaseio.com",
  projectId: "my-market-89d91",
  storageBucket: "my-market-89d91.appspot.com",
  messagingSenderId: "1044176249456",
  appId: "1:1044176249456:web:9fa1832de0668f8e390ab5",
};

firebase.initializeApp(firebaseConfig);

export const ProductDatabase = firebase.database().ref();
export const storage = firebase.storage();
