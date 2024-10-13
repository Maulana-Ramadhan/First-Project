/*fbg.get(fbg.ref(fbg.database, 'data/thatIn')).then((sp) => {
  window.wkwk = sp;
  sp.forEach( i => { i = i.val(); if (i.status && i.uid != muid[1]) {
    const el = document.createElement("div");
    el.id = i.uid;
    el.classList.add("players");
    el.style.backgroundColor = i.color;
    canvasMap.appendChild(el);
    fbg.onValue(fbg.ref(fbg.database, 'data/users/' + i.uid), (spm) => {
      const me = spm.val();
        el.style.transform = `translate(${me.position[0]}px, ${me.position[1]}px)`;
        moveDirection(me.direction,el);
    });
  }});
}).catch(console.error);*/
