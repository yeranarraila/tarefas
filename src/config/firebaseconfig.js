import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBThJ1AKtojqDKGb1kyqTEAe0xALlSNfyQ",
    authDomain: "tarefasrecode.firebaseapp.com",
    projectId: "tarefasrecode",
    storageBucket: "tarefasrecode.appspot.com",
    messagingSenderId: "921818937021",
    appId: "1:921818937021:web:b81db9244be06151e7e9d4"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

//export { firebase };

const database = firebase.firestore();
export default database;
