import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import {Menu} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'User Details', path: '/user-details' },
    { text: 'Cashly CRM', path: 'https://app.gocashly.io/' },
    { text: 'Calculators', path: '/calculators' },
    { text: 'Lender Qualifier', path: '/lender-qualifier' },
    { text: 'Notes', path: '/notes' },
    { text: 'Cashly Copilot', path: '/cashly-copilot' },
    { text: 'Tech Services', path: '/tech-services' },
    { text: 'Resources', path: '/resources' },
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <Menu/>
          </IconButton>
          <Typography variant="h6">
            Cashly Inc.
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.text} component={Link} to={item.path} onClick={toggleDrawer(false)}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
