class Quest {
    //quest reward item could be food, potion or some item.
    killCount = 0;

    constructor(questName, questRewardGold, questRewardItem, creatureName, creatureKillsRequired, questRewardExp) {

        this.questName = questName;
        this.questRewardGold = questRewardGold;
        this.questRewardItem = questRewardItem;
        this.questRewardExp = questRewardExp;
        this.creatureName = creatureName;
        this.creatureKillsRequired = creatureKillsRequired;
    }
}