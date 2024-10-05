import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import AlunoListar from './alunos/AlunoListar';
import AlunoConsultar from './alunos/AlunoConsultar';
import AlunoInserir from './alunos/AlunoInserir';
import AlunoAlterar from './alunos/AlunoAlterar';
import ProfessorListar from './professores/ProfessorListar';
import ProfessorInserir from './professores/ProfessorInserir';
import ProfessorAlterar from './professores/ProfessorAlterar';
import ProfessorConsultar from './professores/ProfessorConsultar';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<div>Página inicial aqui</div>} />
            <Route path='alunos' element={<AlunoListar />} />
            <Route path='alunos-inserir' element={<AlunoInserir />} />
            <Route path='alunos-alterar/:id' element={<AlunoAlterar />} />
            <Route path='alunos/:id' element={<AlunoConsultar />} />
            <Route path='professor' element={<ProfessorListar />} />
            <Route path='professor-inserir' element={<ProfessorInserir />} />
            <Route path='professor-alterar/:id' element={<ProfessorAlterar />} />
            <Route path='professor/:id' element={<ProfessorConsultar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
