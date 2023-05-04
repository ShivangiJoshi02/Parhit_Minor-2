import {getApp, getApps, initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

  const firebaseConfig = {
    apiKey: "AIzaSyAN-S4QiDdgG6CR3Px4e8IxBmVu6VK3B34",
    authDomain: "parhitv3.firebaseapp.com",
    databaseURL: "https://parhitv3-default-rtdb.firebaseio.com",
    projectId: "parhitv3",
    storageBucket: "parhitv3.appspot.com",
    messagingSenderId: "295634131952",
    appId: "1:295634131952:web:ff773e19a162a47ae21b35",
    measurementId: "G-Z81EBHYZZW"
  };

  const app = getApps.Length >0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app);


  export {app, firestore, storage};