/** @jsxImportSource @emotion/react */

import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { useForm } from "react-hook-form"
import { FormInputField } from "../../ui-kit/Input/FormInputFIeld";
import { ScoringSlider } from "../../ui-kit/ScoringSlider";
import { styles } from "./styles";
import { ScoringForm, ScoringProps } from "./types"

const criterias = [
  'Choreography',
  'Technique',
  'Composition',
  'Image',
  'Music conformity',
  'Synchronization'
]

export const Scoring: React.FC<ScoringProps> = ({ participantName, participantNumber }) => {

  const { control, handleSubmit } = useForm<ScoringForm>();

  const onSubmit = handleSubmit((values) => {
    console.log(values)
  })

  const ScoringList = () => criterias.map((criteria, index) => {
    return (
      <ListItem css={styles.listItem} key={'criteria' + index}>
        <Typography
          variant="body1"
          css={{ minWidth: "150px" }}
        >
          {criteria}:
        </Typography>
        <ScoringSlider
          name={criteria}
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