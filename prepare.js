const muid = fbg.auth.currentUser.uid;
const real = [0,0];
const elPlayers = {};
fbg.signInAnonymously(fbg.auth).catch(error => console.error(error.message));
fbg.onValue(fbg.ref(fbg.database, 'data/thatIn'), (sp) => {
  const thid = sp._node.children_.root_.key;
  if (me != thid) {
    const el = document.createElement("div");
    el.id = thid;
    el.classList.add("players");
    el.style.backgroundColor = sp.child(thid).val();
    document.body.appendChild(el);
    window.waka = sp;
    fbg.onValue(fbg.ref(fbg.database, 'data/users/' + thid + '/pos'), (spm) => {
      el.style.transform = `translate(${spm[0]}px,${spm[1]}px)`;
    });
  }
});
fbg.onAuthStateChanged(fbg.auth, (user) => {
  if (user) {
    fbg.set(fbg.ref(fbg.database, 'data/users/' + user.uid), [0,0]);
    fbg.set(fbg.ref(fbg.database, 'data/thatIn/' + user.uid), myColor);
  } else {
    fbg.set(fbg.ref(fbg.database, 'data/thatIn/' + user.uid), false);
  }
});
analog.addEventListener("click", a => {
  switch (a.target.id) {
    case 'atasAnalog': real[1] -= 50; break;
    case 'kananAnalog': real[0] += 50; break;
    case 'bawahAnalog': real[1] += 50; break;
    case 'kiriAnalog': real[0] -= 50; break;
  }
  fbg.set(fbg.ref(fbg.database, 'data/users/' + me), real);
  playrs[me].style.transform = `translate(${real[0]}px,${real[1]}px)`;
});
(function() {
  const rName = ["red","green","blue","ivory","pink","olive","black","coral","fuchsia","teal","saddlebrown","tan"];
  const el = document.createElement("div");
  el.id = me;
  el.classList.add("players");
  el.style.backgroundColor = rName[Math.floor(Math.random()*12)];
  document.body.appendChild(el);
  elPlayers[muid] = el;
}());