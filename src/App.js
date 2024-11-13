import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import usercontext from "./utils/usercontext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Layout = () => {
  const [userName, setUserName] = useState();
  //Authentication

  useEffect(() => {
    const data = {
      name: "Ashwani Pal",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <usercontext.Provider value={{ loggedInUser: userName }}>
        <div className="app">
          <usercontext.Provider value={{ loggedInUser: "vivek" }}>
            <Header />
          </usercontext.Provider>
          <Outlet />
        </div>
      </usercontext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/Restaurent/:resId",
        element: <RestaurentMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
