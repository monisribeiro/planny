import React from 'react';
import TrackerHeader from '../../../components/TrackerHeader';
import FinanceTracker from './components/FinanceTracker';
import FinanceModal from './components/FinanceModal';
import itemsHelper from './helper';

export default function Monthly() {
  const [monthIndex, setMonthIndex] = React.useState(0);
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(undefined);
  const [list, setList] = React.useState(itemsHelper);

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
    <TrackerHeader option="finance" onDateChanged={(ind) => setMonthIndex(ind)} onAddClick={() => setSelectedItemIndex(-1)}/>
    <FinanceTracker monthIndex={monthIndex} items={list} onItemClick={(ind) => setSelectedItemIndex(ind)} />
    {(selectedItemIndex || selectedItemIndex === 0) && (
      <FinanceModal
        item={list[selectedItemIndex] || { name: '', color: '#0093ee', }}
        onClose={() => setSelectedItemIndex(undefined)}
        onSave={(newItem) => saveItem(newItem)}
        onDelete={deleteItem} />
    )}
  </div>
}