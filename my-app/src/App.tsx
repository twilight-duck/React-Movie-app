import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Header } from './components/Header/Header';
import { Container } from './components/Container/Container';
import { Menu } from './components/Menu/Menu';

export default function App() {
  return (
    <div className="App">
      <Container>
        <Header/>
        <Menu/>
      </Container>
    </div>
  );
}

