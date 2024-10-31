import { useState } from 'react'
import Typography from '@mui/material/Typography'

interface IGameTimerProps {
  start: number,
}

const GameTimer = (props: IGameTimerProps) => {
  const [seconds, _setSeconds] = useState<number>(props.start)
  return (
    <>
      <Typography sx={{ fontSize: '10rem' }}>
        { seconds }
      </Typography>
    </>
  )
}

export default GameTimer
