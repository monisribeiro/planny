import React from 'react';
import TrackerHeader from '../../../components/TrackerHeader';
import FinanceTracker from './components/FinanceTracker';

export default function Monthly() {
  const [monthIndex, setMonthIndex] = React.useState(0);

    return <div className="container">
      <TrackerHeader option="finance" onDateChanged={(ind) => setMonthIndex(ind)} />
      <FinanceTracker monthIndex={monthIndex} />
    </div>
  }