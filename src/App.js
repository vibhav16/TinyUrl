import React, { useState } from "react"; 
import validator from 'validator'
  
const App = () => { 
  
  const [errorMessage, setErrorMessage] = useState('') 
    
  const validate = (value) => { 
    
    if (validator.isURL(value)) { 
      fetch('https://tinyurl.com/api-create.php?url='+value)
    .then(response=>response.text())
    .then(data=>setErrorMessage(data));
       
    } else { 
      setErrorMessage('Is Not Valid URL') 
    } 
  } 
  
  return ( 
    <div style={{ 
      marginLeft: '200px', 
    }}> 
      <pre> 
        <h2>URL Shortener</h2> 
        <span>Enter URL: </span><input type="text" 
        onChange={(e) => validate(e.target.value)}></input> <br /><br/> 
        <span style={{ 
          fontWeight: 'bold', 
          color: 'red', 
        }}>{errorMessage}</span> 
      </pre> 
    </div> 
  ); 
} 
  
export default App