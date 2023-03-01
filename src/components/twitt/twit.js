import React from "react";
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

const twit = () => {
  return (
    <Card>
      <LogoImg src={Logo} alt="logo" />
      <BackImg src={Background} alt="background" />
      <AvatarImg src={Avatar} alt="avatar"></AvatarImg>
      <Line></Line>
      <InfoDiv>
        <div>
          <Span>45345</Span>
          <Text> tweets</Text>
        </div>
        <div>
          <Span>45345</Span>
          <Text> followers</Text>
        </div>
        <Button type="Button">{true ? "follow" : "following"}</Button>
      </InfoDiv>
    </Card>
  );
};

export default twit;
