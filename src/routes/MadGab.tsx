import { useState } from "react"
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import MadGabCards from "../data/madgab.yaml"
import _ from "lodash"
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'

interface IMadGabCard {
  answer: string,
  clue: string,
}

const MadGab = () => {
  const [card, setCard] = useState<IMadGabCard|null>(null)

  const getCard = () => {
    const card: IMadGabCard = _.sample(MadGabCards.cards)??{answer:"",clue:""}
    setCard(card)
  }

  return (
    <>
      <Button variant="contained" onClick={getCard}>Get Card</Button>
      { card ? (
        <>
          <Typography sx={{ fontSize: '5rem' }}>
            { card.clue }
          </Typography>
          <Accordion>
            <AccordionSummary>Answer</AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: '5rem' }}>
                { card.answer }
              </Typography>
            </AccordionDetails>
          </Accordion>
        </>
      ) : (
        <Typography sx={{ fontSize: '2rem' }}>
          Press the button to get a card!
        </Typography>
      )}
    </>
  )
}

export default MadGab
