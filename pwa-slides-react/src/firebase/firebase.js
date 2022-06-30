import { initializeApp } from "firebase/app";
import {
    getDatabase,
    set,
    ref,
    push,
    serverTimestamp,
    onChildAdded,
    onChildRemoved,
    onValue,
} from "firebase/database";
import {
    getAuth,
    createUserWithEmailAndPassword,
    setPersistence,
    browserLocalPersistence,
    onAuthStateChanged,
    signInWithEmailAndPassword
} from "firebase/auth";

//import firebaseConfig from './../../firebase.json';

const firebaseConfig = {
    apiKey: "AIzaSyA52bpCwKv2e5OouM8ZGZnDmwx2r71iTJE",
    authDomain: "myges-slide.firebaseapp.com",
    databaseURL: "https://myges-slide-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "myges-slide",
    storageBucket: "myges-slide.appspot.com",
    messagingSenderId: "868992779284",
    appId: "1:868992779284:web:8f167450be365c15255301"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);
console.log(auth);

export function getUser() {
    return onAuthStateChanged(auth, (user) => {
        return user;
    });
}

export async function createUser(email, password) {
    return setPersistence(auth, browserLocalPersistence).then(() => {
        return createUserWithEmailAndPassword(auth, email, password);
    });
}

export async function addUserRealTimeBDD(email, password){
    const user = auth.currentUser;
    console.log(user);
    push(ref(database, `/users`), {
        uid: user.uid,
        email: email,
        password: password,
        lastConnexion: serverTimestamp(),
    });
}

export async function signIn(email, password) {
    signInWithEmailAndPassword(auth, email, password)
    .then(function() {
        const user = auth.currentUser;

        push(ref(database, `/users`), {
            uid: user.uid,
            email: email,
            password: password,
            lastConnexion: serverTimestamp(),
        });
    })
}

export function getAuthState(cb = () => {}) {
    onAuthStateChanged(auth, (user) => {
      if (user) return cb(user);
      cb(false);
    });
  }