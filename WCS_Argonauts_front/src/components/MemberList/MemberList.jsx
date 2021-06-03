/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
// == Import
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

// == Component
const MemberList = ({ argonauts }) => (
  <section>
    <h2>Membres de l&apos;équipage</h2>
    <section className="member-list">
      {argonauts.map((argonaut) => (
        <div className="member-item" key={argonaut.id}>{argonaut.name}</div>
      ))}
    </section>
  </section>
);

MemberList.propTypes = {
  argonauts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
// == Export
export default MemberList;
