import React from "react";
import { Card } from './twit.styled'

const twit = () => {
  return (
    <Card>
      {/* <img />
      <img /> 
          <img />*/}
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
