
import { Container, Row } from 'react-bootstrap';
import Weather from './components/Weather';

function App() {
  return (
    <Container>
      <Row>

      <h1>Weather</h1>
  
      <Weather />
      </Row>

    </Container>
   
  );
}

export default App;
