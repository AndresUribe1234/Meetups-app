import React, { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const HomePage = () => {
  const inputMeetUpRef = useRef();
  const router = useRouter();

  const customMeetUpHandler = function () {
    const inputMeetUpEnteredValue = inputMeetUpRef.current.value;
    console.log(inputMeetUpEnteredValue);
    router.push(`/${inputMeetUpEnteredValue}`);
  };

  return (
    <React.Fragment>
      <h1>Home Page</h1>
      <Link href={"/new-meetup"}>New meet up</Link>
      <div>
        <input ref={inputMeetUpRef}></input>
        <button onClick={customMeetUpHandler}>Go to meetup</button>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
