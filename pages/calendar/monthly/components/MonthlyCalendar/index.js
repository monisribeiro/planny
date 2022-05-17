import React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { add, format, startOfWeek, startOfMonth, isSameMonth, isSameDay } from 'date-fns';

export default function MonthlyCalendar({ monthIndex }) {
  const [month, setMonth] = React.useState(0);
  const [today] = React.useState(new Date());
  const [datesArr, setDatesArr] = React.useState([]);

  React.useEffect(() => {
    const newMonth = add(new Date(), { months: monthIndex });
    setMonth(newMonth);
    const firstDate = startOfWeek(startOfMonth(newMonth));
    const newDatesArr = [];
    for (let i = 0; i < 35; i++) {
      newDatesArr.push(add(firstDate, { days: i}));
    }
    setDatesArr(newDatesArr);
  }, [monthIndex]);

  return (
    <div className="container">
    <Stack direction="row" spacing={0} justifyContent="space-between" alignContent="center" sx={{ margin: '3em 2em 1em'}}>
      <h3 className="title text-center full-width">Sunday</h3>
      <h3 className="title text-center full-width">Monday</h3>
      <h3 className="title text-center full-width">Tuesday</h3>
      <h3 className="title text-center full-width">Wednesday</h3>
      <h3 className="title text-center full-width">Thursday</h3>
      <h3 className="title text-center full-width">Friday</h3>
      <h3 className="title text-center full-width">Saturday</h3>
    </Stack>
      {[0, 1, 2, 3, 4].map(i => (
        <Stack direction="row" spacing={0}  sx={{ margin: '0em 2em'}} justifyContent="space-evenly" key={`row-${i}`}>
          {[0, 1, 2, 3, 4, 5, 6].map(j => {
            const date = datesArr[(i*7)+j];
            if (!date) return '';
            const sameMonth = isSameMonth(date, month);
            return (
              <Paper
                sx={{width: '100%', height: '100px', padding: '0 0.25em', backgroundColor: sameMonth ? 'transparent' : '#f5f5f5', borderColor: isSameDay(today, date) ? '#E8B4B8' : '#f5f5f5' }}
                variant='outlined'
                square>
                <Typography variant="overline" align="center">
                  {format(datesArr[(i*7)+j], sameMonth ? 'dd' : 'MMM dd')}
                </Typography>
              </Paper>
            )}
          )}
        </Stack>
      ))}
    </div>
  );

}
