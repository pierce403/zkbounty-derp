import React from 'react';
import BountyRow from './BountyRow';

function BountyTable({ bounties, onExpand }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {bounties.map(bounty => (
          <BountyRow key={bounty.id} bounty={bounty} onExpand={onExpand} />
        ))}
      </tbody>
    </table>
  );
}

export default BountyTable;
