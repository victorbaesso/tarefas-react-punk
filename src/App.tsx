import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Categorias from './components/Categorias';
import Footer from './components/Footer';
import TopMenu from './components/Menu';
import Prioridades from './components/Prioridades';
import Situacoes from './components/Situacoes';
import Tarefas from './components/Tarefas';

function App() {
  return (
    <div className="App">
      <TopMenu />
      <div className="grid mx-0">
        <div className="col-12 px-0">
          <Banner />
        </div>
      </div>
      <div className="grid justify-content-center mx-0 my-4">
        <div className="col-12 md:col-5">
          <Situacoes />
        </div>
        <div className="col-12 md:col-5">
          <Prioridades />
        </div>
        <div className="col-12 md:col-10">
          <Tarefas />
        </div>
        <div className="col-12 md:col-10">
          <Categorias />
        </div>
      </div>
      <div className="grid mx-0">
        <div className="col-12 px-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
