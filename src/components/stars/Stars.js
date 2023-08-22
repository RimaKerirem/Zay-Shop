import { FaStar } from "react-icons/fa";
import "./stars.css";

function Stars({ stars }) {
  const starsList = [];

  for (let i = 0; i < 5; i++) {
    starsList.push(
      <li className={i < stars ? "yellow" : "muted"} key={i}>
        <FaStar />
      </li>
    );
  }

  return <ul className="stars">{starsList}</ul>;
}

export default Stars;
