import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const TopMenu = () => (
  <Navbar
    bg="dark"
  >
    <Nav.Item>
      <Nav.Link href="#home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#tarefas">Tarefas</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#categorias">Categorias</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#prioridades">Prioridades</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#situacao">Situação</Nav.Link>
    </Nav.Item>
  </Navbar>
);

export default TopMenu;
