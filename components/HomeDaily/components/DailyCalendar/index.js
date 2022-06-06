import React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import { add, format, isSameDay } from 'date-fns';

export default function MonthlyCalendar({ dayIndex, items }) {
  const [day, setDay] = React.useState(0);
  const [data, setData] = React.useState({});
  const hours = new Array(19).fill('').map((val, ind) => (`${ind === 18 ? '00' : ind + 6}:00`));

  React.useEffect(() => {
    const newDay = add(new Date(), { days: dayIndex });
    setDay(newDay);
  }, [dayIndex]);

  React.useEffect(() => {
    setData(items.filter(i => isSameDay(new Date(i.date), day)).reduce((res, val) => {
      const hour = format(new Date(val.date), 'HH:mm');
      res[hour] = val;
      return res;
    }, {}));
  }, [items, day]);

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
            <Card
              sx={{ padding: '0.5em 0em', height: '100%', boxShadow: 'none', borderRadius: 0 }}
              elevation={0}
            >
              {hours.map((j, ind) => (
                <CardActionArea
                  sx={{
                    padding: '0.5em',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    backgroundColor: ind % 2 === 0 ? '#eed6d340' : 'transparent',
                    width: '100%',
                    height: '32px',
                  }}
                >
                  <CardContent sx={{ padding: '0em' }} >
                    <Typography align="left" variant="caption">
                      {data[j]?.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              ))}
            </Card>
          </Stack>
        </Stack>
      </Box>
    </div>
  );

}
