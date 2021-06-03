/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import
import React from 'react';

import PropTypes from 'prop-types';

import './style.scss';

// == Component
const NewMemberForm = ({ handleNameInput, handleSubmit }) => (
  <section>
    <h2>Ajouter un(e) Argonaute</h2>
    <form className="new-member-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Nom de l&apos;Argonaute</label>
      <input id="name" name="name" type="text" placeholder="Charalampos" onChange={handleNameInput} />
      <button type="submit">Envoyer</button>
    </form>
  </section>
);

NewMemberForm.propTypes = {
  handleNameInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,

};
// == Export
export default NewMemberForm;
