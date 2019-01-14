
class Pet {

  constructor(name){

    this.name = name,
    this.food = 10,
    this.water = 10,
    this.waste = 0,
    this.clean = 10,
    this.excercise = 10,
    this.sleep = 10,
    this.love = 10,
    this.sass = 0

  }

  setSchedule() {
  setInterval(() => {
    this.food --;
    this.water --;
    this.waste += 1;
    this.clean -= .2;
    this.excercise --;
    this.sleep -= .5;
    this.love -= 3;
    this.sass += 1
  }, 10000);
}
}

export { Pet };
