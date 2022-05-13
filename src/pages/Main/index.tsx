import { Button } from "@mui/material"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Header } from "../../components/Header"
import { Scoring } from "../../components/Scoring"
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
      <Header
        currentContest="Dance Weekend in Warsaw"
        judge="Leandro Ferreyra"
        currentCategory="Professionals semi-final"
      />
      <Scoring
        participantName="Polina Ivanova"
        participantNumber={135}
      />
      {/* <Button onClick={handleLogout}>Logout</Button>
      <Button onClick={() => navigate('/login')}>Go to login</Button> */}
    </>
  )
}