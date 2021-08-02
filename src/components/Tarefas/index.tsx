import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import { Toolbar } from 'primereact/toolbar';
import ColapseButton from '../ColapseButton';
import { Tarefa } from "../../@types/tarefa";
import { Categoria } from "../../@types/categoria";
import { Prioridade, prioridades } from "../../@types/prioridade";
import { Situacao, situacoes } from "../../@types/situacao";
import { selectCategoriasState } from "../../slices/categoriasSlice";
import { useDispatch, useSelector } from "react-redux";
import { deleteTarefa, saveTarefa, selectTarefasState } from "../../slices/tarefasSlice";

const ModalCadastro = ({ show, onHide, tarefa}: ModalProps) => {
  const dispatch = useDispatch();
  const { categorias } = useSelector(selectCategoriasState)

  const form = useFormik<TarefaFormProps>({
    initialValues: {
      id: tarefa?.id || 0,
      descricao: tarefa?.descricao || '',
      categoria: tarefa?.categoria || undefined,
      prioridade: tarefa?.prioridade || undefined,
      situacao: tarefa?.situacao || undefined,
    },
    onSubmit: values => {
      dispatch(saveTarefa(values));
      close();
    }
  })

  const close = () => {
    form.resetForm();
    onHide();
  }

  useEffect(() => {
    if(tarefa) form.setValues(tarefa);
  }, [tarefa]);

  return (
    <Dialog
      style={{ width: '30vw' }}
      visible={show}
      onHide={close}
      header={<h3>{form.values?.id ? "Editar" : "Nova"} Tarefa</h3>}
      footer={
        <>
          <Button className="p-button-secondary" onClick={close} label="Cancelar" />
          <Button className="p-button-success" onClick={form.submitForm} label="Salvar" />
        </>
      }  
    >
        <form className="pt-1">
          <div className="col-12 pt-3">
            <span className="p-float-label">
              <InputText style={{ width: '100%' }} id="descricao" name="descricao" value={form.values.descricao} onChange={form.handleChange} />
              <label htmlFor="descricao">Descrição</label>
            </span>
          </div>
          <div className="col-12">
            <Dropdown name="categoria" style={{ width: '100%' }} value={form.values.categoria} options={categorias} onChange={form.handleChange} optionValue="id" optionLabel="nome" placeholder="Categoria" />
          </div>
          <div className="col-12">
            <Dropdown name="prioridade" style={{ width: '100%' }} value={form.values.prioridade} options={prioridades} onChange={form.handleChange} placeholder="Prioridade" />
          </div>
          <div className="col-12">
            <Dropdown name="situacao" style={{ width: '100%' }} value={form.values.situacao} options={situacoes} onChange={form.handleChange} placeholder="Situação" />
          </div>
        </form>
    </Dialog>
  );  
};

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
    <div id="Tarefas" className="grid mx-0 justify-content-center">
      <ModalCadastro tarefa={selectedTarefa} show={modalVisible} onHide={() => setModalVisible(false)} />
      <div className="col-10">
        <Toolbar
          className="py-0 px-2 border-none bg-white"
          left={<p className="font-light text-3xl my-3">Tarefas</p>}
          right={<Button className="p-button-success text-right" onClick={() => setModalVisible(true)} label="Nova Tarefa" icon="fas fa-tasks" />}
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

interface ModalProps {
  show: boolean,
  onHide: () => void,
  tarefa?: Tarefa,
}

interface TarefaFormProps {
  id: number,
  descricao: string,
  categoria: Categoria | undefined,
  prioridade: Prioridade | undefined,
  situacao: Situacao | undefined,
}

export default Tarefas;
