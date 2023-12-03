import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import theme from './theme';

import BountyTable from './BountyTable';
import BountyModal from './BountyModal'; // Import the BountyModal component
import './styles/GlobalStyles.css';

function App() {
  const [bounties, setBounties] = useState([]);
  const [currentBounty, setCurrentBounty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal

  const handleAddBounty = () => {
    const newBounty = {
      id: bounties.length + 1, // or generate a unique id
      title: "New Bounty Title", // You can make this dynamic
      amount: 3000, // Example amount, make dynamic as needed
      description: "New Bounty Description" // Example description
    };

    setBounties([...bounties, newBounty]);
  };

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
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ margin: '20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h1>Bounty Dashboard</h1>
          <Button variant="contained" color="primary" onClick={handleAddBounty}>
            Add New Bounty
          </Button>
        </div>
        <BountyTable bounties={bounties} onExpand={handleExpand} />
        <BountyModal 
          open={isModalOpen} 
          onClose={handleCloseModal} 
          bounty={currentBounty} 
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
