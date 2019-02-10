// Soldier
function Soldier(health,strength){
    this.health=health;
    this.strength=strength;
    this.attack= function attack(){
        return this.strength
    }
    this.receiveDamage= function receiveDamage(damage){
        this.health= health-damage
    }
}
// Viking
    Viking.prototype=new Soldier ();
function Viking(name, health, strength ) {
    this.name=name;
    this.health=health;
    this.strength=strength;
    this.attack= function attack(){
        return this.strength
    }   
    Viking.prototype.receiveDamage = function (damage) {
        this.health=this.health-damage
          if(this.health>0){
            return (this.name+' has received '+damage+' points of damage');
         }else {
            return this.name+' has died in act of combat'};
}
    this.battleCry= function battleCry(){
        return "Odin Owns You All!";
    }
}
// Saxon

Saxon.prototype=new Soldier ();
function Saxon(health, strength) {
        this.health=health;
        this.strength=strength;
        this.attack= function attack(){
            return this.strength
        }
    Saxon.prototype.receiveDamage = function(damage){
        this.health=this.health-damage
          if(this.health>0){
                return ("A Saxon has received "+ damage +" points of damage points of damage");
             }else {
                return ("A Saxon has died in combat")
                };
            }
         
        
}



//War

function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    this.addViking = function(Viking){
      this.vikingArmy.push(Viking);
    };
    this.addSaxon = function(Saxon){
      this.saxonArmy.push(Saxon);
    };


    this.vikingAttack = function(){
      var index = Math.floor(Math.random()*this.saxonArmy.length);
      if (this.saxonArmy[index].health <= this.vikingArmy[0].strength){
        this.saxonArmy[index].health -= this.vikingArmy[0].strength;
        this.saxonArmy.splice(index, 1);
        return "A Saxon has died in combat";
      }
      else {
        return this.saxonArmy[index].receiveDamage(this.vikingArmy[0].strength);
      }
    };
    this.saxonAttack = function(){
      var index = Math.floor(Math.random()*this.vikingArmy.length);
      if (this.vikingArmy[index].health <= this.saxonArmy[0].strength){
        this.vikingArmy[index].health -= this.saxonArmy[0].strength;
        var deadHeroName = this.vikingArmy[index].name;
        this.vikingArmy.splice(index, 1);
        return deadHeroName + " has died in act of combat";
      }
      else {
        return this.vikingArmy[index].receiveDamage(this.saxonArmy[0].strength);
      }
    };
    this.showStatus = function(){
      if (this.vikingArmy.length === 0){return "Saxons have fought for their lives and survive another day...";}
      else if (this.saxonArmy.length === 0){return "Vikings have won the war of the century!";}
      else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {return "Vikings and Saxons are still in the thick of battle.";}
    };
}