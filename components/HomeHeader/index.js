import React from 'react';
import styles from './calendarHeader.module.scss';
import IconButton from '@mui/material/IconButton';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
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


export default function CalendarHeader({ option, changeOption  }) {
  // const [page, setPage] = React.useState(0);
  const [dateString, setDateString] = React.useState();

  React.useEffect((i) => {
    if (!option) return;
    if (option === 'weekly') {
      const date1 = add(startOfWeek(add(new Date(), { [optionDateMap[option]]: 0 })), { days: 1});
      const date2 = add(endOfWeek(add(new Date(), { [optionDateMap[option]]: 0 })), { days: 1});
      setDateString(`${format(date1, optionFormatMap[option])} - ${format(date2, optionFormatMap[option])}`);
    } else {
      const newDate = add(new Date(), { [optionDateMap[option]]: 0 })
      setDateString(format(newDate, optionFormatMap[option]));
    }
  }, [option]);

  return (
    <header className={styles.header}>
      <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={2} alignItems="center">
          {/* <IconButton aria-label="menu" color="inherit" component="span" onClick={() => setPage(page - 1)}>
            <ChevronLeft />
          </IconButton> */}
          <h2 className="title">{dateString}</h2>
          {/* <IconButton aria-label="menu" color="inherit" component="span" onClick={() => setPage(page + 1)}>
            <ChevronRight />
          </IconButton> */}
        </Stack>
        <Stack direction="row" spacing={8}>
          <ToggleButtonGroup size="small" value={option} onChange={(evt, opt) => changeOption(opt)} exclusive>
            <ToggleButton value="monthly" key="monthly">Monthly</ToggleButton>
            <ToggleButton value="weekly" key="weekly">Weekly</ToggleButton>
            <ToggleButton value="daily" key="daily">Daily</ToggleButton>
          </ToggleButtonGroup>
          {/* <Fab color="primary" aria-label="add" size="small" onClick={onAddClick}>
            <AddCircleIcon />
          </Fab> */}
        </Stack>
      </Stack>
    </header>
  )
}
