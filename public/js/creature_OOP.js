let creatureSelLvl;
let creatureSelExp;
let creatureSelGold;
let creatureSelAtk;
let creatureSelHp;
let creatureSelHpMax;
let creatureSelSpeAtk;

class Creature{
	constructor(max, min, creatureName, creatureImage, creatureMap, creatureSpecial, specialRound, specialBonus){
		this.creatureLevel = creatureSelLvl,
		this.max = max,
		this.min = min,
		this.creatureName = creatureName,
		this.creatureHp = creatureSelHp,
		this.creatureHpMax = creatureSelHpMax,
		this.creatureAtk = creatureSelAtk,
		this.expGain = creatureSelExp,
		this.goldGain = creatureSelGold,
		this.creatureImage = creatureImage,
		this.creatureMap = creatureMap,
		this.creatureSpecialAtk = creatureSelSpeAtk,
		this.creatureSpecial = creatureSpecial
		this.specialRound = specialRound,
		this.specialBonus = specialBonus
	}
}