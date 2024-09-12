const enCodetoObject = ["air","solid","door","chest"];
const configuration = ["choosedPlace","allowRotate"];
const structur = {
  basicSquare: {
    enCodetoObject: [
      [1, 1, 2, 1, 1],
      [1, 0, 0, 0, 1],
      [2, 0, 0, 0, 2],
      [1, 0, 0, 0, 1],
      [1, 1, 2, 1, 1],
    ],
    configuration: [
      [1]
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
  }
};
(function() {
  const dummy = Array(structur.length).fill(Array(structur.length));
  for (const i of structur) {
    [y][x] = [x][y];
    for (const j of i.enCodetoObject) {
      for (const k of j) {
        
      }
    }
  }
}());
function createMAp() {
  
}