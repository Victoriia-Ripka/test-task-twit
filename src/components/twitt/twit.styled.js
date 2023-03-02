import styled from "styled-components";

export const Card = styled.div`
  box-sizing: border-box;
  padding: 36px;
  width: 380px;
  height: 480px;
  background: #5736a3;
  background-image: linear-gradient(to bottom right, #471ca9, #5736a3, #4b2a99);
  border-radius: 20px;
  color: #ebd8ff;
  position: relative;
  display: flex;
  align-items: flex-end;
  box-shadow: -2.58px 6.87px 20.6px rgba(0, 0, 0, 0.23);
`;

export const LogoImg = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const BackImg = styled.img`
  background-image: url("img_tree.gif"), url("paper.gif");
  position: absolute;
  top: 28px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
`;

export const AvatarImg = styled.img`
  position: absolute;
  top: 200px;
  left: 140px;
  z-index: 2;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.15);
  }
`;

export const Line = styled.span`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 50%;
  transform: translate(0, -50%);

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const InfoDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  display: inline-block;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  margin: 0;
  margin-left: 5px;
`;

export const Span = styled.span`
  display: inline-block;
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  margin-top: 26px;
  gap: 6px;

  width: 196px;
  height: 50px;

  background: #ebd8ff;
  box-shadow: 0px 3.4px 3.4px rgba(0, 0, 0, 0.25);
  border-radius: 10.3px;
  border-color: transparent;

  font-family: "Montserrat";
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;

  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: #5cd3a8;
    transform: scale(1.15);
  }
`;
