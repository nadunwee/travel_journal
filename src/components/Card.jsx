/* eslint-disable react/prop-types */

export default function Card(props) {
  return (
    <div className="card-container">
      <img src={props.imageUrl} alt="images" className="main-img" />
      <div className="card-discription">
        <div className="card-location">
          <img src="src/assets/path.png" alt="path image" />
          <p>{props.location}</p>
          <span>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </span>
        </div>
        <h1>{props.title}</h1>
        <span className="start-date">{props.startDate}&nbsp;&nbsp;&nbsp;-</span>
        <span className="end-date">{props.endDate}</span>
        <p className="location-description">{props.description}</p>
      </div>
    </div>
  );
}
