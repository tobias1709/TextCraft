class Quest {
    //quest reward item could be foot, potion or some item.

    constructor(questName, questRewardGold, questRewardItem, creatureName, creatureKillsRequired) {
        this.killCount = 0;
        this.questName = questName;
        this.questRewardGold = questRewardGold;
        this.questRewardItem = questRewardItem;
        this.creatureName = creatureName;
        this.creatureKillsRequired = creatureKillsRequired;
    }
}