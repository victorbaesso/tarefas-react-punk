import React from 'react';
import { Menubar } from 'primereact/menubar';

const TopMenu = () => {
 
  const items = [
    { label: 'Home' },
    { label: 'Tarefas' },
    { label: 'Categorias' },
    { label: 'Prioridades' },
    { label: 'Situações' }
  ];
 
 return (
  <div>
    <div className="card">
        <Menubar model={items} />
    </div>
  </div>
 );
};

export default TopMenu;
