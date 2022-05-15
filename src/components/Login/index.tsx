/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import { styles } from './styles';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { LoginProps } from './types';
import { FormInputField } from '../../ui-kit/Input/FormInputFIeld';

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    console.log({ username, password });
    onLogin();
  };

  const changeHandler = (evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    evt.target.name === 'username' && setUsername(evt.target.value);
    evt.target.name === 'password' && setPassword(evt.target.value);
  };

  return (
    <Box component='form' onSubmit={onSubmit} css={styles.box}>
      <Paper elevation={3} css={styles.paper}>
        <Typography variant='h4' align='center'>
          Please login
        </Typography>
        <Grid container css={styles.gridContainer}>
          <Grid item xs={12}>
            <FormInputField
              name='username'
              label='Username'
              helperText='Use Demo'
              value={username}
              onChange={changeHandler}
            />
          </Grid>
          <Grid item xs={12}>
            <FormInputField
              name='password'
              label='Password'
              type={'password'}
              helperText='Use Demo'
              value={password}
              onChange={changeHandler}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              size='large'
              variant='contained'
              type='submit'
              disableElevation
              data-test='submit-button'
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};
