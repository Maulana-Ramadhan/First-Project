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
  if (opcl.cin) {
    containerInputName.style.display = "none";
  }
  else {
    containerInputName.style.display = "block";
  }
  if (opcl.mw) myWorld.style.display = "none";
  else myWorld.style.display = "block";
});
OPCLjoinWorld.addEventListener("click", a => {
  if (opcl.cin) {
    containerInputName.style.display = "none";
  }
  else {
    containerInputName.style.display = "block";
  }
  if (opcl.jw) joinWorld.style.display = "none";
  else joinWorld.style.display = "block";
});
  
}());
