import React from 'react';

const Card = ({ nombre, horoscopo }) => {
    return (
        <div className="card">
            
            <p>Hola {nombre}</p>
            <p> tu horoscopo es {horoscopo}</p>
        </div>
    );
};

export default Card;