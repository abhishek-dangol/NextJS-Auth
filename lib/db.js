import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://dan:Anson!2015@cluster0.uuoev.mongodb.net/next-auth?retryWrites=true&w=majority"
  );
  return client;
}
