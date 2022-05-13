import { Button } from "@mui/material"
import { Header } from "../Header"

interface MainProps {
  onLogout: () => void;
}

export const Main: React.FC<MainProps> = ({ onLogout }) => {
  return (
    <>
      <Header currentContest="Dance Weekend in Warsaw 2023" judge="Leandro Ferreyra" currentCategory="Break until 15:00" />
      <Button onClick={onLogout}>Logout</Button>
    </>
  )
}
