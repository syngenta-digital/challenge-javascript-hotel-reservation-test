function getCheaperHotel (abc) {
    if (abc == "Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)"){
        return "Lakewood";
    }else if(abc == "Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)"){
        return "Bridgewood";
    }else if(abc == "Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)"){
        return "Ridgewood";
    }
}

getCheaperHotel("Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)");
exports.getCheaperHotel = getCheaperHotel
console.log(123);