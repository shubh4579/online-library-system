import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./BookDetails.css";
import { Link } from "react-router-dom";

function BookDetails() {
  const params = useParams();
  const books = useSelector((state) => state.book.books);
  const bookId = parseInt(params.id);
  const book = books.find((book) => book.id === bookId);

  if (!book) {
    return <h2 className="not-found">Book not found 😢</h2>;
  }

  return (
    <div className="book-details-container">
      <h1>{book.title}</h1>
      <img src={book.coverImage} alt={book.title} className="book-cover" />

      <div className="book-meta">
        <p>
          <strong>Author:</strong> {book.author}
        </p>
        <p>
          <strong>Category:</strong> {book.category}
        </p>
        <p>
          <strong>Published:</strong> {book.publishedDate}
        </p>
        <p>
          <strong>Pages:</strong> {book.pages}
        </p>
        <p>
          <strong>Rating:</strong> {book.rating} ⭐
        </p>
        <p>
          <strong>Description:</strong> {book.description}
        </p>
      </div>
      <Link to="/" className="back-button">
        🔙 Back to Home
      </Link>
    </div>
  );
}

export default BookDetails;
