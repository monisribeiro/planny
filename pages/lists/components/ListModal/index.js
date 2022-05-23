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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import NoiseControlOffIcon from '@mui/icons-material/NoiseControlOff';

export default function ListModal({ item, onClose, onSave, onDelete }) {
  const [copyItem, setCopyItems] = React.useState({ ...item });

  const addItem = React.useCallback((newValue) => {
    copyItem.items.push({ name: newValue });
    setCopyItems({ ...copyItem });
  });

  const removeItem = React.useCallback((idx) => {
    copyItem.items.splice(idx, 1);
    setCopyItems({ ...copyItem });
  });

  const changeType = React.useCallback((evt, newType) => {
    copyItem.type = newType;
    setCopyItems({ ...copyItem });
  });

  const changeName = React.useCallback((evt) => {
    copyItem.name = evt.target.value;
    setCopyItems({ ...copyItem });
  });

  const checkItem = React.useCallback((idx) => {
    copyItem.items[idx].checked =  !copyItem.items[idx].checked;
    setCopyItems({ ...copyItem });
  });


  return (
    <Dialog open onClose={onClose} onBackdropClick={onClose}>
      {item?.name ? (
        <DialogTitle className="title">{item?.name}</DialogTitle>
      ) : (
        <TextField sx={{ margin: '2em 1.5em 0' }} onChange={(evt) => changeName(evt)} className="title" id="standard-basic" variant="standard" value={item?.name} placeholder="List name" />
      )}
      <DialogContent sx={{ width: 400 }}>
        <FormControl sx={{ flexDirection: 'row', alignItems: 'center'}}>
          <FormLabel sx={{ marginRight: '1em'}} id="demo-row-radio-buttons-group-label">Type</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue={copyItem.type}
            onChange={changeType}
          >
            <FormControlLabel value="list" control={<Radio size="small" />} label="List" />
            <FormControlLabel value="todo" control={<Radio size="small" />} label="Todo" />
          </RadioGroup>
        </FormControl>
        <List sx={{ width: '100%', overflow: 'scroll' }} dense>
          {copyItem.items?.map((i, ind) => (
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
                    onChange={() => checkItem(ind)}
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
            <TextField key={copyItem.items?.lenght} onKeyDown={(evt) => {
              if (evt.key === 'Enter') {
                addItem(evt.target.value);
                evt.target.value = '';
              }
            }} id="standard-basic" variant="standard" placeholder="New item" />
          </ListItem>
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onSave(copyItem)}>Save</Button>
        <Button onClick={onDelete}>Delete</Button>
      </DialogActions>
    </Dialog>
  );
}
