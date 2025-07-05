import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Welcome.css";
import BookList from "./BookList.jsx";

function Home() {
  const books = useSelector((state) => state.book.books);
  const [category, setCategory] = useState("All");
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    if (category === "All") {
      setFilteredBooks(books);
    } else {
      const filtered = books.filter(
        (book) => book.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredBooks(filtered);
    }
  }, [category, books]);

  return (
    <div className="welcome-container">
      <h1>🏛️ Welcome to the Online Library System!</h1>
      <p>“A room without books is like a body without a soul.”</p>

      <div className="category-filter">
        <p>Filter by Category:</p>
        {[
          "All",
          "Fiction",
          "Non-Fiction",
          "Sci-Fi",
          "Fantasy",
          "Adventure",
          "Classic",
          "Romance",
          "Horror",
        ].map((cat) => (
          <button
            key={cat}
            className={`category-link ${
              category === cat ? "active-category" : ""
            }`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <BookList BookData={filteredBooks} />
    </div>
  );
}

export default Home;
