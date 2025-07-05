import { useRouteError, Link } from "react-router-dom";
import "./Error.css";
function Error() {
  const err = useRouteError();
  return (
    <div className="error-container">
      <h1>Oops!</h1>
      <h2>
        {err.status} - {err.statusText}
      </h2>
      <h2 className="error-data">{err.data}</h2>
      <Link to="/" className="home-button">
        Back to Home
      </Link>
    </div>
  );
}

export default Error;
