/* eslint-disable max-len */
// == Import
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.scss';

// Components
import Header from '../Header/Header';
import NewMemberForm from '../NewMemberForm/NewMemberForm';
import MemberList from '../MemberList/MemberList';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';

// == Component
const App = () => {
  const APIURL = 'https://wcs-argonauts-server-cd.herokuapp.com/argonaut';
  // Entry of the state containing the list of argonauts in db
  const [argonauts, setArgonauts] = useState([]);
  // useful to display a loader while the results are on their way
  const [isLoading, setLoading] = useState('true');
  // controlled field of name input
  const [nameInput, setNameInput] = useState('');

  // thanks to axios, we send a get request to server to get all argonauts
  const loadArgonauts = () => {
    axios.get(APIURL)
      .then((res) => {
        // We set the value of the state entry with data returned
        setArgonauts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  // handleNameInput will allow us to set the value of the state entry with the value of what is typed in input
  const handleNameInput = (event) => {
    setNameInput(event.target.value);
  };

  // after setting the value of nameInput, we use it to send a post request to server
  const addArgonaut = () => {
    axios.post(APIURL, { name: nameInput })
      .then(() => {
        loadArgonauts();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // When the form is submitted we add an argonaut to the db
  const handleSubmit = (event) => {
    event.preventDefault();
    addArgonaut();
  };

  // Thanks to useEffect we execute loadArgonauts when the component mounts
  useEffect(() => {
    loadArgonauts();
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        {/* We pass the handling method to the concerned component */}
        <NewMemberForm handleNameInput={handleNameInput} handleSubmit={handleSubmit} />
        {isLoading && <Loader />}
        {!isLoading && <MemberList argonauts={argonauts} />}
      </main>
      <Footer />
    </div>
  );
};
// == Export
export default App;
