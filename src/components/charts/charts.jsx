import React, {useState, useEffect} from 'react';
import { fetchDataDaily } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

const Charts = ({data : {confirmed, deaths, recovered}, country}) => {
    const [dailyData, setDailyData] = useState([]);
    
     useEffect(() => {
        const respDaily = async () => {
            setDailyData(await fetchDataDaily());
        }
        respDaily();
        
    },[]);

    const lineChart = (
        dailyData.length ?
        <Line
            data={{
               labels:dailyData.map(({ date }) => date),
               datasets:[{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor:'#3333ff',
                    fill:'true'
               },
               {
                data: dailyData.map(({ deaths }) => deaths),
                label: 'Deaths',
                borderColor:'red',
                fill:'true'
               }]
            }}
        /> : null
    );

    // console.log(confirmed.value, deaths.value, recovered.value);
    const barChart = (
        confirmed ? (
            <Bar 
                data={{
                    labels: ['Infected','Recovered','Deaths'],
                    datasets:[{
                        data: [confirmed.value, deaths.value, recovered.value],
                        labels:'People', 
                        backgroundColor:[
                            'rgba(0,0,225,0.5)',
                            'rgba(0,225,0,0.5)',
                            'rgba(225,0,0,0.5)'
                        ], 
                    }]
                }}
                options= {{
                    legend:{display:false},
                    title:{display:true, text:`Current state in ${country}`},
                }}
            />
        ) : null
    );

    return ( 
       <div className="container">
           { country ? barChart : lineChart }
       </div>
     );
}
 
export default Charts;