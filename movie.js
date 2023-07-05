// 3 Film projects
//
//
class FilmProject {
    constructor(title, castMembers, shootingSchedule, budget) {
      this.title = title;
      this.castMembers = castMembers;
      this.shootingSchedule = shootingSchedule;
      this.budget = budget;
    }
    updateCastMembers(newCastMembers) {
      this.castMembers = newCastMembers;
    }
    updateShootingSchedule(newSchedule) {
      this.shootingSchedule = newSchedule;
    }
    updateBudget(newBudget) {
      this.budget = newBudget;
    }
    displayProjectDetails() {
      console.log(`Title: ${this.title}`);
      console.log(`Cast Members: ${this.castMembers.join(', ')}`);
      console.log(`Shooting Schedule: ${this.shootingSchedule}`);
    //   console.log(Budget: $${this.budget});
    //   console.log("-------------------------");
    }
  }
  // Create film project instances
  const filmProject1 = new FilmProject("Movie 1", ["Actor 1", "Actor 2", "Actor 3"], "June 2023", 1000000);
  const filmProject2 = new FilmProject("Movie 2", ["Actor 4", "Actor 5"], "July 2023", 1500000);
  // Update film project details
  filmProject1.updateCastMembers(["Actor 1", "Actor 3"]);
  filmProject1.updateShootingSchedule("August 2023");
  filmProject2.updateBudget(2000000);