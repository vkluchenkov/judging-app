/** @jsxImportSource @emotion/react */

import React, { useMemo, useState } from 'react';
import { Box, Button, List, ListItem, Tooltip, Typography } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { FormInputField } from '../../ui-kit/Input/FormInputFIeld';
import { ScoringSlider } from '../../ui-kit/ScoringSlider';
import { styles } from './styles';
import { ScoringProps } from './types';

export const Scoring: React.FC<ScoringProps> = ({ name, number, criterias, onSubmit }) => {
  const [note, setNote] = useState('');
  const [sliders, setSliders] = useState<Record<string, number | number[]>>(
    criterias.reduce((acc, c) => {
      acc[c.name] = 5;
      return acc;
    }, {} as Record<string, number | number[]>)
  );

  const noteHandler = (evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
    setNote(evt.target.value);

  const sliderHandler = (evt: Event, value: number | number[]) => {
    const event = evt as never as React.ChangeEvent<HTMLInputElement>;
    setSliders((state) => ({ ...state, [event.target.name.toLowerCase()]: value }));
  };

  const submitHandler = async (evt: React.FormEvent) => {
    evt.preventDefault();
    await onSubmit({ ...sliders, Note: note, number, name });
  };

  const scoringSliders = useMemo(
    () =>
      criterias.map((criteria) => (
        <ListItem css={styles.listItem} key={'criteria' + criteria.id}>
          <Typography variant='body1' css={styles.criteria} data-test={'criteria' + criteria.id}>
            {criteria.name}:
            <Tooltip
              title={criteria.description}
              enterTouchDelay={0}
              leaveDelay={5000}
              leaveTouchDelay={5000}
            >
              <HelpOutlineIcon fontSize='inherit' color='disabled' data-test='tooltip-icon' />
            </Tooltip>
          </Typography>
          <ScoringSlider
            name={criteria.name}
            value={sliders[criteria.name]}
            onChange={sliderHandler}
            data-test='slider'
          />
        </ListItem>
      )),
    [sliders, criterias]
  );

  return (
    <Box css={styles.box} component='form' onSubmit={submitHandler}>
      <Typography variant='h5' align='center'>
        #{number}: <strong>{name}</strong>
      </Typography>
      <List css={styles.list}>{scoringSliders}</List>
      <FormInputField
        css={styles.note}
        name='Note'
        label='Note (optional)'
        multiline={true}
        minRows={3}
        value={note}
        onChange={noteHandler}
        data-test='note-input'
      />
      <Button
        type='submit'
        size='large'
        variant='contained'
        css={styles.button}
        data-test='submit-button'
      >
        Submit
      </Button>
    </Box>
  );
};
