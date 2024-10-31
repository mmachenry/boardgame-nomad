import { useState } from "react"
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { categories } from "../data/categories"
import GameTimer from "../components/GameTimer"

const Categories = () => {
  const [letter, setLetter] = useState<string>("")
  const [categoryList, setCategoryList] = useState<string[]>([])

  const rollDie = () => {
    const x = Math.floor(Math.random() * 26)
    setLetter(String.fromCharCode("A".charCodeAt(0) + x))
  }

  const generateCategoryList = () => {
    let newList = []
    for (let i = 0; i < 12; i++) {
      const x = Math.floor(Math.random() * categories.length)
      newList.push(categories[x])
    }
    setCategoryList(newList)
  }

  return (
    <>
      <Button onClick={rollDie}>Roll Die</Button>
      <Button onClick={generateCategoryList}>
        Generate Categories
      </Button>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: '10rem' }}>{ letter }</Typography>
            </Grid>
            <Grid item xs={12}>
              <GameTimer start={120} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={9}>
          <List sx={{ listStyle: "decimal", pl: 4}}>
            {categoryList.map((category, index) => (
              <ListItem
                key={index}
                sx={{ display: "list-item", fontSize: '2rem' }}
                >
                {category}
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </>
  )
}

export default Categories
