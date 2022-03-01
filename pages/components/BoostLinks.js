import Image from "next/image";
import Meteor from "../../svg/Meteor.png";
import styled from "styled-components";

const BoostLinkImage = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 30px;
  @media (max-width: 663px) {
    height: 164px;
    width: 264%;
    margin-left: 33rem;
  }
`;

const BoostLinkText = styled.div`
  font-size: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -180px;
  position: relative;
  @media (max-width: 663px) {
    width: 123%;
    margin-left: 37rem;
  }
`;
const BoostLinkbutton = styled.div`
  height: 44px;
  width: 180px;
  color: white;
  background: #2acfcf;
  border: none;
  border-radius: 21px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -180px;
  right: -662px;
  &: hover {
    cursor: pointer;
  }
  @media (max-width: 663px) {
    right: -18rem;
  }
`;

function BoosLinks({ height = "200px", width = "1600px" }) {
  return (
    <>
      <BoostLinkImage>
        <Image src={Meteor} height={height} width={width} />
      </BoostLinkImage>
      <BoostLinkText>
        <h1>Boost Your Links Today</h1>
      </BoostLinkText>
      <BoostLinkbutton>Get Started</BoostLinkbutton>
    </>
  );
}

export default BoosLinks;
