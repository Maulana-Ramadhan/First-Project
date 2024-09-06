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
fbg.onAuthStateChanged(fbg.auth, check => {
  if (check) {
    console.log("user");
    fbg.onValue(fbg.ref(fbg.database, `data/users/${check.user.uid}/name`), (sp) => {
      playersName[check.user.uid] = sp.val();
    });
    console.log("user");
  } else {
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
