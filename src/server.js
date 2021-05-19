import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import keteranganRoutes from './routes/Keterangan'
import jadwalRoutes from './routes/Jadwal'
import * as KeteranganDAO from './dao/Keterangan'
import * as DaftarHadirMahasiswaDAO from './dao/DaftarHadirMahasiswa'

const app = express()

app.use(cors())
// Non aktifkan dulu keycloak agar tidak ada validasi token
// app.use(keycloak.middleware())
// app.use(keycloak.protect())
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use('/keterangan', keteranganRoutes)
app.use('/api/jadwal_perkuliahan', jadwalRoutes)

// error handling
app.use((error, req, res, next) => {
  console.log(error)
  const status = error.statusCode || 500
  const message = error.message
  const cause = error.cause || 'Internal Server Error'
  res.status(status).json({
    message: message,
    error: status,
    cause: cause
  })
})

app.post('/keterangan', async (req, res) => {
  const { nim, status, url } = req.body
  try {
    const result = await KeteranganDAO.insertKeterangan(nim, status, url)
    res.json({result})
  } catch (error) {
    res.json({error})
  } 
})

app.post('/daftarhadirmhs', async (req, res) => {
  const { id_studies, status, url } = req.body
  try {
    res.json({ results })

  } catch (error) {
    res.json(error)
  }
})

export default app
