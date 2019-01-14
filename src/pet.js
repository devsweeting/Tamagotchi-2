
class Pet {

  constructor(name){

    this.name = name,
    this.hunger = 10,
    this.water = 10,
    this.waste = 0,
    this.clean = 10,
    this.exercise = 10,
    this.sleep = 10,
    this.love = 10,
    this.sass = 0

  }

  setSchedule() {
    setInterval(() => {
      this.hunger --;
      this.water --;
      this.waste += 1;
      this.clean -= .2;
      this.exercise --;
      this.sleep -= .5;
      this.love -= 3;

      if (this.love <= 5){
        this.sass += 1;
      } else if (this.sleep <= 0){
        this.sass += 5;
      } else if (this.clean <= 2){
        this.sass += 2;
      } else if (this.waste > 10){
        this.sass += 6;
      } else if (this.water <= 0){
        this.sass += 5;
      } else if (this.hunger <= 0){
        this.sass += 5;
      }
      console.log(this.name);
      console.log("Hunger level: " + this.hunger);
      console.log("Water level: " + this.water);
      console.log("Waste level: " + this.waste);
      console.log("Clean level: " + this.clean.toFixed(2));
      console.log("Exercise level: " + this.exercise);
      console.log("Sleep Level: " + this.sleep);
      console.log("Love level: " + this.love);
      console.log("Sass level: " + this.sass);
      console.log("-----------------");

    }, 10000);
  }

  feedPet() {
    this.hunger += 5;
  }

  waterPet() {
    this.water += 5;
  }

  wastePet() {
    this.waste = 0;
  }

  cleanPet() {
    this.clean = 10;
  }

  exercisePet() {
    this.exercise += 5;
  }

  sleepPet() {
    this.sleep = 10;
  }

  lovePet() {
    this.love += 2;
  }

  deathOfPet() {

    if (this.hunger < -10){
      return "Your pet died of starvation.";
    } else if (this.water < -10){
      return "Your pet died of thirst.";
    } else if (this.waste > 20){
      return "Your pet died of infection.";
    } else if (this.clean < 0){
      return "Your pet is disgusting. You dont deserve a pet.";
    } else if (this.exercise < -10) {
      return "Your pet died of cardiac arrest.";
    } else if (this.sleep < -15) {
      return "Your pet died of sleep deprevation.";
    } else if (this.love < -20) {
      return "Your pet committed suicide.";
    } else if (this.sass > 20) {
      return "Your pet stole your credit card, your girl, and fled to the Caribbean.";
    }
  }

}

export { Pet };
