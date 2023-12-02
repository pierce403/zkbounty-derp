import React from 'react';

function BountyDetails({ bounty }) {
  return (
    <div>
      <h3>{bounty.title}</h3>
      <p>Amount: {bounty.amount}</p>
      <p>Description: {bounty.description}</p>
    </div>
  );
}

export default BountyDetails;
