import React, { useState } from 'react';
import axios from 'axios';
import './index.css'

function App() {
  const [data,setData] = useState({})
  const [location,setLocation] = useState('')
const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=e139221672196105587a925097b66290`

const searchLocation = (event) =>{
  if (event.key === 'Enter'){
    axios.get(url).then((response)=>{
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
 
}
  return (
    <div className="app">
      <div className='search'>
        <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type='text'
        />
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temperature'>
            {data.main ? <h1>{data.main.temp.toFixed()}℉</h1> : null}
           
          </div>
          <div className='description'>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
           
          </div>
        </div>

        {data.name != undefined &&
         <div className='bottom'>
         <div className='feels'>
           {data.main ? <p className='bold'>{data.main.feels_like}</p> : null}
           
           <p>Feels Like</p>
         </div>
         <div className='humidity'>
           {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
          
           <p>Humidity</p>
         </div>
         <div className='wind'>
           {data.wind ? <p>{data.wind.speed}MPH</p> : null}
             
             <p>Wind Speed</p>
         </div>
       </div>
        }
       


      </div>
    </div>
  );
}

export default App;
