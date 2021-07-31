import React from "react";
import { useFormik } from "formik";
import { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';

const ModalCadastro = ({ show, onHide}: ModalProps) => {
  const form = useFormik<CategoriaFormProps>({
    initialValues: {
      nome: '',
    },
    onSubmit: values => {
      console.log(values);
    }
  })

  return (
    <Dialog
      style={{ width: '30vw' }}
      visible={show}
      onHide={onHide}
      header={<h3>Nova Categoria</h3>}
      footer={
        <>
          <Button className="p-button-secondary" onClick={onHide} label="Cancelar" />
          <Button className="p-button-success" onClick={form.submitForm} label="Salvar" />
        </>
      }  
    >
        <form>
          <span className="p-float-label">
            <InputText style={{ width: '100%' }} id="nome" name="nome" value={form.values.nome} onChange={form.handleChange} />
            <label htmlFor="nome">Nome</label>
          </span>
        </form>
    </Dialog>
  );  
};

const Categorias = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div id="categorias" className="grid mx-0 justify-content-center">
      <ModalCadastro show={modalVisible} onHide={() => setModalVisible(false)} />
      <div className="col-10">
        <Toolbar
          className="py-0 px-2 border-none bg-white"
          left={<p className="font-light text-3xl my-3">Categorias</p>}
          right={<Button className="p-button-success text-right" onClick={() => setModalVisible(true)} label="Nova Categoria" icon="fas fa-tasks" />}
        />
        <DataTable value={[{ nome: 'Faculdade'}, {nome: 'Outras'}]} className="border-1 border-300">
          <Column field="nome" header="Nome" />
        </DataTable>
      </div>
    </div>
  )
};

interface ModalProps {
  show: boolean,
  onHide: () => void,
}

interface CategoriaFormProps {
  nome: string,
}

export default Categorias;
