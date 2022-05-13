import { createStyles } from '../../types/emotion-styles';

export const styles = createStyles({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    maxWidth: '450px',
    width: '90%',
    padding: '25px',
    boxSizing: 'border-box',
  },
  box: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
});
