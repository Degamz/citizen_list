import React from 'react';

const Citizen = ({ citizen, toggleStatus }) => {
  return (
    <li>
      <p>No.: {citizen.id}</p>
      <p>Name: {citizen.name}</p>
      <p>Age: {citizen.age}</p>
      <p>Address: {citizen.address}</p>
      <p>Status: {citizen.status}</p>
      <button onClick={() => toggleStatus(citizen.id)}>Toggle Status</button>
    </li>
  );
};

export default Citizen;
