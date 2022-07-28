import React from 'react'
import '../App.css';

const Temperature = (props) => {
    const daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Firday', 'Saturday']
    // console.log(props.tempData);
    // console.log(props.tempData.dt_txt);
    const currentDate = new Date(props.tempData.dt_txt)
    const currentDateIndex = currentDate.getDay();

    return (
        <div className='forecast'>
            <div className="forecast-header">
                <div className="day">{daysArray[currentDateIndex]}</div>
            </div>
            <div className="forecast-content">
                <div className="forecast-icon">
                    <img className='temp-weatherIcon' src={`./images/icons/${props.tempData.weather[0].icon}.svg`} alt="" />
                </div>
                <div className="temp-num">{props.tempData.main.temp}&deg;C</div>
            </div>
        </div>
    )
}

export default Temperature