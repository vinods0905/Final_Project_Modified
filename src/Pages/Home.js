import React from "react";
import { useSelector } from "react-redux";
import Login from "../components/Login/Login";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Feed from "../components/Feed/Feed";
import Widget from "../components/Widget/Widget";
const Home = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
