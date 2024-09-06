const playersName = {};

fbg.onAuthStateChanged(fbg.auth, check => {
  if (check) {
    console.log("user");
    fbg.onValue(fbg.ref(fbg.database, `data/users/${check.user.uid}/name`), (sp) => {
      playersName[check.user.uid] = sp.val();
      console.log("value");
    });
    console.log("user");
  } else {
  }
});
fbg.onAuthStateChanged(fbg.auth, user => {
  console.log(user);
});
fbg.signInAnonymously(fbg.auth).then(pass => {
  ConfirmInputName.addEventListener("click", a => {
    fbg.set(fbg.ref(fbg.database, `data/users/${pass.user.uid}/name`), inputName.value);
  });
  console.log("login");
}).catch(error => {
  console.log("error");
});
