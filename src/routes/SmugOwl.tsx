import { useState } from "react"
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { descriptors, conjunctions } from "../data/smugowl"
import _ from "lodash"

interface IRiddle {
  firstDescriptor: string,
  conjunction: string,
  secondDescriptor: string,
}

const SmugOwl = () => {
  const [riddle, setRiddle] = useState<IRiddle|null>(null)

  const getRiddle = () => {
    setRiddle({
      firstDescriptor: _.sample(descriptors)??"",
      conjunction: _.sample(conjunctions)??"",
      secondDescriptor: _.sample(descriptors)??"",
    })
  }

  return (
    <>
      <Button variant="contained" onClick={getRiddle}>Get Riddle</Button>
      {riddle ? (
        <>
          <Typography sx={{ fontSize: '5rem' }}>
            What
          </Typography>
          <Typography sx={{ fontSize: '5rem' }}>
            { riddle.firstDescriptor }
          </Typography>
          <Typography sx={{ fontSize: '5rem' }}>
            { riddle.conjunction }
          </Typography>
          <Typography sx={{ fontSize: '5rem' }}>
            { riddle.secondDescriptor }
          </Typography>
          <Typography sx={{ fontSize: '5rem' }}>
            ?
          </Typography>
        </>
      ) : (
        <Typography sx={{ fontSize: '2em' }}>
          Press the buttom to get a riddle!
        </Typography>
      )}
    </>
  )
}

export default SmugOwl
