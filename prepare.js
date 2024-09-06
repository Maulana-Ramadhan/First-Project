const playersName = {};
let count = 0;
fbg.onAuthStateChanged(fbg.auth, check => {
  console.log(count++);
  const userRef = fbg.ref(fbg.database, `data/users/${check.uid}/name`);
  if (check) {
    fbg.onValue(userRef, sp => {
      playersName[check.uid] = sp.val();
      playerListMenu.innerHTML += `<div>${playersName[check.uid]}</div><br/>`;
    });
    userRef.onDisconnect().remove();
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
