function main() {
  const touched = {
    x: 0,
    y: 0,
    ax: analog.getBoundingClientRect().left + (analog.getBoundingClientRect().width/2),
    ay: analog.getBoundingClientRect().top + (analog.getBoundingClientRect().height/2),
    iden: undefined,
    idenT: false,
    key: undefined,
    keyT: true,
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
    if (touched.idenT) {
      elPlayers[muid[1]].removeEventListener("transitionend", which);
      touched.idenT = false;
    }
    const c = (touched.x**2+touched.y**2)**(1/2);
    if (Math.abs(touched.x/c) > Math.abs(touched.y/c)) {
      if (touched.x/c > 0) { real.position[0] += settings.size; real.direction = "right"; }
      else { real.position[0] -= settings.size; real.direction = "left"; }
    } else {
      if (touched.y/c > 0) { real.position[1] += settings.size; real.direction = "front"; }
      else { real.position[1] -= settings.size; real.direction = "back"; }
    }
    fbg.set(fbg.ref(fbg.database, 'data/users/' + muid[1]), real); 
    moveDirection(real.direction,elPlayers[muid[1]]);
    elPlayers[muid[1]].style.transform = `translate(${real.position[0]}px, ${real.position[1]}px)`;
  }
  function whoch() {
    switch(touched.key) {
      case 'w': real.position[1] -= settings.size; real.direction = "front"; break;
      case 'd': real.position[0] += settings.size; real.direction = "right"; break;
      case 's': real.position[1] += settings.size; real.direction = "back"; break;
      case 'a': real.position[0] -= settings.size; real.direction = "left"; break; 
    }
    fbg.set(fbg.ref(fbg.database, 'data/users/' + muid[1]), real); 
    moveDirection(real.direction,elPlayers[muid[1]]);
    elPlayers[muid[1]].style.transform = `translate(${real.position[0]}px, ${real.position[1]}px)`;
  }
  document.addEventListener('keydown', (e) => {
    touched.key = e.key; if (touched.keyT) {
    elPlayers[muid[1]].addEventListener("transitionend", whoch);
    whoch(); touched.keyT = true;
  }});
  document.addEventListener('keyup', (e) => {
    touched.key = undefined; touched.keyT = false;
    elPlayers[muid[1]].removeEventListener("transitionend", whoch);
  });
  analog.addEventListener("touchstart", a => {
    touched.iden = a.targetTouches[0].identifier;
    touched.xc(a.targetTouches[0].clientX);
    touched.yc(a.targetTouches[0].clientY); which();
    elPlayers[muid[1]].addEventListener("transitionend", which);
    console.log(real.direction);
  });
  analog.addEventListener("touchmove", a => { 
  for (const i of a.changedTouches) {
    if (i.identifier == touched.iden) {
    touched.xc(i.clientX);
    touched.yc(i.clientY);
    console.log(real.direction);
  }}});
  window.addEventListener("touchend", a => { if (a.changedTouches[0].identifier == touched.iden) {
    touched.iden = undefined;
    touched.idenT = true;
    console.log(real.direction);
  }});
  document.addEventListener('keydown', (e) => { 
    switch (e.key) {
      case 'u': intr1(e); return;
      case 'i': intr2(e); return;
      case 'o': intr3(e); return;
      case 'h': intr4(e); return;
      case 'j': intr5(e); return;
      case 'k': intr6(e); return;
    }
  });
  bIntr1.addEventListener('touchdown', intr1);
  bIntr2.addEventListener('touchdown', intr2);
  bIntr3.addEventListener('touchdown', intr3);
  bIntr4.addEventListener('touchdown', intr4);
  bIntr5.addEventListener('touchdown', intr5);
  bIntr6.addEventListener('touchdown', intr6);
}
