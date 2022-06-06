import React from 'react';
import CalendarHeader from '../../../components/CalendarHeader';
import CalendarModal from '../components/CalendarModal';
import WeeklyCalendar from './components/WeeklyCalendar';
import itemsHelper from '../../../helpers/CalendarHelper';

export default function Monthly() {
  const [weekIndex, setWeekIndex] = React.useState(0);
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
    <CalendarHeader option="weekly" onDateChanged={(ind) => setWeekIndex(ind)} onAddClick={() => setSelectedItemIndex(-1)} />
    <WeeklyCalendar weekIndex={weekIndex} items={list} onItemClick={(id, date) => {
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