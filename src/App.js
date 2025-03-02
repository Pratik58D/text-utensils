import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About'
import { useState } from 'react';

function App() {
  const [mode,setMode] = useState('light');   // whether dark mode is enabled or not
   
  const toggleMode=()=>{
    if (mode==="light"){
      setMode('dark');
      document.body.style.backgroundColor ="#042743";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ="white";
    }
  }
 

  return (
    <>
      <Navbar title="Mytextutils" about="About TextUtils" mode ={mode}  toggleMode ={toggleMode} />

      <div className="container">
        <TextForm heading = "Enter the text to analyze" mode ={mode} /> 
        {/*<About />*/}
      </div>


    </>
  );
}

export default App;
