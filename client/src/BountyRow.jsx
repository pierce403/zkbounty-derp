import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

function BountyRow({ bounty, onExpand }) {
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
    </TableRow>
  );
}

export default BountyRow;

