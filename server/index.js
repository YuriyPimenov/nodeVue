import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import Debug from 'debug'
import morgan from 'morgan'

import auth from './routes/auth.js'


const debug = Debug('server:app');
const port = process.env.PORT || 5000
const app = express()


app.use(bodyParser.json())
app.use(morgan('dev'))
app.use('/dist',express.static('dist'))

//Для разработки, чтобы не перезапускать наш сервер
import devOptions from './controllers/config/devOptions.js'
devOptions(app);

//обработка запросов - ROUTES
app.use('/api/auth',auth)

app.get('/*', (req,res) => {
	res.sendFile(path.join(__dirname, '../index.html'))
})
app.listen(port, () => {
	debug('Server listen on port = ',port,'ENV = ',process.env.NODE_ENV)
})