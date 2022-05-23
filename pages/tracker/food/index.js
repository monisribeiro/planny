import React from 'react';
import TrackerHeader from '../../../components/TrackerHeader';
import FoodTracker from './components/FoodTracker';
import FoodModal from './components/FoodModal';
import itemsHelper from '../../../helpers/FoodHelper';

export default function Monthly() {
  const [weekIndex, setWeekIndex] = React.useState(0);
  const [selectedItem, setSelectedItem] = React.useState(undefined);
  const [list, setList] = React.useState(itemsHelper);

  const saveItem = (newItem) => {
    if (!list[newItem.date]) {
      console.log('hi');
      list[newItem.date] = { [newItem.category]: {
        calories: newItem.calories,
        description: newItem.description,
      }};
    } else {
      list[newItem.date][newItem.category] = {
        calories: newItem.calories,
        description: newItem.description,
      };
    }
    console.log(list);
    setList({...list});
    setSelectedItem(undefined);
  };

  const deleteItem = () => {
    list[selectedItem.date][selectedItem.category] = {};
    setList({...list});
    setSelectedItem(undefined);
  };

  return <div className="container">
    <TrackerHeader option="food" onDateChanged={(ind) => setWeekIndex(ind)} onAddClick={() => setSelectedItem(-1)}/>
    <FoodTracker weekIndex={weekIndex} items={list} onItemClick={(d, i) => setSelectedItem({
      ...(list[d] && list[d][i]),
      date: d,
      category: i,
    })} />
    {selectedItem && (
      <FoodModal
        item={selectedItem || { }}
        onClose={() => setSelectedItem(undefined)}
        onSave={(newItem) => saveItem(newItem)}
        onDelete={deleteItem} />
    )}
  </div>
}