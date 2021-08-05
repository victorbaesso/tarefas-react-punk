import React, { useEffect } from "react";
import { useFormik } from "formik";
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Categoria } from "../../@types/categoria";
import { saveCategoria } from "../../slices/categoriasSlice";
import { useDispatch } from "react-redux";

const ModalCadastroCategorias = ({ show, onHide, categoria}: ModalProps) => {
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

interface ModalProps {
  show: boolean,
  onHide: () => void,
  categoria?: Categoria,
}

interface CategoriaFormProps {
  id: number,
  nome: string,
}

export default ModalCadastroCategorias;
