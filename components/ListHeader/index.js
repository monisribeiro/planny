import React from 'react';
import styles from './listHeader.module.scss';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Fab from '@mui/material/Fab';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Stack from '@mui/material/Stack';

export default function CalendarHeader({ option, onFiltersChange, onAddClick }) {

  return (
    <header className={styles.header}>
      <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center">
        <ToggleButtonGroup size="small" value={option} onChange={(evt, opt) => onFiltersChange(opt)}>
          <ToggleButton value="list" key="list">Lists</ToggleButton>
          <ToggleButton value="todo" key="todo">Todos</ToggleButton>
        </ToggleButtonGroup>
        <Fab color="primary" aria-label="add" size="small" onClick={onAddClick}>
          <AddCircleIcon />
        </Fab>
      </Stack>
    </header>
  )
}
