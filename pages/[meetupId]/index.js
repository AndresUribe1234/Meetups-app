import React from "react";
import Link from "next/link";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

function MeetUpId(props) {
  const { meetupDataById } = props;
  console.log(props);

  return (
    <React.Fragment>
      <MeetupDetail meetupsData={meetupDataById} />
      <Link href="/">Back</Link>
    </React.Fragment>
  );
}

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
).replace("<DBNAME>", process.env.DATABASE_NAME);

export async function getStaticPaths() {
  const client = await MongoClient.connect(DB);
  const db = client.db();
  const eventsCollection = db.collection("events");
  const results = await eventsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: false,
    paths: results.map((ele) => ({ params: { meetupId: ele._id.toString() } })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  const client = await MongoClient.connect(DB);
  const db = client.db();
  const eventsCollection = db.collection("events");
  const result = await eventsCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  console.log("hello world");
  client.close(result);
  return {
    props: {
      meetupDataById: {
        id: result._id.toString(),
        title: result.title,
        image: result.image,
        address: result.address,
        description: result.description,
      },
    },
  };
}

export default MeetUpId;
