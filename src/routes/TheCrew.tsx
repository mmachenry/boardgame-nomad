import { useState } from 'react'
import NumberInput from "../components/NumberInput"
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { IMission, allMissions } from "../data/thecrew"
import _ from 'lodash'

const TheCrew = () => {
  const [numPlayers, setNumPlayers] = useState<number>(3)
  const [numPoints, setNumPoints] = useState<number>(1)
  const [missions, setMissions] = useState<IMission[]>([])

  const dealMissions = () => {
    const candidates = _.shuffle(allMissions)
    var totalPoints = 0
    var newMissions = []

    for (var i = 0; i < candidates.length; i++) {
      if (candidates[i].points[numPlayers-3] <= numPoints - totalPoints) {
        newMissions.push(candidates[i])
        totalPoints += candidates[i].points[numPlayers-3]
      }
    }
    setMissions(newMissions)
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          Players
          <NumberInput
            min={3}
            max={5}
            readOnly
            value={numPlayers}
            onChange={(_event, val) => setNumPlayers(val??3)}
            />
        </Grid>
        <Grid item xs={2}>
          Mission Points
          <NumberInput
            min={1}
            readOnly
            value={numPoints}
            onChange={(_event, val) => setNumPoints(val??1)}
            />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            onClick={dealMissions}
            >
              Deal Missions
          </Button>
        </Grid>
        <Grid item xs={12}>
          <List>
            { missions.map((mission, index) => (
              <ListItem key={index}>{mission.text}</ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </>
  )
}

export default TheCrew
