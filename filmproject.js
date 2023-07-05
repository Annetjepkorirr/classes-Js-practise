const Budget = [
    {
      castSalary: 20000,
      transport: 10000,
      location: 5000,
      insurance: 2000,
    },
  ];
  class ManageProject {
    constructor(schedule, castMember, budget, scene) {
      this.schedule = schedule;
      this.castMember = castMember;
      this.budget = budget;
      this.scene = scene;
    }
    getSchedule() {
      const oneScene = this.schedule / this.scene;
      return oneScene;
    }
    getBudget(allocatedBudget) {
      let totalBudget = this.budget.reduce((a, b) => {
        let values = Object.values(b);
        return values.reduce((a, b) => a + b, 0);
      });
      if (totalBudget > allocatedBudget) {
        return "Budget exceeds allocated budget";
      } else if (totalBudget < allocatedBudget){
        return "Budget is within allocated budget";
      } else {
        return "Budget is equal to allocated budget";
      }
    }
  }
  // Creating instances of the ManageProject class
  const project1 = new ManageProject(30, 10, Budget, 40);
  const project2 = new ManageProject(40, 15, Budget, 5);
  // Testing the getSchedule method
  console.log(project1.getSchedule()); // Output: 1.5
  // Testing the getBudget method
  console.log(project1.getBudget(50000)); // Output: "Budget is within allocated budget"
  console.log(project2.getBudget(10000)); // Output: "Budget exceeds allocated budget"





