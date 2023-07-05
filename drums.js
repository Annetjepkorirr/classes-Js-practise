class Drum{
    constructor(material,size){
        this.material=material;
        this.size=size;
    }

    predict_Sound(){

        console.log(`${this.constructor.name},${this.sound}`);
    }

}
class Djembe extends Drum{

    sound = "wide variety of tones"

}
class Talkingdrum extends Drum{
    sound ="mimics human sound"
 }
class Bougarabou extends Drum{
     sound ="deep bass tone"
 }




let drum =new Talkingdrum("leather","large");
drum.predict_Sound();

let djembe=new Djembe("wooden","small");
djembe.predict_Sound();

