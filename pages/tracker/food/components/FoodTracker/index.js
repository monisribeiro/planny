import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import { add, format, startOfWeek, isSameDay } from 'date-fns';
import columns from './helper';
import styles from './foodTracker.module.scss';

export default function WeeklyCalendar({ weekIndex, items, onItemClick }) {
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

  const getItem = (i, d) => {
    const itemDate = items[format(d, 'yyyy-MM-dd')];
    if (itemDate) {
      if (i.key === 'Calories') {
        const totalCals = Object.keys(itemDate).reduce((res, val) => {
          return res + (+itemDate[val].calories || 0);
        }, 0);
        return totalCals;
      }

      return itemDate[i.key]?.description;
    }
    return '';
  };

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
              {columns.map((i, ind) => (
                <Stack
                  sx={{
                    width: i.fullWidth ? '100%' : '4em',
                    minWidth: i.fullWidth ? 'auto' : '4em',
                  }}
                  className={isSameDay(d, today) ? styles.todayStack : styles.regularStack}
                  alignItems="center"
                  justifyContent="center"
                  key={`col-${i.key}`}
                >
                  <Card sx={{ width: '100%', height: '100%', borderRadius: 0, boxShadow: 'none' }}>
                    <CardActionArea onClick={(ind) => onItemClick(format(d, 'yyyy-MM-dd'), i.key)}>
                      <CardContent>
                        <Typography className={!i.key ? 'title' : ''} variant={!i.key ? '' : 'body2'}  >
                          {!i.key ? format(d, 'eee') : getItem(i, d)}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Stack>
              ))}
            </Stack>
          ))}
        </Stack>
      </Box>
    </div>
  );

}
