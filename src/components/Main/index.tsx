import { Button } from "@mui/material"
import { Header } from "../Header"

interface MainProps {
  onLogout: () => void;
}

export const Main: React.FC<MainProps> = ({ onLogout }) => {
  return (
    <>
      <Header currentContest="Dance Weekend in Warsaw" judge="Leandro Ferreyra" currentCategory="Professionals semi-final" />
      <Button onClick={onLogout}>Logout</Button>
    </>
  )
}
