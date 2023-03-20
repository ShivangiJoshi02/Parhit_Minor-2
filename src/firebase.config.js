import {getApp, getApps, initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyBwe0Z8-QsQ4kzfURs549AkiCeMw51EVbc",
    authDomain: "restaurant-website-d6e3b.firebaseapp.com",
    databaseURL: "https://restaurant-website-d6e3b-default-rtdb.firebaseio.com",
    projectId: "restaurant-website-d6e3b",
    storageBucket: "restaurant-website-d6e3b.appspot.com",
    messagingSenderId: "451760656615",
    appId: "1:451760656615:web:a76b8e85f151b65a155242"
  };

  const app = getApps.Length >0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage};