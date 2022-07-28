import React from 'react'
import '../App.css';
import FirstTempCard from './FirstTempCard'
import Temperature from './Temperature'

const TemperatureList = (props) => {
    return (
        <div className="temperature-list">
            <div className='temp-list'>
                <div className="container">
                    <FirstTempCard firstTempData={props.firstTempData} />
                    {
                        props.tempData.map((data,index) => (
                            // const dayIndex = helper.currentDay(data);
                            // console.log(dayIndex);
                            index !== 0 ? <Temperature tempData={data} /> : null
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TemperatureList