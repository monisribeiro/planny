import React from 'react';
import TrackerHeader from '../../../components/TrackerHeader';
import HabitsTracker from './components/HabitsTracker';
import HabitsModal from './components/HabitsModal';
import menuItems from './helper';

export default function Monthly() {
  const [monthIndex, setMonthIndex] = React.useState(0);
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(undefined);
  const [list, setList] = React.useState(menuItems);

  const saveItem = (newItem) => {
    if (!newItem.id) {
      newItem.id = list[list.length - 1].id + 1;
      list.push(newItem);
    } else {
      list[selectedItemIndex] = newItem;
      setList([...list]);
    }
    setSelectedItemIndex(undefined);
  };

  const deleteItem = () => {
    list.splice(selectedItemIndex, 1);
    setList([...list]);
    setSelectedItemIndex(undefined);
  };

  return <div className="container">
    <TrackerHeader option="habits" onDateChanged={(ind) => setMonthIndex(ind)} onAddClick={() => setSelectedItemIndex(-1)} />
    <HabitsTracker monthIndex={monthIndex} items={list} onHabitClick={(ind) => setSelectedItemIndex(ind)} />
    {(selectedItemIndex || selectedItemIndex === 0) && (
      <HabitsModal
        item={list[selectedItemIndex] || { name: '', color: '#0093ee', }}
        onClose={() => setSelectedItemIndex(undefined)}
        onSave={(newItem) => saveItem(newItem)}
        onDelete={deleteItem} />
    )}
  </div>
}