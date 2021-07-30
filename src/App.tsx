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
      <Situacoes />
      <Prioridades />
      <Tarefas />
      <Categorias />
    </div>
  );
}

export default App;
