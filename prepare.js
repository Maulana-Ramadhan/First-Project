if (!navigator.userAgentData.mobile) {
  mobileOnly.remove();
}
fullScreenButton.addEventListener('click', () => {
  document.documentElement.requestFullscreen();
});
document.documentElementaddEventListener("fullscreenchange", () => {
  containerFullScreen.remove();
  main();
});
const muid = [];
console.log("value");
const real = {
  position: [0,0],
  direction: 0,
};
const settings = {
  size: 25,
};
const elPlayers = {};
fbg.signInAnonymously(fbg.auth).catch(error => console.error(error.message));
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
    document.body.appendChild(el);
    elPlayers[user.uid] = el;
    fbg.set(fbg.ref(fbg.database, 'data/users/' + user.uid), {
      position: [0,0],
      direction: 0,
    });
    console.log(muid[0]);
    fbg.set(fbg.ref(fbg.database, 'data/thatIn/' + user.uid), {
      status: true,
      name: muid[0],
      uid: muid[1],
      color: el.style.backgroundColor,
    });
      console.log("sp");
    fbg.get(fbg.ref(fbg.database, 'data/thatIn')).then((sp) => {
      console.log(sp);
      window.wkwk = sp;
      sp.forEach( i => { i = i.val(); if (i.status) {
        console.log("sp");
        const el = document.createElement("div");
        el.id = i.uid;
        el.classList.add("players");
        el.style.backgroundColor = i.color;
        document.body.appendChild(el);
        fbg.onValue(fbg.ref(fbg.database, 'data/users/' + i.uid), (spm) => {
          const me = spm.val();
          el.style.transform = `translate(${me.position[0]}px,${me.position[1]}px) rotate(${me.direction}deg)`;
        });
        console.log("sp");
      }});
    }).catch(console.error);
    fbg.onValue(fbg.ref(fbg.database, 'data/thatIn'), (sp) => {
      const thid = sp._node.children_.root_.key;
      if (muid[1] != thid) {
        const el = document.createElement("div");
        el.id = thid;
        el.classList.add("players");
        el.style.backgroundColor = sp.child(thid).val();
        document.body.appendChild(el);
        fbg.onValue(fbg.ref(fbg.database, 'data/users/' + thid), (spm) => {
          const me = spm.val();
          el.style.transform = `translate(${me.position[0]}px,${me.position[1]}px) rotate(${me.direction}deg)`;
        });
      }
    });
  } else {
    fbg.set(fbg.ref(fbg.database, 'data/thatIn/' + user.uid + 'status'), false);
  }
});
(function main() {
  const touched = {
    x: 0,
    y: 0,
    ax: parseFloat(getComputedStyle(analog).getPropertyValue("left")) + (parseFloat(getComputedStyle(analog).getPropertyValue("width"))/2),
    ay: parseFloat(getComputedStyle(analog).getPropertyValue("top")) + (parseFloat(getComputedStyle(analog).getPropertyValue("height"))/2),
    iden: undefined,
    key: undefined,
    xc(a) {
      this.x = a - this.ax;
    },
    yc(a) {
      this.y = a - this.ay;
    }
  };
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
    console.log(touched.x,touched.y,c);
    if (Math.abs(touched.x/c) > Math.abs(touched.y/c)) {
      if (touched.x/c > 0) real.position[0] += settings.size;
      else real.position[0] -= settings.size;
    } else {
      if (touched.y/c > 0) real.position[1] += settings.size;
      else real.position[1] -= settings.size;
    }
    fbg.set(fbg.ref(fbg.database, 'data/users/' + muid[1]), real);
    elPlayers[muid[1]].style.transform = `translate(${real.position[0]}px,${real.position[1]}px) rotate(${real.direction}deg)`;
  }
  function whoch() {
    switch(touched.key) {
      case 'w': real.position[1] -= settings.size; break;
      case 'd': real.position[0] += settings.size; break;
      case 's': real.position[1] += settings.size; break;
      case 'a': real.position[0] -= settings.size; break; 
    }
    fbg.set(fbg.ref(fbg.database, 'data/users/' + muid[1]), real);
    elPlayers[muid[1]].style.transform = `translate(${real.position[0]}px,${real.position[1]}px) rotate(${real.direction}deg)`;
  }
  document.addEventListener('keydown', (e) => { 
    touched.key = e.key;
    whoch();
    elPlayers[muid[1]].addEventListener("transitionend", whoch);
  }):
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
  }):
  bIntr1.addEventListener('touchdown', intr1);
  bIntr2.addEventListener('touchdown', intr2);
  bIntr3.addEventListener('touchdown', intr3);
  bIntr4.addEventListener('touchdown', intr4);
  bIntr5.addEventListener('touchdown', intr5);
  bIntr6.addEventListener('touchdown', intr6);
});

