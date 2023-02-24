import MeetUpList from "./../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "first meet up",
    image:
      "https://images.pexels.com/photos/3823093/pexels-photo-3823093.jpeg?auto=compress&cs=tinysrgb&w=300",
    address: "Somewhere in the city",
    description: "This place is in Vienna",
  },
  {
    id: "m2",
    title: "seconde meet up",
    image:
      "https://images.pexels.com/photos/161074/vienna-st-charles-s-church-downtown-church-161074.jpeg?auto=compress&cs=tinysrgb&w=300",
    address: "Somewhere in the city",
    description: "This place is in Vienna",
  },
];

const HomePage = (props) => {
  return <MeetUpList meetups={props.meetups} />;
};

export async function getStaticProps() {
  return {
    props: { meetups: DUMMY_DATA },
    revalidate: 60,
  };
}

export default HomePage;
