const express = require('express')
const cors = require('cors')

const {
    getHouses,
    createHouse,
    updateHouse,
    deleteHouse,
} = require('./controller')

const app = express()
const port = 4004

app.use(express.json())
app.use(cors())

//endpoints
app.get('/api/houses', getHouses)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)
app.delete('/api/houses/:id', deleteHouse)

app.listen(port, () => console.log(`Listening on port - ${port}`))