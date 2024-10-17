(function opcl() {

const opcl = {
  cin: false,
  mw: false,
  jw: false,
};

OPCLcontainerInputName.addEventListener("click", a => {
  if (opcl.cin) {
    containerInputName.style.display = "none";
    opcl.cin = false;
  }
  else {
    containerInputName.style.display = "flex";
    opcl.cin = true;
  }
});
OPCLmyWorld.addEventListener("click", a => {
  if (opcl.mw) {
    myWorld.style.display = "none";
    opcl.mw = false;
  }
  else {
    myWorld.style.display = "flex";
    opcl.mw = true;
  }
});
OPCLjoinWorld.addEventListener("click", a => {
  if (opcl.jw) {
    joinWorld.style.display = "none";
    opcl.jw = false;
  }
  else {
    joinWorld.style.display = "block";
    opcl.jw = true;
  }
});

createWorld.addEventListener("click", a => {
  console.log(getComputedStyle(OPCLmyWorld).getPropertyValue("display"));
  createWorldMenu.style.display = "flex";
});
cancelNewWorld.addEventListener("click", a => {
  createWorldMenu.style.display = "none";
  newWorldName.value = "";
  newWorldNumber.value = "";
});
createNewWorld.addEventListener("click", a => {
  if (newWorldName.value == "")  {
    warningCreateWorldMenu.innerText = "Map Name Cannot Be Empty";
    warningCreateWorldMenu.style.animationName = "fadeOut";
  } else if (Object.keys(AllMap).some(a => a == newWorldName.value)) {
    warningCreateWorldMenu.innerText = "Map With The Same Name Has Already Exist";
    warningCreateWorldMenu.style.animationName = "fadeOut";
  } else {
    AllMap[newWorldName.value] = new NewMap(newWorldName.value,newWorldNumber.value);
    createWorldMenu.style.display = "none";
    myWorld.appendChild(createEl({
      tagEl: "div",
      className: ["worldList"],
      text: newWorldName.value,
      event: ["click", ({srcElement:el}) => {
        MainGame.style.display = "none";
        loadingScreen.style.display = "flex";
        for (let i = 0; i < 1000; i++) AllMap[newWorldName.value].createMAp();
      }]
    }));
    newWorldName.value = "";
    newWorldNumber.value = "";
  }
});
warningCreateWorldMenu.addEventListener('animationend', (e) => warningCreateWorldMenu.style.animationName = "");

settingMainMenu.addEventListener("click", a => {
  settingGame.style.display = "flex";
});
exitSettingGame.addEventListener("click", a => {
  settingGame.style.display = "none";
});

AllMap.mau = new NewMap("mau",7);
myWorld.appendChild(createEl({
  tagEl: "div",
  className: ["worldList"],
  text: "mau",
  event: ["click", ({srcElement:el}) => {
    MainMenu.style.display = "none";
    loadingScreen.style.display = "flex";
    setTimeout(function() {
      for (let i = 0; i < 10000; i++) AllMap.mau.createMAp();
      loadingScreen.style.display = "none";
      MainGame.style.display = "flex";
      
    }, 0);
  }]
}));
}());