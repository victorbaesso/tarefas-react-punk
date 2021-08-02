import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';
import ColapseButton from '../ColapseButton';
import { Categoria } from "../../@types/categoria";
import { useDispatch, useSelector } from "react-redux";
import categoriasReducer, { deleteCategoria, saveCategoria, selectCategoriasState } from "../../slices/categoriasSlice";

const ModalCadastro = ({ show, onHide, categoria}: ModalProps) => {
  const dispatch = useDispatch();
  const form = useFormik<CategoriaFormProps>({
    initialValues: {
      id: categoria?.id || 0,
      nome: categoria?.nome || '',
    },
    onSubmit: values => {
      dispatch(saveCategoria(values));
      close();
    }
  })

  const close = () => {
    form.resetForm();
    onHide();
  }

  useEffect(() => {
    if(categoria) form.setValues(categoria);
  }, [categoria]);

  return (
    <Dialog
      style={{ width: '30vw' }}
      visible={show}
      onHide={close}
      header={<h3>{form.values?.id ? "Editar" : "Nova"} Categoria</h3>}
      footer={
        <>
          <Button className="p-button-secondary" onClick={close} label="Cancelar" />
          <Button className="p-button-success" onClick={form.submitForm} label="Salvar" />
        </>
      }  
    >
        <form className="pt-1">
          <span className="p-float-label">
            <InputText style={{ width: '100%' }} id="nome" name="nome" value={form.values.nome} onChange={form.handleChange} />
            <label htmlFor="nome">Nome</label>
          </span>
        </form>
    </Dialog>
  );  
};

const Categorias = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategoria, setSelectedCategoria] = useState<Categoria>();
  const { categorias } = useSelector(selectCategoriasState)

  const editar = (categoria: Categoria) => {
    setSelectedCategoria(categoria);
    setModalVisible(true);
  };

  return (
    <div id="categorias" className="grid mx-0 justify-content-center">
      <ModalCadastro categoria={selectedCategoria} show={modalVisible} onHide={() => setModalVisible(false)} />
      <div className="col-10">
        <Toolbar
          className="py-0 px-2 border-none bg-white"
          left={<p className="font-light text-3xl my-3">Categorias</p>}
          right={<Button className="p-button-success text-right" onClick={() => setModalVisible(true)} label="Nova Categoria" icon="fas fa-thumbtack" />}
        />
        <DataTable value={categorias} className="border-1 border-300" emptyMessage="Nenhum registro encontrado">
          <Column field="nome" header="Nome" />
          <Column
            header="Ações"
            className="text-center"
            body={(cat: Categoria) => (
              <ColapseButton
                editarAction={() => editar(cat)}
                removerAction={() => dispatch(deleteCategoria(cat))}
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
  categoria?: Categoria,
}

interface CategoriaFormProps {
  id: number,
  nome: string,
}

export default Categorias;
