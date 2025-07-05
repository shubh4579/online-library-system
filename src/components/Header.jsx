import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="main-header">
      <div className="logo">📖 Digital Library</div>
      <nav className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/browsebooks" className="nav-link">
          Browse Books
        </Link>
        <Link to="/add-book" className="nav-link">
          Add Book
        </Link>
      </nav>
    </header>
  );
}

export default Header;
