
import { Container, Row } from 'react-bootstrap';
import Weather from './components/Weather';

function App() {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">

          <h1 style={{textAlign: 'center'}}> LiveCode  Weather</h1>

          <Weather />
        </Row>

      </Container>
    </div>

  );
}

export default App;
