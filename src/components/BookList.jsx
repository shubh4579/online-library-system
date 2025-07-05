import Book from "./Book";
import "./style.css";

function BookList({ BookData = [] }) {
  if (!BookData || BookData.length === 0) {
    return <p className="error">No books to show.</p>;
  }

  return (
    <div className="book-list">
      {BookData.map((data) => (
        <Book key={data.id} bookDetails={data} />
      ))}
    </div>
  );
}

export default BookList;
