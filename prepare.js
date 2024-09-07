const myColor = function() {
  const rName = ["red","green","blue","ivory","pink","olive","black","coral","fuchsia","teal","saddlebrown","tan"];
  return rName[Math.floor(Math.random()*12)];
}();
fbg.signInAnonymously(fbg.auth).catch(error => console.error(error.message));
fbg.onValue(fbg.ref(fbg.database, 'data/thatIn'), (sp) => {
  const thid = sp._node.children_.root_.key;
  const el = document.createElement("div");
  el.id = thid;
  el.className = "players";
  el.style.backgroundColor = sp.child(thid).val();
  window.waka = sp;
  fbg.onValue(fbg.ref(fbg.database, 'data/users/' + thid + '/pos'), (spm) => {
    
  });
});
fbg.onAuthStateChanged(fbg.auth, (user) => {
  if (user) {
    fbg.set(fbg.ref(fbg.database, 'data/users/' + user.uid), [0,0]);
    fbg.set(fbg.ref(fbg.database, 'data/thatIn/' + user.uid), myColor);
  } else {
    fbg.set(fbg.ref(fbg.database, 'data/thatIn/' + user.uid), false);
  }
});