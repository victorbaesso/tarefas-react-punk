import React from "react";
import { useState } from "react";
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';
import ColapseButton from '../ColapseButton';
import { Tarefa } from "../../@types/tarefa";
import { useDispatch, useSelector } from "react-redux";
import { deleteTarefa, selectTarefasState } from "../../slices/tarefasSlice";
import ModalCadastroTarefas from './ModalCadastro';

const Tarefas = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTarefa, setSelectedTarefa] = useState<Tarefa>();
  const { tarefas } = useSelector(selectTarefasState)

  const editar = (tarefa: Tarefa) => {
    setSelectedTarefa(tarefa);
    setModalVisible(true);
  };

  return (
    <div id="tarefas" className="grid mx-0 justify-content-center">
      <ModalCadastroTarefas tarefa={selectedTarefa} show={modalVisible} onHide={() => setModalVisible(false)} />
      <div className="col-12">
        <Toolbar
          className="py-0 px-2 border-none bg-white"
          left={<p className="font-light text-3xl my-3">Tarefas</p>}
          right={<Button className="p-button-success text-right" onClick={() => setModalVisible(true)} label="Nova Tarefa" icon="fas fa-edit" />}
        />
        <DataTable
          value={tarefas}
          className="border-1 border-300"
          emptyMessage="Nenhum registro encontrado"
        >
          <Column field="descricao" header="Descrição" />
          <Column body={(task: Tarefa) => task.categoria.nome} header="Categoria" />
          <Column field="prioridade" header="Prioridade" />
          <Column field="situacao" header="Situação" />
          <Column
            header="Ações"
            className="text-center"
            body={(task: Tarefa) => (
              <ColapseButton
                editarAction={() => editar(task)}
                removerAction={() => dispatch(deleteTarefa(task))}
              />
            )}
          />
        </DataTable>
      </div>
    </div>
  )
};

export default Tarefas;
