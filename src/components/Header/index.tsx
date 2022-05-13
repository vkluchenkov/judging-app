/** @jsxImportSource @emotion/react */

import { Alert, Box, Button, Typography } from "@mui/material"
import { useState } from "react"
import { styles } from "./styles"
import { HeaderProps } from "./types"
import clsx from "clsx"

export const Header: React.FC<HeaderProps> = ({ currentContest, currentCategory, judge }) => {

  const [alertActive, setAlertActive] = useState(false)

  const handleHelp = async () => {
    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
    setAlertActive(true);
    await delay(3000)
    setAlertActive(false);
  }

  return (
    <Box css={styles.box}>
      <div css={styles.titles}>
        <Typography variant="h5">
          {currentContest}
        </Typography>
        <Typography variant="body1">
          {currentCategory || 'No active category'}
        </Typography>
      </div>
      <div css={styles.judge}>
        <Typography variant="body1">
          Judge: {judge}
        </Typography>
        <Button size="small" onClick={handleHelp}>Call help</Button>
      </div>
      <Alert severity="success" css={styles.alert} className={clsx({ alertActive })}>Help request was sent!</Alert>
    </Box>
  )
}