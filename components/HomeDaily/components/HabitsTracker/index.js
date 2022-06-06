import React from 'react';
import Typography from '@mui/material/Typography';
import { add, format, startOfWeek, isSameDay } from 'date-fns';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import styles from './habitsTracker.module.scss';
import eventsHelper from '../../../../helpers/HabisTrackerHelper';

export default function MonthlyCalendar({ monthIndex, onHabitClick, items }) {
  const [month, setMonth] = React.useState(0);
  const [events, setEvents] = React.useState(eventsHelper);
  const [datesArr, setDatesArr] = React.useState([]);
  const [today] = React.useState(new Date());

  React.useEffect(() => {
    const newWeek = add(new Date(), { weeks: monthIndex });
    const firstDate = add(startOfWeek((newWeek)), { days: 1 });
    const newDatesArr = [];
    for (let i = 0; i < 7; i++) {
      newDatesArr.push(add(firstDate, { days: i }));
    }
    setDatesArr(newDatesArr);
  }, [monthIndex]);


  const getCellBg = (item, date) => {
    if (events[item.name]?.includes(format(date, 'yyyy-MM-dd'))) {
      return '#E8B4B8';
    }
    return 'transparent';
  }

  return (
    <div className={styles.container}>
      <Grid container sx={{ margin: '0', width: 'auto' }} spacing={2}>
        <Grid item xs="auto" spacing={2} sx={{ paddingTop: '0 !important'}}>
          <Typography variant="body2" className="title" color="inherit" underline="hover" sx={{ height: 24 }}>{' '}</Typography>
          {items?.map((i, ind) => (
              <Link color="text.primary" variant="body1" component="div" onClick={() => onHabitClick(ind)} className="title" align="right" sx={{ lineHeight: '32px', whiteSpace: 'nowrap', textAlign: 'right' }}>{i.name}</Link>
          ))}
        </Grid>
        <Grid xs item spacing={2} sx={{ paddingTop: '0 !important'}}>
          <TableContainer sx={{ maxHeight: 440, margin: '0 0em', maxWidth: 'calc(100vw - 420px)' }}>
            <Table stickyHeader sx={{ tableLayout: 'fixed' }}>
              <TableHead>
                <TableRow>
                  {datesArr?.map(j => (
                    <TableCell sx={{ backgroundColor: 'transparent'}} align="center" padding="none">{format(j, 'dd')}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {items?.map(i => (
                  <TableRow>
                    {datesArr?.map(j => (
                      <TableCell
                        size="small"
                        padding="none"
                        className={isSameDay(j, today) ? styles.todayCell : styles.regularCell}
                        sx={{ height: 30, minWidth: 30, backgroundColor: getCellBg(i, j) }}
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
