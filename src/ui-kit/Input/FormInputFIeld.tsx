import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';

export const FormInputField: React.FC<TextFieldProps> = (props) => {
  return <TextField {...props} fullWidth variant='outlined' />;
};
