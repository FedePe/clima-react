import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'

function App() {

  // state del formulario
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais:''    
  });

  const [consultar, guardarConsultar] = useState(false);

  const {ciudad, pais} = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {

      if(consultar){
        const apiId = '39ad18d0c296eddbb204a9163ab87fca';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiId}`;
      
        const respuesta = await fetch(url);
  
        const resultado = await respuesta.json();
  
        console.log(resultado)
      }

    }
    consultarAPI();
  },[consultar]);

  return (
    <Fragment>
      <Header 
        titulo={'Clima React App'}
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
              busqueda={busqueda}
              guardarBusqueda={guardarBusqueda}
              guardarConsultar={guardarConsultar}
              />
            </div>
            <div className="col m6 s12">
              2
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
