import { useState, useEffect, lazy, Suspense} from 'react';
// import Produto from './Produto'
// import Categorias from '../Categorias';

import {Container, Row, Spinner} from 'react-bootstrap';


//implementando o Lazy Loading
const Produto = lazy(() => import('./Produto'));
const Categorias = lazy(() => import('../Categorias'));


export default function Produtos(){

    const [produtos, setProdutos] = useState([])

    useEffect(()=> {
        async function fetchData(){
            const resposta = await fetch("http://localhost:1910/produtos")
            const dados = await resposta.json()
            setProdutos(dados);
        }
        fetchData();

    }, []);

    return(
      <Container>
        <Row>
          <div className="container-fluid">
            <div className="mt-2"><h2>Produtos</h2></div>
            <hr className="my-2"/>
          </div>

          <div className="col-sm-3" id="categorias">
            <Suspense fallback={<div><Spinner animation="border" variant="primary" role="status" /></div>}>
              <Categorias /> 
            </Suspense>      
          </div>
                    
          <div className="produtos">
            <Suspense fallback={<div><Spinner animation="border" variant="primary" role="status" /></div>}>
              {produtos.dados && produtos.dados.map(item => (
                <Produto 
                  key={item.idproduto} 
                  id={item.idproduto}
                  categoria={item.categoria} 
                  imagem={item.imagem}
                  descricao={item.descricao}
                  preco={item.preco}
                  precofinal={item.precofinal} />))}
            </Suspense>
          </div>
        </Row>
      </Container>
        
    )
}