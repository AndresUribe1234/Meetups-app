import React from "react";
import Link from "next/link";
import NewMeetUpForm from "./../../components/meetups/NewMeetupForm";

const NewMeetUp = () => {
  const addMeetUpHandler = (newMeetUpData) => {
    console.log(newMeetUpData);
  };
  return (
    <React.Fragment>
      <NewMeetUpForm onAddMeetup={addMeetUpHandler} />
      <Link href="/">Back</Link>
    </React.Fragment>
  );
};

export default NewMeetUp;
