import { createStyles } from '../../types/emotion-styles';

export const styles = createStyles({
  box: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    padding: '10px 20px',
    gap: '20px',
    borderBottom: '1px solid darkgrey',
    '@media (max-width: 768px)': {
      display: 'block',
      textAlign: 'center',
    },
  },
  titles: {
    textOverflow: 'hidden',
  },
  judge: {
    textAlign: 'right',
    '@media (max-width: 768px)': {
      textAlign: 'center',
      margin: '15px 0 0',
    },
  },
});
