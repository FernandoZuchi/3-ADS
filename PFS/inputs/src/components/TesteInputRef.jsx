import React, {useRef, useState} from 'react';

const TesteInputRef = () => {
    const inputRef = useRef();
    const [mensagem, setMensagem] = useState('');

    return (
        <>
            <div style={{display: 'flex', gap: 5}}>
                <label htmlFor='nome'>Nome:</label>
                <input ref={inputRef} name='nome' type='text' />
                <button 
                    onClick={
                        () => setMensagem(`Olá ${inputRef.current.value}!`)
                    }
                >
                    Ok
                </button>
            </div>
            <p>{mensagem}</p>
        </>
    );
};

export default TesteInputRef;
