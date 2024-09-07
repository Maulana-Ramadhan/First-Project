const myColor = function() {
  const rName = ["red","green","blue","ivory","pink","olive","black","coral","fuchsia","teal","saddlebrown","tan"];
  return rName[Math.floor(Math.random()*12)];
}();
fbg.signInAnonymously(fbg.auth).catch(error => console.error(error.message));
fbg.onValue(fbg.ref(fbg.database, 'data/thatIn'), (sp) => {
  console.log(sp);
});
fbg.onAuthStateChanged(fbg.auth, user => {
  if (user) {
    fbg.set(fbg.ref(fbg.database, 'data/thatIn/' + user.uid), true);
    fbg.set(fbg.ref(fbg.database, 'data/users/' + user.uid), {x:0,y:0,myColor});
  } else {
    fbg.set(fbg.ref(fbg.database, 'data/thatIn/' + user.uid), false);
  }
});