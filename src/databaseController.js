import * as M from "mongodb"

/**
 * This controller is meant to handle all interactions with the DB,
 * so if we ever change what db we are using we only need to change
 * the inner workings of the functions, and as long as outer behavior
 * remains the same, then it should not effect anything to swap
 */
class DatabaseController {
  constructor() {
    /**@type {M.MongoClient} @private */
    this.client = new M.MongoClient(process.env.DATABASE_URL, { serverSelectionTimeoutMS: 20000, })

    this.client.on("connectionCreated", () => console.log('connection started'))

    /**@type {M.Db} @private */
    this.db = this.client.db('db_data')
  }

  //* Wrapper functions start

  /**
   * @param {string} name 
   */
  async createCollection(name) {
    return this.db.createCollection(name)
  }

  /**
   * @param {string} collectionName 
   * @param {M.Document} data 
   */
  async insertOne(collectionName, data) {
    this.db.collection(collectionName).insertOne(data)
  }

  /**
   * 
   * @param {string} collectionName 
   * @param {M.Filter<M.BSON.Document>} filter
   */
  async findOne(collectionName, filter) {
    this.db.collection(collectionName).findOne(filter)
  }
  async getStatus() {

    return this.db.stats()
    //  res.status(200).json(this.db.connect())
  }

  //* Wrapper functions end

  async getCollections() {
    return this.client.withSession((session) => {
      return this.db.listCollections().toArray().then((arr) => {
        this.client.close()
        return arr
      })
    })
  }
}
export default DatabaseController