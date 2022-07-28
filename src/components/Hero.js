import React, { useState } from 'react'
import '../App.css'
import SearchBox from './SearchBox'
import TemperatureList from './TemperatureList'
import helper from '../utils/helper'

// this.API_KEY = "eda2741e7915487088c37104870a3a8d";
// this.BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";
// this.url = `${this.BASE_URL}?q=${this.state.city}&units=metric&appid=${this.API_KEY}`;
// https://api.openweathermap.org/data/2.5/forecast?q=pune&appid=eda2741e7915487088c37104870a3a8d


const Hero = () => {
    const [tempData, setTempData] = useState([])
    const [firstTempData, setFirstTempData] = useState({
        cityName: '',
        temperature: 0,
        weatherIcon: '',
        // hours: '',
        windSpeed: 0.0,
        humidity: 0.0,
        windDeg: 0.0,
        day: 0,
        currentMonth: 0,
        date: 1,
    })

    // const filterData = (weatherDataArray, hour = 0) => {
    //     const filteredWeatherData = weatherDataArray.filter(data => new Date(data.dt_txt).getHours() === hour);
    //     return filteredWeatherData;
    // }
    const temperatureData = (data) => {
        setTempData(data);
    }

    const handleOnSubmit = (data,inputCity) => {
        // console.log(data);

        const currentDayIndex = helper.currentDay(data[0])
        const monthIndex = helper.currentMonth(data[0]);
        const date = helper.getDate(data[0]);

        setFirstTempData({
            cityName: inputCity,
            temperature: data[0].main.temp,
            weatherIcon: data[0].weather[0].icon,
            // hours: data[0].dt_txt,
            windSpeed: ((data[0].wind.speed) * 3.6).toFixed(2),
            humidity: data[0].main.humidity,
            windDeg: (data[0].wind.deg),
            day: currentDayIndex,
            currentMonth: monthIndex,
            date: date,
        });
        temperatureData(data);
    }


    return (
        <div className='hero-section'>
            <div className="container">
                <SearchBox
                    onFormSubmit={handleOnSubmit}
                />
                <TemperatureList
                 firstTempData={firstTempData}
                 tempData={tempData}
                />
            </div>
        </div>
    )
}

export default Hero
