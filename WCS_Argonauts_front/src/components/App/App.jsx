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
  // We put the API URL in a variable
  const APIURL = 'https://wcs-argonauts-server-cd.herokuapp.com/argonaut';
  // Entry of the state containing the list of argonauts in db
  const [argonauts, setArgonauts] = useState([]);
  // useful to display a loader while the results are on their way
  const [isLoading, setLoading] = useState('true');
  // controlled field of name input
  const [nameInput, setNameInput] = useState('');
  // Display an error message if there is one, here we will use it in case of:
  // the name already exists or the field is empty
  const [errorMessage, setErrorMessage] = useState('');

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
        // If the error message from server concerns a name value already existing we display a message accordingly
        if (err.response.data === 'duplicate key value violates unique constraint "argo_name_key"') { setErrorMessage('Ce nom est déja pris'); }
      });
  };

  // When the form is submitted we add an argonaut to the db
  const handleSubmit = (event) => {
    event.preventDefault();
    if (nameInput.length === 0) {
      setErrorMessage('Un argonaute doit avoir un nom');
    } else {
      addArgonaut();
      // we empty the input when submitted
      setNameInput('');
      setErrorMessage('');
    }
  };

  // Thanks to useEffect we execute loadArgonauts during side effect creation
  useEffect(() => {
    loadArgonauts();
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        {/* We pass the handling method to the concerned component */}
        <NewMemberForm handleNameInput={handleNameInput} handleSubmit={handleSubmit} nameInput={nameInput} />
        {/* We display the error message if there's one */}
        {setErrorMessage && <div className="error-message">{errorMessage}</div>}
        {/* while data is not ready we display a loader */}
        {isLoading && <Loader />}
        {!isLoading && <MemberList argonauts={argonauts} loadArgonauts={loadArgonauts} />}
      </main>
      <Footer />
    </div>
  );
};
// == Export
export default App;
