import mongoose from "mongoose";
import { db_uri } from '../config'

async function connect() {
  const dbUri = <string>db_uri;

  try {
    await mongoose.connect(dbUri);
    console.log('db is connected');
  } catch (error) {
    console.log('Could not connect to db"');
    process.exit(1);
  }
}

export default connect;