import { Button } from "@mui/material"

interface MainProps {
  onLogout: () => void;
}

export const Main: React.FC<MainProps> = ({ onLogout }) => {

  return (
    <>
      <Button onClick={onLogout}>Logout</Button>
    </>
  )
}