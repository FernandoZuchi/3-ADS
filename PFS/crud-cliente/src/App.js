import React, { useEffect, useState } from 'react'
import axios from 'axios';

function App(){
  const [feeds, setFeeds] = useState(null);
  const [novoFeed, setNovoFeed] = useState({
    id: "",
    usuario: "",
    tempo: ""
  })

  const carregarDados = () => {
    axios.get("http://localhost:3005/feeds").then(
      result => setFeeds(result.data)
    );
  };

  const excluir = (id) => {
    axios.delete(`hhttp://localhost:3005/feeds/${id}`).then(
      result => console.log(result)
    )
  }

  useEffect(() => {
    carregarDados();
  }, []);

  if(!feeds) {
    return <div>Carregando</div>
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Usuário</th>
            <th>Tempo</th>
          </tr>
        </thead>
        <tbody>
          {feeds.map(x => {
            <tr>
              <td>{x.usuario}</td>
              <td>{x.tempo}</td>
              <td><button onClick={() => excluir(x.id)}>Excluir</button></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default App