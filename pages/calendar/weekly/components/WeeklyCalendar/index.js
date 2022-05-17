import React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { add, format, startOfWeek, isSameDay } from 'date-fns';

export default function WeeklyCalendar({ weekIndex }) {
  const [today] = React.useState(new Date());
  const [datesArr, setDatesArr] = React.useState([]);
  const hours = new Array(19).fill('').map((val, ind) => (`${ind === 18 ? '00' : ind + 6}:00`));

  React.useEffect(() => {
    const newWeek = add(new Date(), { weeks: weekIndex });
    const firstDate = startOfWeek((newWeek));
    const newDatesArr = [];
    for (let i = 0; i < 7; i++) {
      newDatesArr.push(add(firstDate, { days: i }));
    }
    setDatesArr(newDatesArr);
  }, [weekIndex]);

  return (
    <div className="container">
      <Stack direction="row" spacing={0} justifyContent="space-between" alignContent="center" sx={{ margin: '3em 2em 0em' }}>
        <Typography sx={{ minWidth: '4em' }}></Typography>
        {datesArr.map(d => (
          <Stack sx={{ width: '100%'}} alignItems="center" justifyContent="center">
            <Typography
              variant="h6"
              align="center"
              className="title"
              sx={{ color: isSameDay(d, today) ? '#E8B4B8' : 'inherit' }}
            >
              {format(d, 'eee')}.
            </Typography>
            <Typography
              variant="overline"
              align="center"
              sx={{ backgroundColor: isSameDay(d, today) ? '#E8B4B8' : 'inherit', borderRadius: '50%', width: 32, color: 'white' }}
            >
              {format(d, 'dd')}
            </Typography>
          </Stack>
        ))}
      </Stack>
      <Box
        sx={{
          height: 'calc(100vh - 212px)',
          overflow: 'scroll'
        }}
      >
        <Stack direction="row" spacing={0} sx={{ margin: '0em 2em' }}>
          {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
            <Stack direction="column" spacing={0} sx={{ margin: '0em', width: i ? '100%' : '5em', minWidth: i ? 'auto' : '4em' }} key={`row-${i}`}>
              <Paper
                sx={{ padding: '0.5em 1em', height: '100%' }}
                square>
                {hours.map(j => (
                  <Typography variant="overline" align="center" display="block" component="div">
                    {i ? '' : j}
                  </Typography>
                ))}
              </Paper>
            </Stack>
          ))}
        </Stack>
      </Box>
    </div>
  );

}
