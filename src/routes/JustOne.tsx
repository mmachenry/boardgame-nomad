import { useState } from "react"
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { allWords } from "../data/justone"

const JustOne = () => {
  const [word, setWord] = useState<string>("")

  const getWord = () => {
    const x = Math.floor(Math.random() * allWords.length)
    setWord(allWords[x])
  }

  return (
    <>
      <Button variant="contained" onClick={getWord}>Get Word</Button>
      <Typography sx={{ fontSize: '10rem' }}>{ word }</Typography>
    </>
  )
}

export default JustOne
