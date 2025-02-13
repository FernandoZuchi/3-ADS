import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const getNovoAluno = () => {
    return { matricula: 0, nome: '' };
};

const AlunoInserir = () => {
    const [objeto, setObjeto] = useState(getNovoAluno());
    const navigate = useNavigate();

    const salvar = () => {
        axios.post('http://localhost:3005/alunos', objeto).then(
            resultado => {
                if (resultado.status === 201) {
                    navigate('/alunos');
                }
            }
        );
    };
    
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
            <button onClick={salvar} className="btn btn-primary">Salvar</button>
            <Link to="/alunos" className="btn btn-secondary">Voltar</Link>
        </div>
    );
};

export default AlunoInserir;
