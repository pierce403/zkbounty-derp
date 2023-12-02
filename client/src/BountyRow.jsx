import React from 'react';

function BountyRow({ bounty, onExpand }) {
  return (
    <tr onClick={() => onExpand(bounty.id)}>
      <td>{bounty.title}</td>
      <td>{bounty.amount}</td>
    </tr>
  );
}

export default BountyRow;

