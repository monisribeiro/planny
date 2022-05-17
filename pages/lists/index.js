import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ListComponent from './components/ListComponent';
import ListModal from './components/ListModal';
import list from './helper';

export default function Monthly() {
  const [selectedItem, setSelectedItem] = React.useState(undefined);

  return <Container sx={{ margin: '1em'}}>
    <Grid container spacing={2}>
      {list?.map(item => (
        <ListComponent {...item} onCardClick={() => setSelectedItem(item)}  />
      ))}
    </Grid>
    {selectedItem && <ListModal item={selectedItem} onClose={() => setSelectedItem(undefined)}/>}
  </Container>
}