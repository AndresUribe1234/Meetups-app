import MeetUpList from "./../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

const HomePage = (props) => {
  return <MeetUpList meetups={props.meetups} />;
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
