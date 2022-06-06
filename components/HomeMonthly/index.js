import React from 'react';
import MonthlyCalendar from './components/MonthlyCalendar';
import FinanceTracker from './components/FinanceTracker';
import itemsHelper from '../../helpers/CalendarHelper';
import financeItemsHelper from '../../helpers/FinanceHelper';
import { Grid, Card, CardActionArea } from '@mui/material';

export default function Monthly() {
  const [list] = React.useState(itemsHelper);
  const [financeList] = React.useState(financeItemsHelper);

  return <div className="container">
    <Grid container spacing={2}>
      <Grid item xs={8} >
        <Card sx={{ padding: '0 2em', boxShadow: 'none' }}>
          <CardActionArea onClick={() => window.location.href = '/calendar/monthly'}>
            <MonthlyCalendar monthIndex={0} items={list} />
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={4} sx={{ paddingRight: '2em' }}>
        <Card sx={{ boxShadow: 'none' }}>
          <CardActionArea onClick={() => window.location.href = '/tracker/finance'}>
            <FinanceTracker monthIndex={0} items={financeList} />
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  </div>
}