import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey:"AIzaSyC1gujNfFh6QtjYIwKVf9YbC9OzOS0BzHk",
    authDomain: "esp-32-iot-f1178.firebaseapp.com",
    databaseURL: "https://esp-32-iot-f1178-default-rtdb.firebaseio.com",
    projectId: "esp-32-iot-f1178",
    storageBucket: "esp-32-iot-f1178.appspot.com",
    messagingSenderId: "532738643762",
    appId: "1:532738643762:web:802fd924a4519fc792e92b"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);


export { app };
