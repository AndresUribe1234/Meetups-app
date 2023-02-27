import { MongoClient } from "mongodb";

// api/meetups
// GET /api/meetups

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
).replace("<DBNAME>", process.env.DATABASE_NAME);

async function handler(req, res) {
  let data;
  try {
    if (req.method === "GET") {
      const client = await MongoClient.connect(DB);
      const db = client.db();
      const eventsCollection = db.collection("events");
      const result = await eventsCollection.find().toArray();
      data = result;

      client.close();
    }

    res.status(200).json({
      status: "Success: Data was fetched!",
      meetups: { data },
    });
  } catch (err) {
    const client = await MongoClient.connect(DB);
    client.close();
    res.status(400).json({
      status: "Failed: Error!",
      err: err.message,
    });
  }
}

export default handler;
