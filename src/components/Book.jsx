import "./style.css";
import { Link } from "react-router-dom";

function Book(props) {
  return (
    <div className="book-card">
      <img
        src={props.bookDetails.coverImage}
        alt={props.bookDetails.title}
        width="200px"
        height="200px"
        className="book-img"
      />
      <div className="book-details">
        <h2 className="book-title">{props.bookDetails.title}</h2>
        <p className="book-author">{props.bookDetails.author}</p>
        <p className="book-desc">{props.bookDetails.description}</p>
        <p className="book-rating">⭐ {props.bookDetails.rating}</p>
        <Link to={`/book/${props.bookDetails.id}`} className="view-button">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default Book;
