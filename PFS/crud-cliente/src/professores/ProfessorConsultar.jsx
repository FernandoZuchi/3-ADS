import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const AlunoConsultar = () => {
    const [objeto, setObjeto] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3005/alunos/${id}`).then(resposta => {
            setObjeto(resposta.data);
        });
    }, []);
    
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
                    <input type="text" readOnly={true} value={objeto.matricula} className="form-control"/>
                </label>
            </div>
            <div>
                <label className="form-label">
                    Nome:
                    <input type="text" readOnly={true} value={objeto.nome} className="form-control"/>
                </label>
            </div>
            <Link to="/alunos">Voltar</Link>
        </div>
    );
};

export default AlunoConsultar;
