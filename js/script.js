function mainX() {
  const varM = {
    maPos: [0,0],
    scrPo: [0,0],
    mapLi: [parseInt(canvasMap.offsetHeight)/2,parseInt(canvasMap.offsetWidth)/2,-parseInt(canvasMap.offsetHeight)/2,-parseInt(canvasMap.offsetWidth)/2],
    MG: [parseInt(canvasMap.offsetWidth)/2,parseInt(canvasMap.offsetHeight)/2],
    x: 0,
    y: 0,
    ax: analog.getBoundingClientRect().left + (analog.getBoundingClientRect().width/2),
    ay: analog.getBoundingClientRect().top + (analog.getBoundingClientRect().height/2),
    iden: undefined,
    idenT: false,
    key: undefined,
    keyT: true,
    moveMS(a,b) {
      this.maPos[a] += settings.size*b, 
      this.scrPo[a] -= settings.size*b;
      return `translate(${this.maPos[0]}px,${this.maPos[1]}px)`;
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
  function whach() {
    if (settings.status) fbg.set(fbg.ref(fbg.database, 'data/users/' + muid[1] + '/position/'), real); 
    moveDirection(real.direction,elPlayers[muid[1]]);
    elPlayers[muid[1]].style.transform = `translate(${real.x}px, ${real.y}px)`;
    if (real.x < varM.scrPo[0]-varM.MG[0]) canvasMap.style.transform = varM.moveMS(0,+1);
    if (real.x > varM.scrPo[0]+varM.MG[0]) canvasMap.style.transform = varM.moveMS(0,-1);
    if (real.y < varM.scrPo[1]-varM.MG[1]) canvasMap.style.transform = varM.moveMS(1,+1);
    if (real.y > varM.scrPo[1]+varM.MG[1]) canvasMap.style.transform = varM.moveMS(1,-1);
  }
  function which() {
    const c = (varM.x**2+varM.y**2)**(1/2);
    if (Math.abs(varM.x/c) > Math.abs(varM.y/c)) {
      if (varM.x/c > 0) { real.x += settings.size; real.direction = "right"; }
      else { real.x -= settings.size; real.direction = "left"; }
    } else {
      if (varM.y/c > 0) { real.y += settings.size; real.direction = "front"; }
      else { real.y -= settings.size; real.direction = "back"; }
    } whach();
  }
  function whoch() {
    switch(varM.key) {
      case 'w': real.y -= settings.size; real.direction = "front"; break;
      case 'd': real.x += settings.size; real.direction = "right"; break;
      case 's': real.y += settings.size; real.direction = "back"; break;
      case 'a': real.x -= settings.size; real.direction = "left"; break; 
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
