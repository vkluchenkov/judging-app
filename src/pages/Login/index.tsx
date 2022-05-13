/** @jsxImportSource @emotion/react */

import { styles } from './styles';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import React, { useContext, useEffect } from "react";
import { useForm } from 'react-hook-form';
import { LoginForm } from './types';
import { FormInputField } from '../../ui-kit/FormInputFIeld';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const currentUser = useContext(UserContext);
  const { handleSubmit, control } = useForm<LoginForm>();

  useEffect(() => {
    if (currentUser.isLoggedIn) {
      navigate('/')
    }
  }, [currentUser.isLoggedIn, navigate])

  const onSubmit = handleSubmit((values) => {
    currentUser.isLoggedIn = true;
    navigate('/')
  })

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
          Please login
        </Typography>
        <Grid container css={styles.gridContainer}>
          <Grid item xs={12}>
            <FormInputField
              control={control}
              name='username'
              label='Username'
              helperText='Use Demo'
            />
          </Grid>
          <Grid item xs={12}>
            <FormInputField
              control={control}
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