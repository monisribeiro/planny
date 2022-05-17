import React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { add, format, startOfWeek, isSameDay } from 'date-fns';
import columns from './helper';
import styles from './foodTracker.module.scss';

export default function WeeklyCalendar({ weekIndex }) {
  const [datesArr, setDatesArr] = React.useState([]);
  const [today] = React.useState(new Date());

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
        {columns.map(d => (
          <Stack alignItems="center" justifyContent="flex-end" spacing={0} sx={{ width: d.fullWidth ? '100%' : 'auto', minWidth: d.fullWidth ? 'auto' : '4em' }} >
            <Typography variant="overline" align="center" component="div" >
              {d.title}
            </Typography>
            {d.icon}
          </Stack>
        ))}
      </Stack>
      <Box
        sx={{
          height: 'calc(100vh - 212px)',
          overflow: 'scroll'
        }}
      >
        <Stack direction="column" spacing={0} sx={{ margin: '1em 2em', height: 'calc(100vh - 250px)' }}>
          {datesArr.map(d => (
            <Stack direction="row" spacing={0} sx={{ flex: '1 1 auto' }} key={`row-${d}`}>
              {columns.map(i => (
                <Stack
                  sx={{
                    width: i.fullWidth ? '100%' : '4em',
                    minWidth: i.fullWidth ? 'auto' : '4em',
                  }}
                  className={isSameDay(d, today) ? styles.todayStack : styles.regularStack }
                  alignItems="center"
                  justifyContent="center"
                  key={`col-${i}`}
                >
                  <Typography className="title" >
                    {!i.key ? format(d, 'eee') : ''}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          ))}
        </Stack>
      </Box>
    </div>
  );

}
