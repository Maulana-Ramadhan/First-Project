ConfirmInputName.addEventListener('click', (e) => {
  e.preventDefault();
  muid[0] = inputName.value;
  muid[2] = PickColor.value;
  elPlayers[muid[1]].style.setProperty('--content',muid[0]);
  elPlayers[muid[1]].style.backgroundColor = muid[2];
  localStorage.setItem("myData",{name:muid[0],uid:muid[1],color:muid[2]});
});
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
if(localStorage.getItem("myData")) {
  const myData = localStorage.getItem("myData");
  muid[0] = myData.name;
  muid[1] = myData.uid;
  muid[2] = myData.color;
  const el = document.createElement("div");
  el.id = muid[0];
  el.classList.add("players");
  el.style.backgroundColor = muid[2];
  MainGame.appendChild(el);
  elPlayers[muid[1]] = el;
}
function moveDirection(a,el) { el.style.borderRadius = "0"; switch (a) {
  case 'front': el.style.borderTopLeftRadius = "100px"; el.style.borderTopRightRadius = "100px"; return;
  case 'right': el.style.borderTopRightRadius = "100px"; el.style.borderBottomRightRadius = "100px"; return;
  case 'back': el.style.borderBottomRightRadius = "100px"; el.style.borderBottomLeftRadius = "100px"; return;
  case 'left': el.style.borderBottomLeftRadius = "100px"; el.style.borderTopLeftRadius = "100px"; return;
}}
fbg.signInAnonymously(fbg.auth).catch(console.log);
fbg.onAuthStateChanged(fbg.auth, (user) => {
  if (user) {
    if (!localStorage.getItem("myData")) {
      muid[0] = prompt("input your username: ");
      muid[1] = user.uid;
      muid[2] = PickColor.value;
      localStorage.setItem("myData",{name:muid[0],uid:muid[1],color:muid[2]});
      const el = document.createElement("div");
      el.id = muid[0];
      el.classList.add("players");
      el.style.backgroundColor = muid[2];
      mainGame.appendChild(el);
      elPlayers[muid[1]] = el;
    }
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

function main() {
  const touched = {
    x: 0,
    y: 0,
    ax: analog.getBoundingClientRect().left + (analog.getBoundingClientRect().width/2),
    ay: analog.getBoundingClientRect().top + (analog.getBoundingClientRect().height/2),
    iden: undefined,
    key: undefined,
    xc(a) {
      this.x = a - this.ax;
    },
    yc(a) {
      this.y = a - this.ay;
    }
  };
  function moveup(argument) {
    real.position[0] += settings.size;
  }
  function intr1() {
  }
  function intr2() {
  }
  function intr3() {
  }
  function intr4() {
  }
  function intr5() {
  }
  function intr6() {
  }
  function which() {
    const c = (touched.x**2+touched.y**2)**(1/2);
    if (Math.abs(touched.x/c) > Math.abs(touched.y/c)) {
      if (touched.x/c > 0) { real.position[0] += settings.size; real.direction = "right"; }
      else { real.position[0] -= settings.size; real.direction = "left"; }
    } else {
      if (touched.y/c > 0) { real.position[1] += settings.size; real.direction = "front"; }
      else { real.position[1] -= settings.size; real.direction = "back"; }
    }
    fbg.set(fbg.ref(fbg.database, 'data/users/' + muid[1]), real);
    console.log(real);
    elPlayers[muid[1]].style.transform = `translate(${real.position[0]}px, ${real.position[1]}px)`;
    elPlayers[muid[1]].style.rotate = `${real.direction}deg`;
    moveDirection(real.direction,el);
  }
  function whoch() {
    switch(touched.key) {
      case 'w': real.position[1] -= settings.size; real.direction = 0; break;
      case 'd': real.position[0] += settings.size; real.direction = 90; break;
      case 's': real.position[1] += settings.size; real.direction = 180; break;
      case 'a': real.position[0] -= settings.size; real.direction = 270; break; 
    }
    fbg.set(fbg.ref(fbg.database, 'data/users/' + muid[1]), real);
    elPlayers[muid[1]].style.transform = `translate(${real.position[0]}px, ${real.position[1]}px)`;
    elPlayers[muid[1]].style.rotate = `${real.direction}deg`;
  }
  document.addEventListener('keydown', (e) => { 
    touched.key = e.key;
    whoch();
    elPlayers[muid[1]].addEventListener("transitionend", whoch);
  });
  document.addEventListener('keyup', (e) => {
    touched.key = undefined;
    elPlayers[muid[1]].removeEventListener("transitionend", whoch);
  });
  analog.addEventListener("touchstart", a => {
    touched.iden = a.targetTouches[0].identifier;
    touched.xc(a.targetTouches[0].clientX);
    touched.yc(a.targetTouches[0].clientY);
    which();
    elPlayers[muid[1]].addEventListener("transitionend", which);
  });
  analog.addEventListener("touchmove", a => { if (a.touches[0].identifier == touched.iden) {
    touched.xc(a.touches[0].clientX);
    touched.yc(a.touches[0].clientY);
  }});
  analog.addEventListener("touchend", a => {
    touched.iden = undefined;
    elPlayers[muid[1]].removeEventListener("transitionend", which);
  });
  document.addEventListener('keydown', (e) => { 
    switch (e.key) {
      case 'u': intr1(); return;
      case 'i': intr2(); return;
      case 'o': intr3(); return;
      case 'h': intr4(); return;
      case 'j': intr5(); return;
      case 'k': intr6(); return;
    }
  });
  bIntr1.addEventListener('touchdown', intr1);
  bIntr2.addEventListener('touchdown', intr2);
  bIntr3.addEventListener('touchdown', intr3);
  bIntr4.addEventListener('touchdown', intr4);
  bIntr5.addEventListener('touchdown', intr5);
  bIntr6.addEventListener('touchdown', intr6);
}