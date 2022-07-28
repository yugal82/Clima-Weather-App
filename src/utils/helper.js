const currentMonth = (data) => {
    const month = new Date(data.dt_txt).getMonth();
    return month;
}
const currentDay = (data) => {
    const currentDate = new Date(data.dt_txt);
    const currentDayIndex = currentDate.getDay();
    return currentDayIndex;
}

const getDate = (data) => {
    const date = new Date(data.dt_txt).getDate();
    return date;
}

const filterData = (weatherDataArray, hour = 0) => {
    const filteredWeatherData = weatherDataArray.filter(data => new Date(data.dt_txt).getHours() === hour);
    return filteredWeatherData;
}

export default  { currentDay, currentMonth, getDate, filterData }