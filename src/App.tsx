import React from 'react';
import './App.css';
import Categorias from './components/Categorias';
import TopMenu from './components/Menu';
import Prioridades from './components/Prioridades';
import Situacoes from './components/Situacoes';
import Tarefas from './components/Tarefas';

function App() {
  return (
    <div className="App">
      <TopMenu />
      <div className="grid justify-content-center mx-0">
        <div className="col-5">
          <Situacoes />
        </div>
        <div className="col-5">
          <Prioridades />
        </div>
        <div className="col-12">
          <Tarefas />
        </div>
        <div className="col-12">
          <Categorias />
        </div>
      </div>
    </div>
  );
}

export default App;
