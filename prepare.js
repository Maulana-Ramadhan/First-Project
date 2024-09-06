const playersName = {};

ConfirmInputName.addEventListener("click", a => {
  fbg.set(fbg.ref(fbg.database, `data/users/${pass.user.uid}/name`), inputName.value);
  for (let i of playersName) {
    const a = document.createElement("div");
    a.innerText = i;
    playerListMenu.innerHTML.appendChild(a);
    playerListMenu.innerHTML.appendChild(document.createElement("br"));
  }
});
fbg.onAuthStateChanged(fbg.auth, user => {
    console.log("user");
  if (user) {
    onValue(fbg.ref(fbg.database, `data/users/${pass.user.uid}/name`), (sp) => playersName[pass.user.uid] = sp.val());
    console.log("user");
  } else {
    console.log("user");
  }
});
fbg.onAuthStateChanged(fbg.auth, user => {
  console.log(user);
});
fbg.signInAnonymously(fbg.auth).then(pass => {
  console.log("login");
}).catch(error => {
  console.log("error");
});
