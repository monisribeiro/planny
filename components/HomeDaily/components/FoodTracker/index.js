import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import { add, format, startOfWeek, isSameDay } from 'date-fns';
import columns from '../../../../helpers/FoodTrackerHelper';
import styles from './foodTracker.module.scss';

export default function WeeklyCalendar({ weekIndex, items, onItemClick }) {
  const [datesArr, setDatesArr] = React.useState([]);
  const [today] = React.useState(new Date());

  React.useEffect(() => {
    const newWeek = add(new Date(), { weeks: weekIndex });
    const firstDate = add(startOfWeek((newWeek)), { days: 1 });
    const newDatesArr = [];
    for (let i = 0; i < 1; i++) {
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
      <Stack direction="row" spacing={0} justifyContent="space-between" alignContent="center" sx={{ margin: '3em 0em 0em' }}>
        {columns.map((d, ind) =>  !!ind && (
          <Stack alignItems="center" justifyContent="flex-end" spacing={0} sx={{ width: d.fullWidth ? '100%' : 'auto', minWidth: d.fullWidth ? 'auto' : '4em' }} >
            <Typography variant="overline" align="center" component="div" >
              {d.title}
            </Typography>
            {d.icon}
          </Stack>
        ))}
      </Stack>
      <Stack direction="column" spacing={0} sx={{ margin: '1em 0em' }}>
        {datesArr.map(d => (
          <Stack direction="row" spacing={0} sx={{ flex: '1 1 auto', height: 180 }} key={`row-${d}`}>
            {columns.map((i, ind) => !!ind && (
              <Stack
                sx={{
                  width: i.fullWidth ? '100%' : '4em',
                  minWidth: i.fullWidth ? 'auto' : '4em',
                }}
                className={styles.regularStack}
                alignItems="center"
                justifyContent="center"
                key={`col-${i.key}`}
              >
                <Card sx={{ width: '100%', height: '100%', borderRadius: 0, boxShadow: 'none' }}>
                  <CardContent>
                    <Typography className={!i.key ? 'title' : ''} variant={!i.key ? '' : 'body2'}  >
                      {getItem(i, d)}
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            ))}
          </Stack>
        ))}
      </Stack>
    </div>
  );

}
