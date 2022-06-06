import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { format } from 'date-fns';

export default function CalendarModal({ item, onClose, onSave, onDelete }) {
  const [copyItem, setCopyItems] = React.useState({ ...item });

  const changeName = React.useCallback((evt) => {
    copyItem.name = evt.target.value;
    setCopyItems({ ...copyItem });
  });

  const changeDate = React.useCallback((newDate) => {
    copyItem.date = format(newDate, 'yyyy-MM-dd');
    setCopyItems({ ...copyItem });
  });

  return (
    <Dialog open onClose={onClose} onBackdropClick={onClose}>
      <DialogTitle className="title">Event</DialogTitle>
      <DialogContent sx={{ width: 400, paddingTop: '1em !important' }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth onChange={(evt) => changeName(evt)} className="title" id="standard-basic" value={copyItem.name} label="Name" />
          </Grid>
          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
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
