import { Pet } from './../src/pet';

class Hamster extends Pet {
  constructor(name) {
    super(name)

    this.hunger = 10,
    this.sleep = 10,
    this.love = 10,
    this.sass = 0
  }
}

export { Hamster };
