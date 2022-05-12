/** @jsxImportSource @emotion/react */

import { styles } from './styles';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import React from "react";

export const Login: React.FC = () => {
  const onSubmit = () => { }

  return (
    <Box
      component='form'
      onSubmit={onSubmit}
      css={styles.box}
    >
      <Paper
        elevation={3}
        css={styles.paper}
      >
        <Typography variant='h4' align='center'>
          Judge login
        </Typography>
        <Grid container css={styles.gridContainer}>
          <Grid item xs={12}>
            <TextField
              css={styles.input}
              name='username'
              label='Username'
              helperText='Use Demo'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              css={styles.input}
              name='password'
              label='Password'
              type={'password'}
              helperText='Use Demo'
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth size='large' variant='contained' type='submit' disableElevation>
              Login
            </Button>
          </Grid>
        </Grid>

      </Paper>
    </Box>
  )
}