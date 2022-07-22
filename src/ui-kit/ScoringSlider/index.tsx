/** @jsxImportSource @emotion/react */

import { Slider, SliderProps as MuiSliderProps } from '@mui/material';
import { styles } from './styles';

type SliderProps = MuiSliderProps & {
  onChange?: (event: Event, value: number, activeThumb: number) => void;
};

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
