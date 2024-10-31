import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <h1>Boardgame Nomad</h1>
      <List>
        <ListItem component={Link} to='/boardgame-nomad/categories'>Categories</ListItem>
        <ListItem component={Link} to='/boardgame-nomad/the-crew'>The Crew</ListItem>
      </List>
    </>
  )
}

export default Home
