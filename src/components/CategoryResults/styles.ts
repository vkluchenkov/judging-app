import { createStyles } from '../../types/emotion-styles';

export const styles = createStyles({
  box: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    padding: '10px 30px 0 20px',
    gap: '10px',
  },
  grid: {
    '& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus': {
      outline: 'none',
    },
    '& .conflict': {
      backgroundColor: 'rgba(255, 0, 0, .1)',
    },
  },
  button: {
    maxWidth: 'fit-content',
    alignSelf: 'center',
    margin: '20px 0 0',
  },
});
