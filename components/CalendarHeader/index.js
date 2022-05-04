import React from 'react';
import styles from './calendarHeader.module.scss';
import IconButton from '@mui/material/IconButton';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Fab from '@mui/material/Fab';
import PaletteIcon from '@mui/icons-material/Palette';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Stack from '@mui/material/Stack';
import { add, format, startOfWeek, endOfWeek } from 'date-fns';

const optionDateMap = {
  daily: 'days',
  weekly: 'weeks',
  monthly: 'months',
};

const optionFormatMap = {
  daily: "MMM dd',' yyyy",
  weekly: "MMM dd',' yyyy",
  monthly: 'MMM yyyy',
};


export default function CalendarHeader({ option }) {
  const [page, setPage] = React.useState(0);
  const [dateString, setDateString] = React.useState();

  React.useEffect((i) => {
    if (!option) return;
    if (option === 'weekly') {
      const date1 = startOfWeek(add(new Date(), { [optionDateMap[option]]: page }));
      const date2 = endOfWeek(add(new Date(), { [optionDateMap[option]]: page }));
      setDateString(`${format(date1, optionFormatMap[option])} - ${format(date2, optionFormatMap[option])}`);
      console.log(date1);
      console.log(date2);
    } else {
      const newDate = add(new Date(), { [optionDateMap[option]]: page })
      console.log(optionFormatMap[option])
      setDateString(format(newDate, optionFormatMap[option]));
    }
  }, [page, option]);

  return (
    <header className={styles.header}>
      <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={2}>
          <IconButton aria-label="menu" color="inherit" component="span" onClick={() => setPage(page - 1)}>
            <ChevronLeft />
          </IconButton>
          <h1 className="title">{dateString}</h1>
          <IconButton aria-label="menu" color="inherit" component="span" onClick={() => setPage(page + 1)}>
            <ChevronRight />
          </IconButton>
        </Stack>
        <Stack direction="row" spacing={8}>
          <ToggleButtonGroup value={option} onChange={(evt, opt) => window.location.href = `/calendar/${opt}`} exclusive>
            <ToggleButton value="monthly" key="monthly">Monthly</ToggleButton>
            <ToggleButton value="weekly" key="right">Weekly</ToggleButton>
            <ToggleButton value="daily" key="right">Daily</ToggleButton>
          </ToggleButtonGroup>
          <Fab color="primary" aria-label="add" size="medium">
            <PaletteIcon />
          </Fab>
        </Stack>
      </Stack>
    </header>
  )
}
