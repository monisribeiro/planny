import React from 'react';
import styles from './trackerHeader.module.scss';
import IconButton from '@mui/material/IconButton';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Fab from '@mui/material/Fab';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Stack from '@mui/material/Stack';
import { add, format, startOfWeek, endOfWeek } from 'date-fns';

const optionDateMap = {
  food: 'weeks',
  finance: 'months',
  habits: 'months',
};

const optionFormatMap = {
  food: "MMM dd',' yyyy",
  finance: 'MMM yyyy',
  habits: 'MMM yyyy',
};


export default function CalendarHeader({ option, onDateChanged }) {
  const [page, setPage] = React.useState(0);
  const [dateString, setDateString] = React.useState();

  React.useEffect((i) => {
    if (!option) return;
    if (option === 'food') {
      const date1 = startOfWeek(add(new Date(), { [optionDateMap[option]]: page }));
      const date2 = endOfWeek(add(new Date(), { [optionDateMap[option]]: page }));
      setDateString(`${format(date1, optionFormatMap[option])} - ${format(date2, optionFormatMap[option])}`);
    } else {
      const newDate = add(new Date(), { [optionDateMap[option]]: page })
      setDateString(format(newDate, optionFormatMap[option]));
    }
    onDateChanged(page);
  }, [page, option]);

  return (
    <header className={styles.header}>
      <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton aria-label="menu" color="inherit" component="span" onClick={() => setPage(page - 1)}>
            <ChevronLeft />
          </IconButton>
          <h2 className="title">{dateString}</h2>
          <IconButton aria-label="menu" color="inherit" component="span" onClick={() => setPage(page + 1)}>
            <ChevronRight />
          </IconButton>
        </Stack>
        <Stack direction="row" spacing={8}>
          <ToggleButtonGroup size="small" value={option} onChange={(evt, opt) => window.location.href = `/tracker/${opt}`} exclusive>
            <ToggleButton value="habits" key="habits">Habits</ToggleButton>
            <ToggleButton value="food" key="food">Food</ToggleButton>
            <ToggleButton value="finance" key="finance">Finance</ToggleButton>
          </ToggleButtonGroup>
          <Fab color="primary" aria-label="add" size="small">
            <AddCircleIcon />
          </Fab>
        </Stack>
      </Stack>
    </header>
  )
}
