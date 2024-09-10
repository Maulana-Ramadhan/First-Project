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
const begun = "dont cry";