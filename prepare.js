
console.log(fbg);
console.log(window.fbg);
fbg.onAuthStateChanged(auth, user => {
  if (user) {
    onValue(ref(database, `data/users/${pass.user.uid}/name`), (sp) => playersName[pass.user.uid] = sp.val());
  } else {}
  for (let i of playerName) {
    const a = document.createElement("div");
    a.innerText = i;
    playerListMenu.innerHTML.appendChild(document.createElement("br"));
    playerListMenu.innerHTML.appendChild(document.createElement("br"));
  }
});
fbg.signInAnonymously(auth).then(pass => {
  
}).catch(error => {
  
});
