// Archivo con datos (base de datos)
const data = require('./data.json')
// Dependencias del web service
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Nuestra APP (web services)
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const port = process.env.PORT || 8080
const router = express.Router()

router.get('/posts', (req, res) => {
    // Devolvemos todos los post :3
    res.json(data)
})

router.get('/posts/:id', (req, res) => {
    const { id } = req.params
    // 'data' necesitamos sacar el objeto 
    // que haga match con su id con el dado en la url 
    const post = data.filter((p) => {
    	// Filtramos por esta condicion
    	return p.id === parseInt(id, 10)
    })[0]

    // Comprobamos si es que hay algun dato filtrado
    if (typeof post === 0){
    	res.status(404).json({})
    	return
    }
    // Devolvemos solo un post filtrado :3
    res.json(post)
})

app.use('/api', router)

app.listen(port)
console.log('Magic happens on port ' + port)
