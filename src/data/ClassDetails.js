import { BonusStats as BonusStats } from './StatDetails.js';
import * as ItemDetails from './ItemDetails.js';
import * as Enums from './Enums.js';

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

// "There are 6 levels of friendship: Stranger, Acquaintance, Buddy, Friend, Good Friend, and Best Friend." out of 8400
export const ReputationInfo = Object.freeze([
    { "id": 0, "names": [Enums.ReputationTypes.Hated, Enums.ReputationTypes.Stranger] },
    { "id": 1, "names": [Enums.ReputationTypes.Hostile, Enums.ReputationTypes.Acquaintance] },
    { "id": 2, "names": [Enums.ReputationTypes.Unfriendly, Enums.ReputationTypes.Buddy] },
    { "id": 3, "names": [Enums.ReputationTypes.Neutral, Enums.ReputationTypes.Friend] },
    { "id": 4, "names": [Enums.ReputationTypes.Friendly, Enums.ReputationTypes.GoodFriend] },
    { "id": 5, "names": [Enums.ReputationTypes.Honored, Enums.ReputationTypes.BestFriend] },
    { "id": 6, "names": [Enums.ReputationTypes.Revered, Enums.ReputationTypes.Unknown] },
    { "id": 7, "names": [Enums.ReputationTypes.Exalted, Enums.ReputationTypes.Unknown] }
]);

export const Reputations = Object.freeze([
    {
        "Expansion": Enums.ExpansionType.Legion,
        "Factions": [
            { "Id": 1828, "Name": "Highmountain Tribe", "Faction": Enums.FactionType.All },
            { "Id": 1859, "Name": "The Nightfallen", "Faction": Enums.FactionType.All },
            { "Id": 1883, "Name": "Dreamweavers", "Faction": Enums.FactionType.All },
            { "Id": 1894, "Name": "The Wardens", "Faction": Enums.FactionType.All },
            { "Id": 1900, "Name": "Court of Farondis", "Faction": Enums.FactionType.All },
            { "Id": 1948, "Name": "Valarjar", "Faction": Enums.FactionType.All },
            { "Id": 1975, "Name": "Conjurer Margoss", "Faction": Enums.FactionType.All },
            { "Id": 2045, "Name": "Armies of Legionfall", "Faction": Enums.FactionType.All },
            { "Id": 2135, "Name": "Chromie", "Faction": Enums.FactionType.All },
            { "Id": 2165, "Name": "Army of the Light", "Faction": Enums.FactionType.All },
            { "Id": 2170, "Name": "Argussian Reach", "Faction": Enums.FactionType.All }
      ]
    },
    {
        "Expansion": Enums.ExpansionType.WoD,
        "Factions": [
            { "Id": 1515, "Name": "Arakkoa Outcasts", "Faction": Enums.FactionType.All },
            { "Id": 1682, "Name": "Wrynn's Vanguard", "Faction": Enums.FactionType.Alliance },
            { "Id": 1711, "Name": "Steamwheedle Preservation Society", "Faction": Enums.FactionType.All },
            { "Id": 1731, "Name": "Council of Exarchs", "Faction": Enums.FactionType.Alliance },
            { "Id": 1847, "Name": "Hand of the Prophet", "Faction": Enums.FactionType.Alliance },
            { "Id": 1849, "Name": "Order of the Awakened", "Faction": Enums.FactionType.All },
            { "Id": 1850, "Name": "The Saberstalkers", "Faction": Enums.FactionType.All }
        ]
    },
    {
        "Expansion": Enums.ExpansionType.MoP,
        "Factions": [
            { "Id": 1269, "Name": "Golden Lotus", "Faction": Enums.FactionType.All },
            { "Id": 1270, "Name": "Shado-Pan", "Faction": Enums.FactionType.All },
            { "Id": 1271, "Name": "Order of the Cloud Serpent", "Faction": Enums.FactionType.All },
            { "Id": 1302, "Name": "The Anglers", "Faction": Enums.FactionType.All },
            { "Id": 1337, "Name": "The Klaxxi", "Faction": Enums.FactionType.All },
            { "Id": 1341, "Name": "The August Celestials", "Faction": Enums.FactionType.All },
            { "Id": 1345, "Name": "The Lorewalkers", "Faction": Enums.FactionType.All },
            { "Id": 1358, "Name": "Nat Pagle", "Faction": Enums.FactionType.All },
            { "Id": 1359, "Name": "The Black Prince", "Faction": Enums.FactionType.All },
            { "Id": 1376, "Name": "Operation: Shieldwall", "Faction": Enums.FactionType.All },
            { "Id": 1387, "Name": "Kirin Tor Offensive", "Faction": Enums.FactionType.All },
            { "Id": 1435, "Name": "Shado-Pan Assault", "Faction": Enums.FactionType.All }
        ]
    },
    {
        "Expansion": Enums.ExpansionType.Cata,
        "Factions": [
            { "Id": 1135, "Name": "The Earthen Ring", "Faction": Enums.FactionType.All },
            { "Id": 1158, "Name": "Guardians of Hyjal", "Faction": Enums.FactionType.All },
            { "Id": 1171, "Name": "Therazane", "Faction": Enums.FactionType.All },
            { "Id": 1173, "Name": "Ramkahen", "Faction": Enums.FactionType.All },
            { "Id": 1177, "Name": "Baradin's Wardens", "Faction": Enums.FactionType.All },
            { "Id": 1204, "Name": "Avengers of Hyjal", "Faction": Enums.FactionType.All }
        ]
    },
    {
        "Expansion": Enums.ExpansionType.WotLK,
        "Factions": [
            { "Id": 1106, "Name": "Argent Crusade", "Faction": Enums.FactionType.All },
            { "Id": 1090, "Name": "Kirin Tor", "Faction": Enums.FactionType.All },
            { "Id": 1156, "Name": "The Ashen Verdict", "Faction": Enums.FactionType.All },
            { "Id": 1073, "Name": "The Kalu'ak", "Faction": Enums.FactionType.All },
            { "Id": 1119, "Name": "The Sons of Hodir", "Faction": Enums.FactionType.All },
            { "Id": 1091, "Name": "The Wyrmrest Accord", "Faction": Enums.FactionType.All },
            { "Id": 1037, "Name": "Alliance Vanguard", "Faction": Enums.FactionType.All },
            { "Id": 1068, "Name": "Explorers' League", "Faction": Enums.FactionType.All },
            { "Id": 1126, "Name": "The Frostborn", "Faction": Enums.FactionType.All },
            { "Id": 1094, "Name": "The Silver Covenant", "Faction": Enums.FactionType.All },
            { "Id": 1050, "Name": "Valiance Expedition", "Faction": Enums.FactionType.All },
            { "Id": 1104, "Name": "Frenzyheart Tribe", "Faction": Enums.FactionType.All },
            { "Id": 1105, "Name": "The Oracles", "Faction": Enums.FactionType.All }
        ]
    },
    {
        "Expansion": Enums.ExpansionType.BC,
        "Factions": [
            { "Id": 1012, "Name": "Ashtongue Deathsworn", "Faction": Enums.FactionType.All },
            { "Id": 942, "Name": "Cenarion Expedition", "Faction": Enums.FactionType.All },
            { "Id": 946, "Name": "Honor Hold", "Faction": Enums.FactionType.All },
            { "Id": 989, "Name": "Keepers of Time", "Faction": Enums.FactionType.All },
            { "Id": 978, "Name": "Kurenai", "Faction": Enums.FactionType.All },
            { "Id": 970, "Name": "Sporeggar", "Faction": Enums.FactionType.All },
            { "Id": 933, "Name": "The Consortium", "Faction": Enums.FactionType.All },
            { "Id": 990, "Name": "The Scale of the Sands", "Faction": Enums.FactionType.All },
            { "Id": 967, "Name": "The Violet Eye", "Faction": Enums.FactionType.All },
            { "Id": 1011, "Name": "Lower City", "Faction": Enums.FactionType.All },
            { "Id": 1031, "Name": "Sha'tari Skyguard", "Faction": Enums.FactionType.All },
            { "Id": 1077, "Name": "Shattered Sun Offensive", "Faction": Enums.FactionType.All },
            { "Id": 932, "Name": "The Aldor", "Faction": Enums.FactionType.All },
            { "Id": 934, "Name": "The Scryers", "Faction": Enums.FactionType.All },
            { "Id": 935, "Name": "The Sha'tar", "Faction": Enums.FactionType.All }
        ]
    },
    {
        "Expansion": Enums.ExpansionType.Classic,
        "Factions": [
            { "Id": 529, "Name": "Argent Dawn", "Faction": Enums.FactionType.All },
            { "Id": 87, "Name": "Bloodsail Buccaneers", "Faction": Enums.FactionType.All },
            { "Id": 910, "Name": "Brood of Nozdormu", "Faction": Enums.FactionType.All },
            { "Id": 609, "Name": "Cenarion Circle", "Faction": Enums.FactionType.All },
            { "Id": 909, "Name": "Darkmoon Faire", "Faction": Enums.FactionType.All },
            { "Id": 92, "Name": "Gelkis Clan Centaur", "Faction": Enums.FactionType.All },
            { "Id": 749, "Name": "Hydraxian Waterlords", "Faction": Enums.FactionType.All },
            { "Id": 93, "Name": "Magram Clan Centaur", "Faction": Enums.FactionType.All },
            { "Id": 349, "Name": "Ravenholdt", "Faction": Enums.FactionType.All },
            { "Id": 70, "Name": "Syndicate", "Faction": Enums.FactionType.All },
            { "Id": 59, "Name": "Thorium Brotherhood", "Faction": Enums.FactionType.All },
            { "Id": 576, "Name": "Timbermaw Hold", "Faction": Enums.FactionType.All },

            { "Id": 1133, "Name": "Bilgewater Cartel", "Faction": Enums.FactionType.Horde },
            { "Id": 530, "Name": "Darkspear Trolls", "Faction": Enums.FactionType.Horde },
            { "Id": 76, "Name": "Orgrimmar", "Faction": Enums.FactionType.Horde },
            { "Id": 81, "Name": "Thunder Bluff", "Faction": Enums.FactionType.Horde },
            { "Id": 911, "Name": "Silvermoon City", "Faction": Enums.FactionType.Horde },
            { "Id": 68, "Name": "Undercity", "Faction": Enums.FactionType.Horde },

            { "Id": 69, "Name": "Darnassus", "Faction": Enums.FactionType.Alliance },
            { "Id": 930, "Name": "Exodar", "Faction": Enums.FactionType.Alliance },
            { "Id": 1134, "Name": "Gilneas", "Faction": Enums.FactionType.Alliance },
            { "Id": 54, "Name": "Gnomeregan", "Faction": Enums.FactionType.Alliance },
            { "Id": 47, "Name": "Ironforge", "Faction": Enums.FactionType.Alliance },
            { "Id": 72, "Name": "Stormwind", "Faction": Enums.FactionType.Alliance },

            { "Id": 1691, "Name": "Bizmo's Brawlpub (Season 2)", "Faction": Enums.FactionType.All },
            { "Id": 890, "Name": "Silverwing Sentinels", "Faction": Enums.FactionType.Alliance },
            { "Id": 730, "Name": "Stormpike Guard", "Faction": Enums.FactionType.Alliance },
            { "Id": 509, "Name": "The League of Arathor", "Faction": Enums.FactionType.Alliance },

            { "Id": 21, "Name": "Booty Bay", "Faction": Enums.FactionType.All },
            { "Id": 577, "Name": "Everlook", "Faction": Enums.FactionType.All },
            { "Id": 369, "Name": "Gadgetzan", "Faction": Enums.FactionType.All },
            { "Id": 470, "Name": "Ratchet", "Faction": Enums.FactionType.All }
        ]
    },
    {
        "Expansion": Enums.ExpansionType.Guild,
        "Factions": [
            { "Id": 1168, "Name": "Guild", "Faction": Enums.FactionType.All }
        ]
    },
    {
        "Expansion": Enums.ExpansionType.Unknown,
        "Factions": [
            { "Id": 469, "Name": "Alliance", "Faction": Enums.FactionType.All },
            { "Id": 510, "Name": "The Defilers", "Faction": Enums.FactionType.All },
            { "Id": 947, "Name": "Thrallmar", "Faction": Enums.FactionType.All },
            { "Id": 1015, "Name": "Netherwing", "Faction": Enums.FactionType.All },
            { "Id": 1052, "Name": "Horde Expedition", "Faction": Enums.FactionType.All },
            { "Id": 1067, "Name": "The Hand of Vengeance", "Faction": Enums.FactionType.All },
            { "Id": 1172, "Name": "Dragonmaw Clan", "Faction": Enums.FactionType.All },
            { "Id": 1375, "Name": "Dominance Offensive", "Faction": Enums.FactionType.All },
            { "Id": 1388, "Name": "Sunreaver Onslaught", "Faction": Enums.FactionType.All },
            { "Id": 1445, "Name": "Frostwolf Orcs", "Faction": Enums.FactionType.All },
            { "Id": 1681, "Name": "Vol'jin's Spear", "Faction": Enums.FactionType.All },
            { "Id": 1708, "Name": "Laughing Skull Orcs", "Faction": Enums.FactionType.All },
            { "Id": 1848, "Name": "Vol'jin's Headhunters", "Faction": Enums.FactionType.All }
        ]
    }
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
 
 export function GetReputationInfo (value, maxvalue) {
    var select = (maxvalue === 8400) ? 1 : 0;
    var repName = ReputationInfo.find(x => x.id === value);

    if (!repName)
        return "unknown";

    return repName.names[select];
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
