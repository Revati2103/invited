
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import CreateEvent from './components/CreateEvent';
import DisplayEvent from './components/DisplayEvent';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

<Routes>
    <Route exact path='/' element={<Home />}>
       
    </Route > 
    <Route path = '/create' element = {<CreateEvent />}>
      
    </Route>
    <Route path = '/display' element = {<DisplayEvent />}>
      
    </Route> 
  
</Routes>


</BrowserRouter>

    </div>
  );
}

export default App;
