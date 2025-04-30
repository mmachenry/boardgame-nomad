import { useState } from "react"
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TheGangCards from "../data/thegang.yaml"
import _ from "lodash"

interface ITheGangCard {
  name: string,
  number: number,
  rules: string,
  example?: string
}

const TheGang = () => {
  const [card, setCard] = useState<ITheGangCard|null>(null)

  const getChallenge = () => {
    setCard(_.sample(TheGangCards.challenges))
  }

  const getSpecialist = () => {
    setCard(_.sample(TheGangCards.specialists))
  }

  return (
    <>
      <Button variant="contained" onClick={getChallenge}>
        Get Challenge
      </Button>
      <Button variant="contained" onClick={getSpecialist}>
        Get Specialist
      </Button>

      {card ? (
        <>
          <Typography sx={{ fontSize: '3rem' }}>
            { card.number }&#41; {card.name}
          </Typography>
          <Typography sx={{ fontSize: '2rem' }}>
            { card.rules }
          </Typography>
          {card.example ? (
            <Typography sx={{ fontSize: '2rem' }}>
              Example: { card.example }
            </Typography>
          ) : (
            <></>
          )}
        
        </>
      ) : (
        <Typography sx={{ fontSize: '3em' }}>
          Press a buttom to get a card!
        </Typography>
      )}
    </>
  )
}

export default TheGang
