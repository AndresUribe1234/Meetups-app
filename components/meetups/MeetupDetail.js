import classes from "./MeetupDetail.module.css";

const MeetupDetail = (props) => {
  console.log(props);
  const { image, title, id, address, description } = props.meetupsData;
  return (
    <section className={classes.detail}>
      <div className={classes["image-container"]}>
        <img src={image} />
      </div>
      <p>{title}</p>
      <p>{address}</p>
      <p>{description}</p>
    </section>
  );
};

export default MeetupDetail;
