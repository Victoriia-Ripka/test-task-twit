import React from "react";
import { Logo, Avatar, Background } from "../../assets"
import { Card } from "./twit.styled";

const twit = () => {
  return (
    <Card>
      <img src={Logo} alt="logo" />
      <img src={Background} alt="background" />
      <img src={Avatar} alt="avatar" />
      <p>
        <span></span> tweets
      </p>
      <p>
        <span></span> followers
      </p>
      <button type="button">{true ? "follow" : "following"}</button>
    </Card>
  );
};

export default twit;
