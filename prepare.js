// const playersName = {};
// let count = 0;
// fbg.onAuthStateChanged(fbg.auth, check => {
//   console.log(check);
//   if (check) {
//     fbg.onValue(fbg.ref(fbg.database, `data/users/${check.uid}/name`), sp => {
//       playersName[check.uid] = sp.val();
//       playerListMenu.innerHTML += `<div>${playersName[check.uid]}</div><br/>`;
//     });
//     console.log(check);
//   }
// });
// fbg.signInAnonymously(fbg.auth).then(pass => {
//   ConfirmInputName.addEventListener("click", a => {
//     fbg.set(fbg.ref(fbg.database, `data/users/${pass.user.uid}/name`), inputName.value);
//   });
//   console.log("login");
// }).catch(error => {
//   console.log("error");
// });

fbg.signInAnonymously(fbg.auth).then(a => {
  console.log(a);
});
fbg.onAuthStateChanged(fbg.auth, check => {
  playerListMenu.innerText += "1 wadidaw \n";
});