'use strict';

const expect = require('expect');
const List = require('../list.js');


describe('testing list', () => {
  it('should append a length of zero', () => {
    let list = new List();
    expect(list.length).toEqual(0);
  });


  describe('testing push', () => {
    it('should append a value to the list', () => {
      let list = new List();
      list.push('yeah dude');
      expect(list[0]).toEqual('yeah dude');
      expect(list.length).toEqual(1);

      list.push('booyes');
      expect(list[1]).toEqual('booyes');
      expect(list.length).toEqual(2);
    });
  });


  describe('testing pop', () => {
    it('should pop off a value from the list', () => {
      let list = new List();

      list.push(1);
      list.push(2);
      list.push(3);

      let result = list.pop();
      expect(result).toEqual(3);
      expect(list.length).toEqual(2);
      expect(list[2]).toBe(undefined);


      // console.log(list);
      list = new List();
      result = list.pop();
      expect(result).toEqual(undefined);
      expect(list.length).toEqual(0);
    });
  });


  describe('testing map', () => {
    it('should add each value in the array by two...', () => {
      let list = new List();

      list.push(1);
      list.push(2);
      list.push(3);
      // console.log(list);
      let result = list.map((num) => num + 2);
      expect(result.length).toEqual(3);
      expect(result[0]).toEqual(3);
      expect(result[1]).toEqual(4);
      expect(result[2]).toEqual(5);

    });
  });
  describe('testing filter', () => {
    it('should filter out every value less than 4', () => {
      let list = new List();

      list.push(1);
      list.push(2);
      list.push(3);
      list.push(4);

      let result = list.filter((value) => {
        if (value > 2)
          return value;
      });

      expect(result.length).toEqual(2);
      expect(result[0]).toEqual(3);
      expect(result[1]).toEqual(4);
      expect(result[4]).toEqual(undefined);
      expect(result[5]).toEqual(undefined);

    });
  });
  describe('testing slice', () => {
    it('should slice this example list from everything between 4 and 7...', () => {

      let list = new List();

      list.push(1);
      list.push(2);
      list.push(3);
      list.push(4);
      list.push(5);
      list.push(6);
      list.push(7);
      list.push(8);

      expect(list.length).toEqual(8);
      let result = list.slice(3,7);

      expect(result.length).toEqual(4);
      expect(result[0]).toEqual(4);
      expect(result[1]).toEqual(5);
      expect(result[2]).toEqual(6);
      expect(result[3]).toEqual(7);
      expect(result[4]).toEqual(undefined);


    });
  });
  describe('testing reduce', () => {
    it('should add up to 10', () => {
      let list = new List();

      list.push(1);
      list.push(2);
      list.push(3);
      list.push(4);
      console.log(list);
      let result = list.reduce(((a,c)=>a+c),0);
      console.log(result);
      expect(result).toEqual(10);
    });
  });
});
