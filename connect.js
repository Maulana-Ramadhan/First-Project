console.log("walaw");
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getDatabase, ref, set, get, onValue, child, push, update } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyAY2bOvEZnMlNOSuJAHjHXA38LXyca1qG0",
    authDomain: "myproject-fef24.firebaseapp.com",
    databaseURL: "https://myproject-fef24-default-rtdb.firebaseio.com",
    projectId: "myproject-fef24",
    storageBucket: "myproject-fef24.appspot.com",
    messagingSenderId: "330858606744",
    appId: "1:330858606744:web:d36923fdbb80e5932020ed",
    measurementId: "G-CSFLLP262Z"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app);

signInAnonymously(auth)
.then(pass => {
  const dataRef = ref(database, 'data/' + pass.user.uid);
  console.log(pass);
  function write(userId, name, email, imageUrl) {
    set(ref, {
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }
  onValue(ref(database, 'data/position' + pass.user.uid + '/starCount'), (snapshot) => {
    const data = snapshot.val();
  });
  function read(url) {
    get(child(dbRef, `users/${url}`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }
  const newPostKey = push(child(ref(database), 'data'));
  console.log(newPostKey);
})
.catch(error => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.error(errorMessage);
});

onAuthStateChanged(auth, user => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
  } else {}
});
