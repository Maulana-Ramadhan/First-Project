const muid = [];
console.log("value");
const real = {
  position: [0,0],
  direction: 0,
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
    fbg.get(fbg.ref(fbg.database, 'data/thatIn'), (sp) => {
      console.log(sp);
      window.wkwk = sp;
      for (const i of sp.val()) { 
        console.log(i);
        if (i.status) {
          console.log("hello");
        const el = document.createElement("div");
        el.id = i.uid;
        el.classList.add("players");
        el.style.backgroundColor = i.color;
        document.body.appendChild(el);
        fbg.onValue(fbg.ref(fbg.database, 'data/users/' + i.uid), (spm) => {
          const me = spm.val();
          el.style.transform = `translate(${me.position[0]}px,${me.position[1]}px) rotate(${me.direction}deg)`;
        });
      }}
    })
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
analog.addEventListener("click", a => {
  switch (a.target.id) {
    case 'atasAnalog': real.position[1] -= 50; real.direction = 0; break;
    case 'kananAnalog': real.position[0] += 50; real.direction = 90; break;
    case 'bawahAnalog': real.position[1] += 50; real.direction = 180; break;
    case 'kiriAnalog': real.position[0] -= 50; real.direction = -90; break;
  }
  fbg.set(fbg.ref(fbg.database, 'data/users/' + muid[1]), real);
  elPlayers[muid[1]].style.transform = `translate(${real.position[0]}px,${real.position[1]}px) rotate(${real.direction}deg)`;
});
