import { configDotenv } from 'dotenv'
import Router from './src/router.js'
import 'dotenv/config.js'
configDotenv({path: ['.env', 'production.env', 'local.env']})
const PORT = 3000
const router = new Router(PORT)
// console.log("\nDB_URL:\n", process.env, "\nEND_URL\n")