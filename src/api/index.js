import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    let urlChange = url;
    if(country){
        urlChange = `${url}/countries/${country}`;
    }
    try {
        const { data : {confirmed, deaths, recovered, lastUpdate }} = await axios.get(urlChange);
        const responseDetails = {
            confirmed,
            deaths,
            recovered,
            lastUpdate
        }   
        return responseDetails;
    }catch(e){
        console.log(e);
    }
}

export const fetchDataDaily = async () => {
    try{
        const { data }  = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData)=>({
            confirmed: dailyData.confirmed.total,
            deaths:dailyData.deaths.total,  
            date: dailyData.reportDate
        }));
        return modifiedData; 
    }catch(e){
        console.log(e);
    }
}

export const fetchCountries = async () => {
    try{
        const { data:{ countries } } = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
    }catch(e){
        console.log(e);
    }
}