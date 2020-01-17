import React from 'react';
import { connect } from 'react-redux'
import cancha from '../../../images/cancha.svg'

const Index = ({ titulares, quitarTitular }) => {
    return (
        <div>
            <h2>Titulares</h2>
            <div className="cancha">
                {
                    titulares.map((res, key) => {
                        return (
                            <article key={key} className="titular">
                                <div>
                                    <img src={res.foto} alt={res.nombre} />
                                    <button onClick={() => quitarTitular(res)}>x</button>
                                </div>
                                <p>{res.nombre}</p>
                            </article>
                        )
                    })
                }
                <img style={{ width: '50em' }} src={cancha} alt="Cancha de futbol" />
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    titulares: state.titulares
})
const mapDispatchToProps = dispatch => ({
    quitarTitular(jugador) {
        dispatch({
            type: 'QUITAR_TITULAR',
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Index);