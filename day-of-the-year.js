function dayOfTheYear(date){
    let yearNum = date.getFullYear()
    let year = (yearNum.toString() + "-01-01")
    while (year.length < 10) {
        year = "0" + year
    }
    let Day1 = new Date(year)
    let difference = date.getTime()-Day1.getTime()
    let differenceInDays = difference / (1000 * 60 * 60 * 24) +1;
    return differenceInDays
}