import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/NavBar';
import CardsComp from './components/Cards'
import CardComp from './components/Cards';
import FormsComp from './components/Form';
import './App.css';

function App() {
  return (
    <React.Fragment>
    <div className='Nav'>
      <Nav/>
    </div>

    <div className='cards'>
      <CardComp/>
      <CardComp/>
      <CardComp/>
    </div>

    <div className='forms'>
      <FormsComp/>
    </div>
    </React.Fragment>
  );

};

export default App;