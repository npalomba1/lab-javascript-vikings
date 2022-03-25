// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(dmg) {
    this.health -= dmg
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name;
  }

  receiveDamage(dmg) { //THIS WORKS
    this.health -= dmg
    if (this.health > 0) {
      return `${this.name} has received ${dmg} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry() {
    return ("Odin Owns You All!");
  }

}

// Saxon
class Saxon extends Soldier {
  // constructor(health, strength) {
  //   super(health, strength)
  // }
  receiveDamage(dmg) {
    this.health -= dmg
    if (this.health > 0) {
      return `A Saxon has received ${dmg} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War { 
  constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
  }
  addViking(vikingObj){
    this.vikingArmy.push(vikingObj)
  }
  addSaxon(saxonObj){
    this.saxonArmy.push(saxonObj)
  }
  vikingAttack(){
    let randomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length)
    let randomVikingIndex = Math.floor(Math.random()*this.saxonArmy.length)

    this.saxonArmy[randomSaxonIndex].receiveDamage(this.vikingArmy[randomVikingIndex].strength)
    
    if (this.saxonArmy[randomSaxonIndex].health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
      return `A Saxon has died in combat`;
    }
  }
  saxonAttack(){
    let randomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length)
    let randomVikingIndex = Math.floor(Math.random()*this.saxonArmy.length)

    let message = this.vikingArmy[randomVikingIndex].receiveDamage(this.saxonArmy[randomSaxonIndex].strength)
    
    if (this.vikingArmy[randomVikingIndex].health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }
    return message;
  }

  showStatus(){}
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
