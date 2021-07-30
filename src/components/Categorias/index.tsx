import React from "react";
import { useFormik } from "formik";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

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
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Nova Categoria</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Nome" value={form.values.nome} onChange={form.handleChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="success" onClick={form.submitForm}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );  
};

const Categorias = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div id="categorias" className="">
      <ModalCadastro show={modalVisible} onHide={() => setModalVisible(false)} />
      Categorias
      <Button variant="primary" onClick={() => setModalVisible(true)}>
        Nova Categoria
      </Button>
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
