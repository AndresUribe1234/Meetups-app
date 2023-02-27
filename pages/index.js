import MeetUpList from "./../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import React from "react";

const HomePage = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a list of meetups." />
      </Head>
      <MeetUpList meetups={props.meetups} />
    </React.Fragment>
  );
};

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
).replace("<DBNAME>", process.env.DATABASE_NAME);

export async function getStaticProps() {
  const client = await MongoClient.connect(DB);
  const db = client.db();
  const eventsCollection = db.collection("events");
  const result = await eventsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: result.map((ele) => ({
        title: ele.title,
        address: ele.address,
        image: ele.image,
        id: ele._id.toString(),
      })),
    },
    revalidate: 60,
  };
}

export default HomePage;
