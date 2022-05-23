import React from 'react';
import Typography from '@mui/material/Typography';
import { add, format, startOfMonth, isSameDay, getDaysInMonth } from 'date-fns';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import styles from './habitsTracker.module.scss';
import eventsHelper from './events';

export default function MonthlyCalendar({ monthIndex, onHabitClick, items }) {
  const [month, setMonth] = React.useState(0);
  const [events, setEvents] = React.useState(eventsHelper);
  const [datesArr, setDatesArr] = React.useState([]);
  const [today] = React.useState(new Date());

  React.useEffect(() => {
    const newMonth = add(new Date(), { months: monthIndex });
    setMonth(newMonth);
    const daysNum = getDaysInMonth(newMonth);
    const firstDate = startOfMonth(newMonth);
    const newDatesArr = [];
    for (let i = 0; i < daysNum; i++) {
      newDatesArr.push(add(firstDate, { days: i }));
    }
    setDatesArr(newDatesArr);
  }, [monthIndex]);

  const changeEvent = (item, date) => {
    const eventIndex = events[item.name]?.findIndex(i => i === format(date, 'yyyy-MM-dd'));
    if (eventIndex > -1) {
      events[item.name].splice(eventIndex, 1);
    } else {
      if (!events[item.name]) events[item.name] = [];
      events[item.name].push(format(date, 'yyyy-MM-dd'));
    }
    setEvents({...events});
  }

  const getCellBg = (item, date) => {
    if (events[item.name]?.includes(format(date, 'yyyy-MM-dd'))) {
      return '#E8B4B8';
    }
    return 'transparent';
  }

  return (
    <div className={styles.container}>
      <Grid container sx={{ margin: '0 2em', width: 'auto' }} spacing={2}>
        <Grid item xs="auto" spacing={2}>
          <Typography variant="body2" className="title" color="inherit" underline="hover" sx={{ height: 24, paddingTop: '1em' }}>{' '}</Typography>
          {items.map((i, ind) => (
              <Link color="text.primary" variant="body1" component="div" onClick={() => onHabitClick(ind)} className="title" align="right" sx={{ lineHeight: '32px', whiteSpace: 'nowrap', textAlign: 'right' }}>{i.name}</Link>
          ))}
        </Grid>
        <Grid xs item spacing={2}>
          <TableContainer sx={{ maxHeight: 440, paddingTop: '1em', margin: '0 0em', maxWidth: 'calc(100vw - 420px)' }}>
            <Table stickyHeader sx={{ tableLayout: 'fixed', minWidth: '900px' }}>
              <TableHead>
                <TableRow>
                  {datesArr.map(j => (
                    <TableCell align="center" padding="none">{format(j, 'dd')}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map(i => (
                  <TableRow>
                    {datesArr.map(j => (
                      <TableCell
                        size="small"
                        padding="none"
                        className={isSameDay(j, today) ? styles.todayCell : styles.regularCell}
                        sx={{ height: 30, minWidth: 30, backgroundColor: getCellBg(i, j) }}
                        onClick={() => changeEvent(i, j)}
                      >
                        {' '}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );

}
