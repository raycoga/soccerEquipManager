import React from 'react';
import { connect } from 'react-redux'

const Index = ({ jugadores, agregarTitular, agregarSuplente, props }) => {
    console.log(props)
    return (
        <section className='container-jugadores'>
            <h2>Jugadores</h2>

            {jugadores.map((res, key) => {
                return (
                    <div className="contenedor-jugadores">
                        <article key={key} className='jugador'>
                            <img src={res.foto} alt={res.nombre} />
                            <h3>{res.nombre}</h3>
                            <div>
                                <button onClick={() => agregarTitular(res)}>Titular</button>
                                <button onClick={() => agregarSuplente(res)}>Suplente</button>
                            </div>
                        </article>
                    </div>
                )
            })}


        </section>
    );
};
/* Para conectar el array de jugadores que se encuentra en el redux con este componente se hara lo siguiente: importar el modulo de connect de react-redux y luego se coloca en el export default, como connect() */
/* Si alguna de esas dos variables q son pasadas por connect, se puede colocar un objeto vacio, por ejemplo: connect({}, mapDispatchToProps)*/

/* Luego declaramos la primera funcion, de donde obtendremos el primer estado, el cual es jugadores, como ya ese valor esta conectado de esta forma, ya puede ser recibido como un prop */
const mapStateToProps = state => ({
    jugadores: state.jugadores
})

/* En el mapDispatchToProps son donde se obtendran las funciones con las que se puede modificar los estados del reducer en redux */
const mapDispatchToProps = dispatch => ({
    agregarTitular(jugador) {
        dispatch({
            type: 'AGREGAR_TITULAR',
            jugador
        })
    },
    agregarSuplente(jugador) {
        dispatch({
            type: 'AGREGAR_SUPLENTE',
            jugador
        })
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Index);