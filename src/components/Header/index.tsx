/** @jsxImportSource @emotion/react */

import { Alert, Box, Button, Snackbar, Typography } from '@mui/material';
import { useCallback, useState } from 'react';
import { styles } from './styles';
import { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> = ({ currentContest, currentCategory, judge }) => {
  const [alertActive, setAlertActive] = useState(false);

  const handleHelp = useCallback(() => {
    setAlertActive(true);
  }, []);

  const onAlertClose = useCallback(() => {
    setAlertActive(false);
  }, []);

  return (
    <Box css={styles.box}>
      <div css={styles.titles}>
        <Typography variant='h5' data-test='current-contest'>
          {currentContest}
        </Typography>
        <Typography variant='body1' data-test='current-category'>
          {currentCategory ?? 'No active category'}
        </Typography>
      </div>
      <div css={styles.judge}>
        <Typography variant='body1' data-test='judge'>
          Hi {judge}!
        </Typography>
        <Button size='small' onClick={handleHelp} data-test='help-button'>
          Call help
        </Button>
      </div>
      <Snackbar
        open={alertActive}
        autoHideDuration={5000}
        onClose={onAlertClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert severity='success' onClose={onAlertClose} data-test='alert'>
          Help request was sent!
        </Alert>
      </Snackbar>
    </Box>
  );
};
