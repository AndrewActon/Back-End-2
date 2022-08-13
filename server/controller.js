const houses = require('./db.json')

let id = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        req.body.id = id
        houses.push(req.body)
        res.status(200).send(houses)
        id++
    },
    deleteHouse: (req, res) => {
        const index = houses.findIndex((houses) => houses.id === +req.params.id)
        houses.splice(index, 1)
        res.status(200).send(houses)
    },
    updateHouse: (req, res) => {
        const {id} = req.params
        const {type} = req.body
        const index = houses.findIndex(houses => houses.id === +id)
        if (type === 'plus'){
            houses[index].price += 10000
        } else {
            houses[index].price -= 10000
        }
        res.status(200).send(houses)
    },
}