import React, { useState } from 'react';

const TesteInputEstado = () => {
    const [nome, setNome] = useState('Ana Maria');

    return (
        <div style={{backgroundColor: 'lightblue'}}>
            <h1>Controlando input com state</h1>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{display: 'flex', gap: 5, margin: '0px'}}>
                    <label htmlFor='nome'>Nome: </label>
                    <input 
                        type='text' 
                        id='nome' 
                        name='nome' 
                        value={nome} 
                        onChange={e => setNome(e.target.value)} 
                    />
                </div>
                <p style={{margin: '0px'}}>{nome.length} caracteres</p>
            </div>
        </div>
    );
};

export default TesteInputEstado;
