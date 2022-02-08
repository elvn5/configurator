import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCyB43RPP6uQ4Btqlg_TGinQ5Y2_uLUyno",
  authDomain: "configurator-5e604.firebaseapp.com",
  databaseURL: "https://configurator-5e604-default-rtdb.firebaseio.com",
  projectId: "configurator-5e604",
  storageBucket: "configurator-5e604.appspot.com",
  messagingSenderId: "1038634944043",
  appId: "1:1038634944043:web:6a857641504aa81d388c6e",
  measurementId: "G-BJCZCQK97Y"
  // apiKey: process.env["REACT_APP_API_KEY"],
  // authDomain: process.env["REACT_APP_AUTH_DOMAIN"],
  // databaseURL: process.env["REACT_APP_DATABASE_URL"],
  // projectId: process.env["REACT_APP_PROJECT_ID]"],
  // storageBucket: process.env["REACT_APP_STORAGE_BUCKET"],
  // messagingSenderId: process.env["REACT_APP_MESSAGING_SENDER_ID"],
  // appId: process.env["REACT_APP_APP_ID"],
  // measurementId: process.env["REACT_APP_MEASUREMENT_ID"],
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {
  app
};
