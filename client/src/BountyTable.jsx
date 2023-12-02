import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BountyRow from './BountyRow';

function BountyTable({ bounties, onExpand }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bounties.map((bounty) => (
            <BountyRow key={bounty.id} bounty={bounty} onExpand={onExpand} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default BountyTable;
