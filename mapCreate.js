const enCodetoObject = ["air","solid","door","chest"];
const configuration = ["choosedPlace","allowRotate"];
function conStructor(name,enCodetoObject,configuration) {
  
}
const structur = {
  basicSquare: {
    enCodetoObject: [
      [1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 1, 2, 1, 1],
    ],
    configuration: [
      [1], 
    ],
  },
  treasureRoom: {
    enCodetoObject: [
      [1, 1, 1, 1, 2, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 1, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 1, 0, 1],
      [2, 0, 0, 0, 3, 0, 0, 0, 2],
      [1, 0, 1, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 1, 0, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 2, 1, 1, 1, 1],
    ],
    configuration: [
      [0,[4,36,44,76],[4],[1]] //[configuration,[semua tiles yang diganti],[minimal yang harus diganti],[dengan tiles apa jika tidak diganti],[[tiles yang diacak],[bobot setiap tiles]]]
      [1],
    ],
  },
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
    reverseC(){return t.map((k,i)=>k.map((l,j)=>t[j][i]))},
    reverseR(){},
    tranportI(){},
    tranportU(){},
    rotate90(){},
    rotate180(){},
    rotate270(){},
  },
  conStructor(name,enCodetoObject,configuration) {
    this.name = {
      enCodetoObject,
      configuration,
      
    };
  }
};
const specialArrayMap = (a,x,y) => structur[a][y][x];
function createMAp() {
  
}