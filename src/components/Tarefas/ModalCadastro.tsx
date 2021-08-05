import React, { useEffect } from "react";
import { useFormik } from "formik";
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { prioridades } from "../../@types/prioridade";
import { situacoes } from "../../@types/situacao";
import { Tarefa } from "../../@types/tarefa";
import { Categoria } from "../../@types/categoria";
import { Prioridade } from "../../@types/prioridade";
import { Situacao } from "../../@types/situacao";
import { selectCategoriasState } from "../../slices/categoriasSlice";
import { useDispatch, useSelector } from "react-redux";
import { saveTarefa } from "../../slices/tarefasSlice";

const ModalCadastroTarefas = ({ show, onHide, tarefa}: ModalProps) => {
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

export default ModalCadastroTarefas;
