import React from 'react';
import { connect } from 'react-redux'


const Index = ({ suplentes, quitarSuplente }) => {
    return (
        <div>
            <h2>Suplentes</h2>
            <div className="suplentes">
                {
                    suplentes.map((res, key) => {
                        return (
                            <article key={key} className="suplente">
                                <div>
                                    <img src={res.foto} alt={res.nombre} />
                                    <button onClick={() => quitarSuplente(res)}>x</button>
                                </div>
                                <p>{res.nombre}</p>
                            </article>
                        )
                    })
                }
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    suplentes: state.suplentes
})
const mapDispatchToProps = dispatch => ({
    quitarSuplente(jugador) {
        dispatch({
            type: 'QUITAR_SUPLENTE',
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Index);