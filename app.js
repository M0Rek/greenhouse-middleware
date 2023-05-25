const express = require("express")
const app = express()
const axios = require("axios")
const cors = require("cors")
app.use(express.json())
app.use(cors())

app.all("*", async (req, res) => {
	res.setHeader(
		"Access-Control-Allow-Origin",
		req.header("origin") ||
			req.header("x-forwarded-host") ||
			req.header("referer") ||
			req.header("host")
	)
	res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
	try {
		console.log(req.path)
		const url = `http://34.88.136.103${req.path}`
		const result = await axios({
			method: req.method,
			url: url,
			data: req.body,
		})

		res.status(result.status).json(result.data)
	} catch (error) {
		console.error(error)
		res.status(500).send(error)
	}
})

module.exports = app
