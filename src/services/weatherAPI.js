import axios from 'axios';

// weatherCode
const codeDescriptionWMO =  
{0: 'Céu limpo',
1: 'Principalmente claro',
2: 'Parcialmente nublado' ,
3: 'Encoberto'
}


export const useWeatherService =()=>{
 
    const getWeather = async ()=>{
        //  receber lat e long
        const lat = -23.5505;
        const long = -46.6333;
   
        // const resp = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`);
       
        const resp = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&daily=weathercode,temperature_2m_max,apparent_temperature_min&timezone=America%2FSao_Paulo&forecast_days=1`);
       
        //teria que melhorar pois
        const weatherCode =  resp.data.daily.weathercode[0];
        const descClima = codeDescriptionWMO[weatherCode];

        console.log(descClima);
        console.log(resp.data);
        return {
            cidade: 'São Paulo',
            temperaturaMax: resp.data.daily.temperature_2m_max[0],
            temperaturaMin: resp.data.daily.apparent_temperature_min[0],
            descricaoClima: descClima? descClima :'sem resultado'
            
            // resp
        }
    }

    //intervalo de 30minutos
    const intervalo = 30*60*1000;
    const atualizaDados = ()=>{
        getWeather();
        setInterval(getWeather,intervalo);
    };

    atualizaDados();

    return {getWeather};

}   



