const enCodetoObject = ["air","solid","door","chest"];
const configuration = [];
const structur = {
  basicSquare: {
    enCodetoObject: [
      1 , 1, 25, 1, 1 ,
      1 , 0, 0 , 0, 1 ,
      25, 0, 0 , 0, 25,
      1 , 0, 0 , 0, 1 ,
      1 , 1, 25, 1, 1 ,
    ],
    configuration: {
    },
  },
    treasureRoom: [
        0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 1, 0, 1, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 3, 0, 1, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 1, 0, 1, 0,
        0, 0, 0, 0, 0, 0, 0,
    ],
    prison: [
        0, 0, 0, 1,
        0, 0, 0, 1,
        0, 0, 0, 1,
    ]
};