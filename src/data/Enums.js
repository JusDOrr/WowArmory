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
 
 export function GetArmoryNavType (val) {
    switch (val) {
       case 1: return ArmoryNavType.Character;
       case 2: return ArmoryNavType.Achievements;
       case 3: return ArmoryNavType.Collections;
       case 4: return ArmoryNavType.RaidProgress;
       case 5: return ArmoryNavType.PVP;
       case 6: return ArmoryNavType.CharacterReputation;
 
       default: return ArmoryNavType.Character;
    }
 };
