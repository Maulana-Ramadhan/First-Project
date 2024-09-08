const puid = {};
const real = [0,0];
const elPlayers = {};
fbg.signInAnonymously(fbg.auth).then( a => {
  puid[a.uid] = localStorage.getItem("myName") || prompt("isi namamu:");
  if (!(localStorage.getItem("myName"))) localStorage.setItem("myName",puid[a.uid]);
}).catch(error => console.error(error.message));
fbg.onAuthStateChanged(fbg.auth, (user) => {
  if (user) {
    const rName = ["red","green","blue","ivory","pink","olive","black","coral","fuchsia","teal","saddlebrown","tan"];
    const el = document.createElement("div");
    el.id = user.uid;
    el.classList.add("players");
    el.style.backgroundColor = rName[Math.floor(Math.random()*12)];
    document.body.appendChild(el);
    elPlayers.elMe = el;
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
  fbg.set(fbg.ref(fbg.database, 'data/users/' + elPlayers.elMe.id), real);
  elPlayers.elMe.id.style.transform = `translate(${real[0]}px,${real[1]}px)`;
});
(function() {
  
}());

fbg.onValue(fbg.ref(fbg.database, 'data/thatIn'), (sp) => {
  const thid = sp._node.children_.root_.key;
  console.log(elPlayers);
  if (elPlayers.elMe.id != thid) {
    const el = document.createElement("div");
    el.id = thid;
    el.classList.add("players");
    el.style.backgroundColor = sp.child(thid).val();
    document.body.appendChild(el);
    fbg.onValue(fbg.ref(fbg.database, 'data/users/' + thid), (spm) => {
      console.log(el,spm);
      el.style.transform = `translate(${spm.val()[0]}px,${spm.val()[1]}px)`;
    });
  }
});