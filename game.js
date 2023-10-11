class Pokemon{
    constructor(name, health, type){
        this.name = name
        this.health = health
        this.type = type
        this.abilities = [];
    }
}

const bulbasaur = new Pokemon("bulb", 12, 45)
bulbasaur.abilities.push({"mericham": 30})
console.log(bulbasaur)