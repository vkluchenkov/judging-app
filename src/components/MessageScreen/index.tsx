/** @jsxImportSource @emotion/react */

import React from 'react';
import { Box, Typography } from '@mui/material';
import { styles } from './styles';

interface MessageScreenProps {
  message: string;
}

export const MessageScreen: React.FC<MessageScreenProps> = ({ message }) => {
  return (
    <Box css={styles.box}>
      <Typography variant='h4' align='center' css={styles.thankYou} data-test='message-text'>
        {message}
      </Typography>
    </Box>
  );
};
