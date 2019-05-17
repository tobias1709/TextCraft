class Ability {
    constructor(abilityName, abilityCost, iconPath, shortName, abilityNumber){
        this.abilityName = abilityName;
        this.abilityCost = abilityCost;
        this.iconPath = iconPath;
        this.shortName = shortName;
        this.abilityNumber = abilityNumber;
    }
}

class MageAbility extends Ability {
    constructor(abilityName, abilityCost, iconPath, shortName, abilityNumber){
        super(abilityName, abilityCost, iconPath, shortName, abilityNumber);
    }
    
}
class RogueAbility extends Ability {
    constructor(abilityName, abilityCost, iconPath, shortName, abilityNumber, comboPointsReq){
        super(abilityName, abilityCost, iconPath, shortName, abilityNumber);
        this.comboPointsReq = comboPointsReq;
    }
    
}
class WarriorAbility extends Ability {
    constructor(abilityName, abilityCost, iconPath, shortName, abilityNumber){
        super(abilityName, abilityCost, iconPath, shortName, abilityNumber);
    }
    
}