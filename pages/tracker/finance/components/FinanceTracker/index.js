import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { add, isSameMonth } from 'date-fns';
import ExpensesList from '../ExpensesList';

export default function MonthlyCalendar({ monthIndex, items, onItemClick }) {
  const [month, setMonth] = React.useState(0);
  const [tab, setTab] = React.useState('balance');
  const [itemsList, setItemsList] = React.useState([]);

  React.useEffect(() => {
    const newMonth = add(new Date(), { months: monthIndex });
    setMonth(newMonth);
  }, [monthIndex]);

  React.useEffect(() => {
    setItemsList(items.filter(i => isSameMonth(new Date(i.date), month)).sort((a, b) => (new Date(b.date) - (new Date(a.date)))));
  }, [items, month]);

  return (
    <div className="container">
      <Grid padding={3}>
        <Grid item xs="6" spacing={3}>
          <TabContext value={tab}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={(evt, newTab) => setTab(newTab)}>
                <Tab label="Balance" value="balance" />
                <Tab label="Savings" value="savings" />
              </TabList>
            </Box>
            <TabPanel value="balance" sx={{ padding: 0 }}>
              <ExpensesList items={itemsList.filter(i => i.category !== 'Savings')} onItemClick={onItemClick} />
            </TabPanel>
            <TabPanel value="savings" sx={{ padding: 0 }}>
              <ExpensesList items={itemsList.filter(i => i.category === 'Savings')} onItemClick={onItemClick} />
            </TabPanel>
          </TabContext>
        </Grid>
        <Grid item xs="6">

        </Grid>
      </Grid>
    </div>
  );

}
