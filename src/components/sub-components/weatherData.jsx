
import React, {useEffect, useState} from 'react';

const Weather = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [text, setText] = useState('')
    const [city, setCity] = useState('');
    const [cityText, setCityText] = useState('');

    useEffect(() => {
    //   return () => {
    //     effect
    //   };
    setCity(text);//updates City as text is entered
    console.log(city);//prints the city variable as it's updated in real time
    console.log('useEffect ran');
    }, [weatherData, text]);

    const handleForm = (e) => {
        e.preventDefault();
            
        const getData = async () => {
            try {
                let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.REACT_APP_APIKEY}`;
                let response = await fetch(url);
                let data = await response.json();      
                setWeatherData(data);
                console.log(data);
                console.log('city', city);
                setCityText(city);//sets the cityText on the weather display
            } catch (error) {
                console.log('Error with API', error);
            };
        };
        getData();
        setText('');//clears the form after the data is received
    };

    return <>
        <form onSubmit={handleForm} className="form-group container">
            <div>
                <h1>Quick Weather</h1>
                <h2>Search City Name</h2>
                <input className="form-control" type="text" value={text} onChange={(e)=>setText(e.target.value.toUpperCase())} id="input-city" aria-describedby="City" placeholder="Enter City Name"/>
            </div>

            <button type="submit" className="btn-primary rounded" id="btn-submit">
                SUBMIT
            </button>
        </form>

        <div className="container rounded-pill d-flex flex-column conditions align-items-center">

            {cityText && cityText ? 
            <h2 id="city" style={{marginTop: "0px"}}>{cityText}</h2> : 
            <h2 id="city" style={{marginTop: "0px"}}>Cupertino</h2>}
            
            {weatherData.weather && weatherData.weather ? 
            <p id="pic" style={{marginTop: "0px"}}><img id="icon" src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} width="250" height="250" alt='weather'/></p> : 
            <p id="pic" style={{marginTop: "0px"}}><img id="icon" src="http://openweathermap.org/img/wn/04d@2x.png" width="250" height="250" alt='weather'/></p>}
            
            {weatherData.main && weatherData.main ? 
            <h2  id="conditions" style={{marginTop: "0px"}}> {weatherData.main.temp}F {weatherData.weather[0].description}
            </h2> : 
            <h2  id="conditions" style={{marginTop: "0px"}}>44.69F overcast clouds</h2>}

        </div>
    </>;
}
 
export default Weather;