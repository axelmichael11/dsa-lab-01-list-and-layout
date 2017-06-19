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

      list = new list();
      result = list.pop();
      expect(result).toEqual(undefined);
      expect(list.length).toEqual(1);
      expect(list[2]).toBe(0);
    });
  });
  // describe('testing pop')
});
