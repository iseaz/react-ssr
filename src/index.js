import 'babel-polyfill'
import express from 'express'
import { matchRoutes } from 'react-router-config'
import path from 'path'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'
import Routes from './client/Routes'

const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
	const store = createStore()

	const promises = matchRoutes(Routes, req.path).map(({route}) => {
		return route.loadData ? route.loadData(store) : null
	})

	Promise.all(promises).then(() => {
		const context = {}
		const content = renderer(req, store, context)
		const error = `
			<html>
				<head>
					<title>Error</title>
				</head>
				<body>
					<h1>Error</h1>
				</body>
			</html>
		`

		if (context.notFound) {
			res.status(404)
		}

		res.send(content)
	})
})

app.listen(3000, () => {
	console.log('server running at 3000')
})