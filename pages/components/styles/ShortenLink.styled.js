import styled from "styled-components";
import Meteor from "../../../svg/Meteor.png";

export const ShortenLinkImage = styled.image`
  display: flex;
  justify-content: center;
  position: relative;
  @media (max-width: 663px) {
    width: 120%;
    margin-left: 185px;
    height: 134px;
  }
`;
export const ShortenLinkInput = styled.div`
  font-size: 9px;
  align-items: center;
  background: white;
  top: -108px;
  position: relative;
  left: 18rem;
  width: 51rem;
  height: 48px;
  padding-left: 22px;
  border-radius: 9px;
  color: #f46262;
  &.input {
    border: none;
  }
`;

export const ShortenLinkButton = styled.button`
  position: relative;
  top: -109px;
  left: -13rem;
  height: 48px;
  width: 178px;
  background: white;
  color: #2acfcf;
  border-radius: 10px;
  font-size: 20px;
  border: none;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    color: white;
    background: #2acfcf;
  }
  @media (max-width: 663px) {
    top: -104px;
    left: 18rem;
  }
`;

export const ShortenLinkContainer = styled.div`
  height: 60px;
  width: 1100px;
  background: grey;
  display: flex;
  margin-top: 20px;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  @media (max-width: 663px) {
    flex-direction: column;
    width: 57rem;
    height: 177px;
  }
`;

export const DerivedLinks = styled.div`
  font-size: 20px;
  color: #2acfcf;
`;

export const FullLinks = styled.div`
  font-size: 20px;
  color: #232127;
`;
export const CopyLinks = styled.div`
  height: 40px;
  width: 150px;
  background: #2acfcf;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

export const ShortenLinkOuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 663px) {
    margin-left: 35rem;
  }
`;

export const FullShortenLinkContainer = styled.div`
  display: flex;
  align-item: center;
  justify-content: space-between;
  @media (max-width: 663px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
export const ShortenLinkImageLinkContainer = styled.div`
  // display: flex;
  // align-item: center;
  // justify-content: space-between;
  // flex-direction: row;
`;
