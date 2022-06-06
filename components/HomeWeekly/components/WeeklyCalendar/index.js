import React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { add, format, startOfWeek, isSameDay } from 'date-fns';

export default function WeeklyCalendar({ weekIndex, items }) {
  const [today] = React.useState(new Date());
  const [datesArr, setDatesArr] = React.useState([]);
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    const newWeek = add(new Date(), { weeks: weekIndex });
    const firstDate = add(startOfWeek((newWeek)), { days: 1 });
    const newDatesArr = [];
    for (let i = 0; i < 7; i++) {
      newDatesArr.push(add(firstDate, { days: i }));
    }
    setDatesArr(newDatesArr);
  }, [weekIndex]);

  React.useEffect(() => {
    setData(items.reduce((res, val) => {
      const date = format(new Date(val.date), 'yyyy-MM-dd');
      if (res[date]) {
        res[date].push(val);
      } else {
        res[date] = [val];
      }
      return res;
    }, {}));
  }, [items]);

  return (
    <div className="container">
      <Grid container spacing={0}>
        {[0, 1, 2, 3, 4].map(i => (
          <Grid item sx={{ flex: '1 1 auto' }} key={`row-${i}`}>
            <Paper variant="outlined" square sx={{ padding: '0.5em 1em', height: 400 }}>
              <Typography align="left" variant="h6" className="title">
                {datesArr[i] && format(new Date(datesArr[i]), 'eeee')}
              </Typography>
              <br />
              {datesArr[i] && data[format(datesArr[i], 'yyyy-MM-dd')]?.map(item => (
                <Typography align="left" variant="caption">
                  {format(new Date(item.date), 'HH:mm')} - {item.name}
                </Typography>
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={0}>
        {[5, 6].map(i => (
          <Grid item xs={6} key={`row-${i}`}>
            <Paper variant="outlined" square sx={{ padding: '0.5em 1em', height: 180 }} >
              <Typography align="left" variant="h6" className="title">
                {datesArr[i] && format(new Date(datesArr[i]), 'eeee')}
              </Typography>
              <br />
              {datesArr[i] && data[format(datesArr[i], 'yyyy-MM-dd')]?.map(item => (
                <Typography align="left" variant="caption">
                  {format(new Date(item.date), 'HH:mm')} - {item.name}
                </Typography>
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );

}
