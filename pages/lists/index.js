import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ListHeader from '../../components/ListHeader';
import ListComponent from './components/ListComponent';
import ListModal from './components/ListModal';
import listHelper from './helper';

export default function Monthly() {
  const [list, setList] = React.useState(listHelper);
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(undefined);
  const [filters, setFilters] = React.useState(['list', 'todo']);

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

  return <Container sx={{ margin: '1em 0'}}>
    <ListHeader option={filters} onFiltersChange={(ind) => setFilters(ind)} onAddClick={() => setSelectedItemIndex(-1)} />
    <Grid container spacing={2}>
      {list?.filter(i => filters.includes(i.type)).map((item, ind) => (
        <ListComponent {...item} onCardClick={() => setSelectedItemIndex(ind)}  />
      ))}
    </Grid>
    {(selectedItemIndex || selectedItemIndex === 0) && <ListModal item={list[selectedItemIndex] || { items: [], type: 'list', isNew: true }} onClose={() => setSelectedItemIndex(undefined)} onSave={(newItem) => saveItem(newItem)} onDelete={deleteItem}/>}
  </Container>
}