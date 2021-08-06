import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';
import ModalCadastroTarefas from '../Tarefas/ModalCadastro'; 
import ModalCadastroCategorias from '../Categorias/ModalCadastro'; 
import { useState } from 'react';

const Banner = () => {
  const [modalTarefasVisible, showTarefasModal] = useState(false);
  const [modalCategoriasVisible, showCategoriasModal] = useState(false);

  return (
    <div className="bg-bluegray-100 py-5">
      <ModalCadastroTarefas show={modalTarefasVisible} onHide={() => showTarefasModal(false)} />
      <ModalCadastroCategorias show={modalCategoriasVisible} onHide={() => showCategoriasModal(false)} />
      <h2 className="my-0 pt-3 text-7xl font-light">Gerenciador de Tarefas Punk</h2>
      <h4 className="text-lg font-light mb-5">Um simples gerenciador de tarefas, desenvolvido com React + TypeScript e muita música Punk !!!</h4>
      <div className="col-10 col-offset-1 border-top-1 border-bluegray-200" />
      <h3 className="text-6xl font-light my-3">Comece Agora !!!</h3>
      <h4 className="text-xl font-light my-3">Cadastre primeiro algumas categorias...</h4>
      <Button className="p-button-primary p-button-lg text-right mb-3" onClick={() => showCategoriasModal(true)} label="Nova Categoria" icon="fas fa-tasks" />
      <h4 className="text-xl font-light my-3">E depois suas tarefas...</h4>
      <Button className="p-button-success p-button-lg text-right mb-3" onClick={() => showTarefasModal(true)} label="Nova Tarefa" icon="fas fa-thumbtack" />
    </div>
  )
};

export default Banner;
