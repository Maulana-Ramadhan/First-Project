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
    myWorld.style.display = "block";
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
  console.log("value");
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
      event: ["click", (a) => {
        //////
      }]
    }));
    newWorldName.value = "";
    newWorldNumber.value = "";
  }
});
warningCreateWorldMenu.addEventListener('animationend', (e) => warningCreateWorldMenu.style.animationName = "");
}());