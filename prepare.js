fullScreenButton.addEventListener('click', () => {
  document.documentElement.requestFullscreen();
});
document.documentElement.addEventListener("fullscreenchange", () => {
  containerFullScreen.remove();
  main();
});
if (!navigator.userAgentData.mobile) mobileOnly.remove();
if (!document.fullscreenEnabled) {
  containerFullScreen.remove();
  main();
}
const muid = [];
const real = {
  position: [0,0],
  direction: 0,
};
const settings = {
  size: 25,
};
const elPlayers = {};
function moveDirection(a,el) { el.style.borderRadius = "0"; switch (a) {
  case 'front': el.style.borderTopLeftRadius = "100px"; el.style.borderTopRightRadius = "100px"; return;
  case 'right': el.style.borderTopRightRadius = "100px"; el.style.borderBottomRightRadius = "100px"; return;
  case 'back': el.style.borderBottomRightRadius = "100px"; el.style.borderBottomLeftRadius = "100px"; return;
  case 'left': el.style.borderBottomLeftRadius = "100px"; el.style.borderTopLeftRadius = "100px"; return;
}}
fbg.signInAnonymously(fbg.auth).catch(console.log);
fbg.onAuthStateChanged(fbg.auth, (user) => {
  if (user) {
    muid.push(localStorage.getItem("myName") || prompt("isi namamu:"));
    muid.push(user.uid);
    if (!(localStorage.getItem("myName"))) localStorage.setItem("myName",muid[0]);
    const rName = ["red","green","blue","ivory","pink","olive","black","coral","fuchsia","teal","saddlebrown","tan"];
    const el = document.createElement("div");
    el.id = muid[0];
    el.classList.add("players");
    el.style.backgroundColor = rName[Math.floor(Math.random()*12)];
    mainGame.appendChild(el);
    elPlayers[user.uid] = el;
    fbg.set(fbg.ref(fbg.database, 'data/users/' + user.uid), {
      position: [0,0],
      direction: 0,
    });
    fbg.set(fbg.ref(fbg.database, 'data/thatIn/' + user.uid), {
      status: true,
      name: muid[0],
      uid: muid[1],
      color: el.style.backgroundColor,
    });
    fbg.get(fbg.ref(fbg.database, 'data/thatIn')).then((sp) => {
      window.wkwk = sp;
      sp.forEach( i => { i = i.val(); if (i.status && i.uid == muid[1]) {
        const el = document.createElement("div");
        el.id = i.uid;
        el.classList.add("players");
        el.style.backgroundColor = i.color;
        mainGame.appendChild(el);
        fbg.onValue(fbg.ref(fbg.database, 'data/users/' + i.uid), (spm) => {
          const me = spm.val();
          el.style.transform = `translate(${me.position[0]}px, ${me.position[1]}px)`;
          moveDirection(me.direction,el);
        });
      }});
    }).catch(console.error);
    fbg.onValue(fbg.ref(fbg.database, 'data/thatIn'), (sp) => {
      const thid = sp._node.children_.root_.key;
      if (muid[1] != thid) {
        const el = document.createElement("div");
        el.id = thid;
        el.classList.add("players");
        el.style.backgroundColor = sp.child(thid).val();
        mainGame.appendChild(el);
        fbg.onValue(fbg.ref(fbg.database, 'data/users/' + thid), (spm) => {
          const me = spm.val();
          el.style.transform = `translate(${me.position[0]}px, ${me.position[1]}px)`;
          moveDirection(me.direction,el);
        });
      }
    });
  } else {
    fbg.set(fbg.ref(fbg.database, 'data/thatIn/' + user.uid + 'status'), false);
  }
});
