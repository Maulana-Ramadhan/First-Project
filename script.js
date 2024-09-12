function main() {
  const varM = {
    maPos: [0,0],
    scrPo: [0,0],
    mapLi: [parseInt(MainGame.offsetHeight)/2,parseInt(MainGame.offsetWidth)/2,-parseInt(MainGame.offsetHeight)/2,-parseInt(MainGame.offsetWidth)/2],
    MG: [parseInt(MainGame.offsetWidth)/2,parseInt(MainGame.offsetHeight)/2],
    x: 0,
    y: 0,
    ax: analog.getBoundingClientRect().left + (analog.getBoundingClientRect().width/2),
    ay: analog.getBoundingClientRect().top + (analog.getBoundingClientRect().height/2),
    iden: undefined,
    idenT: false,
    key: undefined,
    keyT: true,
    moveMS(a,b) {
      this.maPos[a] += settings.size*c, 
      this.scrPo[a] -= settings.size*c;
      return `${this.maPos[0]}px,${this.maPos[1]}px`;
    },
    xc(a) {
      this.x = a - this.ax;
    },
    yc(a) {
      this.y = a - this.ay;
    }
  };
  window.precent = varM;
  function intr1() {
    MainGame.style.transform = "translateX(50px)";
    console.log(MainGame.style.transform);
  }
  function intr2() {
    MainGame.style.left = "50px";
    console.log(MainGame.style.left);
  }
  function intr3() {
  }
  function intr4() {
  }
  function intr5() {
  }
  function intr6() {
  }
  function whach() {
    fbg.set(fbg.ref(fbg.database, 'data/users/' + muid[1]), real); 
    moveDirection(real.direction,elPlayers[muid[1]]);
    elPlayers[muid[1]].style.transform = `translate(${real.position[0]}px, ${real.position[1]}px)`;
    console.log("x",real.position[0],varM.maPos[0]-varM.MG[0],varM.maPos[0]+varM.MG[0]);
    console.log("y",real.position[1],varM.maPos[1]-varM.MG[1],varM.maPos[1]+varM.MG[1]);
    if (real.position[0] < varM.scrPo[0]-varM.MG[0]) {
      //MainGame.style.transform = `translateX(${varM.maPos[0]+=settings.size}px)`;
      MainGame.style.transform = `translate(${varM.moveMS(0,+1)}px)`;
    }
    if (real.position[0] > varM.scrPo[0]+varM.MG[0]) {
      //MainGame.style.transform = `translateX(${varM.maPos[0]-=settings.size}px)`;
      MainGame.style.transform = `translate(${varM.moveMS(0,-1)}px)`;
    }
    if (real.position[1] < varM.scrPo[1]-varM.MG[1]) {
      //MainGame.style.transform = `translateY(${varM.maPos[1]-=settings.size}px)`;
      MainGame.style.transform = `translate(${varM.moveMS(1,-1)}px)`;
    }
    if (real.position[1] > varM.scrPo[1]+varM.MG[1]) {
      MainGame.style.transform = `translate(${varM.moveMS(1,+1)}px)`;
      //MainGame.style.transform = `translateY(${varM.maPos[1]+=settings.size}px)`;
    }
  }
  function which() {
    const c = (varM.x**2+varM.y**2)**(1/2);
    if (Math.abs(varM.x/c) > Math.abs(varM.y/c)) {
      if (varM.x/c > 0) { real.position[0] += settings.size; real.direction = "right"; }
      else { real.position[0] -= settings.size; real.direction = "left"; }
    } else {
      if (varM.y/c > 0) { real.position[1] += settings.size; real.direction = "front"; }
      else { real.position[1] -= settings.size; real.direction = "back"; }
    } whach();
  }
  function whoch() {
    switch(varM.key) {
      case 'w': real.position[1] -= settings.size; real.direction = "front"; break;
      case 'd': real.position[0] += settings.size; real.direction = "right"; break;
      case 's': real.position[1] += settings.size; real.direction = "back"; break;
      case 'a': real.position[0] -= settings.size; real.direction = "left"; break; 
    } whach();
  }
  document.addEventListener('keydown', (e) => {
    varM.key = e.key; if (varM.keyT) {
    elPlayers[muid[1]].addEventListener("transitionend", whoch);
    whoch(); varM.keyT = true;
  }});
  document.addEventListener('keyup', (e) => {
    varM.key = undefined; varM.keyT = false;
    elPlayers[muid[1]].removeEventListener("transitionend", whoch);
  });
  analog.addEventListener("touchstart", a => {
    varM.iden = a.targetTouches[0].identifier;
    varM.xc(a.targetTouches[0].clientX);
    varM.yc(a.targetTouches[0].clientY); which();
    elPlayers[muid[1]].addEventListener("transitionend", which);
  });
  analog.addEventListener("touchmove", a => { 
  for (const i of a.changedTouches) {
    if (i.identifier == varM.iden) {
    varM.xc(i.clientX);
    varM.yc(i.clientY);
  }}});
  window.addEventListener("touchend", a => { if (a.changedTouches[0].identifier == varM.iden) {
    varM.iden = undefined;
    elPlayers[muid[1]].removeEventListener("transitionend", which);
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
  bIntr1.addEventListener('touchstart', intr1);
  bIntr2.addEventListener('touchstart', intr2);
  bIntr3.addEventListener('touchstart', intr3);
  bIntr4.addEventListener('touchstart', intr4);
  bIntr5.addEventListener('touchstart', intr5);
  bIntr6.addEventListener('touchstart', intr6);
}
