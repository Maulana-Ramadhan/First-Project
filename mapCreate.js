const enCodetoObject = ["air","solid","door","chest"];
const configuration = ["choosedPlace","allowRotate"];
const structur = {
  // basicSquare: {
  //   enCodetoObject: [
  //     [1, 1, 1, 1, 1],
  //     [1, 0, 0, 0, 1],
  //     [1, 0, 0, 0, 1],
  //     [1, 0, 0, 0, 1],
  //     [1, 1, 2, 1, 1],
  //   ],
  //   configuration: [
  //     [1], 
  //   ],
  // },
  // treasureRoom: {
  //   enCodetoObject: [
  //     [1, 1, 1, 1, 2, 1, 1, 1, 1],
  //     [1, 0, 0, 0, 0, 0, 0, 0, 1],
  //     [1, 0, 1, 1, 0, 1, 1, 0, 1],
  //     [1, 0, 1, 0, 0, 0, 1, 0, 1],
  //     [2, 0, 0, 0, 3, 0, 0, 0, 2],
  //     [1, 0, 1, 0, 0, 0, 1, 0, 1],
  //     [1, 0, 1, 1, 0, 1, 1, 0, 1],
  //     [1, 0, 0, 0, 0, 0, 0, 0, 1],
  //     [1, 1, 1, 1, 2, 1, 1, 1, 1],
  //   ],
  //   configuration: [
  //     [0,[4,36,44,76],[4],[1]] //[configuration,[semua tiles yang diganti],[minimal yang harus diganti],[dengan tiles apa jika tidak diganti],[[tiles yang diacak],[bobot setiap tiles]]]
  //     [1],
  //   ],
  // },
  prison: {
    enCodetoObject: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1],
      [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
      [1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    configuration: [
      [1]
    ],
  },
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
structur.conStructor("basicSquare",[
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 2, 1, 1],],
  [[1],]
);
structur.conStructor("treasureRoom",[
  [1, 1, 1, 1, 2, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 1],
  [2, 0, 0, 0, 3, 0, 0, 0, 2],
  [1, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 2, 1, 1, 1, 1],],
  [[0,[4,36,44,76],[4],[1]] //[configuration,[semua tiles yang diganti],[minimal yang harus diganti],[dengan tiles apa jika tidak diganti],[[tiles yang diacak],[bobot setiap tiles]]]
  [1],],
);
structur.conStructor("prison",[
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],],
  [[1]]
);
const specialArrayMap = (a,x,y) => structur[a][y][x];
function createMAp() {
  
}