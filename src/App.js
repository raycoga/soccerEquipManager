import React from 'react';
/* Para indicarle al programa que el tiene la posibilidad de adquirir la data de redux, se importa el provider */
import { Provider } from 'react-redux'
/* Para que funcione debera de envolver toda la aplicacion */
import EquipoSeleccionado from './component/EquipoSeleccionado'
import Jugadores from './component/jugadores'
import store from './store'
import './styles/styles.scss'
function App() {
  return (
    /* Pero el provider debera de saber que va a proveer, y para eso se declara la propiedad store en el componente, pero ademas se le asignara que vendra de ahi */
    <Provider store={store}>
      <main>
        <h1>Team Manager</h1>

        <Jugadores />
        <EquipoSeleccionado />
      </main>
    </Provider>
  );
}

export default App;
