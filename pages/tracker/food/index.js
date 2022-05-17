import React from 'react';
import TrackerHeader from '../../../components/TrackerHeader';
import FoodTracker from './components/FoodTracker';

export default function Monthly() {
  const [weekIndex, setWeekIndex] = React.useState(0);

    return <div className="container">
      <TrackerHeader option="food" onDateChanged={(ind) => setWeekIndex(ind)} />
      <FoodTracker weekIndex={weekIndex} />
    </div>
  }