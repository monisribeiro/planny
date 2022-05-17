import React from 'react';
import CalendarHeader from '../../../components/CalendarHeader';
import WeeklyCalendar from './components/WeeklyCalendar';

export default function Monthly() {
  const [weekIndex, setWeekIndex] = React.useState(0);

    return <div className="container">
      <CalendarHeader option="weekly" onDateChanged={(ind) => setWeekIndex(ind)} />
      <WeeklyCalendar weekIndex={weekIndex} />
    </div>
  }