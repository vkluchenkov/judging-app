import { Button } from "@mui/material"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Header } from "../Header"
import { UserContext } from "../../contexts/UserContext"

interface MainProps {
  onLogout: () => void;
}

export const Main: React.FC<MainProps> = ({ onLogout }) => {
  const currentUser = useContext(UserContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    currentUser.isLoggedIn = false;
    navigate('/login')
  }
  return (
    <>
      <Header currentContest="Dance Weekend in Warsaw 2023" judge="Leandro Ferreyra" currentCategory="Break until 15:00" />
      <Button onClick={onLogout}>Logout</Button>
    </>
  )
}
