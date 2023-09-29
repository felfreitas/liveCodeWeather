import { useEffect, useState } from "react";
import { useWeatherService } from "../../services/weatherAPI";


type weatherRetorno = {
    cidade:string;
    temperaturaMax: number;
}
interface weatherApi {
    cidade:string;
    temperaturaMax: number;
}

function Weather (){



   const weatherService = useWeatherService();

   const[dadosTempo, setDadosTempo]= useState<weatherRetorno[]>([]);

   useEffect(() => {
    weatherService.getWeather()
    .then((resp)=>{
        if(resp){
            const dataRetorno: weatherApi ={
                cidade: resp.cidade,
                temperaturaMax: resp.temperaturaMax,
            }
            setDadosTempo([dataRetorno])
        }
        
    })

   }, [])
   

    return(
        <div>
        {dadosTempo.map((temp)=>{
            return(
                <>
                <p> Cidade:{temp.cidade} </p>
                <p> temperatura máxima: {temp.temperaturaMax} ºC </p>
                <p> Descrição do clima: </p>
                <p> outros detalhes relevantes</p>
                </>
            )
        })

        }


        </div>
    )
}


export default Weather;