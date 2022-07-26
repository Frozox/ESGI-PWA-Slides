import { initializeApp } from "firebase/app";
import {
    getDatabase,
    set,
    ref,
    push,
    serverTimestamp,
    remove,
    onChildAdded,
    onChildRemoved,
    onValue,
    update,
} from "firebase/database";
import {
    getAuth,
    createUserWithEmailAndPassword,
    setPersistence,
    browserLocalPersistence,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithRedirect,
    GithubAuthProvider
} from "firebase/auth";
import { Navigate } from "react-router-dom";

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

export async function addUserRealTimeBDD(email, password) {
    const user = auth.currentUser;
    push(ref(database, `/users`), {
        uid: user.uid,
        email: email,
        password: password,
        lastConnexion: serverTimestamp(),
    });
}

export async function signIn(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then(function () {
            const user = auth.currentUser;

            push(ref(database, `/users`), {
                uid: user.uid,
                email: email,
                password: password,
                lastConnexion: serverTimestamp(),
            });
        })
}

export function getAuthState(cb = () => { }) {
    onAuthStateChanged(auth, (user) => {
        if (user) return cb(user);
        cb(false);
    });
}

export function signInWithGithub() {
    const provider = new GithubAuthProvider();
    signInWithRedirect(auth, provider);
    addUserRealTimeBDDGithub();
}

export async function addUserRealTimeBDDGithub() {
    const user = auth.currentUser;
    push(ref(database, `/users`), {
        uid: user.uid,
        email: user.email,
        lastConnexion: serverTimestamp(),
    });
}

export function modifyDiaporama(diaporama_id) {
    const user = auth.currentUser;
    push(ref(database, `/edit/` + user.uid), {
        uid: user.uid,
        diaporama_id: diaporama_id,
        //slide: slide,
        lastModification: serverTimestamp(),
        isConnect: true,
    });
}

export function deleteEditDiaporama() {
    const user = auth.currentUser;
    const editUser = ref(database, `/edit/` + user.uid);
    remove(editUser);
}

export function createDiaporama() {
    const user = auth.currentUser;
    push(ref(database, `/diaporamas`), {
        uid_creator: user.uid,
        creationTime: serverTimestamp(),
        canModify: [user.uid],
        slide: [{ content: "" }],
        title: "My New Diaporama",
    });
}

export function getAllDiaporama(cb = () => { }) {
    let data = [];

    const refs = ref(database, '/diaporamas');

    onChildAdded(refs, (snapshot) => {
        data.push({
            key: snapshot.key,
            ...snapshot.val(),
        });
        //console.log(data);
        cb(data);
    });
}

export function databaseConnected() {
    const connectedRef = ref(database, ".info/connected");
    onValue(connectedRef, (snap) => {
        if (snap.val() === true) {
            console.log("connected");
        } else {
            console.log("not connected");
        }
    });
}

export function getSlideDiaporama(id, cb = () => { }) {
    let data = [];

    const refs = ref(database, `/diaporamas/${id}/slide`);

    onChildAdded(refs, (snapshot) => {
        data.push({
            key: snapshot.key,
            ...snapshot.val(),
        });
        cb(data);
    });
}

export function addNewSlide(id) {
    push(ref(database, `/diaporamas/${id}/slide`), {
        content: "",
    });
}

export function updateSlideContent(id, content, id_slide) {
    update(ref(database, `/diaporamas/${id}/slide/${id_slide}`), {
        content: content,
    });
}