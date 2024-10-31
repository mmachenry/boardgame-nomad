import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <h1>Welcome to the Boardgame Nomad!</h1>
      <List>
        <ListItem component={Link} to='/categories'>Categories</ListItem>
        <ListItem component={Link} to='/the-crew'>The Crew</ListItem>
      </List>
    </>
  )
}

export default Home
