import React from "react";
import { useState } from "react";
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';
import ColapseButton from '../ColapseButton';
import { Categoria } from "../../@types/categoria";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategoria, selectCategoriasState } from "../../slices/categoriasSlice";
import ModalCadastroCategorias from './ModalCadastro';

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
      <ModalCadastroCategorias categoria={selectedCategoria} show={modalVisible} onHide={() => setModalVisible(false)} />
      <div className="col-12">
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

export default Categorias;
