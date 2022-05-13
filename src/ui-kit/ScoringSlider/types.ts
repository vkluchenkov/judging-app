import { SliderProps } from '@mui/material/Slider';
import { Control } from 'react-hook-form';

export type ScoringSliderProps = SliderProps & {
  name: string;
  control: Control<any>;
};
