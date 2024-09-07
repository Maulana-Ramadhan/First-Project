const rName = ["red","green","blue","ivory","pink","olive","black","coral","fuchsia","teal","saddlebrown","tan"];

fbg.signInAnonymously(fbg.auth).catch(error => console.error(error.message));
fbg.onAuthStateChanged(fbg.auth, user => {
  fbg.set(fbg.ref(fbg.database, 'data/users/' + user.uid), [0,0,rName[Math.floor(Math.random()*12)]]);
});