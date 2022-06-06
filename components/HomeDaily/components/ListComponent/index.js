import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import NoiseControlOffIcon from '@mui/icons-material/NoiseControlOff';

export default function MonthlyCalendar({ lists }) {
  const [selectedList, setSelectedList] = React.useState(lists[0]);

  return (
    <>
      <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" sx={{ paddingBottom: '0.5em' }}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          onChange={(evt) => setSelectedList(lists[evt.target.value])}
          label="List"
          variant="standard"
          className="title"
          defaultValue={0}
          sx={{ borderBottom: 'none' }}
        >
          {lists.map((i, ind) => (
            <MenuItem value={ind}>{i.name}</MenuItem>
          ))}
        </Select>
        <Typography variant="overline" align="right">{selectedList.items?.length} items</Typography>
      </Stack>
      <Card sx={{ height: 250 }}>
        <CardActionArea onClick={() => window.location.href = '/lists'}>
          <CardContent>
            <List sx={{ width: '100%', height: '200px', overflow: 'scroll' }} dense>
              {selectedList.items?.map((i, ind) => (
                <ListItem >
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    {selectedList.type === 'todo' ? (
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
    </>
  );
}
