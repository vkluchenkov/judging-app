/** @jsxImportSource @emotion/react */

import React, { useMemo, useState } from "react";
import { Box, Button, List, ListItem, Tooltip, Typography } from "@mui/material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { FormInputField } from "../../ui-kit/Input/FormInputFIeld";
import { ScoringSlider } from "../../ui-kit/ScoringSlider";
import { MessageScreen } from "../MessageScreen";
import { styles } from "./styles";
import { ScoringProps } from "./types"
import { Criteria } from "../../models/criteria";

const criterias: Criteria[] = [
  {
    id: 1,
    name: 'Choreography',
    description: 'Some kind of short description, explaining what this criteria means'
  },
  {
    id: 2,
    name: 'Technique',
    description: 'Some kind of short description, explaining what this criteria means'
  },
  {
    id: 3,
    name: 'Image',
    description: 'Some kind of short description, explaining what this criteria means'
  },
  {
    id: 4,
    name: 'Music conformity',
    description: 'Some kind of short description, explaining what this criteria means'
  },
  {
    id: 5,
    name: 'Group sync',
    description: 'Some kind of short description, explaining what this criteria means'
  },
]

export const Scoring: React.FC<ScoringProps> = ({ participantName, participantNumber }) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [note, setNote] = useState('')
  const [sliders, setSliders] = useState<Record<string, number | number[]>>(criterias.reduce((acc, c) => {
    acc[c.name] = 5
    return acc;
  }, {} as Record<string, number | number[]>))

  const noteHandler = (evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setNote(evt.target.value)

  const sliderHandler = (evt: Event, value: number | number[]) => setSliders((state) => {
    const event = evt as never as React.ChangeEvent<HTMLInputElement>
    return ({
      ...state,
      [event.target?.name]: value,
    })
  })

  const onSubmit = (evt: React.FormEvent) => {
    evt.preventDefault()
    setIsSubmitted(true)
    console.log({ ...sliders, note })
  }

  const scoringSliders = useMemo(() => criterias.map((criteria) => (
    <ListItem css={styles.listItem} key={'criteria' + criteria.id}>
      <Typography
        variant="body1"
        css={styles.criteria}
      >
        {criteria.name}:
        <Tooltip
          title={criteria.description}
          enterTouchDelay={0}
          leaveDelay={5000}
          leaveTouchDelay={5000}
        >
          <HelpOutlineIcon fontSize="inherit" color="disabled" />
        </Tooltip>
      </Typography>
      <ScoringSlider
        name={criteria.name}
        value={sliders[criteria.name]}
        onChange={sliderHandler}
      />
    </ListItem>
  )
  ), [sliders])

  if (isSubmitted) return <MessageScreen message="Thank you! Please wait for the next participant." />

  return (
    <Box css={styles.box} component='form' onSubmit={onSubmit}>
      <Typography variant="h5" align="center">
        #{participantNumber}: <strong>{participantName}</strong>
      </Typography>
      <List css={styles.list}>
        {scoringSliders}
      </List>
      <FormInputField
        css={styles.note}
        name='Note'
        label='Note (optional)'
        multiline={true}
        minRows={3}
        value={note}
        onChange={noteHandler}
      />
      <Button
        type='submit'
        size="large"
        variant="contained"
        css={styles.button}
      >
        Submit
      </Button>
    </Box>
  )
}