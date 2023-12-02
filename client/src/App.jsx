import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BountyTable from './BountyTable';
import BountyDetails from './BountyDetails';

function App() {
  const [bounties, setBounties] = useState([]);
  const [currentBounty, setCurrentBounty] = useState(null);

  useEffect(() => {
    axios.get('/api/bounties')
      .then(response => {
        setBounties(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleExpand = (bountyId) => {
    const bounty = bounties.find(b => b.id === bountyId);
    setCurrentBounty(bounty);
  };

  return (
    <div>
      <BountyTable bounties={bounties} onExpand={handleExpand} />
      {currentBounty && <BountyDetails bounty={currentBounty} />}
    </div>
  );
}

export default App;

