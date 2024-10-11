const rng = (function rnd(a) { 
function r() { 
  r._mz = 4294967295&36969*(65535&r._mz)+(r._mz>>16),
  r._mw = 4294967295&18e3*(65535&r._mw)+(r._mw>>16);
  return 0.5 + (4294967295&(r._mz<<16)+r._mw)/4294967296; 
} r._mz = 123456789, this._mw = this._seed = a || 1+Math.floor(4294967295*Math.random()); r.seed = function(a) { return a == null ? this._seed : (this._mz = 123456789, this._mw = this._seed = a); }; r.randomize = function() { return this.seed(1+Math.floor(4294967295*Math.random())); }; r.getState = function() { return { seed: this._seed, mz: this._mz, mw: this._mw }; }; r.inRange = function(c, a) { return c+this()*(a-c); }; 
r.intInRange = function(a, b) {
  return a+Math.floor(this()*(b-a+1)); 
}; 
r.choice = function(a) {
  if (0 === a.length) return false;
  return a[this.intInRange(0, a.length-1)]; 
}; 
r.choices = function(a, b) {
  const c = Array(b); 
  for (let d = 0; d < b; d++) c[d] = this.choice(a);  
  return c; 
}; 
r.sample = function(a, b) {
  if (b > a.length) throw new Error("Sample size cannot exceed population size."); 
  let e = Array(b);
  for (let c, d = a.length-1, f = {}, g = 0; g < b; g++) {
    do c = this.intInRange(0, d);
    while (f[c]);
    e[g] = a[c], f[c] = !0; 
  } 
  return e; 
}; 
r.shuffle = function(a) {
  for (let d = a.length-1; 0 < d; d--) {
    const b = this.intInRange(0, d-1);
    c = a[d]; a[d] = a[b]; a[b] = c; 
  }
  return a; 
};return r; }(7));
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

const map = { 0: { 0: 2 } };
const Cmap = [[0, 0]];
const branchRoad = [1, 10, 30];
const whichPath = [
  [-1, 0, "front"],
  [1, 0, "back"],
  [0, 1, "right"],
  [0, -1, "left"],
];
const EightWall = [
  [-1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
];
branchRoad.plus = function (a) {
  for (let i = this.length - 1, j = a; i > 0; i--, j+=a) {
    this[i] += j;
  }
};
branchRoad.mins = function (a) {
  //console.log(this[a],"you can");
  this[a] = 10;
  //console.log(this[a],"you can");
};
branchRoad.get = function () {
  return [this[0], this[0] + this[1], this[0] + this[1] + this[2]];
};
console.log(branchRoad);
rng.branchRoad = function (a) {
  //console.log(a);
  const ranD = this.inRange(1, 100+(100*(Cmap.length-1))), indeks = branchRoad.get();
  console.log("value", ...indeks, ranD);
  for (let i = 4-a; i < 3; i++) {
    if (indeks[i] > ranD) {
      branchRoad.mins(i);
      console.log("honey",i);
      return 4 - i;
    }
  }
  return 1;
};

restartMap();
function createMAp(a) {
  const current = "smallRoad";
  console.clear();
  const plusing = [];
  for (const [k, v] of Cmap.entries()) {
    for (let i = -2; i < structure[current].enCodetoObject.length + 2; i++) 
    if (!map?.[v[0] + i]) map[v[0] + i] = {};
    const whichMany = [];
    for (let j = 0, i = whichPath[j]; j < 4; j++, i = whichPath[j]) {
     // let bool = false;
      /*if (map[v[0] + i[0]][v[1] + i[1]] != 2) {
        if (map[v[0] + i[0]][v[1] + i[1] + 1] == 2) {
          if (map[v[0] + i[0]][v[1] + i[1] - 1] == 2) {
            if ((map[v[0] + i[0] + 1][v[1] + i[1]] != 2 || (map[v[0] + i[0] + 1][v[1] + i[1] + 1] != 2 && map[v[0] + i[0] + 1][v[1] + i[1] - 1] != 2)) && (map[v[0] + i[0] - 1][v[1] + i[1]] != 2 || (map[v[0] + i[0] - 1][v[1] + i[1] + 1] != 2 && map[v[0] + i[0] - 1][v[1] + i[1] - 1] != 2))) {
              bool = true;
              //console.log("nilai",i[2],true,true);
            }
          } else {
            if ((map[v[0] + i[0] + 1][v[1] + i[1]] != 2 || map[v[0] + i[0] + 1][v[1] + i[1] + 1] != 2) && (map[v[0] + i[0] - 1][v[1] + i[1]] != 2 || map[v[0] + i[0] - 1][v[1] + i[1] + 1] != 2)) {
              bool = true;
              //console.log("nilai",i[2],true,false);
            }
          }
        } else {
          if (map[v[0] + i[0]][v[1] + i[1] - 1] == 2) {
            if ((map[v[0] + i[0] + 1][v[1] + i[1]] != 2 || map[v[0] + i[0] + 1][v[1] + i[1] - 1] != 2) && (map[v[0] + i[0] - 1][v[1] + i[1]] != 2 || map[v[0] + i[0] - 1][v[1] + i[1] - 1] != 2)) {
              bool = true;
              //console.log("nilai",i[2],false,true);
            }
          } else {
            //console.log("nilai",i[2],false);
            bool = true;
          }
        }
      }*/
      const bool = 
      //(map[v[0] + i[0]][v[1] + i[1]] != 2)&&(
        (map[v[0] + i[0]][v[1] + i[1] + 1] == 2)? (
          (map[v[0] + i[0]][v[1] + i[1] - 1] == 2)? (
            ((map[v[0] + i[0] + 1][v[1] + i[1]] != 2 || (map[v[0] + i[0] + 1][v[1] + i[1] + 1] != 2 && map[v[0] + i[0] + 1][v[1] + i[1] - 1] != 2)) && (map[v[0] + i[0] - 1][v[1] + i[1]] != 2 || (map[v[0] + i[0] - 1][v[1] + i[1] + 1] != 2 && map[v[0] + i[0] - 1][v[1] + i[1] - 1] != 2)))
          ):(
            ((map[v[0] + i[0] + 1][v[1] + i[1]] != 2 || map[v[0] + i[0] + 1][v[1] + i[1] + 1] != 2) && (map[v[0] + i[0] - 1][v[1] + i[1]] != 2 || map[v[0] + i[0] - 1][v[1] + i[1] + 1] != 2))
          )
        ):(
          (map[v[0] + i[0]][v[1] + i[1] - 1] != 2)|| (
            ((map[v[0] + i[0] + 1][v[1] + i[1]] != 2 || map[v[0] + i[0] + 1][v[1] + i[1] - 1] != 2) && (map[v[0] + i[0] - 1][v[1] + i[1]] != 2 || map[v[0] + i[0] - 1][v[1] + i[1] - 1] != 2))
          )
        );
      //);
      if (bool) whichMany.push([v[0] + i[0], v[1] + i[1], i[2]]);
    }
    //console.log(Cmap[k]);
    if (whichMany.length == 0) {
      Cmap.splice(k, 1);
      //console.log("kena",Cmap[k]);
      continue;
    }
    //console.log("Cmap",...Cmap);
    //console.log("lanjut",Cmap[k]);
    //console.log(branchRoad[0],branchRoad[1],branchRoad[2],"value");
    console.log(whichMany, "kuuuk");
    const hmany = rng.branchRoad(whichMany.length);
    console.log(hmany, "kqk");
    const meH = rng.sample(whichMany, hmany);
    console.log(hmany, ...meH);
    //console.log(branchRoad[0],branchRoad[1],branchRoad[2],"value");
    for (const x of meH) {
      //console.log(78,x);
      map[x[0]][x[1]] = 2;
      for (const i of structure[current].wall[x[2]]) {
        if (!map[v[0] + i[0]][v[1] + i[1]]) map[v[0] + i[0]][v[1] + i[1]] = 1;
      }
    }
    for (const [i, j] of meH.entries()) {
      if (i == 0) Cmap[k] = j;
      else plusing.push(j);
    }
    //restartMap();
  }
  console.log(branchRoad[2],"you can");
  Cmap.push(...plusing);
  console.log(Cmap);
  branchRoad.plus(1/(Cmap.length||0));
}

