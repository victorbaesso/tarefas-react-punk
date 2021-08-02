import { OverlayPanel } from 'primereact/overlaypanel';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import { useRef, useState } from 'react';

interface ColapseButtonProps {
  editarAction: () => void,
  removerAction: () => void,
}

const ColapseButton = ({ editarAction, removerAction }: ColapseButtonProps) => {
  const menu = useRef<Menu>(null);

  const items = [
    {
        label: 'Editar',
        icon: 'fas fa-pencil-alt',
        command: () => editarAction()
    },
    {
        label: 'Remover',
        icon: 'fas fa-trash-alt',
        command: () => removerAction()
    },
  ]

  return (
    <>
      <Button
        icon="fas fa-ellipsis-v"
        className="p-button-rounded"
        onClick={(event) => menu?.current?.toggle(event)}
        aria-controls="popup_menu"
        aria-haspopup
      />
      <Menu model={items} popup ref={menu} id="popup_menu" />
    </>
  )
};

export default ColapseButton;
