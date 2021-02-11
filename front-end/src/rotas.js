import {lazy, Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';
import {Spinner} from 'react-bootstrap';

// import Produtos from './Components/Produtos/index.js';
// import Pedidos from './Paginas/Pedidos';
// import Lojas from './Paginas/Lojas';
// import Contatos from './Paginas/Contatos';
// import Home from './Paginas/Home';

const Produtos = lazy(() => import('./Components/Produtos/index.js'));
const Pedidos = lazy(() => import('./Paginas/Pedidos'));
const Lojas = lazy(() => import('./Paginas/Lojas'));
const Contatos = lazy(() => import('./Paginas/Contatos'));
const Home = lazy(() => import('./Paginas/Home'));

function Rotas(){
    return(
      <Switch>
        <Suspense fallback={<div><Spinner animation="border" variant="primary" /></div>}>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/produtos" component={Produtos} />
          <Route exact path="/pedidos" component={Pedidos} />
          <Route exact path="/lojas" component={Lojas} />
          <Route exact path="/contatos" component={Contatos} />
        </Suspense>
      </Switch>
    )
}

export default Rotas;