import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';

export default function ListModal({ item, onClose, onSave, onDelete }) {
  const [copyItem, setCopyItems] = React.useState({ ...item });

  const changeName = React.useCallback((evt) => {
    copyItem.name = evt.target.value;
    setCopyItems({ ...copyItem });
  });

  return (
    <Dialog open onClose={onClose} onBackdropClick={onClose}>
    <DialogTitle className="title">Add new habit</DialogTitle>
      <DialogContent>
        <TextField  onChange={(evt) => changeName(evt)} className="title" id="standard-basic"  value={copyItem.name} placeholder="New habit" />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onSave(copyItem)}>Save</Button>
        <Button onClick={onDelete}>Delete</Button>
      </DialogActions>
    </Dialog>
  );
}
