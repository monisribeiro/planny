import React from 'react';
import CalendarHeader from '../../../components/CalendarHeader';
import MonthlyCalendar from './components/MonthlyCalendar';

export default function Monthly() {
  const [monthIndex, setMonthIndex] = React.useState(0);

    return <div className="container">
      <CalendarHeader option="monthly" onDateChanged={(ind) => setMonthIndex(ind)} />
      <MonthlyCalendar monthIndex={monthIndex} />
    </div>
  }