import React, { useState } from 'react';
import Card from '../Components/Card';

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [horoscopo, setHoroscopo] = useState('');
    const [error, setError] = useState('');
    const [mostrarCard, setMostrarCard] = useState(false);

    const manejarEnvioFormulario = (event) => {
        event.preventDefault();

        if (nombre.trim().length < 3 || horoscopo.trim().length < 6) {
            
            setError('Por favor chequea que la información sea correcta.');
            setMostrarCard(false);
        } else {
            setError('');
            setMostrarCard(true);
        }
    };

    return (
        <>
            <form onSubmit={manejarEnvioFormulario}>
                <label>
                    Nombre:
                    <input
                        type="text"
                        placeholder="Ingrese su nombre"
                        value={nombre}
                        onChange={(event) => setNombre(event.target.value)}
                    />
                </label>
                <br />

                <label>
                    Horoscopo:
                    <input
                        type="text"
                        placeholder="Ingrese su horoscopo"
                        value={horoscopo}
                        onChange={(event) => setHoroscopo(event.target.value)}
                    />
                </label>
                <br />

                {error && <span className="error-mensaje" style={{ color: 'red' }}>{error}</span>}
                <br />
                <button type="submit">Enviar</button>
            </form>
            
            {mostrarCard && 
            <Card nombre={nombre} horoscopo={horoscopo} />}
        </>
    );
};

export default Formulario;