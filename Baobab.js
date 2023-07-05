// posibole fruite
let empty_list = [];
class Possible_Fruit {
    constructor(powers, effect, season, name) {
        this.powers = powers;
        this.effect = effect;
        this.season = season;
        this.name = name;
    }
    getFruit() {
        return ` The ${this.name} ${this.effect} and ${this.powers} during the ${this.season} season`;
    }
}
let fruits = new Possible_Fruit("changecolor", "gives energy", "wet", "big baobab");
empty_list.push(fruits);
console.log(fruits.getFruit());
console.log(empty_list);



class Seasons {
    constructor(seasons) {
        this.seasons = seasons;
    }
    predict_fruit() {

        // let b = empty_list.filter(item => item.season === this.seasons)
        // return b
        for (let item of empty_list) {
            if (this.seasons === item.season) {
                console.log(`${item.name} was produced in ${this.seasons} season`);
            }
        }
    }
}
let s = new Seasons("wet");
s.predict_fruit();