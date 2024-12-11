import { useState } from "react"
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { cards } from "../data/wavelength"
import _ from "lodash"

const minValue = 1
const maxValue = 10

interface IWavelengthRound {
  lowExtreme: string,
  highExtreme: string,
  value: number,
}

const Wavelength = () => {
  const [round, setRound] = useState<IWavelengthRound|null>(null)

  const getRound = () => {
    const card = _.sample(cards)
    setRound({
      lowExtreme: card[0],
      highExtreme: card[1],
      value: _.random(minValue, maxValue),
    })
  }

  return (
    <>
      <Button variant="contained" onClick={getRound}>Get Round</Button>
      { round ? (
        <>
          <Typography sx={{ fontSize: '5rem' }}>
            { round.lowExtreme }
            &nbsp;- &nbsp;
            { round.highExtreme }
          </Typography>
          <Typography sx={{ fontSize: '5rem' }}>
            { round.value } / 10
          </Typography>
        </>
      ) : (
        <Typography sx={{ fontSize: '2rem' }}>
          Press the button to play a round!
        </Typography>
      )}
    </>
  )
}

export default Wavelength
