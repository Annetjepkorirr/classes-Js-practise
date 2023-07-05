//   4Migration
class Migration {
    constructor(species, location, weatherPattern, riverLevels) {
        this.species = species;
        this.location = location;
        this.weatherPattern = weatherPattern;
        this.riverLevels = riverLevels;
    }
    migration() {
        if (this.weatherPattern === "dry" && this.riverLevels === "low") {
            console.log(`Migration of ${this.species} will occur from ${this.location} due to lack of water and food.`);
        } else {
            console.log(`Migration of ${this.species} will not occur from ${this.location} due to presence of food and water.`);
        }
    }
}
const migrationInstance = new Migration("wildebeest", "Serengeti", "wet", "high");
migrationInstance.migration();
//
//
