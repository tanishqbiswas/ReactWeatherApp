import React, { useEffect, useState } from 'react';
import "./css/style.css";

const Tempapp = () => {

    const[city, setCity] = useState(null);
    const[search, setSearch] = useState("Mumbai");
    
    useEffect( () => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a2ebedace1ef1ed337f17d8245b28c69`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        }

        fetchApi();
    },[search] )


    return(
        <>
            <div className="box">
                <div className="inputData">
                    <input 
                    type="search" 
                    value={search}
                    className="inputfield"
                    onChange={ (Event) => { setSearch(Event.target.value) } } />
                </div>
        
        {!city ? (
            <p className="errorMsg">No data found</p>
        )   : (
            <div>
            <div className="info">
                    <h2 className="location">
                    <i className="fas fa-street-view"></i> {search}  
                    </h2>
                    <h1 className="temp">
                    {city.temp} °Cel
                    </h1>
                    <h3 className="tempmin_max">
                        Min : {city.temp_min} °Cel | Max : {city.temp_max} °Cel
                    </h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
            </div>
        )
        }

           
            </div>
        </>
    )
}

export default Tempapp;