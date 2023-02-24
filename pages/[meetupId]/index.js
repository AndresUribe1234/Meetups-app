import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function MeetUpId() {
  const router = useRouter();
  const dynamicMeetUp = router.query.meetupId;
  console.log(router.query);
  return (
    <React.Fragment>
      <h1>{dynamicMeetUp} page</h1>
      <Link href="/">Back</Link>
    </React.Fragment>
  );
}

export default MeetUpId;
