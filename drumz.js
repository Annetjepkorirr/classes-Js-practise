class Drum{
    constructor(material,size){
        this.material=material;
        this.size=size;
    }

    predict_Sound(){

        return(`${this.constructor.name} ${this.sound} is made of ${this.material} and is of ${this.size} size`);
    }

}
class Djembe extends Drum{
    constructor(material, size) {
        super(material, size);
        this.sound = "wide variety of tones";
      }
    }

class Talkingdrum extends Drum{
    constructor(material, size) {
        super(material, size);
        this.sound = "mimics human sound";
      }
    }
 
class Bougarabou extends Drum{
    constructor(material, size) {
        super(material, size);
        this.sound = "deep bass tone";
      }
    }


let drum =new Talkingdrum("leather","large");
console.log(drum.predict_Sound());

let djembe=new Djembe("wooden","small");
console.log(djembe.predict_Sound());

let talkingdrum=new Talkingdrum("metallic","large");
console.log(talkingdrum.predict_Sound());x