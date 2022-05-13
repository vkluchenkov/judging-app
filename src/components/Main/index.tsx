import { Button } from "@mui/material"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Header } from "../Header"
import { UserContext } from "../../contexts/UserContext"

export const Main: React.FC = () => {
  const currentUser = useContext(UserContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    currentUser.isLoggedIn = false;
    navigate('/login')
  }
  return (
    <>
      <Header currentContest="Dance Weekend in Warsaw 2023" judge="Leandro Ferreyra" currentCategory="Break until 15:00" />
      <Button onClick={handleLogout}>Logout</Button>
      <Button onClick={() => navigate('/login')}>Go to login</Button>
    </>
  )
}