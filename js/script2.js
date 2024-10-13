(function() {

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
    containerInputName.style.display = "block";
    opcl.cin = true;
  }
});
OPCLmyWorld.addEventListener("click", a => {
  if (opcl.mw) {
    myWorld.style.display = "none";
    opcl.cin = false;
  }
  else {
    myWorld.style.display = "block";
    opcl.cin = true;
  }
});
OPCLjoinWorld.addEventListener("click", a => {
  if (opcl.jw) {
    joinWorld.style.display = "none";
    opcl.cin = false;
  }
  else {
    joinWorld.style.display = "block";
    opcl.cin = true;
  }
});
  
}());
