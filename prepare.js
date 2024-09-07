fbg.signInAnonymously(fbg.auth).catch(error => console.error(error.message));
fbg.onAuthStateChanged(fbg.auth, user => {
  fbg.set(fbg.ref(fbg.database, 'data/users/' + user.uid), [0,0]);
});