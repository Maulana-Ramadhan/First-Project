

fbg.onAuthStateChanged(fbg.auth, user => {
  if (user) {
    onValue(fbg.ref(database, `data/users/${pass.user.uid}/name`), (sp) => playersName[pass.user.uid] = sp.val());
  } else {}
  for (let i of playerName) {
    const a = document.createElement("div");
    a.innerText = i;
    playerListMenu.innerHTML.appendChild(document.createElement("br"));
    playerListMenu.innerHTML.appendChild(document.createElement("br"));
  }
});
fbg.signInAnonymously(fbg.auth).then(pass => {
  
}).catch(error => {
  
});
