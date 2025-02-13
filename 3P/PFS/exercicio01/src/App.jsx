import React from 'react'
import Evento from './Components/Evento'
import { useState } from 'react';

function App() {
  let [valorInput, setValorInput] = useState('');
  let [eventos, setEvento] = useState([]);

  let input = document.getElementById('lembrete');

  function adicionarEvento(){
    if(input != '')
    {
      setEvento(input);
    }
    console.log(eventos);
  }

  function removerEventos(){
    
  }

  return (
    <div>
      <div style={{display: 'flex'}}>
        <label htmlFor="lembrete">Lembre-se de:</label>
        <input id='lembrete'/>
        <button style={{backgroundColor: 'blue', color: 'white'}} onClick={adicionarEvento}>+</button>
      </div>
      <ul>
        {
          eventos.map((evento, index) => {
            <ul>
              <li><Evento key={index}><button style={{backgroundColor: 'red', color: 'white'}} onClick={removerEventos}>x</button></Evento></li>
            </ul>
          })
        }
      </ul> 
    </div>
  )
}

export default App