import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import IcecreamIcon from '@mui/icons-material/Icecream';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

const columns = [{
    key: '', 
    title: '',
    fullWidth: false,
    icon: ''
  }, {
  key: 'BREAKFAST', 
  title: 'Breakfast',
  fullWidth: true,
  icon: <FreeBreakfastIcon />
}, {
  key: 'LUNCH', 
  title: 'Lunch',
  fullWidth: true,
  icon: <LunchDiningIcon />
}, {
  key: 'DINNER', 
  title: 'Dinner',
  fullWidth: true,
  icon: <DinnerDiningIcon />
}, {
  key: 'SNACKS', 
  title: 'Snacks',
  fullWidth: true,
  icon: <IcecreamIcon />
}, {
  key: 'WATER', 
  title: '',
  fullWidth: false,
  icon: <LocalDrinkIcon />
}, , {
  key: 'CALORIES', 
  title: '',
  fullWidth: false,
  icon: <LocalFireDepartmentIcon />
}];

export default columns;
