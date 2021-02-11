import Menu from './Components/Menu';
import Rotas from './rotas';

import './App.css';

import { BrowserRouter} from 'react-router-dom';
import {lazy, Suspense} from 'react';
import { Container, Spinner } from 'react-bootstrap';

// import Footer from './Components/Footer';
const Footer = lazy(() => import('./Components/Footer'));


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Menu />
        </header>
        <main>
          <div className="page-container">
            <Container fluid>
              <Rotas/>
            </Container>
          </div>
        </main>
        <footer>
          <Suspense fallback={<div><Spinner animation="border" variant="primary"/></div>}>
            <Footer />
          </Suspense>
        </footer>
      </div>
    </BrowserRouter>
  );
}


export default App;
