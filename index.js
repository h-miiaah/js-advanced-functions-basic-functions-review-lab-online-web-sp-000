// Your code here
// function declaration
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// function expresssion
let mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

let wrapAdjective = function (style = "*") {
  return function (adjective = "special") {
    return `You are ${style}${adjective}${style}!`;
  };
};

const Calculator = {
  add: function (a, b) {
    return a + b;
  },

  subtract: function (a, b) {
    return a - b;
  },

  multiply: function (a, b) {
    return a * b;
  },

  divide: function (a, b) {
    return a / b;
  },
};

let actionApplyer = function (startingInteger, array) {
  let a = startingInteger;
  for (let i = 0; i < array.length; i++) {
    a = array[i](a);
  }
  return a;
};
