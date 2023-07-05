//Ankara
class Ankara{
    constructor(temperature,mood){
        this.temperature=temperature
        this.mood=mood
    }
    getpattern(){
        const temp=20
        const mood=5
        if (this.temperature>=temp &&this.mood>=mood) {
            console.log("wear light and more pattened ankara");
        }
        else{
            console.log("wear dull and less partened ankara");
        }
    }
}
let ankara=new Ankara(10,3)
ankara.getpattern();

    
