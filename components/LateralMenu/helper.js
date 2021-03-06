import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import ListAltIcon from '@mui/icons-material/ListAlt';

const menuItems = [{
    title: 'Home',
    icon: <HomeIcon />,
    onClick: () => window.location.href = "/",
}, {
    title: 'Calendar',
    icon: <CalendarMonthIcon />,
    isOpened: false,
    subItems: [{
        title: 'Monthly',
        onClick: () => window.location.href = "/calendar/monthly",
    }, {
        title: 'Weekly',
        onClick: () => window.location.href = "/calendar/weekly",
    }, {
        title: 'Daily',
        onClick: () => window.location.href = "/calendar/daily",
    }]
}, {
    title: 'Trackers',
    icon: <TrackChangesIcon />,
    isOpened: false,
    subItems: [{
        title: 'Habits',
        onClick: () => window.location.href = "/tracker/habits",
    }, {
        title: 'Food',
        onClick: () => window.location.href = "/tracker/food",
    }, {
        title: 'Finances',
        onClick: () => window.location.href = "/tracker/finance",
    }]
}, {
    title: 'Lists',
    icon: <ListAltIcon />,
    onClick: () => window.location.href = "/lists",
}]

export default menuItems;
