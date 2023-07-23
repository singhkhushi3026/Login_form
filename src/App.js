import React, { useState } from "react";
import './styles/Login.css';
import './styles/Register.css';
import Login from "./component/Login";
import Register from "./component/Register";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <>
      <div className="App">
        {currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />}
      </div>
    </>
    
  );
}

export default App;
