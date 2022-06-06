import React from 'react';
import WeeklyCalendar from './components/WeeklyCalendar';
import HabitsTracker from './components/HabitsTracker';
import ListComponent from './components/ListComponent';
import itemsHelper from '../../helpers/CalendarHelper';
import listsHelper from '../../helpers/ListsHelper';
import habitsItemsHelper from '../../helpers/HabitsHelper';
import { Grid, Card, CardActionArea } from '@mui/material';

export default function Monthly() {
  const [list] = React.useState(itemsHelper);
  const [habitsList] = React.useState(habitsItemsHelper);

  return <div className="container">
    <Grid container spacing={2}>
      <Grid item xs={8} >
        <Card sx={{ padding: '2em 2em 0', boxShadow: 'none' }}>
          <CardActionArea onClick={() => window.location.href = '/calendar/weekly'}>
            <WeeklyCalendar weekIndex={0} items={list} />
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={4} sx={{ paddingRight: '2em' }}>
        <Grid container direction="column" spacing={2} sx={{ paddingTop: '2em' }}>
          <Grid item xs={6} >
            <ListComponent lists={listsHelper} />
          </Grid>
          <Grid item xs={6} >
            <Card sx={{ boxShadow: 'none' }}>
              <CardActionArea onClick={() => window.location.href = '/tracker/habits'}>
                <HabitsTracker monthIndex={0} items={habitsList} />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
}