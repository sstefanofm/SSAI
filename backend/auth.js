import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const { PORT, CLIENT_ID, CLIENT_SECRET } = process.env

const app = express()

app.use(cors())

const getToken = async () => {
  const request = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET),
    },
    body: 'grant_type=client_credentials',
  })

  return await request.json()
}

app.get('/', async (req, res) => {
  res.send(await getToken())
})

app.listen(PORT, () => {
  console.log(`Spotify token service is running on localhost:${PORT}`)
})
