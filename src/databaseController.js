import * as M from "mongodb"
import postgres from "postgres"
// import * as bcrypt from 'bcrypt'
import * as bcrypt from 'bcrypt'
// import { genSaltSync, hash, hashSync } from "bcrypt"
/**
 * This controller is meant to handle all interactions with the DB,
 * so if we ever change what db we are using we only need to change
 * the inner workings of the functions, and as long as outer behavior
 * remains the same, then it should not effect anything to swap
 */
class DatabaseController {
  constructor() {

    /**@type {M.MongoClient} @private */
    this.client = new M.MongoClient(process.env.DATABASE_URL, { serverSelectionTimeoutMS: 1000 })

    this.client.on("connectionCreated", () => console.log('connection started'))

    /**@type {M.Db} @private */
    this.db = this.client.db('db_data')
  }

  //* Wrapper functions start

  /**
   * @param {string} name 
   */
  async createCollection(name) {
    return (await this.client.connect()).withSession(async (session) => {
      return await this.db.createCollection(name)
    })
  }

  /**
   * @param {string} collectionName 
   * @param {M.Document} data 
   */
  async insertOne(collectionName, data) {
    return (await this.db.connect()).withSession(async (session) => {

      return await this.db.collection(collectionName).insertOne(data)
    })
  }

  /**
   * 
   * @param {string} collectionName 
   * @param {M.Filter<M.BSON.Document>} filter
   */
  async findOne(collectionName, filter) {
    return await (await this.client.connect()).withSession(async (session) => {
      return await this.db.collection(collectionName).findOne(filter)
    })

  }
  async getStatus() {
    return (await this.client.connect()).withSession(async (session) => {
      return await this.db.stats()

    })
  }

  //* Wrapper functions end

  async getCollections() {
    return this.client.withSession(async (session) => {
      return await this.db.listCollections().toArray().then((arr) => {
        this.client.close()
        return arr
      })
    })
  }
}

/**
 * @property {}
 */
class UserDatabaseController {
  constructor() {
    // console.log(`\n\nhost: ${process.env.USERS_DB_HOST}\n\n`)

    this.db = postgres({
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT,
      user: "root",
      // user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,

    })
  }

  /**
   * 
   * @param {unknown} username 
   * @returns {boolean}
   */
  usernameTest(username) {
    if (username === undefined) return false
    if (typeof username !== "string") return false
    if (typeof username === "string" && username.length > 255) return false
    if (typeof username === "string" && username.length < 1) return false
    return true
  }

  /**
   * 
   * @param {unknown} password 
   * @returns {boolean}
   */
  passwordTest(password) {
    if (typeof password !== "string") return false
    if (typeof password === "string" && password.length > 255) return false
    if (typeof password === "string" && password.length < 8) return false
    return true
  }

  emailTest(email) {
    if (typeof email !== "string") return false
    if (typeof email === "string" && email.length > 255) return false
    return true
    // return String(email)
    //   .toLowerCase()
    //   .match(
    //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //   )
  }

  async createUser(username, email, password) {
    if ((username === undefined && !this.usernameTest(username)) || (password === undefined && !this.passwordTest(password)) || (email === undefined && !this.emailTest(email))) {
      throw new Error(JSON.stringify(
        {
          Error: "wrong format",
          format: {
            username: "string 1 to 255 characters",
            password: "string 8 or more characters, and less than 255 characters",
            email: "string less than 255 characters"
          }
        }
      ))
    }

    const saltRounds = 10;

    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(password, saltRounds, function(err, hash) {
        if (err) reject(err)
        resolve(hash)
      });
    })
    return await this.db`INSERT INTO users (username, email, password_hash) VALUES (${username}, ${email}, ${hashedPassword});`
  }

  async getUsers() {
    return await this.db`SELECT * FROM users;`
  }
}
export default DatabaseController
export {
  UserDatabaseController,
  DatabaseController
}