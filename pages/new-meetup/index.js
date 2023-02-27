import React from "react";
import Link from "next/link";
import NewMeetUpForm from "./../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

const NewMeetUp = () => {
  const router = useRouter();

  const addMeetUpHandler = async (newMeetUpData) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMeetUpData),
    };
    const response = await fetch("/api/new-meetup", options);
    const data = await response.json();

    if (response.status === 200) {
      console.log(data);
      console.log("from inside status");
      router.push("/");
    }
    if (response.status === 400) {
      console.log(data);
      console.log("bad request");
    }
  };
  return (
    <React.Fragment>
      <NewMeetUpForm onAddMeetup={addMeetUpHandler} />
      <Link href="/">Back</Link>
    </React.Fragment>
  );
};

export default NewMeetUp;
