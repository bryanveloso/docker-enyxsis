const express = require('express')
const asyncHandler = require('express-async-handler')
const router = express.Router();
const isPortReachable = require('is-port-reachable')
const app = express()

const {
  CHAR_IP,
  CHAR_PORT,
  LOGIN_IP,
  LOGIN_PORT,
  MAP_IP,
  MAP_PORT,
} = process.env

router.get('/', asyncHandler(async (req, res, next) => {
  const login = await isPortReachable(LOGIN_PORT, { host: LOGIN_IP });
  const char = await isPortReachable(CHAR_PORT, { host: CHAR_IP });
  const map = await isPortReachable(MAP_PORT, { host: MAP_IP });
  res.json({ login, char, map })
}))

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Status listening on port ${port}!`)
})
