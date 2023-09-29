import axios from 'axios';


export const useWeatherService =()=>{
 
    const getWeather = async ()=>{
        //  receber lat e long
        const lat = 23.5505;
        const long = 46.6333;
   
        // const resp = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`);
       
        const resp = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&daily=weathercode,temperature_2m_max,apparent_temperature_min&timezone=America%2FSao_Paulo&forecast_days=1`);
       


        console.log(resp.data);
        return {
            cidade: 'São Paulo',
            temperaturaMax: resp.data.daily.temperature_2m_max[0],
            
            // resp
        }
    }

    return {getWeather};

}   
