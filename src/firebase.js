import firebase from "firebase"


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBpfq2WnKbvdG_ZEkz-gPjAw-E4N6H3TUU",
    authDomain: "clone-6fd33.firebaseapp.com",
    projectId: "clone-6fd33",
    storageBucket: "clone-6fd33.appspot.com",
    messagingSenderId: "1084356695433",
    appId: "1:1084356695433:web:b22bd54c20795f2233fd58"
  })

const auth=firebase.auth()
const db= firebaseApp.firestore()

const storage= firebase.storage()

export {db,auth,storage}
export default db