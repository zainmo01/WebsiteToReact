import "./Card.css";
import { FaDownload, FaStar } from "react-icons/fa";
const Card = (props) => {
  return (
    <div className="most-popular-item">
      <div className="card-warapper">
        <img className="most-popular-image" src={props.image} />
        <div className="most-popular-content">
          <h4 className="most-popular-title">
            {props.title} <br /> <span> {props.category} </span>
          </h4>
          <ul>
            <li>
              <span style={{ color: "yellow" }}>
                <FaStar />
              </span>
              <span> {props.rate} </span>
            </li>
            <li>
              <span style={{ color: "gray" }}>
                <FaDownload />
              </span>
              <span> {props.download} </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
