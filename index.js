import Router from './src/router.js'
import {config} from 'dotenv'
import path, { dirname } from 'path'
// import {configDotenv  } from 'dotenv'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
config({path: [`${__dirname}/.env`, `${__dirname}/production.env`, `${__dirname}/local.env`]})


const PORT = 3000
const router = new Router(PORT)
// console.log("\nDB_URL:\n", process.env, "\nEND_URL\n")