import { useState } from "react"
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ChangeMyMindCards from "../data/changemymind.yaml"
import _ from "lodash"

interface IChangeMyMindCard {
  prompt: string,
  options: string[],
}

const allCards = [...ChangeMyMindCards.normal, ...ChangeMyMindCards.nsfw]

const ChangeMyMind = () => {
  const [card, setCard] = useState<IChangeMyMindCard|null>(null)

  const getCard = () => {
    setCard(_.sample(allCards))
  }

  return (
    <>
      <Button variant="contained" onClick={getCard}>Get Card</Button>
      {card ? (
        <>
          <Typography sx={{ fontSize: '3rem' }}>
              { card.prompt }
          </Typography>
          <List sx={{ listStyle: "decimal", pl: 4 }}>
            { card.options.map((option, index) => (
              <ListItem sx={{ display: 'list-item' }} key={index}>
                <ListItemText>
                  { option }
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </>
      ) : (
        <Typography sx={{ fontSize: '2em' }}>
          Press the buttom to get a card!
        </Typography>
      )}
    </>
  )
}

export default ChangeMyMind
