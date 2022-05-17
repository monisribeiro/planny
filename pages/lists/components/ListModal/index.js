import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Checkbox from '@mui/material/Checkbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import NoiseControlOffIcon from '@mui/icons-material/NoiseControlOff';

export default function ListModal({ item, onClose }) {
  const [copyItem, setCopyItems] = React.useState({ ...item });

  const addItem = React.useCallback((newValue) => {
    copyItem.items.push({ name: newValue });
    setCopyItems({...copyItem});
  });

  const removeItem = React.useCallback((idx) => {
    copyItem.items.splice(idx, 1);
    setCopyItems({...copyItem});
  });


  return (
    <Dialog open onClose={onClose} onBackdropClick={onClose}>
      <DialogTitle className="title">{item.name}</DialogTitle>
      <DialogContent sx={{ width: 400 }}>
        <List sx={{ width: '100%', overflow: 'scroll' }} dense>
          {copyItem.items.map((i, ind) => (
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => removeItem(ind)}>
                  <CloseIcon />
                </IconButton>
              }
            >
              <ListItemIcon sx={{ minWidth: 30 }}>
                {copyItem.type === 'todo' ? (
                  <Checkbox
                    edge="start"
                    checked={i.checked}
                    tabIndex={-1}
                    disableRipple
                  />
                ) : (<NoiseControlOffIcon />)}
              </ListItemIcon>
              <TextField id="standard-basic" variant="standard" value={i.name} />
            </ListItem>
          ))}

          <ListItem
          >
            <ListItemIcon sx={{ minWidth: 30 }}>
              {copyItem.type === 'todo' ? (
                <AddIcon />
              ) : (<NoiseControlOffIcon />)}
            </ListItemIcon>
            <TextField onKeyDown={(evt) => evt.key === 'Enter' && addItem(evt.target.value)} id="standard-basic" variant="standard" placeholder="New item"/>
          </ListItem>
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onSave(copyItem)}>Save</Button>
        <Button onClick={() => onDelete(copyItem)}>Delete</Button>
      </DialogActions>
    </Dialog>
  );
}
