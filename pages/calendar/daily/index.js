import React from 'react';
import CalendarHeader from '../../../components/CalendarHeader';
import DailyCalendar from './components/DailyCalendar';

export default function Monthly() {
  const [dayIndex, setDayIndex] = React.useState(0);

    return <div className="container">
      <CalendarHeader option="daily" onDateChanged={(ind) => setDayIndex(ind)} />
      <DailyCalendar dayIndex={dayIndex} />
    </div>
  }