import { useEffect, useState } from "react";
import { useWeatherService } from "../../services/weatherAPI";
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



type weatherRetorno = {
    cidade: string;
    temperaturaMax: number;
    temperaturaMin: number;
    descClima:string;
}
interface weatherApi {
    cidade: string;
    temperaturaMax: number;
    temperaturaMin: number;
    descClima:string;
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
                        temperaturaMin: resp.temperaturaMin,
                        descClima:resp.descricaoClima
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
                     
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col md={{ span: 6, offset: 3 }}>

                                    <Card style={{ width: '18rem', textAlign:'center' }}>
                                        <Card.Body>
                                            <Card.Title>{temp.cidade}</Card.Title>
                                            {/* <Card.Subtitle className="mb-2 text-muted">Cidade: {temp.cidade}</Card.Subtitle> */}
                                            <Card.Text>
                                                <p>Temperatura máx: {temp.temperaturaMax} ºC</p>
                                                <p>Temperatura min: {temp.temperaturaMin} ºC</p>
                                                <p>Descrição do Clima: {temp.descClima}</p>
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