import { createStyles } from '../../types/emotion-styles';

export const styles = createStyles({
  box: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    padding: '10px 30px 0 20px',
  },
  list: {
    alignSelf: 'center',
    width: '100%',
    maxWidth: '800px',
    padding: '10px 0 0',
  },
  listItem: {
    padding: 0,
    alignItems: 'center',
    gap: '10px',
  },
  note: {
    maxWidth: '800px',
    alignSelf: 'center',
    margin: '20px 0 0',
  },
  button: {
    maxWidth: 'fit-content',
    alignSelf: 'center',
    margin: '20px 0 0',
  },
  criteria: {
    minWidth: '150px',
  },
});
