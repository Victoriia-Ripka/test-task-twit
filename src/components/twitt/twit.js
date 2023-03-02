import React, { useState, useRef, useEffect } from "react";
import { Logo, Avatar, Background } from "../../assets";
import {
  Card,
  LogoImg,
  BackImg,
  AvatarImg,
  InfoDiv,
  Text,
  Span,
  Button,
  Line,
} from "./twit.styled";

const Twit = () => {
  const [twitts, _] = useState(777);
  const [followers, setFollowers] = useState(100500);
  const [followed, setFollowed] = useState(false);

  const firstUpdate = useRef(true);

  useEffect(() => {
    const localFollowers = window.localStorage.getItem("followers");
    const localFollowed = window.localStorage.getItem("followed");
    if (localFollowed && localFollowers) {
      setFollowed(localFollowed);
        setFollowers(localFollowers);
        console.log("first render with local")
    }
  }, []);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      console.log("first ", followers);
      return;
    }
    if (!firstUpdate.current) {
      console.log("second");
      if (followed) {
        window.localStorage.setItem("followed", JSON.stringify(true));
        window.localStorage.setItem("followers", JSON.stringify(followers + 1));
        setFollowers(followers + 1);
      } else {
        window.localStorage.setItem("followed", JSON.stringify(false));
        window.localStorage.setItem("followers", JSON.stringify(followers - 1));
        setFollowers(followers - 1);
      }
    }
  }, [followed]);

  return (
    <Card>
      <LogoImg src={Logo} alt="logo" />
      <BackImg src={Background} alt="background" />
      <AvatarImg src={Avatar} alt="avatar"></AvatarImg>
      <Line></Line>
      <InfoDiv>
        <div>
          <Span>{twitts.toLocaleString("en-US")}</Span>
          <Text> tweets</Text>
        </div>
        <div>
          <Span>{followers.toLocaleString("en-US")}</Span>
          <Text> followers</Text>
        </div>
        <Button type="button" onClick={() => setFollowed(!followed)}>
          {followed ? "following" : "follow"}
        </Button>
      </InfoDiv>
    </Card>
  );
};

export default Twit;
