import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import NoiseControlOffIcon from '@mui/icons-material/NoiseControlOff';

import { format } from 'date-fns';

export default function MonthlyCalendar({ name, type, items, onCardClick }) {
  return (
    <Grid item xs={4}>
      <Card sx={{ height: 250 }}>
        <CardActionArea onClick={onCardClick}>
          <CardContent>
            <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center">
              <Typography variant="h5" className="title" align="left">{name}</Typography>
              <Typography variant="overline" align="right">{items.length} items</Typography>
            </Stack>
            <List sx={{ width: '100%', height: '200px', overflow: 'scroll' }} dense>
              {items.map((i, ind) => (
                <ListItem >
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    {type === 'todo' ? (
                      <Checkbox
                        edge="start"
                        checked={i.checked}
                        tabIndex={-1}
                        disableRipple
                      />
                    ) : (<NoiseControlOffIcon />)}
                  </ListItemIcon>
                  <ListItemText primary={i.name} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
