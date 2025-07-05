import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../utils/bookSlice";
import { useNavigate } from "react-router-dom";
import "./AddBook.css";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [pages, setPages] = useState("");
  const [desc, setDesc] = useState("");
  const [rating, setRating] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector((store) => store.book.books);

  function handleTitle(e) {
    let val = e.target.value;
    setTitle(val);
  }
  function handleAuthor(e) {
    let val = e.target.value;
    setAuthor(val);
  }
  function handleCategory(e) {
    let val = e.target.value;
    setCategory(val);
  }
  function handlePublishedDate(e) {
    setPublishedDate(e.target.value);
  }
  function handlePages(e) {
    setPages(e.target.value);
  }
  function handleDesc(e) {
    let val = e.target.value;
    setDesc(val);
  }
  function handleRating(e) {
    let val = e.target.value;
    setRating(val);
  }

  function handleAddBtn(e) {
    e.preventDefault();
    if (
      title.trim() == "" ||
      author.trim() == "" ||
      category.trim() == "" ||
      desc.trim() == "" ||
      rating.trim() == "" ||
      publishedDate.trim() === "" ||
      pages.trim() === ""
    ) {
      alert("Please fill out all the fields");
      return;
    }
    if (isNaN(rating) || rating < 1 || rating > 5) {
      alert(" Rating must be a number between 1 to 5");
      return;
    }

    if (isNaN(pages) || Number(pages) <= 0) {
      alert("Pages must be a positive number");
      return;
    }
    let newBook = {
      id: books.length + 1,
      title: title,
      author: author,
      category: category,
      rating: rating,
      description: desc,
      publishedDate,
      pages,
      coverImage: `https://dummyimage.com/200x200/90cdf4/000000&text=${encodeURIComponent(
        title
      )}`,
    };
    dispatch(addBook(newBook));
    navigate("/browsebooks");
  }

  return (
    <div className="addBookPage">
      <form className="addBookSection">
        <h2 className="addBookTitle">Add a New Book</h2>
        <input
          placeholder="Book Title"
          onChange={handleTitle}
          value={title}
          className="addBookInput"
          type="text"
        />
        <input
          placeholder="Book Author"
          onChange={handleAuthor}
          value={author}
          className="addBookInput"
          type="text"
        />
        <input
          placeholder="Book Category"
          onChange={handleCategory}
          value={category}
          className="addBookInput"
          type="text"
        />
        <input
          placeholder="Published Date (e.g. 2024-01-01)"
          type="date"
          value={publishedDate}
          onChange={handlePublishedDate}
          className="addBookInput"
        />
        <input
          placeholder="Pages"
          type="number"
          value={pages}
          onChange={handlePages}
          className="addBookInput"
        />

        <input
          placeholder="Book Description"
          onChange={handleDesc}
          value={desc}
          className="addBookInput"
          type="text"
        />
        <input
          placeholder="Book Rating"
          onChange={handleRating}
          value={rating}
          className="addBookInput"
          type="text"
        />
        <button onClick={handleAddBtn} className="addBookBtn">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
