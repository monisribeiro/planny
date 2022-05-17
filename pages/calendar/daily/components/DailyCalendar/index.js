import React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { add, format, startOfWeek, startOfMonth, isSameMonth } from 'date-fns';

export default function MonthlyCalendar({ dayIndex }) {
  const [day, setDay] = React.useState(0);
  const hours = new Array(19).fill('').map((val, ind) => (`${ind === 18 ? '00' : ind + 6}:00`));

  React.useEffect(() => {
    const newDay = add(new Date(), { days: dayIndex });
    setDay(newDay);
  }, [dayIndex]);

  return (
    <div className="container">
      <Box
        sx={{
          height: 'calc(100vh - 94px)',
          overflow: 'scroll',
          margin: '1em 2em'
        }}
      >
        <Stack direction="row" spacing={0} sx={{ margin: '0em' }}>
          <Stack direction="column" spacing={0} sx={{ margin: '0em' }}>
            <Paper
              sx={{ padding: '0.5em 1em', height: '100%' }}
              elevation={0}
            >
              {hours.map(j => (
                <Typography variant="overline" align="center" display="block" component="div">
                  {j}
                </Typography>
              ))}
            </Paper>
          </Stack>
          <Stack direction="column" spacing={0} sx={{ margin: '0em', width: '100%' }}>
            <Paper
              sx={{ padding: '0.5em 0em', height: '100%' }}
              elevation={0}
            >
              {hours.map((j, ind) => (
                <Typography
                  variant="overline"
                  display="block" component="div"
                  sx={{
                    backgroundColor: ind % 2 === 0 ? '#eed6d340' : 'transparent',
                    width: '100%',
                    height: '32px',
                  }}
                >
                  {''}
                </Typography>
              ))}
            </Paper>
          </Stack>
        </Stack>
      </Box>
    </div>
  );

}
