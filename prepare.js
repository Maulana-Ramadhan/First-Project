fbg.onAuthStateChanged(auth, user => {
  if (user) {
    onValue(ref(database, `data/users/${pass.user.uid}/name`), (sp) => {
      playersName[pass.user.uid] = sp.val();
    });
  } else {}
});

fbg.signInAnonymously(auth).then(pass => {
  
}).catch(error => {
  
});