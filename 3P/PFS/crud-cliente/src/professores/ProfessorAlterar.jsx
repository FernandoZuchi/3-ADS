import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AlunoAlterar = () => {
    const [objeto, setObjeto] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3005/alunos/${id}`).then(resposta => {
            setObjeto(resposta.data);
        });
    }, []);

    const salvar = () => {
        axios.put(`http://localhost:3005/alunos/${id}`, objeto).then(
            resultado => {
                if (resultado.status === 200) {
                    navigate('/alunos');
                }
            }
        );
    };
    
    if (objeto == null) {
        return (
            <div>
                Carregando...
            </div>
        );
    }

    return (
        <div>
            <div>
                <label className="form-label">
                    Matrícula:
                    <input 
                        type="text" 
                        value={objeto.matricula} 
                        onChange={e => setObjeto({ ...objeto, matricula: e.target.value })}
                        className="form-control"
                    />
                </label>
            </div>
            <div>
                <label className="form-label">
                    Nome:
                    <input 
                        type="text" 
                        value={objeto.nome} 
                        onChange={e => setObjeto({ ...objeto, nome: e.target.value })}
                        className="form-control"
                    />
                </label>
            </div>
            <button onClick={salvar}>Salvar</button>
            <Link to="/alunos">Voltar</Link>
        </div>
    );
};

export default AlunoAlterar;
