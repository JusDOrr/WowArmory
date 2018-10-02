import { BonusStats as BonusStats } from './StatDetails.js';
import * as ItemDetails from './ItemDetails.js';

export const FactionInfo = Object.freeze([
   { "id": 1, "info": { "faction": "Alliance", "race": "Human" } },
   { "id": 2, "info": { "faction": "Horde", "race": "Orc" } },
   { "id": 3, "info": { "faction": "Alliance", "race": "Dwarf" } },
   { "id": 4, "info": { "faction": "Alliance", "race": "Night Elf" } },
   { "id": 5, "info": { "faction": "Horde", "race": "Undead" } },
   { "id": 6, "info": { "faction": "Horde", "race": "Tauren" } },
   { "id": 7, "info": { "faction": "Alliance", "race": "Gnome" } },
   { "id": 8, "info": { "faction": "Horde", "race": "Troll" } },
   { "id": 9, "info": { "faction": "Horde", "race": "Goblin" } },
   { "id": 10, "info": { "faction": "Horde", "race": "Blood Elf" } },
   { "id": 11, "info": { "faction": "Alliance", "race": "Draenei" } },
   
   { "id": 22, "info": { "faction": "Alliance", "race": "Worgen" } },
   { "id": 24, "info": { "faction": "Neutral", "race": "Pandaren" } },
   { "id": 25, "info": { "faction": "Alliance", "race": "Pandaren" } },
   { "id": 26, "info": { "faction": "Horde", "race": "Pandaren" } },

   { "id": 27, "info": { "faction": "Horde", "race": "Nightborne" } },
   { "id": 28, "info": { "faction": "Horde", "race": "Highmountain Tauren" } },
   { "id": 29, "info": { "faction": "Alliance", "race": "Void Elf" } },
   { "id": 30, "info": { "faction": "Alliance", "race": "Lightforged Draenei" } }
]);

export const ClassInfo = Object.freeze([
   { "id": 1, "info": { "name": "Warrior", "color": "#c69b6d" } },
   { "id": 2, "info": { "name": "Paladin", "color": "#f48cba" } },
   { "id": 3, "info": { "name": "Hunter", "color": "#aad372" } },
   { "id": 4, "info": { "name": "Rogue", "color": "#fff468" } },
   { "id": 5, "info": { "name": "Priest", "color": "#f0ebe0" } },
   { "id": 6, "info": { "name": "Death Knight", "color": "#c41e3b" } },
   { "id": 7, "info": { "name": "Shaman", "color": "#2359ff" } },
   { "id": 8, "info": { "name": "Mage", "color": "#68ccef" } },
   { "id": 9, "info": { "name": "Warlock", "color": "#9382c9" } },
   { "id": 10, "info": { "name": "Monk", "color": "#00ffba" } },
   { "id": 11, "info": { "name": "Druid", "color": "#ff7c0a" } },
   { "id": 12, "info": { "name": "Demon Hunter", "color": "#a330c9" } }
]);

export function GetFactionColor (faction) {
    var element = "darkgrey";
 
    if (faction === "Alliance")
       element = "#000050";
    else if (faction === "Horde")
       element = "#500000";
 
    return element;
 };
 
 export function GetRaceInfo (value) {
    var charFact = FactionInfo.find(x => x.id === value);
 
    if (!charFact)
       return value;
 
    return charFact.info;
 };
 
 export function GetClassInfo (value) {
    var charClass = ClassInfo.find(x => x.id === value);
 
    if (!charClass)
       return value;
 
    return charClass.info;
 };
 
 export function GetStatDesc (value) {
    var desc = BonusStats.find(x => x.id === value);
 
    if (!desc)
       return value;
 
    return desc.name;
 };
 
 export function GetQualityColor (value) {
    var quality = ItemDetails.QualityColor.find(x => x.id === value);
 
    if (!quality)
       return "#9d9d9d";
 
    return quality.color;
 };
 
 export function GetInventoryType (value) {
    var invType = ItemDetails.InventoryType.find(x => x.id === value);
 
    if (!invType)
       return "unknown";
 
    return invType.name;
 };
 
 export function GetInventoryClass (mainclass, subclass) {
    var subclasses = ItemDetails.InventoryClass.find(x => x.id === mainclass);
    if (!subclasses)
       return "Miscellaneous";
 
    var invClass = subclasses.subclasses.find(x => x.subclass === subclass);
    if (!invClass)
       return "Miscellaneous";
 
    return invClass.name;
 };
 
 // I think this should be dependant on calcClass, not class....
 export function GetClassStats (classId, stats) {
    var classStats = "";
 
    switch (classId) {
       // Warrior, Paladin, Death Knight
       case 1:
       case 2:
       case 6:
          classStats = Pick(stats, ["health", "powerType", "power", "str", "sta", "crit", "critRating", "haste", "hasteRating", "mastery", "masteryRating", "versatility", "versatilityDamageDoneBonus"]);
          break;
       // Hunter, Rogue, Monk, Druid, Demon Hunter
       case 3:
       case 4:
       case 10:
       case 11:
       case 12:
          classStats = Pick(stats, ["health", "powerType", "power", "agi", "sta", "crit", "critRating", "haste", "hasteRating", "mastery", "masteryRating", "versatility", "versatilityDamageDoneBonus"]);
          break;
       // Mage, Priest, Shaman, Warlock
       case 5:
       case 7:
       case 8:
       case 9:
          classStats = Pick(stats, ["health", "powerType", "power", "int", "sta", "crit", "critRating", "haste", "hasteRating", "mastery", "masteryRating", "versatility", "versatilityDamageDoneBonus"]);
          break;
       // Unknown
       default: classStats = stats;
          break;
    }
 
    return classStats;
 };

 function Pick(objToSearch, items) {
    const obj = {};
    for (const item of items) {
        if (objToSearch[item]) {
            obj[item] = objToSearch[item];
        }
    }
    return obj;
} 
