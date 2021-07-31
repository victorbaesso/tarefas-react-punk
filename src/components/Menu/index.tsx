import React from 'react';
import { Menubar } from 'primereact/menubar';

const TopMenu = () => {
 
  const items = [
    {
      label: 'Tarefas',
      icon: 'fas fa-tasks'
    },
    {
      label: 'Categorias',
      icon: 'fas fa-boxes'
    },
    {
      label: 'Prioridades',
      icon: 'fas fa-list-ol'
    },
    {
      label: 'Situações',
      icon: 'fas fa-chart-line'
    }
  ]

  const start = <img alt="logo" src="./logo.png" height="40" className="p-mr-2"></img>;
 
 return (
  <div>
    <div className="card">
        <Menubar model={items} start={start} />
    </div>
  </div>
 );
};

export default TopMenu;
