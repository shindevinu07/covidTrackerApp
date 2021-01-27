import React, { useState, useEffect } from 'react';
import {fetchCountries} from '../../api';
const Country = ({handleCountry}) => {
    const [fetchCountre, setFetchCountries] = useState([]);
    useEffect(() => {
        const fetchCountry = async () => {
            setFetchCountries(await fetchCountries());
        }
        fetchCountry();
    },[setFetchCountries]);
    return ( 
        <div>
            <select onChange={(e)=> (handleCountry(e.target.value)) }>
                <option>Global</option>
                {fetchCountre.map((country,i)=>(
                    <option key={i} value={country}>{country}</option>
                ))}
            </select>
        </div>
     );
}
 
export default Country;