import React from 'react';
import styles from './lateralMenu.module.scss';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import items from './helper';

export default function LateralMenu({ children }) {
  const [isCollapsed, setCollapsed] = React.useState(false);
  const [menuItems, setMenuItems] = React.useState(items);

  const onItemClick = React.useCallback((i) => {
    if (i.onClick) {
      i.onClick();
    }

    if (i.subItems) {
      i.isOpened = !i.isOpened;
      setMenuItems([...menuItems]);
    }

    return;
  }, []);

  return (
    // <Collapse orientation="horizontal" in={!isCollapsed} collapsedSize={70}>
      <section className={styles.menu}>
        <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center">
          {!isCollapsed && <h2 className="title">Planny</h2>}
        </Stack>

        <List
          sx={{ marginTop: '1.5rem' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          disablePadding
        >
          {menuItems?.map(i => (
            <div key={i.title} >
              <ListItemButton key={i.title} onClick={() => onItemClick(i)} sx={{ padding: '0.5rem' }}>
                <ListItemIcon>
                  {i.icon}
                </ListItemIcon>
                <ListItemText primary={i.title} sx={{ paddingRight: '2em'}} />
                {i.subItems && i.isOpened && <ExpandLess />}
                {i.subItems && !i.isOpened && <ExpandMore />}
              </ListItemButton>
              {i.subItems && (
                <Collapse in={i.isOpened && !isCollapsed} timeout="auto" unmountOnExit >
                  <List component="div" disablePadding>
                    {i.subItems?.map(j => (
                      <ListItemButton key={j.title} onClick={() => onItemClick(j)} sx={{ padding: '0.5rem' }}>
                        <ListItemIcon>
                          {j.icon}
                        </ListItemIcon>
                        <ListItemText secondary={j.title} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
            </div>
          ))}
        </List>
      </section>
    // </Collapse>
  )
}
