import { Animal } from './../src/bear.js';
// import { JestEnvironment } from '@jest/environment';

// import { BaseReporter } from "@jest/reporters";
// import { exportAllDeclaration } from '@babel/types';

describe('Animal', () => {
  jest.useFakeTimers();
  let animal;

  beforeEach(function() {
    animal = new Animal("spot");
    animal.setHunger();
    animal.setSleep();
    animal.setPlay();
  });

  test('should have a name a foodLevel, sleepLevel and playLevel equal to 10', () =>{
    expect(animal.name).toEqual("spot");
    expect(animal.foodLevel).toEqual(10);
    expect(animal.sleepLevel).toEqual(10);
    expect(animal.playLevel).toEqual(10);
  });
  test('should have food level of 9 after 10001', () => {
    jest.advanceTimersByTime(10001);
    expect(animal.foodLevel).toEqual(9);
  });
  test('should have sleep level of 9 after 50001', () => {
    jest.advanceTimersByTime(50001);
    expect(animal.sleepLevel).toEqual(9);
  });
  test('should have play level of 9 after 30001', () => {
    jest.advanceTimersByTime(25001);
    expect(animal.playLevel).toEqual(9);
  });
  test("should have your animal die if it's food level drops to 0 or below", () => {
    animal.foodLevel = 0
    expect(animal.isAlive()).toEqual(false)
  })
  test('should decrimate foodLevel by 1 if sleepLevel drops below 0', () => {
    animal.sleepLevel = 0;
    jest.advanceTimersByTime(50001);
    expect(animal.foodLevel).toEqual(4);
  })
  test('should decrimate sleepLevel by 1 if playLevel drops below 0', () => {
    animal.playLevel = 0;
    jest.advanceTimersByTime(25001);
    expect(animal.sleepLevel).toEqual(9)
  })
  test('should set food level back to 10 when animal is fed', () => {
    animal.foodLevel = 1;
    animal.feedAnimal();
    expect(animal.foodLevel).toEqual(10);
  })

});