import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// import { Books } from "../utils/mockData";
import { useSelector } from "react-redux";

import BookList from "./BookList";
import "./BrowseBooks.css";

function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.book.books);
  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    if (category) {
      const filtered = books.filter(
        (book) => book.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks(books);
    }
  }, [category, books]);

  function handleSearch() {
    const filtered = books.filter(
      (book) =>
        (category === undefined ||
          book.category.toLowerCase() === category.toLowerCase()) &&
        (book.title.toLowerCase().includes(searchText.toLowerCase()) ||
          book.author.toLowerCase().includes(searchText.toLowerCase()))
    );
    setFilteredBooks(filtered);
  }

  return (
    <div className="search">
      <h2>📖 What Will You Read Today?</h2>
      <div>
        <input
          type="text"
          className="search-input"
          placeholder="Search by Title or Author"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
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
          <Link
            key={cat}
            to={
              cat === "All"
                ? "/browsebooks"
                : `/browsebooks/${cat.toLowerCase()}`
            }
            className="category-link"
          >
            {cat}
          </Link>
        ))}
      </div>

      <BookList BookData={filteredBooks} />
    </div>
  );
}

export default BrowseBooks;
