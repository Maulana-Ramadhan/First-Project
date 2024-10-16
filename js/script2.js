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
  createWorld.addEventListener("click", a => {
    createWorldMenu.style.display = "flex";
  });
  cancelNewWorld.addEventListener("click", a => {
    createWorldMenu.style.display = "none";
    newWorldName.value = "";
    newWorldNumber.value = "";
  });
  createNewWorld.addEventListener("click", a => {
    if (newWorldName.value != "" && Object.keys(All.map).every(a => a != newWorldName.value)) All.map[newWorldName.value] = new NewMap(newWorldName.value,newWorldNumber.value);
    else warningCreateWorldMenu.className = "fadeOut";
  });
  //warningCreateWorldMenu.addEventListener('animationend', (e) => warningCreateWorldMenu.className = "");
});
  
}());