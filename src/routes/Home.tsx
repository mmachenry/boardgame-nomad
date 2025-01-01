import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { Link } from "react-router-dom"
import { games, IGameMetaData } from "../lib/games"

const Home = () => {
  return (
    <>
      <h1>Boardgame Nomad</h1>
      <List>
        { games.map((game: IGameMetaData, index: number) => (
          <ListItem
            component={Link}
            to={'/boardgame-nomad/' + game.path}
            key={index}
            >
            { game.name }
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default Home
