import React from "react";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import GetStarted from "../GetStarted/GetStarted";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import ManageAccount from "../ManageAccount/ManageAccount";
import Profile from "../Profile/Profile";
import TrustedBy from "../TrustedBy/TrustedBy";

const Home = () => {
  return (
    <div
      style={{
        overflow: "hidden",
        backgroundColor: "rgb(247, 247, 247)",
        color: " #00002d",
      }}
    >
      <Header />
      <Hero />
      <ManageAccount />
      <TrustedBy />
      <Profile />
      <Features />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Home;
