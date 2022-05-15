import { createStyles } from '../../types/emotion-styles';

export const styles = createStyles({
  slider: {
    '& .MuiSlider-mark': {
      backgroundColor: '#bfbfbf',
      height: 15,
      width: 2,
      '&.MuiSlider-markActive': {
        opacity: 1,
        backgroundColor: 'currentColor',
      },
    },
    '& .MuiSlider-markLabel': {
      fontSize: '1rem',
      fontWeight: 500,
      '& .MuiSlider-markLabelActive': {
        fontWeight: 800,
      },
    },
  },
});
