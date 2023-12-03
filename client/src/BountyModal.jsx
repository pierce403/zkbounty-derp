import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

function BountyModal({ open, onClose, bounty }) {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="bounty-dialog-title">
      <DialogTitle id="bounty-dialog-title">Bounty Details</DialogTitle>
      <DialogContent dividers>
        {bounty && (
          <>
            <p><strong>Title:</strong> {bounty.title}</p>
            <p><strong>Amount:</strong> {bounty.amount}</p>
            <p><strong>Description:</strong> {bounty.description}</p>
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default BountyModal;

