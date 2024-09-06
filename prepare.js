const playersName = {};

inputName.addEventListener("click", a => {
  set(fbg.ref(database, `data/users/${pass.user.uid}/name`), a.srcElement.value);
  for (let i of playersName) {
    const a = document.createElement("div");
    a.innerText = i;
    playerListMenu.innerHTML.appendChild(a);
    playerListMenu.innerHTML.appendChild(document.createElement("br"));
  }
});
fbg.onAuthStateChanged(fbg.auth, user => {
  if (user) {
    onValue(fbg.ref(database, `data/users/${pass.user.uid}/name`), (sp) => playersName[pass.user.uid] = sp.val());
  } else {}
  for (let i of playersName) {
    const a = document.createElement("div");
    a.innerText = i;
    playerListMenu.innerHTML.appendChild(a);
    playerListMenu.innerHTML.appendChild(document.createElement("br"));
  }
  console.log(value);
});
fbg.signInAnonymously(fbg.auth).then(pass => {
  
}).catch(error => {
  
});
