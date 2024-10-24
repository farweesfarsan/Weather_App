
import { forwardRef, useState } from 'react';
import './index.css';
import axios from 'axios';

function App() {
  const[data,setData] = useState({});
  const[location,setLocation] = useState('');

  

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=91f8a252b59e2faae7874bf65fafe7ed`

  const searchLocation = (event)=>{
    if(event.key === 'Enter'){
      axios.get(url).then(response=>{
        setData(response.data)
        console.log(response.data)
        setLocation('')
      })
    }
 }

 

  return (
    <div className="app">
      <div className='search'>
        <input placeholder='Enter Location' type='text' value={location}
           onChange={event=>setLocation(event.target.value)}
           onKeyPress={searchLocation}
           
        />
       
        
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
           <div className='temp'>
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
           
            </div>
            <div className='description'>
              {data.weather ? <p>{data.weather[0].main}</p> : null}
              
           </div>
        </div>
            <div className='bottom'>
              <div className='feel'>
                <p className='bold'>{data.main ? <p>{data.main.feels_like.toFixed()}°F</p> : null}</p>
                <p>Feels like</p>
                
              </div>
              <div className='humidity'>
                {data.main ? <p className='bold'>{data.main.humidity.toFixed()}%</p> : null }
                <p>Humidity</p>
                
              </div>
              <div className='wind'>
                {data.wind ? <p className='bold'>{data.wind.speed.toFixed()}MPH</p> : null}
                
                <p>Wind Speed</p>
              </div>
            </div>
      </div>  
    </div>
  );
}

export default App;
