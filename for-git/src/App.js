import React from 'react';
import Block1 from './components/Block1/Block1';
import Block2 from './components/Block2/Block2';
import Block3 from './components/Block3/Block3';
import Block4 from './components/Block4/Block4';
import Cards from './components/Cards/Cards';
import Carts from './components/Carts/Carts';
import Final from './components/Final/Final';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      
  <Header/>  
  <Block1/>  
  <Carts/>
  <Cards/>
  <Block2/>
  <Block3/>
  <Block4/>
  <Final/>


    </div>
  );
}

export default App;
