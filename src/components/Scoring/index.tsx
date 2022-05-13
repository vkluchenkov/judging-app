/** @jsxImportSource @emotion/react */

import { Box, Button, List, ListItem, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { FormInputField } from "../../ui-kit/Input/FormInputFIeld";
import { ScoringSlider } from "../../ui-kit/ScoringSlider";
import { styles } from "./styles";
import { ScoringForm, ScoringProps } from "./types"
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const criterias = [
  {
    name: 'Choreography',
    description: 'Some kind of short description, explaining what this criteria means'
  },
  {
    name: 'Technique',
    description: 'Some kind of short description, explaining what this criteria means'
  },
  {
    name: 'Image',
    description: 'Some kind of short description, explaining what this criteria means'
  },
  {
    name: 'Music conformity',
    description: 'Some kind of short description, explaining what this criteria means'
  },
  {
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
    return (
      <Box css={styles.box}>
        <Typography variant="h4" align="center" css={styles.thankYou}>
          Thank you! Please wait for the next participant.
        </Typography>
      </Box>
    )
  }

  const ScoringList = () => criterias.map((criteria, index) => {
    return (
      <ListItem css={styles.listItem} key={'criteria' + index}>
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