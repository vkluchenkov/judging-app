/** @jsxImportSource @emotion/react */

import { Slider } from "@mui/material";
import { useController } from "react-hook-form";
import { styles } from "./styles";
import { ScoringSliderProps } from "./types";

export const ScoringSlider: React.FC<ScoringSliderProps> = ({ name, control }) => {
  const {
    field: { onChange, value, ref },
  } = useController(
    {
      name,
      control,
      defaultValue: 1,
    }
  );
  return (
    <Slider
      css={styles.slider}
      onChange={onChange}
      value={value}
      valueLabelDisplay="off"
      step={1}
      name={name}
      ref={ref}
      // size={'small'}
      marks={[
        {
          value: 1,
          label: 1
        },
        {
          value: 2,
          label: 2
        },
        {
          value: 3,
          label: 3
        },
        {
          value: 4,
          label: 4
        },
        {
          value: 5,
          label: 5
        },
        {
          value: 6,
          label: 6
        },
        {
          value: 7,
          label: 7
        },
        {
          value: 8,
          label: 8
        },
        {
          value: 9,
          label: 9
        },
        {
          value: 10,
          label: 10
        },
      ]}
      min={1}
      max={10}
    />
  )
}