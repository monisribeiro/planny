import React from 'react';
import TrackerHeader from '../../../components/TrackerHeader';
import HabitsTracker from './components/HabitsTracker';

export default function Monthly() {
  const [monthIndex, setMonthIndex] = React.useState(0);

    return <div className="container">
      <TrackerHeader option="habits" onDateChanged={(ind) => setMonthIndex(ind)} />
      <HabitsTracker monthIndex={monthIndex} />
    </div>
  }