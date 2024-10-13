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
    createWorldMenu.style.display = "block";
  });
  cancelNewWorld.addEventListener("click", a => {
    createWorldMenu.style.display = "none";
    newWorldName.value = "";
    newWorldNumber.value = "";
  });
  createNewWorld.addEventListener("click", a => {
    
  });
});
  
}());
(function() {
}());