// app/blog/utils/db.js
import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb';

const uri = process.env.MONGODB_URI;
let client;
let clientPromise;

if (!uri) {
  throw new Error('Missing MONGODB_URI in environment variables');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export async function connectToDatabase() {
  const client = await clientPromise;
  return client.db();
}

export async function getPostById(id) {
  const db = await connectToDatabase();
  const post = await db.collection('posts').findOne({ _id: new ObjectId(id) });
  return post;
}