import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC_h0CNrpEgO_RpvGn81j0ogBtQ2YK6pKA",
    authDomain: "react-hooks-blog-cfcd7.firebaseapp.com",
    projectId: "react-hooks-blog-cfcd7",
    storageBucket: "react-hooks-blog-cfcd7.appspot.com",
    messagingSenderId: "37874316874",
    appId: "1:37874316874:web:4b7a62ff830fd05bbf58b3"
};
// Initialize Firebase
// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();