/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Logo, Avatar, Background } from "../../assets";
import {
  Card,
  LogoImg,
  BackImg,
  AvatarImg,
  InfoUl,
  InfoLi,
  Text,
  Span,
  Button,
  Line,
} from "./twit.styled";

const Twit = () => {
  const [twitts, setTwitts] = useState(777);
  const [followers, setFollowers] = useState(
    window.localStorage.getItem("followers")
      ? JSON.parse(window.localStorage.getItem("followers"))
      : 100500
  );
  const [followed, setFollowed] = useState(
    window.localStorage.getItem("followed")
      ? JSON.parse(window.localStorage.getItem("followed"))
      : false
  );

  const handleClick = () => {
    setFollowed(!followed);
    if (!followed) {
      window.localStorage.setItem("followed", JSON.stringify(true));
      window.localStorage.setItem("followers", JSON.stringify(followers + 1));
      setFollowers(followers + 1);
    } else {
      window.localStorage.setItem("followed", JSON.stringify(false));
      window.localStorage.setItem("followers", JSON.stringify(followers - 1));
      setFollowers(followers - 1);
    }
  };

  return (
    <Card>
      <LogoImg src={Logo} alt="logo" />
      <BackImg src={Background} alt="background" />
      <AvatarImg src={Avatar} alt="avatar"></AvatarImg>
      <Line></Line>
      <InfoUl>
        <InfoLi>
          <Span>{twitts.toLocaleString("en-US")}</Span>
          <Text> tweets</Text>
        </InfoLi>
        <InfoLi>
          <Span>{followers.toLocaleString("en-US")}</Span>
          <Text> followers</Text>
        </InfoLi>
        <Button type="button" onClick={() => handleClick()}>
          {followed ? "following" : "follow"}
        </Button>
      </InfoUl>
    </Card>
  );
};

export default Twit;
