import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { format } from 'date-fns';

export default function ListModal({ item, onClose, onSave, onDelete }) {
  const [copyItem, setCopyItems] = React.useState({ ...item });

  const changeType = React.useCallback((evt) => {
    copyItem.category = evt.target.value;
    setCopyItems({ ...copyItem });
  });

  const changeName = React.useCallback((evt) => {
    copyItem.name = evt.target.value;
    setCopyItems({ ...copyItem });
  });

  const changeDate = React.useCallback((newDate) => {
    copyItem.date = format(newDate, 'yyyy-MM-dd');
    setCopyItems({ ...copyItem });
  });

  const changePrice = React.useCallback((evt) => {
    copyItem.amount = evt.target.value;
    setCopyItems({ ...copyItem });
  });

  return (
    <Dialog open onClose={onClose} onBackdropClick={onClose}>
      <DialogTitle className="title">Balance Item</DialogTitle>
      <DialogContent sx={{ width: 400, paddingTop: '1em !important' }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth onChange={(evt) => changeName(evt)} className="title" id="standard-basic" value={copyItem.name} label="Name" />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={copyItem.category}
                label="Category"
                onChange={changeType}
              >
                <MenuItem value="Paycheck">Paycheck</MenuItem>
                <MenuItem value="Savings">Savings</MenuItem>
                <MenuItem value="Food">Food</MenuItem>
                <MenuItem value="Groceries">Groceries</MenuItem>
                <MenuItem value="Clothes">Clothes</MenuItem>
                <MenuItem value="Wellbeing">Wellbeing</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField onChange={(evt) => changePrice(evt)} className="title" id="standard-basic" value={item?.amount} label="Amount" />
          </Grid>
          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date"
                value={copyItem.date ? new Date(copyItem.date) : null}
                onChange={changeDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onSave(copyItem)}>Save</Button>
        <Button onClick={onDelete}>Delete</Button>
      </DialogActions>
    </Dialog>
  );
}
