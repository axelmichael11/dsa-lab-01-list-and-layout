'use strict';

const List = module.exports = function() {
  this.length = 0;
};

List.prototype.push = function(value) {
  this[this.length] = value;
  this.length++;
};

List.prototype.pop = function() {
  if (this.length < 1) return
  let result = this[this.length-1];
  delete this[this.length -1];
  this.length--;
  return result;
};

List.prototype.map = function(callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));

  }
  return newArray;
};

List.prototype.filter = function(callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]))
      newArray.push(this[i]);
  }
  return newArray;
};


List.prototype.slice = function(start, finish) {
  let newArray = [];
  for (let i=0; i<this.length; i++) {
    if (start<this[i]<=finish)
      newArray.push(this[i]);
  }
  return newArray;
};

// List.prototype.reduce = function(acc, prev, curr) {
//   let newArray = [];
//   for (let i=0; i<this.length; i++) {
//     if (start<=this[i]<=finish)
//       newArray.push(this[i]);
//   }
//   return newArray;
// };
