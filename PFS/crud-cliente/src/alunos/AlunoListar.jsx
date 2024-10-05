import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AlunoListar = () => {
    const [objetos, setObjetos] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3005/alunos').then(resposta => {
            setObjetos(resposta.data);
        });
    }, []);

    const excluir = id => {
        axios.delete(`http://localhost:3005/alunos/${id}`).then(resposta => {
            if (resposta.status == 200) {
                navigate(0);
            }
        });
    }    

    if (objetos == null) {
        return (
            <div>
                Carregando...
            </div>
        );
    }

    return (
        <>
            <Link to="/alunos-inserir" className="btn btn-primary">Inserir</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Matrícula</th>
                        <th>Nome</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {objetos.map(x => {
                        return (
                            <tr>
                                <td>{x.matricula}</td>
                                <td>{x.nome}</td>
                                <td>
                                    <Link to={`/alunos/${x.id}`} className="btn btn-success">Consultar</Link>
                                    <Link to={`/alunos-alterar/${x.id}`} className="btn btn-warning">Alterar</Link>
                                    <button onClick={() => excluir(x.id) } className="btn btn-danger">Excluir</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default AlunoListar;
