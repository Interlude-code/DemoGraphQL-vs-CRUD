import mongoose from 'mongoose'
import dotenv from 'dotenv';

dotenv.config({ path: '.env' })
const connectionString = process.env.MONGODB_URI

const db=()=>{
    mongoose.connect(connectionString)
    .then(() => {
      console.log("database connected")
    }).catch(err => {
      console.error(err)
    })
}
export default db
