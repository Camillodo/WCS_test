// == Import
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.scss';

// Components
import Header from '../Header/Header';
import NewMemberForm from '../NewMemberForm/NewMemberForm';
import MemberList from '../MemberList/MemberList';
import Footer from '../Footer/Footer';

// == Component
const App = () => {
  const APIURL = 'https://wcs-argonauts-server-cd.herokuapp.com/argonaut';
  const [argonauts, setArgonauts] = useState([]);
  const [nameInput, setNameInput] = useState('');

  const loadArgonauts = () => {
    axios.get(APIURL)
      .then((res) => {
        setArgonauts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleNameInput = (event) => {
    setNameInput(event.target.value);
  };

  const addArgonaut = () => {
    axios.post(APIURL, { name: nameInput })
      .then(() => {
        loadArgonauts();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addArgonaut();
  };

  useEffect(() => {
    loadArgonauts();
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <NewMemberForm handleNameInput={handleNameInput} handleSubmit={handleSubmit} />
        <MemberList argonauts={argonauts} />
      </main>
      <Footer />
    </div>
  );
};
// == Export
export default App;
