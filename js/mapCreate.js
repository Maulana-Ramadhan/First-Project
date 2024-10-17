function NFSTR() {}
const enCodetoObject = ["air","solid","walk","door","chest"];
const configuration = ["choosedPlace","allowRotate","start"];
const ECTObc = ["","black","skyblue","brown","gray"];
NFSTR.prototype.metStructor = {
  reverseC(){return this.enCodetoObject.toReversed().map((ki)=>k.map((l,j)=>this.enCodetoObject[i][j]))},
  reverseR(){return this.enCodetoObject.map((k,i)=>k.toReversed().map((l,j)=>this.enCodetoObject[i][j]))},
  tranportI(){return this.enCodetoObject.map((k,i)=>k.map((l,j)=>this.enCodetoObject[j][i]))},
  tranportU(){return this.enCodetoObject.toReversed().map((k,i)=>k.toReversed().map((l,j)=>this.enCodetoObject[j][i]))},
  rotate90(){return this.enCodetoObject.toReversed().map((k,i)=>k.map((l,j)=>this.enCodetoObject[j][i]))},
  rotate180(){return this.enCodetoObject.toReversed().map((k,i)=>k.toReversed().map((l,j)=>this.enCodetoObject[i][j]))},
  rotate270(){return this.enCodetoObject.map((k,i)=>k.toReversed().map((l,j)=>this.enCodetoObject[j][i]))},
};
NFSTR.prototype.conStructorB = function(name,enCodetoObject,configuration) {
    this[name] = {
      enCodetoObject,
      configuration,
    };
    Object.assign(this[name], this.metStructor);
  },
NFSTR.prototype.conStructorR = function(name,proto) {
    this[name] = {
      enCodetoObject: proto[0],
      configuration: proto[1],
      limit: proto[2]||undefined,
      wall: {
        front: proto[3]||undefined,
        right: proto[4]||undefined,
        back: proto[5]||undefined,
        left: proto[6]||undefined,
      },
      walls: proto[7] || undefined,
    };
    Object.assign(this[name], this.metStructor);
  };
const structure = new NFSTR();
structure.conStructorR(("smallRoad"),[[
  [0],],
  [1,[true,true,true,true]],
  [-2,2],
  [[0,-1],[1,-1],[1,0],[1,1],[0,1]],
  [[-1,0],[-1,-1],[0,-1],[1,-1],[1,0]],
  [[0,-1],[-1,-1],[-1,0],[-1,1],[0,1]],
  [[-1,0],[-1,1],[0,1],[1,1],[1,0]],
  [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]],
]);
structure.conStructorR(("mediumRoad"),[[
  [1],[1],[1],[1],
  [1],[0],[0],[1],
  [1],[0],[0],[1],
  [1],[1],[1],[1]],
  [1,[true,true,true,true]],
]);
structure.conStructorR(("largeRoad"),[[
  [1],[1],[1],[1],[1],
  [1],[0],[0],[0],[1],
  [1],[0],[0],[0],[1],
  [1],[0],[0],[0],[1],
  [1],[1],[1],[1],[1],],
  [1,[true,true,true,true]]
]);
structure.conStructorR(("megaRoad"),[[
  [1],[1],[1],[1],[1],[1],
  [1],[0],[0],[0],[0],[1],
  [1],[0],[0],[0],[0],[1],
  [1],[0],[0],[0],[0],[1],
  [1],[0],[0],[0],[0],[1],
  [1],[1],[1],[1],[1],[1],],
  [1,[true,true,true,true]]
]);
structure.conStructorB(("basicSquare"),[[
  [1, 1, 0, 1, 1],
  [1, 0, 0, 0, 1],
  [0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1],
  [1, 1, 0, 1, 1],],
  [[0,[[[2,0],[0,3],[4,3]],[2,2,2],[50,50,50]]],
  [1,[true,true,true,true]],]
]);
structure.conStructorB(("treasureRoom"),[[
  [1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 1, 1],],
  [[0,[[[4,0],[0,5],[8,5]],[2,2,2],[50,50,50]]], //[configuration,[semua tiles yang diganti],[minimal, maksimal | yang harus diganti],[dengan tiles apa jika tidak diganti],[[tiles yang diacak],[bobot setiap tiles]]]
  [0,[[[4,4]],[2],[50],[100]]], //[configuration,[semua tiles yang diganti],[minimal, maksimal | yang harus diganti],[dengan tiles apa jika tidak diganti],[[tiles yang diacak],[bobot setiap tiles]]]
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
  [[0,[[16,5]],[2],[50]],
  [1,[true,true,true,true]],]
]);
const whichPath = [
  [-1, 0, "front"],
  [1, 0, "back"],
  [0, 1, "right"],
  [0, -1, "left"],
];

class NewMap {
  constructor(name,seed) {
    this.datas = {};
    this.name = name;
    this.rng = Srand(seed);
    this.map = {"-1": {"-1": 1, "0": 1, "1": 1,}, "0": {"-1": 1, "0": 2, "1": 1}, "1": {"-1": 1, "0": 1, "1": 1,}, };
    this.Cmap = [[0, 0]];
    this.branchRoad = [1, 10, 30];
    this.branchRoad.plus = function (a) { for (let i = this.length - 1, j = a; i > 0; i--, j+=a) this[i] += j; };
    this.branchRoad.mins = function (a) { this[a] = 10; };
    this.branchRoad.get = function () { return [this[0], this[0] + this[1], this[0] + this[1] + this[2]]; };
    this.whichMany = [[],[]];
    this.whichMany.plusing = [];
    this.current = "smallRoad";
    this.rng.branchRoad = (a) => {
      const ranD = this.rng.inRange(1, 100+(100*(this.Cmap.length-1))), indeks = this.branchRoad.get();
      for (let i = 4-a; i < 3; i++) {
        if (indeks[i] > ranD) {
          this.branchRoad.mins(i);
          return 4 - i;
        }
      }
      return 1;
    };
  }
  createMAp() {
    console.clear();
    for (const [k, v] of this.Cmap.entries()) {
      for (let i = structure[this.current].limit[0]; i <= structure[this.current].limit[1]; i++) 
      if (!this.map?.[v[0] + i]) this.map[v[0] + i] = {};
      for (let j = 0, i = whichPath[j]; j < 4; j++, i = whichPath[j]) {
        if (this.map[v[0] + i[0]][v[1] + i[1]] != 2) {
          if (
          (this.map[v[0] + i[0]][v[1] + i[1] + 1] == 2)? (
            (this.map[v[0] + i[0]][v[1] + i[1] - 1] == 2)? (
              (this.map[v[0] + i[0] + 1][v[1] + i[1]] != 2 || (this.map[v[0] + i[0] + 1][v[1] + i[1] + 1] != 2 && this.map[v[0] + i[0] + 1][v[1] + i[1] - 1] != 2)) && (this.map[v[0] + i[0] - 1][v[1] + i[1]] != 2 || (this.map[v[0] + i[0] - 1][v[1] + i[1] + 1] != 2 && this.map[v[0] + i[0] - 1][v[1] + i[1] - 1] != 2))
            ): (
              ((this.map[v[0] + i[0] + 1][v[1] + i[1]] != 2 || this.map[v[0] + i[0] + 1][v[1] + i[1] + 1] != 2) && (this.map[v[0] + i[0] - 1][v[1] + i[1]] != 2 || this.map[v[0] + i[0] - 1][v[1] + i[1] + 1] != 2)) &&
              ((this.map[v[0] + i[0] + 1][v[1] + i[1]] == 2 || this.map[v[0] + i[0] + 1][v[1] + i[1] - 1] != 2) && (this.map[v[0] + i[0] - 1][v[1] + i[1]] == 2 || this.map[v[0] + i[0] - 1][v[1] + i[1] - 1] != 2))
            )
          ): (
            (this.map[v[0] + i[0]][v[1] + i[1] - 1] == 2)? (
              ((this.map[v[0] + i[0] + 1][v[1] + i[1]] != 2 || this.map[v[0] + i[0] + 1][v[1] + i[1] - 1] != 2) && (this.map[v[0] + i[0] - 1][v[1] + i[1]] != 2 || this.map[v[0] + i[0] - 1][v[1] + i[1] - 1] != 2)) &&
              ((this.map[v[0] + i[0] + 1][v[1] + i[1]] == 2 || this.map[v[0] + i[0] + 1][v[1] + i[1] + 1] != 2) && (this.map[v[0] + i[0] - 1][v[1] + i[1]] == 2 || this.map[v[0] + i[0] - 1][v[1] + i[1] + 1] != 2))
            ): (
              (this.map[v[0] + i[0] + 1][v[1] + i[1]] == 2 || (this.map[v[0] + i[0] + 1][v[1] + i[1] + 1] != 2 && this.map[v[0] + i[0] + 1][v[1] + i[1] - 1] != 2)) && (this.map[v[0] + i[0] - 1][v[1] + i[1]] == 2 || (this.map[v[0] + i[0] - 1][v[1] + i[1] + 1] != 2 && this.map[v[0] + i[0] - 1][v[1] + i[1] - 1] != 2))
            )
          )) this.whichMany[0].push([v[0] + i[0], v[1] + i[1], i[2]]);
        } else this.whichMany[1].push([v[0] + i[0], v[1] + i[1], i[2]]);
      }
      if (this.whichMany[0].length == 0) {
        if (this.Cmap.length > 2) {
          this.Cmap.splice(k, 1);
          continue;
        } else {
          this.whichMany.shift();
        }
      }
      for (const [i,x] of Object.entries(this.rng.sample(this.whichMany[0], this.rng.branchRoad(this.whichMany[0].length)))) {
        this.map[x[0]][x[1]] = 2;
        for (const i of structure[this.current].walls) if (!this.map[x[0] + i[0]][x[1] + i[1]]) this.map[x[0] + i[0]][x[1] + i[1]] = 1;
        if (i == 0) this.Cmap[k] = x;
        else this.whichMany.plusing.push(x);
      }
      this.whichMany[0] = [];
      this.whichMany[1] = [];
    }
    this.Cmap.push(...this.whichMany.plusing);
    this.whichMany.plusing = [];
    this.branchRoad.plus(1/(this.Cmap.length||1));
  }
  loadMap() {
    let i = "";
    for (let i = -15; i <= 15; i++) {
    for (let j = -15; j <= 15; j++) {
      this.map[i][j]&&(ik += createElT(ECTObc[this.map[i][j]],i*10,j*10));
    }}
    canvasMap.innerHTML = ik;
    elPlayers.forEach((a) => {
      canvasMap.appendChild(a);
    });
  }
}

const AllMap = {};
function createEl({tagEl,id,className,event,html,text}) {
  const me = document.createElement(tagEl);
  id&&(me.id = id);
  className&&me.classList.add(...className);
  event&&me.addEventListener(event[0], event[1]);
  (text&&(me.innerText = text))&&(html&&(me.innerHTML = html));
  return me;
}
const createElT = (a,x,y) => `<div class="thus" style="background-color:${a};transform:translate(${x}px,${y}px)"></div>`;


/*
const map = {"-1": {"-1": 1, "0": 1, "1": 1,}, "0": {"-1": 1, "0": 2, "1": 1}, "1": {"-1": 1, "0": 1, "1": 1,}, };
const Cmap = [[0, 0]];
const branchRoad = [1, 10, 30];
branchRoad.plus = function (a) {
  for (let i = this.length - 1, j = a; i > 0; i--, j+=a) {
    this[i] += j;
  }
};
branchRoad.mins = function (a) {
  this[a] = 10;
};
branchRoad.get = function () {
  return [this[0], this[0] + this[1], this[0] + this[1] + this[2]];
};
const whichMany = [[],[]];
whichMany.plusing = [];
const current = "smallRoad";
function createMAp(rng) {
  console.clear();
  for (const [k, v] of Cmap.entries()) {
    for (let i = structure[current].limit[0]; i <= structure[current].limit[1]; i++) 
    if (!map?.[v[0] + i]) map[v[0] + i] = {};
    for (let j = 0, i = whichPath[j]; j < 4; j++, i = whichPath[j]) {
      if (map[v[0] + i[0]][v[1] + i[1]] != 2) {
        if (
        (map[v[0] + i[0]][v[1] + i[1] + 1] == 2)? (
          (map[v[0] + i[0]][v[1] + i[1] - 1] == 2)? (
            (map[v[0] + i[0] + 1][v[1] + i[1]] != 2 || (map[v[0] + i[0] + 1][v[1] + i[1] + 1] != 2 && map[v[0] + i[0] + 1][v[1] + i[1] - 1] != 2)) && (map[v[0] + i[0] - 1][v[1] + i[1]] != 2 || (map[v[0] + i[0] - 1][v[1] + i[1] + 1] != 2 && map[v[0] + i[0] - 1][v[1] + i[1] - 1] != 2))
          ): (
            ((map[v[0] + i[0] + 1][v[1] + i[1]] != 2 || map[v[0] + i[0] + 1][v[1] + i[1] + 1] != 2) && (map[v[0] + i[0] - 1][v[1] + i[1]] != 2 || map[v[0] + i[0] - 1][v[1] + i[1] + 1] != 2)) &&
            ((map[v[0] + i[0] + 1][v[1] + i[1]] == 2 || map[v[0] + i[0] + 1][v[1] + i[1] - 1] != 2) && (map[v[0] + i[0] - 1][v[1] + i[1]] == 2 || map[v[0] + i[0] - 1][v[1] + i[1] - 1] != 2))
          )
        ): (
          (map[v[0] + i[0]][v[1] + i[1] - 1] == 2)? (
            ((map[v[0] + i[0] + 1][v[1] + i[1]] != 2 || map[v[0] + i[0] + 1][v[1] + i[1] - 1] != 2) && (map[v[0] + i[0] - 1][v[1] + i[1]] != 2 || map[v[0] + i[0] - 1][v[1] + i[1] - 1] != 2)) &&
            ((map[v[0] + i[0] + 1][v[1] + i[1]] == 2 || map[v[0] + i[0] + 1][v[1] + i[1] + 1] != 2) && (map[v[0] + i[0] - 1][v[1] + i[1]] == 2 || map[v[0] + i[0] - 1][v[1] + i[1] + 1] != 2))
          ): (
            (map[v[0] + i[0] + 1][v[1] + i[1]] == 2 || (map[v[0] + i[0] + 1][v[1] + i[1] + 1] != 2 && map[v[0] + i[0] + 1][v[1] + i[1] - 1] != 2)) && (map[v[0] + i[0] - 1][v[1] + i[1]] == 2 || (map[v[0] + i[0] - 1][v[1] + i[1] + 1] != 2 && map[v[0] + i[0] - 1][v[1] + i[1] - 1] != 2))
          )
        )) whichMany[0].push([v[0] + i[0], v[1] + i[1], i[2]]);
      } else whichMany[1].push([v[0] + i[0], v[1] + i[1], i[2]]);
    }
    if (whichMany[0].length == 0) {
      if (Cmap.length > 2) {
        Cmap.splice(k, 1);
        continue;
      } else {
        whichMany.shift();
      }
    }
    for (const [i,x] of Object.entries(rng.sample(whichMany[0], rng.branchRoad(whichMany[0].length)))) {
      map[x[0]][x[1]] = 2;
      for (const i of structure[current].walls) if (!map[x[0] + i[0]][x[1] + i[1]]) map[x[0] + i[0]][x[1] + i[1]] = 1;
      if (i == 0) Cmap[k] = x;
      else whichMany.plusing.push(x);
    }
    whichMany[0] = [];
    whichMany[1] = [];
  }
  Cmap.push(...whichMany.plusing);
  whichMany.plusing = [];
  branchRoad.plus(1/(Cmap.length||1));
}
*/