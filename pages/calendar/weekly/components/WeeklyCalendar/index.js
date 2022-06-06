import React from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { add, format, startOfWeek, isSameDay } from 'date-fns';

export default function WeeklyCalendar({ weekIndex, items, onItemClick }) {
  const [today] = React.useState(new Date());
  const [datesArr, setDatesArr] = React.useState([]);
  const [data, setData] = React.useState({});
  const hours = new Array(19).fill('').map((val, ind) => (`${ind === 18 ? '00' : ind + 6}:00`));

  React.useEffect(() => {
    const newWeek = add(new Date(), { weeks: weekIndex });
    const firstDate = add(startOfWeek((newWeek)), { days: 1});
    const newDatesArr = [];
    for (let i = 0; i < 7; i++) {
      newDatesArr.push(add(firstDate, { days: i }));
    }
    setDatesArr(newDatesArr);
  }, [weekIndex]);

  React.useEffect(() => {
    setData(items.reduce((res, val) => {
      const date = format(new Date(val.date), 'yyyy-MM-dd');
      const hour = format(new Date(val.date), 'HH:mm');
      if (res[date]) {
        res[date][hour] = val;
      } else {
        res[date] = {
          [hour]: val,
        };
      }
      return res;
    }, {}));
  }, [items]);

  return (
    <div className="container">
      <Stack direction="row" spacing={0} justifyContent="space-between" alignContent="center" sx={{ margin: '3em 2em 0em' }}>
        <Typography sx={{ minWidth: '4em' }}></Typography>
        {datesArr.map(d => (
          <Stack sx={{ width: '100%' }} alignItems="center" justifyContent="center">
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
              sx={{ backgroundColor: isSameDay(d, today) ? '#E8B4B8' : 'inherit', borderRadius: '50%', width: 32, color: isSameDay(d, today) ? 'white' : 'inherit' }}
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
              {hours.map(j => (
                <Card sx={{ height: 32, borderRadius: 0, boxShadow: 'none', borderBottom: '1px solid #eee', borderRight: '1px solid #eee'}}>
                  <>
                    {i ? (
                      <CardActionArea sx={{  padding: '0.5em', justifyContent: 'flex-start', alignItems: 'flex-start' }} onClick={() => onItemClick(data[format(datesArr[i - 1], 'yyyy-MM-dd')] && data[format(datesArr[i - 1], 'yyyy-MM-dd')][j]?.id, `${format(datesArr[i - 1], 'yyyy-MM-dd')} ${j}`)}>
                        <CardContent sx={{ padding: '0em' }} >
                          <Typography align="left" variant="caption">
                            {datesArr[i - 1] && data[format(datesArr[i - 1], 'yyyy-MM-dd')] && data[format(datesArr[i - 1], 'yyyy-MM-dd')][j]?.name}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    ) : (
                      <Typography variant="overline" align="center" display="block" component="div">
                        {j}
                      </Typography>
                    )}
                  </>
                </Card>
              ))}
            </Stack>
          ))}
        </Stack>
      </Box>
    </div>
  );

}
