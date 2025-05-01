import { useState } from "react"
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import WordListData from "../data/wordlist.yaml"
import _ from "lodash"

const Decrypto = () => {
  const [words, setWords] = useState<string[]|null>(null)
  const [code, setCode] = useState<number[]|null>(null)

  const getWords = () => {
    setWords(_.sampleSize(WordListData.words, 4))
  }

  const getCode = () => {
    setCode(_.shuffle([1,2,3,4]).slice(1))
  }

  return (
    <>
      <Button variant="contained" onClick={getWords}>
        Get New Words
      </Button>
      <Button variant="contained" onClick={getCode}>
        Get New Code
      </Button>
      {words ? (
        <>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">1</TableCell>
                <TableCell align="center">2</TableCell>
                <TableCell align="center">3</TableCell>
                <TableCell align="center">4</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">{ words[0] }</TableCell>
                <TableCell align="center">{ words[1] }</TableCell>
                <TableCell align="center">{ words[2] }</TableCell>
                <TableCell align="center">{ words[3] }</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </>
      ) : (
        <></>
      )}
      {code ? (
        <>
          <Accordion>
            <AccordionSummary>Code</AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: '2rem' }}>
                {code[0]} {code[1]} {code[2]}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default Decrypto
