/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { useForm } from "react-hook-form"
import { Box, Button, List, ListItem, Tooltip, Typography } from "@mui/material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { FormInputField } from "../../ui-kit/Input/FormInputFIeld";
import { ScoringSlider } from "../../ui-kit/ScoringSlider";
import { MessageScreen } from "../MessageScreen";
import { styles } from "./styles";
import { ScoringForm, ScoringProps } from "./types"
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

  const { control, handleSubmit } = useForm<ScoringForm>();

  const onSubmit = handleSubmit((values) => {
    setIsSubmitted(true)
    console.log(values)
  })

  if (isSubmitted) {
    return <MessageScreen message="Thank you! Please wait for the next participant." />
  }

  const ScoringList = () => criterias.map((criteria) => {
    return (
      <ListItem css={styles.listItem} key={'criteria' + criteria.id}>
        <Typography
          variant="body1"
          css={{ minWidth: "150px" }}
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
          control={control}
        />
      </ListItem>
    )
  })

  return (
    <Box css={styles.box} component='form' onSubmit={onSubmit}>
      <Typography variant="h5" align="center">
        #{participantNumber}: <strong>{participantName}</strong>
      </Typography>
      <List css={styles.list}>
        {ScoringList()}
      </List>
      <FormInputField
        css={styles.note}
        control={control}
        name='Note'
        label='Note (optional)'
        multiline={true}
        minRows={3}
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