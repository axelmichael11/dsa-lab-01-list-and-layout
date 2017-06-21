'use strict';

const List = module.exports = function() {
  this.length = 0;
};

List.prototype.push = function(value) {
  this[this.length] = value;
  this.length++;
};

List.prototype.pop = function() {
  if (this.length < 1) return;
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
  (!finish)?finish=this.length:this.finish=finish;
  for (let i=start; i<finish; i++) {
    if (start<this[i]<=finish)
      newArray.push(this[i]);
  }
  return newArray;
};

List.prototype.reduce = function(callback, initial) {
  let result;
  let i;
  (initial)?initial=i:i=0;
  for (i; i<this.length; i++) {
    result = callback(result, this[i]);
    console.log(result);
  }
  return result;
};

let list = new List();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
console.log(list);
list.reduce((a,c)=>(a)+(c),2);
// console.log(result);
