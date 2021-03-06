document.addEventListener("DOMContentLoaded", () =>{
	let root = document.documentElement;

	let questKillClass = document.getElementsByClassName("questAmount");
	let questClass = document.getElementsByClassName("objective");

	// Character
	let nameWritten = false;
	let nameChar;
	let classSelected;
	let hp;
	let hpMax;
	let mana;
	let manaMax;
	let rage;
	let rageMax;
	let energy;
	let energyMax;
	
	// Inventory
	let hPot;
	let mPot;
	let gold;
	let food;
	let water;

	// Level
	let levelPre;
	let level;
	let exp;
	let expMax;

	// Shop
	let hPotCost = 25;
	let mPotCost = 15;
	let foodCost = 40;
	let waterCost = 35;

	// Stats
	let atk;
	let spellAtk;
	let spellAtkMax;
	let sp;
	let str;
	let agi;
	let int;
	let sta;

	// Log
	let log = document.querySelector("#log .console p:last-child");
	let mainLog;

	let round = 0;
	let zoneRan = 0;

	// Classes
	const classes = {
		mage: "Mage",
		rogue: "Rogue",
		warrior: "Warrior"
	}

	// Object Oriented Programming
	let murloc = new Creature(3, 1, ["Murloc Warrior", "Murloc Oracle"], ["img/creatures/murloc.png", "img/creatures/murlocOracle.png"], "Elwynn Forest", ["Fish Swing", "Frostbolt"], [4, 5], [4, 6]);
	
	let bandit = new Creature(6, 3, ["Bandit", "Boar"], ["img/creatures/bandit.png", "img/creatures/boar.png" ], "Westfall", ["Backstab", "Charge"], [2, 4], [2, 3]);

	let worgen = new Creature(9, 6, ["Worgen", "Wolf"], ["img/creatures/worgen.png", "img/creatures/wolf.png"], "Duskwood", ["Shred", "Rip"], [2, 3], [4, 5]);

	let defias = new Creature(12, 9, ["Defias Pillager", "Defias Trapper"], ["img/creatures/pillager.png", "img/creatures/bandit.png"], "Deadmines", ["Fireball", "Backstab"], [6, 2], [14, 4]);

	let crocodile = new Creature(15, 12, ["Crocalisk", "Crimson Whelp"], ["img/creatures/croc.png", "img/creatures/whelp.png"], "Wetlands", ["Snap", "Spit Fire"], [3, 5], [6, 8]);

	let bear = new Creature(18, 15, ["Bear", "Raptor"], ["img/creatures/bear.png", "img/creatures/raptor.png"], "Hillsbrad", ["Swipe", "Ravage"], [2, 4], [4, 7]);

	let lizard = new Creature();
	lizard.max = 21;
	lizard.min = 18;
	lizard.creatureName = ["Basilisk", "Serpent"];
	lizard.creatureImage= ["img/creatures/lizard.png", "img/creatures/lizard.png"];
	lizard.creatureMap= "Thousand Needles";
	lizard.creatureSpecial= ["Stone Gaze", "Lightning Bolt"];
	lizard.specialRound= [4, 3];
	lizard.specialBonus= [8, 6];

	let cenutaur = new Creature();
	cenutaur.max = 24; 
	cenutaur.min = 21; 
	cenutaur.creatureName = ["Cenutaur"];
	cenutaur.creatureImage= ["img/creatures/dev.png"];
	cenutaur.creatureMap= "Maraudon";
	cenutaur.creatureSpecial= ["Slam"];
	cenutaur.specialRound= [2];
	cenutaur.specialBonus= [5];

	let tiger = new Creature();
	tiger.max = 27;
	tiger.min = 24;
	tiger.creatureName = ["Tiger"];
	tiger.creatureImage= ["img/creatures/tiger.png"];
	tiger.creatureMap= "Stranglethorn";
	tiger.creatureSpecial= ["Bite"];
	tiger.specialRound= [3];
	tiger.specialBonus= [7];

	let troll = new Creature();
	troll.max = 30;
	troll.min = 27;
	troll.creatureName = ["Witch Doctor"];
	troll.creatureImage= ["img/creatures/witchdoctor.png"];
	troll.creatureMap= ["Zul'Farak"];
	troll.creatureSpecial= ["Hex"];
	troll.specialRound= [10];
	troll.specialBonus= [20];

	let warGolem = new Creature();
	warGolem.max = 33;
	warGolem.min = 30;
	warGolem.creatureName = ["War Golem"];
	warGolem.creatureImage= ["img/creatures/mudgolem.png"];
	warGolem.creatureMap= "Searing Gorge";
	warGolem.creatureSpecial= ["Thunder Stump"];
	warGolem.specialRound= [5];
	warGolem.specialBonus= [10];

	let undead = new Creature();
	undead.max = 36;
	undead.min = 33;
	undead.creatureName = ["Necromancer"];
	undead.creatureImage= ["img/creatures/undead.png"];
	undead.creatureMap= "Stratholme";
	undead.creatureSpecial= ["Curse of Agony"];
	undead.specialRound= [5];
	undead.specialBonus= [10];

	let devilsaur = new Creature();
	devilsaur.max = 39;
	devilsaur.min = 36;
	devilsaur.creatureName = ["Devilsaur"];
	devilsaur.creatureImage= ["img/creatures/beastMastery.png"];
	devilsaur.creatureMap= "Un'goro Crater";
	devilsaur.creatureSpecial= ["Stomp"];
	devilsaur.specialRound= [3];
	devilsaur.specialBonus= [6];

	let blackDragon = new Creature();
	blackDragon.max = 42;
	blackDragon.min = 39;
	blackDragon.creatureName = ["Black Dragon"];
	blackDragon.creatureImage= ["img/creatures/dragon.png"];
	blackDragon.creatureMap= "Burning Steppes";
	blackDragon.creatureSpecial= ["Flame Breath"];
	blackDragon.specialRound= [4];
	blackDragon.specialBonus= [9];

	let scarletCrusade = new Creature();
	scarletCrusade.max = 45;
	scarletCrusade.min = 42;
	scarletCrusade.creatureName = ["Scarlet Defender"];
	scarletCrusade.creatureImage= ["img/creatures/scarlet.png"];
	scarletCrusade.creatureMap= "Western Plaguelands";
	scarletCrusade.creatureSpecial= ["Heroic Strike"];
	scarletCrusade.specialRound= [2];
	scarletCrusade.specialBonus= [5];

	let bloodaxe = new Creature();
	bloodaxe.max = 48;
	bloodaxe.min = 45;
	bloodaxe.creatureName = ["Bloodaxe Raider"];
	bloodaxe.creatureImage= ["img/creatures/bloodaxe.png"];
	bloodaxe.creatureMap= "Blackrock Spire";
	bloodaxe.creatureSpecial= ["Cleave"];
	bloodaxe.specialRound= [4];
	bloodaxe.specialBonus= [6];

	let fallenHero = new Creature();
	fallenHero.max = 51;
	fallenHero.min = 48;
	fallenHero.creatureName = ["Fallen Hero"];
	fallenHero.creatureImage= ["img/creatures/fallenHero.png"];
	fallenHero.creatureMap= "Eastern Plaguelands";
	fallenHero.creatureSpecial= ["Ghost Strike"];
	fallenHero.specialRound= [3];
	fallenHero.specialBonus= [6];

	let lapress = new Creature();
	lapress.max = 54;
	lapress.min = 51;
	lapress.creatureName = ["Shadow Walker"];
	lapress.creatureImage= ["img/creatures/shadowWalker.png"];
	lapress.creatureMap= "Silithus";
	lapress.creatureSpecial= ["Shadow Bolt"];
	lapress.specialRound= [4];
	lapress.specialBonus= [12];

	let fireElemental = new Creature();
	fireElemental.max = 57;
	fireElemental.min = 54;
	fireElemental.creatureName = ["Fire Elemental"];
	fireElemental.creatureImage= ["img/creatures/fireElemental.png"];
	fireElemental.creatureMap= "Molten Core";
	fireElemental.creatureSpecial= ["Lava Burst"];
	fireElemental.specialRound= [4];
	fireElemental.specialBonus= [10];

	let dragonkin = new Creature();
	dragonkin.max = 60;
	dragonkin.min = 57;
	dragonkin.creatureName = ["Nefarian"];
	dragonkin.creatureImage= ["img/creatures/dragon.png"];
	dragonkin.creatureMap= "Blackwing Lair";
	dragonkin.creatureSpecial= ["Dragons Breath"];
	dragonkin.specialRound= [4];
	dragonkin.specialBonus= [13];

	// Creature Objects
	let creatureList = [
		murloc,
		bandit,
		worgen,
		defias,
		crocodile,
		bear,
		lizard,
		cenutaur,
		tiger,
		troll,
		warGolem,
		undead,
		devilsaur,
		blackDragon,
		scarletCrusade,
		bloodaxe,
		fallenHero,
		lapress,
		fireElemental,
		dragonkin
	]

	// Creatures
	let creatures = 0;
	let creatureMap = 0;
	let creatureRan = Math.floor(Math.random() * creatures); //Random monsters
	let creatureDeath = false;
	let timeout = true;
	let mapArrived = false;

	// Quests

	let activeQuest = [];

	// JSON LocalStorage
	// Character
	let classSave;
	let character = [hp, hpMax, mana, manaMax, energy, energyMax, classSave, classSelected, creatureRan, nameChar, rage, rageMax];
	let characterString = JSON.stringify(character);
	let characterStorage = "playerData";

	// Stats
	let stat = [atk, spellAtk, spellAtkMax, sp, str, agi, int, sta];
	let statString = JSON.stringify(stat);
	let statStorage = "statData";

	// Level
	let lvl = [levelPre, level, exp, expMax];
	let lvlString = JSON.stringify(lvl);
	let lvlStorage = "lvlData";

	// Inventory
	let inv = [hPot, mPot, gold, water, food];
	let invString = JSON.stringify(inv);
	let invStorage = "invData";

	let roll;

	// Selectors
	let characterName = document.querySelector("#inputName");
	let hpSel = document.querySelector("#hp");
	let hpMaxSel = document.querySelector("#hpMax");
	let manaSel = document.querySelector("#mana");
	let manaMaxSel = document.querySelector("#manaMax");
	let manaBarSel = document.querySelector(".mana");
	let energySel = document.querySelector("#energy");
	let energyMaxSel = document.querySelector("#energyMax");
	let energyBarSel = document.querySelector(".energy");
	let classPicked = document.querySelector("#classPicked");
	let rageSel = document.querySelector("#rage");
	let rageMaxSel = document.querySelector("#rageMax");
	let rageBarSel = document.querySelector(".rage");

	// Level
	let levelSel = document.querySelector("#level");
	let expSel = document.querySelector("#exp");
	let expMaxSel = document.querySelector("#expMax");

	// Stats
	let spSel = document.querySelector("#sp");
	let atkMaxSel = document.querySelector("#atkMax");
	let spellAtkMaxSel = document.querySelector("#spellAtkMax");
	let strSel = document.querySelector("#str");
	let agiSel = document.querySelector("#agi");
	let intSel = document.querySelector("#int");
	let staSel = document.querySelector("#sta");
	let strBtnSel = document.querySelector("#plus1");
	let agiBtnSel = document.querySelector("#plus2");
	let intBtnSel = document.querySelector("#plus3");
	let staBtnSel = document.querySelector("#plus4");
	let comboPointSel = document.querySelector("#comboPoints");

	// Shop 
	let hPotBuySel = document.querySelector("#hPotBuySel");
	let mPotBuySel = document.querySelector("#mPotBuySel");
	let foodBuySel = document.querySelector("#foodBuySel");
	let waterBuySel = document.querySelector("#waterBuySel");

	// Books
	let spellBook = document.querySelector("#spellbook");
	let fightBook = document.querySelector("#fightbook");

	// Quest

	// Inventory
	let hPotSel = document.querySelector("#hPot");
	let mPotSel = document.querySelector("#mPot");
	let goldSel = document.querySelector("#gold");
	let foodSel = document.querySelector("#food");
	let waterSel = document.querySelector("#water");
	let hPotUse = document.querySelector("#hPotUse");
	let mPotUse = document.querySelector("#mPotUse");
	let foodUse = document.querySelector("#foodUse");
	let waterUse = document.querySelector("#waterUse");

	// Creature Selectors
	let creatureBox = document.querySelector("#creature");
	let creatureLevelSel = document.querySelector("#creatureLevel");
	let creatureHpSel = document.querySelector("#creatureHp");
	let creatureHpMaxSel = document.querySelector("#creatureHpMax");
	let creatureNameSel = document.querySelector("#creatureName");
	let creatureAtkSel = document.querySelector("#creatureAtk");
	let creatureAtkMaxSel = document.querySelector("#creatureAtkMax");
	let creatureBar = document.querySelector(".creatureHp");
	let specialRoundMaxSel = document.querySelector("#specialRoundMax");
	let specialRoundSel = document.querySelector("#specialRound");
	let specialAttackSel = document.querySelector("#specialAttack");

	// RNG = Random Generated Numbers

	let mapSel = document.querySelectorAll("#levelSel button");
	let mapShowSel = document.querySelector("#map");

	// Game Screens
	let classPick = document.querySelector("#selection");
	let gameScreen = document.querySelector("#game");
	let deathbutton = document.querySelectorAll("#wrapper:not(#reset)");

	// Abilities

	// Rogue
	let comboP = document.querySelector(".combo");
	let sins = document.querySelector("#sins");
	let evis = document.querySelector("#evis");

	// Warrior
	let heroic = document.querySelector("#hs");
	let mortal = document.querySelector("#ms");

	// Mage


	// Hunter

	
	// Validation
	function validator(){
		nameChar = document.querySelector("#characterName").value;
		if (nameChar == ""){
			alert("Name must be filled out");
			return false;
		}else{
			nameWritten = true;
			save();
			updater();
			return false;
		}
	}	

	// Generator creatures after level
	RandomLevel(creatureList[creatureRan].max, creatureList[creatureRan].min);
	function RandomLevel(max, min){
		creatureSelLvl = Math.floor(Math.random()*(max-min+1)+min);
		creatureSelExp = creatureSelLvl*9;
		creatureSelGold = creatureSelLvl*1;
		creatureSelAtk = creatureSelLvl*1.8+2;
		creatureSelHpMax = creatureSelLvl*58;
		creatureSelHp = creatureSelHpMax;
		creatureSelSpeAtk = creatureSelLvl*creatureList[creatureRan].specialBonus[zoneRan]+creatureSelAtk;
		creatureList[creatureRan].creatureLevel = creatureSelLvl
		creatureList[creatureRan].expGain = Math.floor(creatureSelExp);
		creatureList[creatureRan].goldGain = creatureSelGold;
		creatureList[creatureRan].creatureAtk = Math.floor(creatureSelAtk);
		creatureList[creatureRan].creatureHpMax = creatureSelHpMax;
		creatureList[creatureRan].creatureHp = creatureSelHp;
		creatureList[creatureRan].creatureSpecialatk = creatureSelSpeAtk;
	}

	// Select Character Class
	// Start defaults
	function defaultStart(){
		// Level
		levelPre = 1;
		level = 1;
		exp = 0;
		expMax = 300;
		// Inventory
		hPot = 1;
		gold = 0;
		food = 5;
		water = 5;
		// Picked
		creatureRan = 0;
		creatureMap = 0;
		// Spell & Skill
		sp = 0;
		abilityUseable();
		updater();
		save();
		startUp();
		return false;
	}

	// Warrior
	document.querySelector("#warrior").addEventListener('click', () =>{
		validator();
		if(nameWritten == false){
			return false;
		}else{
			classSelected = "Warrior";
			classSave = true;
			// Character
			hpMax = 154;
			hp = hpMax;
			rage = 0;
			rageMax = 100;
			mana = 0;
			manaMax = 0;
			mPot = 0;
			// Stats
			str = 3;
			agi = 1;
			int = 0;
			sta = 3;
			atk = 17;
			atkMin = atk / 2;
			atkMax = atk / 2;
			spellAtk = 0;
			spellAtkMax = 0;
			defaultStart();
		}
	});

	// Mage
	document.querySelector("#mage").addEventListener('click', () =>{
		validator();
		if(nameWritten == false){
			return false;
		}else{
			classSelected = "Mage";
			classSave = true;
			// Character
			manaMax = 180;
			mana = manaMax;
			energy = 0;
			energyMax = 0;
			hpMax = 122;
			hp = hpMax;
			// Extra inventory
			mPot = 1;
			// Stats
			str = 1;
			agi = 1;
			int = 5;
			sta = 1;
			atk = 8;
			atkMin = atk / 2;
			atkMax = atk / 2;
			spellAtkMax = 16;
			spellAtk = Math.floor(spellAtkMax /2);
			defaultStart();
		}
	});

	// Rogue
	document.querySelector("#rogue").addEventListener('click', () =>{
		validator();
		if(nameWritten == false){
			return false;
		}else{
			classSelected = "Rogue";
			classSave = true;
			// Character
			hpMax = 147;
			hp = hpMax;
			mana = 0;
			manaMax = 0;
			energy = 100;
			energyMax = 100;
			mPot = 0;
			// Stats
			str = 1;
			agi = 4;
			int = 0;
			sta = 2;
			atk = 19.9;
			atkMin = atk / 2;
			atkMax = atk / 2;
			spellAtk = 0;
			spellAtkMax = 0;
			defaultStart();
		}
	});

	let atkMax = atk / 2;
	let atkMin = atk / 2;


	// Class Spells Selected
	let rogueSpells = document.querySelectorAll(".rogueA");
	let warriorSpells = document.querySelectorAll(".warriorA");
	let mageSpells = document.querySelectorAll(".mageA");


	// Ability & Spellbook validatior
	function abilityUseable(){
		if(classSelected == "Rogue"){
			for(let i = 0; i<rogueSpells.length; i++){
				rogueSpells[i].style.display="block";
			}
			comboP.style.display="block";
		}else{
			for(let i = 0; i<rogueSpells.length; i++){
				rogueSpells[i].style.display="none";
			}
			comboP.style.display="none";
		}
		if(classSelected == "Warrior"){
			for(let i = 0; i<warriorSpells.length; i++){
				warriorSpells[i].style.display="block";
			}
		}else{
			for(let i = 0; i<warriorSpells.length; i++){
				warriorSpells[i].style.display="none";
			}
		}
		if(classSelected == "Mage"){
			for(let i = 0; i<mageSpells.length; i++){
				mageSpells[i].style.display="block";
			}
		}else{
			for(let i = 0; i<mageSpells.length; i++){
				mageSpells[i].style.display="none";
			}
		}
	}

	// Death
	function death(){
		if(hp <= 0){
			mainLog = "<span>You died.</span>";
			logger();
			for(let i=0; i<deathbutton.length; i++){
				deathbutton[i].style.opacity="0";
			}
		}
	}

	// Stat EventListeners
	document.querySelector("#plus1").addEventListener('click', strength); 	
	document.querySelector("#plus2").addEventListener('click', agility);
	document.querySelector("#plus3").addEventListener('click', intellect); 
	document.querySelector("#plus4").addEventListener('click', stamina); 

	function strength(){
		if(sp > 0){
			str++;
			hp+= 4;
			atk+= 1;
			hpMax+= 4;;
			sp--;
			atkMin = atk / 2;
			atkMax = atk / 2;
			if(classSelected == "Warrior"){
				atk+= 0.5;
			}
		}
		save();
		updater();
	}

	function agility(){
		if(sp > 0){
			agi++;
			atk+= 1.3;
			sp--;
			atkMin = atk / 2;
			atkMax = atk / 2;
			if(classSelected == "Rogue"){
				atk+= 0.5;
			}
		}
		save();
		updater();
	}

	function intellect(){
		if(sp > 0){
			int++;
			mana+= 11.3;
			manaMax+= 11.3;
			sp--;
			spellAtkMax = int * 1.5;
			spellAtk = Math.floor(spellAtkMax /2);
			if(classSelected == "Mage"){
				spellAtkMax+= 1;
			}
		}
		save();
		updater();
	}

	function stamina(){
		if(sp > 0){
			sta++;
			hp+=20;
			hpMax+=20;
			sp--;
		}
		updater();
	}

	// Bar Handler
	function barHandler(){
		if(classSelected == "Mage"){
			manaBarSel.style.display="block";
		}else{
			manaBarSel.style.display="none";
		}
		if(classSelected == "Rogue"){
			energyBarSel.style.display="block";
		}else{
			energyBarSel.style.display="none";
		}
		if(classSelected == "Warrior"){
			rageBarSel.style.display="block";
		}else{
			rageBarSel.style.display="none";
		}
	}

	// Inventory Usables
	// Water
	document.querySelector("#waterUse").addEventListener("click", () =>{
		if(water >= 1 && creatureBox.style.visibility != "visible" && mana < manaMax){
			water--;
			mainLog = "<b>You drink your water and replensih " + Math.floor((manaMax*0.70)) + " mana.</b>";
			logger();
			mana+= Math.floor((manaMax*0.70));
			if(mana >= manaMax){
				mana = manaMax;
				mainLog = "<b>You replenished all your mana!</b>";
				logger();
			}
			save();
			updater();
		}else if(water == 0){
			mainLog = "<span>You don't have any Water!</span>";
			logger();
		}else if(creatureBox.style.visibility == "visible"){
			mainLog = "<span>You cannot do that while in combat!</span>";
			logger();
		}else if(mana >= manaMax){
			mainLog = "<span>You already have full mana!</span>";
			logger();
		}
	});

	// Food
	document.querySelector("#foodUse").addEventListener("click", () =>{
		if(food >= 1 && creatureBox.style.visibility != "visible" && hp < hpMax){
			food--;
			mainLog = "<b>You eat your food and restore " + Math.floor((hpMax*0.70)) + " health.</b>";
			logger();
			hp+= Math.floor((hpMax*0.70));
			if(hp >= hpMax){
				hp = hpMax;
				mainLog = "<b>You restored all your hp!</b>";
				logger();
			}
			save();
			updater();
		}else if(food == 0){
			mainLog = "<span>You don't have any Food!</span>";
			logger();
		}else if(creatureBox.style.visibility == "visible"){
			mainLog = "<span>You cannot do that while in combat!</span>";
			logger();
		}else if(hp >= hpMax){
			mainLog = "<span>You already have full hp!</span>";
			logger();
		}
	});

	// Health Potion
	document.querySelector("#hPotUse").addEventListener('click', () =>{
		if(hPot == 0){
			mainLog = "<span>You don't have any Health Potions!</span>";
			logger();
		}
		if(hp == hpMax && hPot > 0){
			mainLog = "<span>You already have full hp!</span>";
			logger();
		}
		if(hPot > 0){
			if(hp < hpMax){
				hp+= (hpMax*0.4);
				mainLog = "You used a <span>Health Potion</span> and <b>healed " + Math.floor((hpMax*0.4)) + " hp.</b>";
				logger();
				hPot--;
				if(hp > hpMax){
					hp = hpMax;
					if(hp == hpMax){
						mainLog = "You <b>healed</b> to full hp!";
						logger();
					}
				}
			}
		}
		updater();
	});

	// Mana Potion
	document.querySelector("#mPotUse").addEventListener('click', () =>{
		if(mPot == 0){
			mainLog = "<span>You don't have any Mana Potions!</span>";
			logger();
		}
		if(mana == manaMax && mPot > 0){
			mainLog = "<span>You already have full mana!</span>";
			logger();
		}
		if(mPot > 0){
			if(mana < manaMax){
				mana+= (manaMax * 0.4);
				mainLog = "You used a <span>Mana Potion</span> and <b>restored " + Math.floor((manaMax*0.4)) + " mana.</b>";
				logger();
				mPot--;
				if(mana > manaMax){
					mana = manaMax;
					if(mana == manaMax){
						mainLog = "You regained all your <b>mana</b>!";
						logger();
					}
				}
			}
		}
		updater();
	});

	// Reset
	function reset(){
		classSave = false;
		save();
		window.location.reload();
		barHandler();
		startUp();
	}

	// StartupEvent
	setTimeout(() => {
		mapArrived = true;
		mainLog = "You start your adventure in <span> Elwynn Forest.</span>";
		if(classSave == true){
			mainLog = "You return your adventure in <span> " + creatureList[creatureRan].creatureMap + "</span>.";
		}
		RandomLevel(creatureList[creatureRan].max, creatureList[creatureRan].min);
		logger();
		addQuests(creatureRan);
		updater();
	}, );

	// Buyables
	// HP Potion
	document.querySelector("#hPotBuy").addEventListener("click", () =>
	{
		if(gold >= hPotCost && creatureBox.style.visibility == "hidden"){
			console.log("hpot");
			hPot++;
			gold-= hPotCost;
			mainLog = "<b>You bought a Health Potion.</b>";
			logger();
		}else if(creatureBox.style.visibility == "visible"){
			mainLog = "<span>You can't use the shop while being in combat!</span>";
			logger();
		}else if(gold < hPotCost){
			mainLog = "<span>You can't afford that!</span>";
			logger();
		}
		save();
		updater();
	});

	// Mana Potion
	document.querySelector("#mPotBuy").addEventListener("click", () =>{
		if(gold >= mPotCost && creatureBox.style.visibility == "hidden"){
			console.log("mpot");
			mPot++;
			gold-= mPotCost;
			mainLog = "<b>You bought a Mana Potion.</b>";
			logger();
		}else if(creatureBox.style.visibility == "visible"){
			mainLog = "<span>You can't use the shop while being in combat!</span>";
			logger();
		}else if(gold < mPotCost){
			mainLog = "<span>You can't afford that!</span>";
			logger();
		}
		save();
		updater();
	});

	// Food
	document.querySelector("#foodBuy").addEventListener("click", () =>{
		if(gold >= foodCost && creatureBox.style.visibility == "hidden"){
			food++;
			gold-= foodCost;
			mainLog = "<b>You bought some food.</b>";
			logger();
		}else if(creatureBox.style.visibility == "visible"){
			mainLog = "<span>You can't use the shop while being in combat!</span>";
			logger();
		}else if(gold < foodCost){
			mainLog = "<span>You can't afford that!</span>";
			logger();
		}
		save();
		updater();
	});

	// Water
	document.querySelector("#waterBuy").addEventListener("click", () =>{
		if(gold >= waterCost && creatureBox.style.visibility == "hidden"){
			water++;
			gold-= waterCost;
			mainLog = "<b>You bought some water.</b>";
			logger();
		}else if(creatureBox.style.visibility == "visible"){
			mainLog = "<span>You can't use the shop while being in combat!</span>";
			logger();
		}else if(gold < waterCost){
			mainLog = "<span>You can't afford that!</span>";
			logger();
		}

		save();
		updater();
	});

	// Explore / Fight
	let oneClickCount = true;
	let findEnemy;
	let onlyOnce = true;
	let cooldownCount = 0;
	
	function explore(){
		if(creatureBox.style.visibility != "visible" && onlyOnce == true){
			zoneRan = Math.floor(Math.random() * creatureList[creatureRan].creatureName.length + 0);
			setTimeout(() => {
				mainLog = "You start exploring <span>the " + creatureList[creatureRan].creatureMap + "</span>."
				document.querySelector("#creatureImg").src = creatureList[creatureRan].creatureImage[zoneRan];
				logger();
				save();
			}, 600);
			onlyOnce = false;
		}

		if(creatureBox.style.visibility == "visible"){
			mainLog = "You are fighting <span>" + creatureList[creatureRan].creatureName[zoneRan] + "</span>."
			logger();
			save();
		}
		
		if(oneClickCount == true){
			oneClickCount = false;
			findEnemy = setTimeout(() => {
				if(mapArrived == true){
					if(creatureBox.style.visibility != "visible"){
						mainLog = "You see a <span>" + creatureList[creatureRan].creatureName[zoneRan] + "</span>, what will you do?";
						logger();
					}
					creatureBox.style.visibility = "visible";
					creatureBar.style.zIndex="1";
					if(creatureDeath == true){
						creatureList[creatureRan].creatureHp = creatureList[creatureRan].creatureHpMax;
						creatureDeath = false;
					}
				}
			}, 1500);
		}
		updater();
		save();
	}

	document.querySelector("#fight").addEventListener('click', explore);

	function creatureAttack(){
		let special = false;
		if(round == creatureList[creatureRan].specialRound[zoneRan]){
			if(creatureList[creatureRan].creatureHp >= 1){
				hp-= roll = Math.floor(Math.random() * creatureList[creatureRan].creatureSpecialatk / 2 + creatureList[creatureRan].creatureSpecialatk / 2);
				mainLog = "The <span>" + creatureList[creatureRan].creatureName[zoneRan] + "</span> used <span>" + creatureList[creatureRan].creatureSpecial[zoneRan] + "</span> and hit for <span>" + roll + " damage.</span>";
				round-= creatureList[creatureRan].specialRound[zoneRan];
				special = true;
				logger();
				updater();
			}
		}
		if(round < creatureList[creatureRan].specialRound[zoneRan] && special == false){
			if(creatureList[creatureRan].creatureHp >= 1){
				hp-= roll = Math.floor(Math.random() * creatureList[creatureRan].creatureAtk / 2 + creatureList[creatureRan].creatureAtk / 2);
				mainLog = "The <span>" + creatureList[creatureRan].creatureName[zoneRan] + "</span> hit you for <span>" + roll + " damage.</span>";
				round++;
				logger();
				updater();
			}
		}
	}

	function generator(){

		if(classSelected == "Rogue"){
			energy+=20;
			if(energy >= energyMax){
				energy = energyMax;
			}
		}
		if(classSelected == "Warrior"){
			rage+= 10;
			if(rage >= rageMax){
				rage = rageMax;
			}
			if(rage <= 0){
				rage = 0;
			}
		}
		if(classSelected == "Mage"){
			mana+= int/3 + 4;
			if(mana >= manaMax){
				mana = manaMax;
			}
		}
	}

	// Create quest functions below
	function questUpdater(creature){
		activeQuest.forEach(x => {
			if(x.creatureName == creature){
				x.killCount++;
				if(x.killCount == x.creatureKillsRequired){
					gold += x.questRewardGold;
					exp += x.questRewardExp;
					activeQuest.splice(activeQuest.indexOf(x), 1);
					mainLog = "<b>You completed a quest and gaiend " + x.questRewardGold + "g and " + x.questRewardExp + " exp!</b>";
					logger();
				}
				updateQuests();
			}
		});
	}
	
	function addQuests(i){
		activeQuest = [];
		creatureList[i].creatureName.forEach(x => {
			let killCount = Math.floor(Math.random() * Math.floor(4) + 2);
			console.log(creatureList[creatureRan].expGain);
			activeQuest.push(new Quest("Kill " + killCount + " " + x + "s", killCount + Math.floor(Math.random() * Math.floor(3)), null, x, killCount, expMax*0.1*killCount));
		});
		updateQuests();
	}

	function updateQuests(){

		questKillClass[0].innerHTML = '';
		questClass[0].innerHTML = '';

		activeQuest.forEach(x => {
			let questKills = document.createElement('p');
			questKills.innerHTML = x.killCount + "/" + x.creatureKillsRequired;
			questKillClass[0].appendChild(questKills);

			let questPara = document.createElement("p");
			questPara.innerHTML = x.questName;
			questClass[0].appendChild(questPara);
		});
	}


	// Creature functions & actions
	function creatureKilled(){
		if(creatureList[creatureRan].creatureHp <= 0){
			questUpdater(creatureList[creatureRan].creatureName[zoneRan]);
			creatureBox.style.visibility="hidden";
			creatureBar.style.zIndex="-1";
			gold+= creatureList[creatureRan].goldGain;
			let expGiven;
			mainLog = "You killed the <span>" + creatureList[creatureRan].creatureName[zoneRan] + "</span>.";
			logger();
			if(level-6 >= creatureList[creatureRan].creatureLevel){
				expGiven = 0;
				mainLog = creatureList[creatureRan].creatureName[zoneRan] + " is too low level to gain experiance";
				logger();
			}else if(level-4 >= creatureList[creatureRan].creatureLevel){
				expGiven = Math.floor(creatureList[creatureRan].expGain);
			}else{
				expGiven = creatureList[creatureRan].expGain + 50;
			}
			exp+= Math.floor(expGiven);
			mainLog = "You gained <b>" + expGiven + " experience points</b> & <b>" + creatureList[creatureRan].goldGain + " gold.</b>";
			creatureDeath = true;
			onlyOnce = true;
			logger();
			creatureList[creatureRan].creatureHp = creatureList[creatureRan].creatureHpMax;
			oneClickCount = true;
			comboPoint = 0;
			round = 0;
			cooldownCount = 0;
			regen();
			updater();
			save();
			RandomLevel(creatureList[creatureRan].max, creatureList[creatureRan].min);
		}
	}

	function attackCalc(){
		atkMin = atk / 2;
		atkMax = atk / 2;
		creatureAtkMax = creatureAtk[creatureRan] / 2;
		creatureAtkMin = creatureAtk[creatureRan] / 2;
	}

	function creatureActions(){
		let creatureHit = setTimeout(() => {
			creatureAttack();
			creatureKilled();
			death();
			timeout = true;
		}, 1000);
	}

	function noNegativeNr(){
		if([creatureRan] < 0){
			roll = creatureList[creatureRan].creatureHp;
			creatureList[creatureRan].creatureHp = 0;
		}
	}

	function dmgEqualHp(){
		cooldown();
		if(creatureList[creatureRan].creatureHp < roll){
			creatureList[creatureRan].creatureHp-= roll = creatureList[creatureRan].creatureHp;
		}else{
			creatureList[creatureRan].creatureHp-= roll;
		}
	}
	
	function notInCombat(){
		if(creatureBox.style.visibility != "visible"){
			mainLog = "<span>You can't do that out of combat!</span>";
			logger();
		}
	}

	function cooldown(){
		cooldownCount--;
		if(cooldownCount <= 0){
			cooldownCount = 0;
		}
	}

	function abilityToHTML(divClass, divId, imgPath, pclass, pText) {
        let div = document.createElement('div');
        let img = document.createElement('img');
        let p = document.createElement('p');

         div.className = divClass;
        img.src = imgPath;
        div.id = divId;
        p.className = pclass;
        p.innerHTML = pText;

        div.appendChild(img);
        div.appendChild(p);
        abilities.prepend(div);
	}
	
	function abilityCreator(){

		availableAbilities = [new Ability("Auto Attack", 0, "img/abilities/auto.png", "auto", 1)];

		if(classSelected == classes.rogue){
			availableAbilities.push(new RogueAbility("Sinister Strike", 30,"img/abilities/sins.png", "sins", 2, 0));
            availableAbilities.push( new RogueAbility("Eviscerate", 30, "img/abilities/evis.png", "evis", 3, 1));
        }
        if(classSelected == classes.warrior){
            availableAbilities.push( new WarriorAbility("Heroic Strike", 30, "img/abilities/heroic.png", "hs", 2));
            availableAbilities.push(new WarriorAbility("Mortal Strike", 30,"img/abilities/mortal.png", "ms", 3));
        }
        if(classSelected == classes.mage){
            availableAbilities.push(new MageAbility("Fireball", 30,"img/abilities/fireball.png", "fireball", 2));
            availableAbilities.push( new MageAbility("Frostbolt", 30, "img/abilities/frostbolt.png", "frostbolt", 3));
		}
	}

	// General Abilities
	function autoAttack(){
		notInCombat();
		if(creatureDeath == false && timeout == true && creatureBox.style.visibility == "visible"){	
			attackCalc();
			noNegativeNr();
			generator();
			roll = Math.floor(Math.random() * atkMax + atkMin);
			roll = Math.floor(roll / 2);
			dmgEqualHp();
			mainLog = "Your <span>Auto Attack</span> hit the <span>" + creatureList[creatureRan].creatureName[zoneRan] + "</span> for <span>" + roll + " damage.</span>"
			logger();
			timeout = false;
			creatureActions();
		}
		updater();
		save();
		death();
	}

	
	// Rogue Abilities
	let comboPoint = 0;
	function comboPoints(){
		if(comboPoint >= 5){
			comboPoint = 5;
		}else{
			comboPoint++;
		}
	}
	function sinisterStrike(){
		notInCombat();
		if(energy < 35 && creatureBox.style.visibility == "visible"){
			mainLog = "<span>You don't have enough energy for that</span>";
			logger();
		}
		if(creatureDeath == false && timeout == true && creatureBox.style.visibility == "visible" && energy >= 35){	
			comboPoints();
			attackCalc();
			noNegativeNr();
			roll = Math.floor(Math.random() * atkMax + atkMin);
			roll = Math.floor(roll / 1.4);
			dmgEqualHp();
			mainLog = "Your <span>Sinister Strike</span> the <span>" + creatureList[creatureRan].creatureName[zoneRan] + "</span> for <span>" + roll + " damage.</span>"
			logger();
			timeout = false;
			energy-= 35;
			creatureActions();
		}
		updater();
		save();
		death();
	}

	function eviscerate(){
		notInCombat();
		if(energy < 10 && creatureBox.style.visibility == "visible"){
			mainLog = "<span>You don't have enough energy for that</span>";
			logger();
		}
		if(comboPoint <= 0 && creatureBox.style.visibility == "visible"){
			mainLog = "<span>You don't have any combo points!</span>";
			logger();
		}
		if(creatureDeath == false && timeout == true && creatureBox.style.visibility == "visible" && energy >= 10 && comboPoint > 0){
			attackCalc();
			noNegativeNr();
			roll = Math.floor(Math.random() * atkMax + atkMin * (comboPoint));
			comboPoint = 0;
			dmgEqualHp();
			mainLog = "Your <span>Eviscerate</span> hit the <span>" + creatureList[creatureRan].creatureName[zoneRan] + "</span> for <span>" + roll + " damage.</span>"
			logger();
			timeout = false;
			energy-= 10;
			creatureActions();
		}
		updater();
		save();
		death();
	}

	// Warrior Abilities
	function heroicStrike(){
		notInCombat();
		if(rage < 15 && creatureBox.style.visibility == "visible"){
			mainLog = "<span>You don't have enough rage for that!</span>";
			logger();
		}
		if(creatureDeath == false && timeout == true && creatureBox.style.visibility == "visible" && rage >= 15){	
			attackCalc();
			noNegativeNr();
			roll = Math.floor(Math.random() * atkMax + atkMin * 1.5 + 3)
			dmgEqualHp();
			mainLog = "Your <span>Heroic Strike</span> the <span>" + creatureList[creatureRan].creatureName[zoneRan] + "</span> for <span>" + roll + " damage.</span>"
			logger();
			timeout = false;
			rage-= 15;
			creatureActions();
			cooldown();
		}
		updater();
		save();
		death();
	}

	function mortalStrike(){
		notInCombat();
		if(rage < 20 && creatureBox.style.visibility == "visible"){
			mainLog = "<span>You don't have enough rage for that!</span>";
			logger();
		}		
		if(cooldownCount != 0){
			mainLog = "That ability isn't ready yet!";
			logger();
		}
		if(creatureDeath == false && timeout == true && creatureBox.style.visibility == "visible" && rage >= 20 && cooldownCount == 0){	
			attackCalc();
			noNegativeNr();
			roll = Math.floor(Math.random() * atkMax + atkMin * 3.5 + 10)
			dmgEqualHp();
			mainLog = "Your <span>Mortal Strike</span> the <span>" + creatureList[creatureRan].creatureName[zoneRan] + "</span> for <span>" + roll + " damage.</span>"
			logger();
			timeout = false;
			cooldownCount = 3;
			rage-= 20;
			creatureActions();
		}

		updater();
		save();
		death();
	}

	// Mage Spells
	function fireball(){
		notInCombat();
		if(mana < Math.floor(manaMax*0.2) && creatureBox.style.visibility == "visible"){
			mainLog = "<span>You don't have enough mana for that!</span>";
			logger();
		}
		if(creatureDeath == false && timeout == true && creatureBox.style.visibility == "visible" && mana >= Math.floor(manaMax*0.2)){	
			attackCalc();
			noNegativeNr();
			roll = Math.floor(Math.random() * spellAtk + (level * 14));
			dmgEqualHp();
			mainLog = "Your <span>Fireball</span> the <span>" + creatureList[creatureRan].creatureName[zoneRan] + "</span> for <span>" + roll + " damage.</span>"
			logger();
			timeout = false;
			mana-= Math.floor(manaMax*0.2);
			creatureActions();
		}
		updater();
		save();
		death();
	}

	function frostbolt(){
		notInCombat();
		if(mana < Math.floor(manaMax*0.15) && creatureBox.style.visibility == "visible"){
			mainLog = "<span>You don't have enough mana for that!</span>";
			logger();
		}
		if(creatureDeath == false && timeout == true && creatureBox.style.visibility == "visible" && mana >= Math.floor(manaMax*0.15)){	
			attackCalc();
			noNegativeNr();
			roll = Math.floor(Math.random() * spellAtk + (level * 11));
			dmgEqualHp();
			mainLog = "Your <span>Frostbolt</span> the <span>" + creatureList[creatureRan].creatureName[zoneRan] + "</span> for <span>" + roll + " damage.</span>"
			logger();
			timeout = false;
			mana-= Math.floor(manaMax*0.15);
			creatureActions();
		}
		updater();
		save();
		death();
	}


	regen();
	function regen(){
		let reg = setInterval(() => {
			if(creatureBox.style.visibility != "visible"){
				hp += 5 + (sta/5);
				if(hp >= hpMax){
					hp = hpMax;
					save();
				}
				if(classSelected == "Rogue"){
					energy+=20;
					if(energy >= energyMax){
						energy = energyMax;
					}
				}
				if(classSelected == "Warrior"){
					rage-=5;
					if(rage <= 0){
						rage = 0;
					}
				}
				if(classSelected == "Mage" || "Warlock"){
					mana+= int;
					if(mana >= manaMax){
						mana = manaMax;
					}
				}
			}else{
				clearInterval(reg);
			}
			updater();
		}, 2000);
	} 

	// // Used to get information from my database, currently under development (Fetch work, backend doesn't)
	// fetch("http://localhost:3000/leaderboard")
	// .then((response) => {
	// 	return response.json();
	// })
	// .then((users) => {
	// 	leaderboard(users);
	// });


	// Used to display leaderboard from database
	leaderboard();
	function leaderboard(){
		let rank = 1;
		characterdata.forEach(player => {
			document.querySelector('#leaderboard').innerHTML+= `<p>` + rank + `. ` + player.character_name + ` ` + player.level + ` ` + player.class_name + `</p>`;
			rank++;
		});
	}

	// Key Press functions and checker
	let canKeyBeHandled = true;
	document.onkeydown = checkKey;
	document.onkeyup = () => {
		canKeyBeHandled = true;
	};

	// Make first letter of all names uppercase
	String.prototype.capitalize = () => {
		return nameChar.charAt(0).toUpperCase() + nameChar.slice(1);
	}

	// Test zone end

	let chatBox = document.querySelector("#chatBox");
	
	function checkKey(e){
		if(e.keyCode == '13' && chatBox === document.activeElement){
			let chatInput = chatBox.value;
			if(chatInput != ""){
				mainLog = nameChar.capitalize() + " says: " + chatInput;
				logger();
			}
			chatBox.value = "";
			chatBox.blur();
		}else if(e.keyCode == '13' && chatBox !== document.activeElement){
			chatBox.focus();
		}

		if(canKeyBeHandled == true && chatBox !== document.activeElement){
			e = e || window.event;

			if(e.keyCode == '49'){
				autoAttack();
			}

			if(classSelected == "Rogue"){
				if(e.keyCode == '50'){
					sinisterStrike();
				}
				if(e.keyCode == '51'){
					eviscerate();
				}
			}
			if(classSelected == "Warrior"){
				if(e.keyCode == '50'){
					heroicStrike();
				}
				if(e.keyCode == '51'){
					mortalStrike();
				}
			}
			if(classSelected == "Mage"){
				if(e.keyCode == '50'){
					fireball();
				}
				if(e.keyCode == '51'){
					frostbolt();
				}
			}
			if(e.keyCode == '32'){
				e.preventDefault();
				explore();
			}
			canKeyBeHandled = false;
		}
	}

	// Ability EventListeners
	// General
	document.querySelector("#auto").addEventListener('click', autoAttack)

	// Rogue
	document.querySelector("#sins").addEventListener('click', sinisterStrike);

	document.querySelector("#evis").addEventListener('click', eviscerate);

	// Warrior
	document.querySelector("#hs").addEventListener('click', heroicStrike);

	document.querySelector("#ms").addEventListener('click', mortalStrike);

	// Mage
	document.querySelector("#fireball").addEventListener('click', fireball);

	document.querySelector("#frostbolt").addEventListener('click', frostbolt);
	
	// Flee function
	creatureBox.style.visibility="hidden";
	document.querySelector("#flee").addEventListener('click', () =>{

		let fleeChance = Math.floor(Math.random() * 100);
		if(creatureBox.style.visibility == "visible" && timeout == true){			
			timeout = false;
			if(fleeChance >= 60){
				mainLog = "You <span>fled</span> from the <span>" + creatureList[creatureRan].creatureName[zoneRan] + "</span>."
				creatureList[creatureRan].creatureHp = creatureList[creatureRan].creatureHpMax;
				creatureBox.style.visibility="hidden";
				save();
				logger();
				updater();
				RandomLevel(creatureList[creatureRan].max, creatureList[creatureRan].min);
				creatureDeath = true;
				oneClickCount = true;
				onlyOnce = true;
				timeout = true;
			}else if(fleeChance >= 10){
				mainLog = "You tried to <span>flee</span> from the <span>" + creatureList[creatureRan].creatureName[zoneRan] + "</span> but failed."
				let creatureHit = setTimeout(() => {
					if(creatureList[creatureRan].creatureHp >= 0){
						hp-= roll = Math.floor(Math.random() * creatureList[creatureRan].creatureAtk / 2 + creatureList[creatureRan].creatureAtk / 2);
						mainLog = "The <span>" + creatureList[creatureRan].creatureName[zoneRan] + "</span> hit you for <span>" + roll + " damage.</span>";
						logger();
						updater();
					}
					timeout = true;
				}, 1000);
				save();
				logger();
				updater();
				death();
				oneClickCount = true;
			}else if(fleeChance >= 0){
				mainLog = "You tried to <span>flee</span> from the <span>" + creatureList[creatureRan].creatureName[zoneRan] + "</span> but caught you."
				let creatureHit = setTimeout(() => {
					if(creatureList[creatureRan].creatureHp >= 0){
						hp-= roll = Math.floor(Math.random() * creatureList[creatureRan].creatureAtk / 2 + creatureList[creatureRan].creatureAtk / 2)*2;
						mainLog = "The <span>" + creatureList[creatureRan].creatureName[zoneRan] + "</span> critical hit you for <span>" + roll + " damage.</span>";
						logger();
						updater();
					}
					timeout = true;
				}, 1000);
				save();
				logger();
				updater();
				death();
			}
			save();
		}
	});

	// Custom console log & chatbox
	function logger(){
		let newLog = log.cloneNode(true);
		newLog.innerHTML = mainLog;
		document.querySelector("#log .console p:last-child").appendChild(newLog);
		updateScroll();
	}

	// Always scroll to bottom on new message
	function updateScroll(){
		let logConsole = document.querySelector(".console");
		logConsole.scrollTop = logConsole.scrollHeight;
	}

	function save(){
		






		// // Character
		// character = [hp, hpMax, mana, manaMax, energy, energyMax, classSave, classSelected, creatureRan, nameChar, rage, rageMax];
		// characterString = JSON.stringify(character);
		// localStorage.setItem(characterStorage, characterString);

		// // Stats
		// stat = [atk, spellAtk, spellAtkMax, sp, str, agi, int, sta];
		// statString = JSON.stringify(stat);
		// localStorage.setItem(statStorage, statString);

		// // Level
		// lvl = [levelPre, level, exp, expMax];
		// lvlString = JSON.stringify(lvl);
		// localStorage.setItem(lvlStorage, lvlString);

		// // Inventory
		// inv = [hPot, mPot, gold, food, water];
		// invString = JSON.stringify(inv);
		// localStorage.setItem(invStorage, invString);
	}

	// fetchPlayerData();
	// function fetchPlayerData() {
	// 	fetch(("http://localhost:3000/players"))
	// 	.then((response) => {
	// 		return response.json();
	// 	})
	// 	.then((playerdata) => {
	// 		console.log(playerdata);
	// 		load();
	// 	});
	// }

	function load() {
		// index will depend on account id when logging in
		if(characterdata != null){
			console.log(characterdata);
			hp = characterdata[0].hp;
			hpMax = characterdata[0].hpMax;
			mana = characterdata[0].mana;
			manaMax = characterdata[0].manaMax;
			energy = characterdata[0].energy;
			energyMax = characterdata[0].energyMax;
			classSave = characterdata[0].extra_save;
			classSelected = characterdata[0].class_name;
			creatureRan = characterdata[0].extra_random;
			creatureMap = characterdata[0].extra_random;
			nameChar = characterdata[0].character_name;
			rage = characterdata[0].rage;
			rageMax = characterdata[0].rageMax;
			atk = characterdata[0].attack_power;
			spellAtk = characterdata[0].spell_power / 2;
			spellAtkMax = characterdata[0].spell_power;
			sp = characterdata[0].skill_points;
			str = characterdata[0].strength;
			agi = characterdata[0].agility;
			int = characterdata[0].intellect;
			sta = characterdata[0].stamina;
			levelPre = characterdata[0].levelPre;
			level = characterdata[0].level;
			exp = characterdata[0].exp;
			expMax = characterdata[0].expMax;
			hPot = characterdata[0].health_potion;
			mPot = characterdata[0].mana_potion;
			gold = characterdata[0].currency;
			food = characterdata[0].food;
			water = characterdata[0].water;
		}
		barHandler();
	}

	// Reset button
	document.querySelector("#reset").addEventListener('click', reset);

	// Inventory restrictions
	function inventoryRestriction(){
		// Skill points restriction
		if(sp <= 0){
			strBtnSel.style.visibility="hidden";
			agiBtnSel.style.visibility="hidden";
			intBtnSel.style.visibility="hidden";
			staBtnSel.style.visibility="hidden";
			
		}
		if(sp >= 1){
			strBtnSel.style.visibility="visible";
			agiBtnSel.style.visibility="visible";
			intBtnSel.style.visibility="visible";
			staBtnSel.style.visibility="visible";
		}
	}

	// Need solid improvements / transition on startup
	function startUp(){
		if(classSave == true){
			classPick.style.display="none";
			setTimeout(() => {
				gameScreen.style.display="block";
				let opacity = setTimeout(() => {
					gameScreen.style.opacity="1";
				}, 100);
			}, 300);
		}
		if(classSave != true){
			classPick.style.display="flex";
			classPick.style.opacity="1";
		}
	}

	// Control ur level & and give stats on level
	function levelUp(){
		if(exp >= expMax){
			level++;
			exp = exp - expMax;
			expMax = Math.floor(expMax * 1.1);
		}
		if(level > levelPre){
			if(classSelected == "Warrior"){
				hpMax+= 17;
				atk++;
			}
			if(classSelected == "Mage"){
				hpMax+= 8;
				atk+= 0.5;
				manaMax+= 12;
			}
			if(classSelected == "Rogue"){
				hpMax+= 9;
				atk++;
			}
			levelPre = level;
			hp = hpMax;
			mana = manaMax;
			energy = energyMax;
			sp+= 7;
			mainLog = "You reached<b> level " + level + "</b>.";
			strength();
			logger();
			mainLog = "You gained 1 strength!";
			logger();
			agility();
			mainLog = "You gained 1 agility!";
			logger();
			intellect();
			mainLog = "You gained 1 intellect!";
			logger();
			stamina();
			mainLog = "You gained 1 stamina!";
			logger();	
		}
	}

	// Updates all visuals on the site and manages the majority of the calculated numbers
	updater();
	function updater(){
		startUp();
		levelUp();
		barHandler();
		
		// Character
		classPicked.innerHTML = classSelected;
		characterName.innerHTML = nameChar;
		hpSel.innerHTML = Math.floor(hp);
		hpMaxSel.innerHTML = hpMax;
		manaSel.innerHTML = Math.floor(mana);
		manaMaxSel.innerHTML = Math.floor(manaMax);
		energySel.innerHTML = Math.floor(energy);
		energyMaxSel.innerHTML = energyMax;
		rageSel.innerHTML = rage;
		rageMaxSel.innerHTML = rageMax;

		// Bars percent calculation
		let percentHp = Math.floor(hp/hpMax*100);
		let percentMana = Math.floor(mana/manaMax*100);
		let percentEnergy = Math.floor(energy/energyMax*100);
		let percentExp = Math.floor(exp/expMax*100);
		let percentRage = Math.floor(rage/rageMax*100);
		let percentCombo = Math.floor(comboPoint/5*100);
		let percentCreatureHp = Math.floor(creatureList[creatureRan].creatureHp/creatureList[creatureRan].creatureHpMax*100);
		let percentRound = Math.floor(round/creatureList[creatureRan].specialRound[zoneRan]*100);
		
		// CSS Variables changed based on percentage
		root.style.setProperty('--hpBar', percentHp + "%");
		root.style.setProperty('--manaBar', percentMana + "%");
		root.style.setProperty('--energyBar', percentEnergy + "%");
		root.style.setProperty('--expBar', percentExp + "%");
		root.style.setProperty('--rageBar', percentRage + "%");
		root.style.setProperty('--creatureHpBar', percentCreatureHp + "%");
		root.style.setProperty('--comboPointBar', percentCombo + "%");
		root.style.setProperty('--specialRoundBar', percentRound + "%");

		// Update barhandler
		

		// Level
		levelSel.innerHTML = level;
		expSel.innerHTML = Math.floor(exp);
		expMaxSel.innerHTML = expMax;

		// Stats
		spSel.innerHTML = sp;
		atkMaxSel.innerHTML = Math.floor(atk);
		spellAtkMaxSel.innerHTML = Math.floor(spellAtkMax);
		strSel.innerHTML = str;
		agiSel.innerHTML = agi;
		intSel.innerHTML = int;
		staSel.innerHTML = sta;
		comboPointSel.innerHTML = comboPoint;

		// Inventory
		hPotSel.innerHTML = hPot;
		mPotSel.innerHTML = mPot;
		goldSel.innerHTML = gold;
		foodSel.innerHTML = food;
		waterSel.innerHTML = water;

		// Log
		mapShowSel.innerHTML = creatureList[creatureMap].creatureMap;

		// Quest

		// Shop
		hPotBuySel.innerHTML = hPotCost;
		mPotBuySel.innerHTML = mPotCost;
		foodBuySel.innerHTML = foodCost;
		waterBuySel.innerHTML = waterCost;
		
		// Creature
		creatureNameSel.innerHTML= creatureList[creatureRan].creatureName[zoneRan];
		creatureAtkSel.innerHTML = Math.floor(creatureList[creatureRan].creatureAtk/2);
		creatureAtkMaxSel.innerHTML = creatureList[creatureRan].creatureAtk;
		creatureHpSel.innerHTML = creatureList[creatureRan].creatureHp;
		creatureHpMaxSel.innerHTML = creatureList[creatureRan].creatureHpMax;
		creatureLevelSel.innerHTML = creatureList[creatureRan].creatureLevel;
		specialRoundSel.innerHTML = round;
		specialRoundMaxSel.innerHTML = creatureList[creatureRan].specialRound[zoneRan];
		specialAttackSel.innerHTML = creatureList[creatureRan].creatureSpecial[zoneRan];

		// Restrictions & class ability checker
		inventoryRestriction();
		abilityUseable();
	}

	// Save or loads ur game depending on what your localStorage contain
	let storage = localStorage.getItem(characterStorage) & localStorage.getItem(statStorage) & localStorage.getItem(lvlStorage);
	if(storage == null){
		save();
	}else{
		load();
	}

	// Level Selection & determine creature depending on level selected
	for(let i = 0; i<mapSel.length; i++){
		mapSel[i].addEventListener('click', () => {
			if(creatureBox.style.visibility != "visible"){
				creatureMap = i;
				creatureRan = creatureMap;
				mapArrived = true;
				mainLog = "You travelled to <span> " + creatureList[i].creatureMap + "</span>.";
				logger();
				addQuests(i);
				RandomLevel(creatureList[creatureRan].max, creatureList[creatureRan].min);
				if(level < i){
					mainLog = "You hear a voice in your head saying:";
					logger();
					setTimeout(() => {
						mainLog = "<span>The " + creatureList[i].creatureMap + " is a dangerous place for someone like you!</span>";
						logger();	
					}, 1000);
				}
		}else{
			mainLog = "<span>You cannot leave this place right now.</span>";
			logger();
		}
		updater();
		save();
		});
	}
});