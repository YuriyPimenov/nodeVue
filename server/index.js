import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'

const port = process.env.PORT || 5000
const app = express()


app.use(bodyParser.json())
app.use('/dist',express.static('dist'))

//Для разработки, чтобы не перезапускать наш сервер
import webpackDevConfig from './webpackDevConfig.js'
webpackDevConfig(app);

app.get('/*', (req,res) => {
	res.sendFile(path.join(__dirname, '../index.html'))
})
app.listen(port, () => {
	console.log('Server listen on port = ',port,'ENV = ',process.env.NODE_ENV)
})