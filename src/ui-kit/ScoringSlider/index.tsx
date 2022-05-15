/** @jsxImportSource @emotion/react */

import { Slider, SliderProps } from '@mui/material';
import { styles } from './styles';

export const ScoringSlider: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      {...props}
      css={styles.slider}
      valueLabelDisplay='off'
      step={1}
      marks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => ({ value: i, label: i }))}
      min={1}
      max={10}
    />
  );
};
