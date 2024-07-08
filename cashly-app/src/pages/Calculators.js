import React from 'react';
import { Box, Grid, Paper, Typography, Button } from '@mui/material';

const CalculatorCard = ({ title, description }) => (
  <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
    <Typography variant="h6" gutterBottom>{title}</Typography>
    <Typography variant="body2" gutterBottom>{description}</Typography>
    <Button variant="contained" color="primary">Go to {title}</Button>
  </Paper>
);

const Calculators = () => {
  const calculators = [
    { title: 'LTV', description: 'Loan-to-Value (LTV) Calculator: Determine the ratio of a loan to the value of an asset, typically used to assess mortgage risk.' },
    { title: 'TDS', description: 'Total Debt Service (TDS) Calculator: Determine the percentage of your gross income required to cover all your debt obligations, including housing costs and other debt payments.' },
    { title: 'Monthly Payments', description: 'Monthly Mortgage Payments Calculator: Calculate the approximate monthly payments for the mortgage amount you qualify for at the lender\'s specified interest rate.' },
    { title: 'GDS', description: 'Gross Debt Service (GDS) Calculator: Calculate the percentage of your gross income needed to cover housing costs, including mortgage payments, property taxes, and heating.' },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Financial Calculators</Typography>
      <Grid container spacing={3}>
        {calculators.map((calc, index) => (
          <Grid item xs={12} md={6} key={index}>
            <CalculatorCard title={calc.title} description={calc.description} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Calculators;
