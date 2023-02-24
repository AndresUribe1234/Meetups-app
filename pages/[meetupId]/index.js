import React from "react";
import Link from "next/link";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetUpId(props) {
  const { meetupData } = props;
  console.log(meetupData);

  return (
    <React.Fragment>
      <MeetupDetail meetupsData={meetupData} />
      <Link href="/">Back</Link>
    </React.Fragment>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [{ params: { meetupId: "m1" } }, { params: { meetupId: "m2" } }],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(context);
  console.log(meetupId);
  console.log("log from static");
  return {
    props: {
      meetupData: {
        image:
          "https://images.pexels.com/photos/11932418/pexels-photo-11932418.jpeg?auto=compress&cs=tinysrgb&w=300",
        id: meetupId,
        title: "Example title",
        address: "random address",
        description: "somewhere in Vienna",
      },
    },
  };
}

export default MeetUpId;
