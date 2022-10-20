import { Container } from 'react-bootstrap'

import Header from './components/Headers'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <div id="body">
      <Header/>

      <main className="py-3">
        <Container>
          <HomeScreen/>
        </Container>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
