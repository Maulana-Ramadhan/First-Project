const playersName = {};

fbg.onAuthStateChanged(fbg.auth, check => {
  if (check) {
    fbg.onValue(fbg.ref(fbg.database, `data/users/${check.uid}/name`), sp => {
      playersName[check.uid] = sp.val();
      playerListMenu.innerHTML += `<div>${playersName[check.uid]}</div><br/>`;
      // const a = document.createElement("div");
      // a.innerText = i;
      // playerListMenu.innerHTML.appendChild(a);
      // playerListMenu.innerHTML.appendChild(document.createElement("br"));
    });
  }
});
fbg.signInAnonymously(fbg.auth).then(pass => {
  ConfirmInputName.addEventListener("click", a => {
    fbg.set(fbg.ref(fbg.database, `data/users/${pass.user.uid}/name`), inputName.value);
  });
  console.log("login");
}).catch(error => {
  console.log("error");
});
