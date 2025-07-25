class StudentHogwarts {
  #privateScore = 0; 
  #name = null;

  setName(newName) {
    this.#name = newName;
  }

  rewardStudent() {
    this.#changeScoreBy(1);
  }

  penalizeStudent() {
    this.#changeScoreBy(-1);
  }

  getScore() {
    return `${this.#name}: ${this.#privateScore}`;
  }

  #changeScoreBy(points) {
    this.#privateScore += points;
  }
}

const harry = new StudentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());  // Harry: 4

const draco = new StudentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());  // Draco: -2

