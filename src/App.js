import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';
import Header from './components/Header';
import Modal from './components/Modal';
import Main from './screens/Main/Main';



function App() {
  const [authType, setAuth] = useState('');
  const [showModal, setShowModal] = useState(false);

  const toggleAuth = (type) => {
    setAuth(type);
    setShowModal(true)
  }

  return (
    <div className="App">
      <Router>
        <Header
          toggleAuth={toggleAuth}
        />
        <Route exact path="/" component={Main} />
      </Router>
      <Modal
        showModal={showModal}
        closeModal={() => setShowModal(false)}>
        <h1>{authType}</h1>
      </Modal>
    </div>
  );
}

export default App;
