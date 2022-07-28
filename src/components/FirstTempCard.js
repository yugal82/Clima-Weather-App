import React from 'react'
import '../App.css';

const FirstTempCard = (props) => {

    const daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Firday', 'Saturday']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    return (
        <div className='today-forecast'>
            <div className="forecast-header">
                <div className="day">{daysArray[props.firstTempData.day]}</div>
                <div className="date">{props.firstTempData.date} {months[props.firstTempData.currentMonth]}</div>
            </div>
            <div className="forecast-content">
                <div className="city">
                    {props.firstTempData.cityName ? props.firstTempData.cityName : 'Pune'}
                </div>
                <div className="degree">
                    <div className="temp-num">
                        {props.firstTempData.temperature ? props.firstTempData.temperature : 20.01}&deg;C
                    </div>
                    <div className="forecast-icon">
                        <img className='weather-icon' src={props.firstTempData.weatherIcon ? `./images/icons/${props.firstTempData.weatherIcon}.svg`: `./images/icons/icon-1.svg`} alt="" />
                    </div>
                </div>
                <span>
                    <img src="./images/icon-umberella.png" alt="" />
                    <span className='humidity'>{props.firstTempData.humidity}%</span>
                </span>
                <span>
                    <img src="./images/icon-wind.png" alt="" />
                    <span className='wind'>{props.firstTempData.windSpeed}km/hr</span>
                </span>
                <span>
                    <img src="./images/icon-compass.png" alt="" />
                    <span className='wind-deg'>{props.firstTempData.windDeg}&deg;</span>
                </span>
            </div>
        </div>
    )
}

export default FirstTempCard