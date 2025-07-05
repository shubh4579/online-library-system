import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error.jsx";
import BrowseBooks from "./components/BrowseBooks.jsx";

import Home from "./components/Home.jsx";
import BookDetails from "./components/BookDetails.jsx";
import AddBook from "./components/AddBook.jsx";
import { Provider } from "react-redux";
import { store } from "./utils/store.js";

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "browsebooks/:category",
          element: <BrowseBooks />,
        },

        {
          path: "browsebooks", // add this separately
          element: <BrowseBooks />,
        },
        {
          path: "book/:id",
          element: <BookDetails />,
        },
        {
          path: "add-book",
          element: <AddBook />,
        },
      ],
      errorElement: <Error />,
    },
  ],
  { basename: "/online-library-system" }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);
