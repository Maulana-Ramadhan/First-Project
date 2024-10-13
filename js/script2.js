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
  opcl.mw;
});
OPCLjoinWorld.addEventListener("click", a => {
  opcl.jw;
});
  
}());
