import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { SubHeader } from './components/SubHeader';
import { Form } from './components/Form';
import { Tasks } from './components/Tasks';

function App() {
  return (
    <>
      <Header />
      <SubHeader/>
      <hr />
      <Form />
      <hr />
      <Tasks />
    </>
  );
}

export default App;
