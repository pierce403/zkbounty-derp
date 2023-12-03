import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';

function BountyRow({ bounty, onExpand, onClaim }) {
  return (
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      onClick={() => onExpand(bounty.id)}
      hover
    >
      <TableCell component="th" scope="row">
        {bounty.title}
      </TableCell>
      <TableCell align="right">{bounty.amount}</TableCell>
      <TableCell align="right">
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={(e) => {
            e.stopPropagation(); // Prevents onExpand from firing when the button is clicked
            onClaim(bounty.id);
          }}
        >
          Claim
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default BountyRow;