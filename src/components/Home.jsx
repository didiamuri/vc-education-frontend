import React, { Fragment, useEffect, useContext } from "react";
// import AuthContext from "../context/auth/authContext";
import Carousel from "./Carousel";
import Grades from "./grades/Grades";

import Recently from "./Recently";
import SearchBar from "./SearchBar";

const Home = ({ history }) => {

  // const authContext = useContext(AuthContext);
  // const { isAuthenticated } = authContext;


  useEffect(() => {
    document.body.style.backgroundColor = "#000";
    // if (!isAuthenticated) {
    //   history.push('/login');
    // }
  }, []);

  return (
    <Fragment>
      <Carousel />
      <SearchBar />
      <Recently />
      <Grades/>

    </Fragment>
  );
};

export default Home;
