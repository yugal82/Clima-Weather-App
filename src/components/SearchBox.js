import React, { useState } from 'react'
import '../App.css';
import helper from '../utils/helper';

const SearchBox = (props) => {
  const [inputVal, setInputVal] = useState('');
  const API_KEY = "eda2741e7915487088c37104870a3a8d";
  const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";

  const fetchData = async (city) => {
    const url = `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    return data
  }

  // const filterData = (weatherDataArray, hour = 0) => {
  //   const filteredWeatherData = weatherDataArray.filter(data => new Date(data.dt_txt).getHours() === hour);
  //   return filteredWeatherData;
  // }

  const handleOnChange = (e) => {
    const value = e.target.value;
    // console.log('before state change:', inputVal);
    setInputVal(value);
    // console.log('after state change:', inputVal);
  }

  const resetInput = () => {
    setInputVal('');
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchData(inputVal);
    // console.log(data);
    const keyTime = new Date(data.list[0].dt_txt).getHours();
    const cityName = data.city.name;
    const filteredData = helper.filterData(data.list, keyTime)
    resetInput();
    props.onFormSubmit(filteredData,cityName);
  }


  return (
    <div className='search-box'>
      <form className='form' onSubmit={handleFormSubmit} >
        <input type="text" placeholder='Find your location' value={inputVal} onChange={handleOnChange} />
        <input type="submit" value="Find" />
      </form>
    </div>
  )
}

export default SearchBox