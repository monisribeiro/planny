import React from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { add, format, startOfWeek, startOfMonth, isSameMonth, isSameDay } from 'date-fns';

export default function MonthlyCalendar({ monthIndex, items }) {
  const [month, setMonth] = React.useState(0);
  const [today] = React.useState(new Date());
  const [datesArr, setDatesArr] = React.useState([]);
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    const newMonth = add(new Date(), { months: monthIndex });
    setMonth(newMonth);
    const firstDate = startOfWeek(startOfMonth(newMonth));
    const newDatesArr = [];
    for (let i = 0; i < 35; i++) {
      newDatesArr.push(add(firstDate, { days: i }));
    }
    setDatesArr(newDatesArr);
  }, [monthIndex]);

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
    <div className="MonthlyCalendar">
      <Stack direction="row" spacing={0} justifyContent="space-between" alignContent="center" sx={{ padding: '2em 0 1em'}}>
        <h3 className="title text-center full-width">Sunday</h3>
        <h3 className="title text-center full-width">Monday</h3>
        <h3 className="title text-center full-width">Tuesday</h3>
        <h3 className="title text-center full-width">Wednesday</h3>
        <h3 className="title text-center full-width">Thursday</h3>
        <h3 className="title text-center full-width">Friday</h3>
        <h3 className="title text-center full-width">Saturday</h3>
      </Stack>
      {[0, 1, 2, 3, 4].map(i => (
        <Stack direction="row" spacing={0} justifyContent="space-evenly" key={`row-${i}`}>
          {[0, 1, 2, 3, 4, 5, 6].map(j => {
            const date = datesArr[(i * 7) + j];
            if (!date) return '';
            const sameMonth = isSameMonth(date, month);
            const dateKey = format(datesArr[(i * 7) + j], 'yyyy-MM-dd');
            return (
              <Card className="card" sx={{ width: '100%', height: '120px', borderRadius: 0, border: isSameDay(today, date) ? '1px solid #E8B4B8' : '1px solid #f5f5f5', padding: '0 0.25em', boxShadow: 'none', backgroundColor: sameMonth ? 'transparent' : '#f5f5f5' }}>
                <CardContent sx={{ padding: '0' }} >
                  <Typography variant="overline" align="center" color="text.secondary" s>
                    {format(datesArr[(i * 7) + j], sameMonth ? 'dd' : 'MMM dd')}
                  </Typography>
                </CardContent>
                {data[dateKey]?.map(item => (
                  <CardContent sx={{ padding: '0em' }} >
                    <Typography align="left" variant="caption">
                      {format(new Date(item.date), 'HH:mm')} - {item.name}
                    </Typography>
                  </CardContent>
                ))}
                {data[dateKey] && (
                  <CardContent sx={{ padding: '0em' }} >
                    <Typography align="center" variant="subtitle2" color="text.secondary" sx={{ fontSize: '0.75em' }}>
                    </Typography>
                  </CardContent>
                )}
                {!data[dateKey] && (
                  <CardContent sx={{ padding: '0em' }} >
                    <Typography align="left">
                    </Typography>
                  </CardContent>
                )}
              </Card>
            )
          }
          )}
        </Stack>
      ))}
    </div>
  );

}
