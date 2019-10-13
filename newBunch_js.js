function checkDate(method){
    let today = new Date();
    console.log(today);
    if (method === "month"){
        return today.getMonth();
    }if (method === "day"){
        return today.getDay();
    }if (method === "year"){
        return today.getFullYear();
    }
    if (method === "hours"){
        return today.getHours();
    }
    if (method === "minutes"){
        return today.getMinutes();
    }
}
function createDate(month, day, year, hour, minute, abbrev){
    if (abbrev = "PM"){
        hour += 12;
    }
    let newDate = new Date();
    newDate.setFullYear(year, month, day);
    newDate.setHours(hour, minute, 0, 0);
    return newDate;
}
function validDate(month, day, year, startHour, startDay, startAbbrev, endHour, endDay, endAbbrev){
    const startDate = createDate(month, day, year, startHour, startDay, startAbbrev);
    const endDate = createDate(month, day, year, endHour, endDay, endAbbrev);
}