import classes from "./MeetupDetail.module.css";

const MeetupDetail = (props) => {
  const { image, title, id, address, description } = props.meetupsData;
  return (
    <section className={classes.detail}>
      <div className={classes["image-container"]}>
        <img src={image} />
      </div>
      <h1>{title}</h1>
      <p>{address}</p>
      <p>{description}</p>
    </section>
  );
};

export default MeetupDetail;
