import { Pet } from './../src/pet';

describe('Pet', function(){
  let snuggs = new Pet("Snuggs");

  beforeEach(function() {
    jasmine.clock().install();
    snuggs.setSchedule();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should test if we can create a new pet object', function(){
    const name = "Sally";
    let newAnimal = new Pet(name);
    expect(newAnimal.food).toEqual(10);
  });

  it('should check to see if hunger level drops to 9 after 10 seconds', function() {
    jasmine.clock().tick(10001);
    expect(snuggs.love).toEqual(7);
  });



});
