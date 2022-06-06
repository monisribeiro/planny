import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Badge from '@mui/material/Badge';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';

import { format } from 'date-fns';

export default function MonthlyCalendar({ items, onItemClick }) {
  return (
    <>
      <List sx={{ width: '100%', bgcolor: 'background.paper', height: 'calc(100vh - 250px)', overflow: 'scroll' }} dense>
        {items?.map((i, ind) => (
          <>
            <ListItem
              secondaryAction={<>
                <Typography align="right">{(+i.amount).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</Typography>
                <Typography sx={{ color: 'rgba(0, 0, 0, 0.6)' }} variant="body2" align="right">{format(new Date(i.date), 'MM/dd')}</Typography>
              </>}
              sx={{ }}
            >
              <ListItemIcon sx={{ minWidth: 24 }}>
                <Badge color="primary" variant="dot" />
              </ListItemIcon>
              <ListItemText primary={i.name} secondary={i.category} />
            </ListItem>
            {ind !== items.length - 1 && <Divider light />}
          </>
        ))}
      </List>
      <List>
        <Divider />
        <ListItem
          secondaryAction={
            <Typography align="right">
              {(items?.reduce((res, val) => res += +val.amount, 0)).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </Typography>
          }
        >
          <Typography variant="overline" align="left">Total</Typography>
        </ListItem>
      </List>
    </>
  );
}
