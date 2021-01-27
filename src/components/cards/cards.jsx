import React from 'react';

const Cards = ( { data : {confirmed, deaths, recovered, lastUpdate } }) => {
    if(!confirmed){
        return '..loading';
    } 
    return ( 
        <div className="flex">
            <div className="card">
                <div className="container">
                    <h1>Infected</h1> 
                    <p>{confirmed.value}</p>
                    <p>{new Date(lastUpdate).toDateString()}</p>
                </div>
            </div>
            
            <div className="card">
                <div className="container">
                    <h1>Deaths</h1> 
                    <p>{deaths.value}</p>
                    <p>{new Date(lastUpdate).toDateString()}</p>
                </div>
            </div>
            
            <div className="card">
                <div className="container">
                    <h1>Recovered</h1> 
                    <p>{recovered.value}</p>
                    <p>{new Date(lastUpdate).toDateString()}</p>
                </div>
            </div>
        </div>
    
     );
}
 
export default Cards;