import React from 'react';
import { Box, Paper, Avatar, Typography, TextField, Grid, Button } from '@mui/material';

const UserDetails = () => {
  return (
    <Box sx={{ p: 3 }}>
    <Paper elevation={3} sx={{ p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
          <Avatar
            alt="Puja Patel"
            src="https://via.placeholder.com/150"
            sx={{ width: 150, height: 150, margin: 'auto' }}
          />
          <Typography variant="h6" sx={{ mt: 2 }}>Puja Patel</Typography>
          <Typography variant="body2">pujapatel@gocashly.io</Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Full Name" placeholder="Your First Name" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Job Title" placeholder="Mortgage Agent 1" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Mortgage License no." placeholder="License no." variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Country" placeholder="Country" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Twilio Number" placeholder="Twilio Number" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Time Zone" placeholder="EST 2:00pm" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">My email Address</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <Avatar alt="Email" sx={{ mr: 2 }}>E</Avatar>
                <Typography variant="body1">pujapatel@gocashly.io</Typography>
                <Typography variant="body2" sx={{ ml: 2, color: 'text.secondary' }}>1 month ago</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary">Add Email Address</Button>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary">Edit</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  </Box>
    
  );
};

export default UserDetails;


