const rng = (function rnd(a) { function r() { r._mz = 4294967295&36969*(65535&r._mz)+(r._mz>>16); r._mz = 4294967295&36969*(65535&r._mz)+(r._mz>>16); r._mw = 4294967295&18e3*(65535&r._mw)+(r._mw>>16); r._mw = 4294967295&18e3*(65535&r._mw)+(r._mw>>16); return 0.5 + (4294967295&(r._mz<<16)+r._mw)/4294967296; } r._mz = 123456789, this._mw = this._seed = a || 1+Math.floor(4294967295*Math.random()); r.seed = function(a) { return a == null ? this._seed : (this._mz = 123456789, this._mw = this._seed = a); }; r.randomize = function() { return this.seed(1+Math.floor(4294967295*Math.random())); }; r.getState = function() { return { seed: this._seed, mz: this._mz, mw: this._mw }; }; r.inRange = function(c, a) { return c+this()*(a-c); }; r.intInRange = function(a, b) { return a+Math.floor(this()*(b-a+1)); }; r.choice = function(a) { if (0 === a.length) throw new Error("Cannot choose random element from empty array."); return a[this.intInRange(0, a.length-1)]; }; r.choices = function(a, b) { const c = Array(b); for (let d = 0; d < b; d++) c[d] = this.choice(a);  return c; }; r.sample = function(a, b) { if (b > a.length) throw new Error("Sample size cannot exceed population size."); for (let c, d = a.length-1, e = Array(b), f = {}, g = 0; g < b; g++) { do c = this.intInRange(0, d); while (f[c]); e[g] = a[c]; f[c] = !0; } return e; }; r.shuffle = function(a) { for (let d = a.length-1; 0 < d; d--) { const b = this.intInRange(0, d-1); c = a[d]; a[d] = a[b]; a[b] = c; } return a; }; return r; }(7));
const enCodetoObject = ["air","solid","door","chest"];
const configuration = ["choosedPlace","allowRotate"];
const structure = {
  metStructor: {
    reverseC(){return this.enCodetoObject.toReversed().map((k,i)=>k.map((l,j)=>this.enCodetoObject[i][j]))},
    reverseR(){return this.enCodetoObject.map((k,i)=>k.toReversed().map((l,j)=>this.enCodetoObject[i][j]))},
    tranportI(){return this.enCodetoObject.map((k,i)=>k.map((l,j)=>this.enCodetoObject[j][i]))},
    tranportU(){return this.enCodetoObject.toReversed().map((k,i)=>k.toReversed().map((l,j)=>this.enCodetoObject[j][i]))},
    rotate90(){return this.enCodetoObject.toReversed().map((k,i)=>k.map((l,j)=>this.enCodetoObject[j][i]))},
    rotate180(){return this.enCodetoObject.toReversed().map((k,i)=>k.toReversed().map((l,j)=>this.enCodetoObject[i][j]))},
    rotate270(){return this.enCodetoObject.map((k,i)=>k.toReversed().map((l,j)=>this.enCodetoObject[j][i]))},
  },
  conStructor(name,enCodetoObject,configuration) {
    this[name] = {
      enCodetoObject,
      configuration,
    };
    Object.assign(this[name], this.metStructor);
  }
};
structure.conStructor("smallRoad",[
  [1],
  [0],
  [1]],
  [1,[true,true,true,true]]
);
structure.conStructor("mediumRoad",[
  [1],
  [0],
  [0],
  [1]],
  [1,[true,true,true,true]]
);
structure.conStructor("largeRoad",[
  [1],
  [0],
  [0],
  [0],
  [1]],
  [1,[true,true,true,true]]
);
structure.conStructor("megaRoad",[
  [1],
  [0],
  [0],
  [0],
  [0],
  [1]],
  [1,[true,true,true,true]]
);
structure.conStructor("basicSquare",[
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 2, 1, 1],],
  [[0,[[2,0],[0,3],[4,3]],[50,50,50],[2]],
  [1,[true,true,true,true]],]
);
structure.conStructor("treasureRoom",[
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 3, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 2, 1, 1, 1, 1],],
  [[0,[[4,0],[0,5],[8,5]],[50,50,50],[2]], //[configuration,[semua tiles yang diganti],[minimal, maksimal | yang harus diganti],[dengan tiles apa jika tidak diganti],[[tiles yang diacak],[bobot setiap tiles]]]
  [1,[true,true,true,true]],],
);
structure.conStructor("prison",[
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],],
  [[0,[[16,5]],[50],[2]],
  [1,[true,true,true,true]],]
);
const map
function createMAp() {
  if (rng.choice([0,1])) {
    structure.smallRoad.enCodetoObject
  } else {
    
  }
}