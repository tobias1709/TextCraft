class Quest {
    //quest reward item could be foot, potion or some item.
    constructor(questName, questRewardGold, questRewardItem, monsterName, monsterKillsRequired) {

        this.questName = questName;
        this.questRewardGold = questRewardGold;
        this.questRewardItem = questRewardItem;

        this.monsterName = monsterName;
        this.monsterKillsRequired = monsterKillsRequired;
    }
}