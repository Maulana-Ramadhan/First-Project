window.addEventListener("visibilitychange", e => { if (window.closed) {
  fbg?.set(fbg.ref(fbg.database, 'data/thatIn/' + user.uid + 'status'), false);
}});
ConfirmInputName.addEventListener('click', (e) => {
  e.preventDefault();
  muid[0] = inputName.value;
  muid[1] = PickColor.value;
  (elPlayers.mySelf||elPlayers[muid[1]]).style.backgroundColor = muid[1];
  localStorage.setItem("myData",JSON.stringify({name:muid[0],color:muid[1]}));
});
fullScreenButton.addEventListener('click', () => {
  if (!document.fullscreenEnabled) {
    containerFullScreen.style.display = "none"; main();
  } else document.documentElement.requestFullscreen();
});
document.documentElement.addEventListener("fullscreenchange", () => {
  containerFullScreen.style.display = "none";
  main();
});
if (!navigator.userAgentData.mobile) mobileOnly.style.display = "none";
const muid = [];
const real = {
  x: 0,
  y:0,
  direction: 0,
};
const settings = {
  size: 25,
  status: false,
};
const elPlayers = {};
function moveDirection(a,el) { el.style.borderRadius = "0"; switch (a) {
    case 'back': el.style.borderTopLeftRadius = "100px"; el.style.borderTopRightRadius = "100px"; return;
    case 'right': el.style.borderTopRightRadius = "100px"; el.style.borderBottomRightRadius = "100px"; return;
    case 'front': el.style.borderBottomRightRadius = "100px"; el.style.borderBottomLeftRadius = "100px"; return;
    case 'left': el.style.borderBottomLeftRadius = "100px"; el.style.borderTopLeftRadius = "100px"; return;
  }}
if(localStorage.getItem("myData")) {
  const myData = JSON.parse(localStorage.getItem("myData"));
  muid[0] = myData.color;
  muid[1] = myData.name;
  inputName.value = muid[0];
  PickColor.value = muid[1];
  const el = document.createElement("div");
  el.id = "mySelf";
  el.classList.add("players");
  el.style.backgroundColor = muid[1];
  MainGame.appendChild(el);
  elPlayers.mySelf = el;
}
function online() {
  fbg.signInAnonymously(fbg.auth).catch(console.log);
  /*fbg.onAuthStateChanged(fbg.auth, (user) => {
    console.log(user);
    if (user) {
      if (!localStorage.getItem("myData")) {
        muid[0] = inputName.value;
        muid[1] = user.uid;
        muid[2] = PickColor.value;
        localStorage.setItem("myData",JSON.stringify({name:muid[0],uid:muid[1],color:muid[2]}));
        const el = document.createElement("div");
        el.id = muid[0];
        el.classList.add("players");
        el.style.backgroundColor = muid[2];
        MainGame.appendChild(el);
        elPlayers[muid[1]] = el;
      }
      fbg.set(fbg.ref(fbg.database, 'data/users/' + user.uid), {
        position: [0,0],
        direction: 0,
      });
      console.log(muid);
      fbg.set(fbg.ref(fbg.database, 'data/thatIn/' + user.uid), {
        status: true,
        name: muid[0],
        uid: muid[1],
        color: muid[2],
      });
      fbg.get(fbg.ref(fbg.database, 'data/thatIn')).then((sp) => {
        window.wkwk = sp;
        sp.forEach( i => { i = i.val(); if (i.status && i.uid != muid[1]) {
          const el = document.createElement("div");
          el.id = i.uid;
          el.classList.add("players");
          el.style.backgroundColor = i.color;
          MainGame.appendChild(el);
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
          MainGame.appendChild(el);
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
  });*/
  fbg.onAuthStateChanged(fbg.auth, (user) => {
    console.log(user);
    if (user) {
      muid[2] = user.uid;
      elPlayers[muid[2]] = elPlayers.mySelf;
      elPlayers[muid[2]] = muid[2];
      delete elPlayers.mySelf;
      
      fbg.set(fbg.ref(fbg.database, 'data/users/' + user.uid), {
        position: {
          x: 0,
          y: 0,
          direction: 0,
        },
        status: true,
        name: muid[0],
        color: muid[1],
        uid: muid[2],
      });
      
      console.log(muid);
      /*fbg.set(fbg.ref(fbg.database, 'data/thatIn/' + user.uid), {
        status: true,
        name: muid[0],
        uid: muid[1],
        color: muid[2],
      });*/
      fbg.get(fbg.ref(fbg.database, 'data/users')).then((sp) => {
        window.wkwk = sp;
        sp.forEach( i => { 
          i = i.val(); 
          if (i.status && i.uid != muid[2]) {
            const el = document.createElement("div");
            el.id = i.uid;
            el.classList.add("players");
            el.style.backgroundColor = i.color;
            MainGame.appendChild(el);
            fbg.onValue(fbg.ref(fbg.database, 'data/users/' + i.uid + '/position/'), (spm) => {
              const me = spm.val();
              el.style.transform = `translate(${me.x}px, ${me.y}px)`;
              moveDirection(me.direction,el);
            });
          }
        });
      }).catch(console.error);
      fbg.onValue(fbg.ref(fbg.database, 'data/users'), (sp) => {
        const thid = sp._node.children_.root_.key;
        if (muid[2] != thid) {
          const el = document.createElement("div");
          el.id = thid;
          el.classList.add("players");
          el.style.backgroundColor = sp.child(thid).val().color;
          console.log(el.style.backgroundColor);
          MainGame.appendChild(el);
          fbg.onValue(fbg.ref(fbg.database, 'data/users/' + thid + '/position/'), (spm) => {
            const me = spm.val();
            el.style.transform = `translate(${me.x}px, ${me.y}px)`;
            moveDirection(me.direction,el);
          });
        }
      });
    } else {
      fbg.set(fbg.ref(fbg.database, 'data/thatIn/' + user.uid + 'status'), false);
    }
    settings.status = true;
  });
}


