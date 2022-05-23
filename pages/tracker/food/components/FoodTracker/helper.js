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
  key: 'Breakfast', 
  title: 'Breakfast',
  fullWidth: true,
  icon: <FreeBreakfastIcon />
}, {
  key: 'Lunch', 
  title: 'Lunch',
  fullWidth: true,
  icon: <LunchDiningIcon />
}, {
  key: 'Dinner', 
  title: 'Dinner',
  fullWidth: true,
  icon: <DinnerDiningIcon />
}, {
  key: 'Snacks', 
  title: 'Snacks',
  fullWidth: true,
  icon: <IcecreamIcon />
} , {
  key: 'Calories', 
  title: '',
  fullWidth: false,
  icon: <LocalFireDepartmentIcon />
}];

export default columns;
