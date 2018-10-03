var addAPIKeyField = function () { return "&apikey=83pjrytmmwp4zv96jbe4ht8j6xtbdfw2"; };
var addLocaleField = function () { return "en_US"; };

var GET = function (apiPath, loadCallBack, errorCallBack) {
   if (!apiPath)
      return;

   var xhr = new XMLHttpRequest();
   xhr.open('get', apiPath, true);

   xhr.onload = function () {
      var data = JSON.parse(xhr.responseText);
      loadCallBack(data);
   }.bind(this);

   xhr.onerror = function (e) {
      errorCallBack(e);
   }.bind(this);

   xhr.send();
};

export function GetRealmStatus (loadCallBack, errorCallBack) {
   var APIPath = "https://us.api.battle.net/wow/realm/status?locale=" + addLocaleField() + addAPIKeyField();
   GET(APIPath, loadCallBack, errorCallBack);
};

export function GetMounts (loadCallBack, errorCallBack) {
   var APIPath = "https://us.api.battle.net/wow/mount/?locale=" + addLocaleField() + addAPIKeyField();
   GET(APIPath, loadCallBack, errorCallBack);
};

export function GetCharacter (loadCallBack, errorCallBack, realm, character) {
   var APIPath = "https://us.api.battle.net/wow/character/" + realm + "/" + character + "?fields=talents,stats,items,guild,titles,progression,reputation&locale=" + addLocaleField() + addAPIKeyField();
   GET(APIPath, loadCallBack, errorCallBack);
};

export function GetItem (loadCallBack, errorCallBack, itemId, context, bonusList) {
   var ctxt = context ? "\/" + context : "";
   var bl = bonusList ? "bl=" + bonusList.toString() + "&" : "";

   var APIPath = "https://us.api.battle.net/wow/item/" + itemId + ctxt + "?" + bl + "locale=" + addLocaleField() + addAPIKeyField();
   GET(APIPath, loadCallBack, errorCallBack);
};

export function GetLogo (faction) {
   if (!faction)
      return "";

   var logo = "";
   if (faction === "Alliance")
      logo = "https://worldofwarcraft.akamaized.net/static/components/Logo/Logo-alliance.png";
   else if (faction === "Horde")
      logo = "https://worldofwarcraft.akamaized.net/static/components/Logo/Logo-horde.png";

   return logo;
};

export function GetAvatar (race, gender, thumbnail) {
   if ( race === undefined || gender === undefined || thumbnail === undefined )
      return "";

   var _thumbnail = (thumbnail + "").replace("avatar.jpg", "main.jpg");
   return "https://render-us.worldofwarcraft.com/character/" + _thumbnail;
};

export function GetIcon (icon) {
   if (!icon)
      return "";

   return "https://render-us.worldofwarcraft.com/icons/56/" + icon + ".jpg";
};

export function GetRaidImage (raidName) {
   var prepared = raidName.replace(',','').replace(/ /g,"-").toLowerCase();
   return "https://render-us.worldofwarcraft.com/zones/" + prepared + "-small.jpg";;
};

// Downloaded for easier use... This is no longer used...
export function GetEmptyGearSlots () {
   return "https://worldofwarcraft.akamaized.net/static/components/GameIcon/GameIcon-slots.png";
};
