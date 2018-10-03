export const FactionType = Object.freeze({
    Neutral: 1,
    Alliance: 2,
    Horde: 3
 });
 
 export const ArmoryNavType = Object.freeze({
    Character: 1,
    Achievements: 2,
    Collections: 3,
    RaidProgress: 4,
    PVP: 5,
    Reputation: 6
 });
 
 export const ExpansionType = Object.freeze({
    Unknown: "Unknown",
    Guild: "Guild",
    Classic: "Classic",
    BC: "The Burning Crusade",
    WotLK: "Wrath of the Lich King",
    Cata: "Cataclysm",
    MoP: "Mists of Pandaria",
    WoD: "Warlords of Draenor",
    Legion: "Legion",
    BfA: "Battle for Azeroth"
});

export const ReputationTypes = Object.freeze({
    Unknown: "Unknown",
    Stranger: "Stranger",
    Acquaintance: "Acquaintance",
    Buddy: "Buddy",
    Friend: "Friend",
    GoodFriend: "Good Friend",
    BestFriend: "Best Friend",
    Hated: "Hated",
    Hostile: "Hostile",
    Unfriendly: "Unfriendly",
    Neutral: "Neutral",
    Friendly: "Friendly",
    Honored: "Honored",
    Revered: "Revered",
    Exalted: "Exalted"
});

 export function GetArmoryNavType (val) {
    switch (val) {
       case 1: return ArmoryNavType.Character;
       case 2: return ArmoryNavType.Achievements;
       case 3: return ArmoryNavType.Collections;
       case 4: return ArmoryNavType.RaidProgress;
       case 5: return ArmoryNavType.PVP;
       case 6: return ArmoryNavType.Reputation;
 
       default: return ArmoryNavType.Character;
    }
 };
