import { useEffect, useState } from "react";
import { useWeatherService } from "../../services/weatherAPI";
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



type weatherRetorno = {
    cidade: string;
    temperaturaMax: number;
}
interface weatherApi {
    cidade: string;
    temperaturaMax: number;
}

function Weather() {



    const weatherService = useWeatherService();

    const [dadosTempo, setDadosTempo] = useState<weatherRetorno[]>([]);

    useEffect(() => {
        weatherService.getWeather()
            .then((resp) => {
                if (resp) {
                    const dataRetorno: weatherApi = {
                        cidade: resp.cidade,
                        temperaturaMax: resp.temperaturaMax,
                    }
                    setDadosTempo([dataRetorno])
                }

            })

    }, [])


    return (
        <div>
            {dadosTempo.map((temp) => {
                return (
                    <>
                        {/* <p> Cidade:{temp.cidade} </p>
                        <p> temperatura máxima: {temp.temperaturaMax} ºC </p>
                        <p> Descrição do clima: </p>
                        <p> outros detalhes relevantes</p> */}
          


            <Container>
                <Row  className="justify-content-md-center">
                    <Col md={{ span: 6, offset: 3 }}>

                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Tempo Real</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{temp.cidade}</Card.Subtitle>
                                <Card.Text>
                                    <p>Temperatura máxima: {temp.temperaturaMax}</p>
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Container>
            </>
                )
            })

            }
        </div>
    )
}


export default Weather;