import { MongoClient } from "mongodb";

// api/new-meetup
// POST /api/new-meetup

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
).replace("<DBNAME>", process.env.DATABASE_NAME);

async function handler(req, res) {
  try {
    const data = req.body;
    if (req.method === "POST") {
      const client = await MongoClient.connect(DB);
      const db = client.db();
      const eventsCollection = db.collection("events");
      const result = await eventsCollection.insertOne({ ...data });
      console.log(result);
      client.close();
    }

    res.status(200).json({
      status: "Success: Meetup was created!",
      meetup: { data },
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
