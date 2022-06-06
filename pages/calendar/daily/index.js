import React from 'react';
import CalendarHeader from '../../../components/CalendarHeader';
import CalendarModal from '../components/CalendarModal';
import DailyCalendar from './components/DailyCalendar';
import itemsHelper from '../../../helpers/CalendarHelper';

export default function Monthly() {
  const [dayIndex, setDayIndex] = React.useState(0);
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(undefined);
  const [selectedDate, setSelectedDate] = React.useState(undefined);
  const [list, setList] = React.useState(itemsHelper);

  const saveItem = (newItem) => {
    if (!newItem.id) {
      newItem.id = list[list.length - 1].id + 1;
      list.push(newItem);
    } else {
      list[selectedItemIndex] = newItem;
    }
    setList([...list]);
    setSelectedItemIndex(undefined);
  };

  const deleteItem = () => {
    list.splice(selectedItemIndex, 1);
    setList([...list]);
    setSelectedItemIndex(undefined);
  };

  return <div className="container">
    <CalendarHeader option="daily" onDateChanged={(ind) => setDayIndex(ind)} onAddClick={() => setSelectedItemIndex(-1)} />
    <DailyCalendar dayIndex={dayIndex} items={list} onItemClick={(id, date) => {
      setSelectedItemIndex(list.findIndex(i => i.id === id) || -1);
      setSelectedDate(date);
    }} />
    {(selectedItemIndex || selectedItemIndex === 0) && (
      <CalendarModal
        item={list[selectedItemIndex] || { name: '', color: '#0093ee', date: selectedDate }}
        onClose={() => setSelectedItemIndex(undefined)}
        onSave={(newItem) => saveItem(newItem)}
        onDelete={deleteItem} />
    )}
  </div>
}