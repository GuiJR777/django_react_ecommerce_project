import { Container } from 'react-bootstrap'

import Header from './components/Headers'
import Footer from './components/Footer'

function App() {
  return (
    <div id="body">
      <Header/>

      <main className="py-3">
        <Container>
          <h1>Loja Profiça</h1>
        </Container>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
