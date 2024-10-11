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
  conStructorB(name,enCodetoObject,configuration) {
    this[name] = {
      enCodetoObject,
      configuration,
    };
    Object.assign(this[name], this.metStructor);
  },
  conStructorR(name,proto) {
    this[name] = {
      enCodetoObject: proto[0],
      configuration: proto[1],
      limit: proto[2],
      wall: {
        front: proto[3]||undefined,
        right: proto[4]||undefined,
        back: proto[5]||undefined,
        left: proto[6]||undefined,
      },
    };
    Object.assign(this[name], this.metStructor);
  }
};
structure.conStructorR(("smallRoad"),[[
  [0],]
  [1,[true,true,true,true]],
  [[0,-1],[1,-1],[1,0],[1,1],[0,1]],
  [[-1,0],[-1,-1],[0,-1],[1,-1],[1,0]],
  [[0,-1],[-1,-1],[-1,0],[-1,1],[0,1]],
  [[-1,0],[-1,1],[0,1],[1,1],[1,0]],
  [-2,2],
]);
structure.conStructorR(("mediumRoad"),[[
  [1],[1],[1],[1]
  [1],[0],[0],[1]
  [1],[0],[0],[1]
  [1],[1],[1],[1]]
  [1,[true,true,true,true]],
]);
structure.conStructorR(("largeRoad"),[[
  [1],[1],[1],[1],[1],
  [1],[0],[0],[0],[1],
  [1],[0],[0],[0],[1],
  [1],[0],[0],[0],[1],
  [1],[1],[1],[1],[1],
  ],
  [1,[true,true,true,true]]
]);
structure.conStructorR(("megaRoad"),[[
  [1],[1],[1],[1],[1],[1],
  [1],[0],[0],[0],[0],[1],
  [1],[0],[0],[0],[0],[1],
  [1],[0],[0],[0],[0],[1],
  [1],[0],[0],[0],[0],[1],
  [1],[1],[1],[1],[1],[1],
  ],
  [1,[true,true,true,true]]
]);
structure.conStructorB(("basicSquare"),[[
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 2, 1, 1],],
  [[0,[[2,0],[0,3],[4,3]],[50,50,50],[2]],
  [1,[true,true,true,true]],]
]);
structure.conStructorB(("treasureRoom"),[[
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
]);
structure.conStructorB(("prison"),[[
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
]);

const map = { 0: { 0: 2 } };
const Cmap = [[0, 0]];
const branchRoad = [1, 10, 30];
const whichPath = [
  [-1, 0, "front"],
  [1, 0, "back"],
  [0, 1, "right"],
  [0, -1, "left"],
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
      //const bool = 
      //(map[v[0] + i[0]][v[1] + i[1]] != 2)&&(
      //);
      //bool
      if (
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
        )
      ) whichMany.push([v[0] + i[0], v[1] + i[1], i[2]]);
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
    //console.log(whichMany, "kuuuk");
    //const hmany = ;
    //console.log(hmany, "kqk");
    //const meH = rng.sample(whichMany, rng.branchRoad(whichMany.length));
    //console.log(hmany, ...meH);
    //console.log(branchRoad[0],branchRoad[1],branchRoad[2],"value");
    for (const [i,x] of Object.entries(rng.sample(whichMany, rng.branchRoad(whichMany.length)))) {
      map[x[0]][x[1]] = 2;
      for (const i of structure[current].wall[x[2]]) if (!map[v[0] + i[0]][v[1] + i[1]]) map[v[0] + i[0]][v[1] + i[1]] = 1;
      if (i == 0) Cmap[k] = x;
      else plusing.push(x);
    }
  }
  console.log(branchRoad[2],"you can");
  Cmap.push(...plusing);
  console.log(Cmap);
  branchRoad.plus(1/(Cmap.length||0));
}

