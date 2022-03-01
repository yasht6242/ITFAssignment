import Image from "next/image";
import people from "../../svg/people working.png";
import styled from "styled-components";

const BannerText = styled.span`
  font-weight: 700;
  font-size: 120px;
  display: flex;
  text-align: -webkit-center;
  color: #232127;
  align-items: center;
  justify-content: center;
  @media (max-width: 663px) {
    margin-left: 35rem;
  }
`;

const BannerImage = styled.image`
  display: flex;
  justify-content: center;
  left: 476px;
  @media (max-width: 663px) {
    position: relative;
    left: 17rem;
  }
`;

const Banner = ({ height = "500px", width = "500px" }) => {
  return (
    <>
      <BannerText>
        MORE THAN JUST<br></br> SHORTER LINKS
      </BannerText>
      <BannerImage>
        <Image src={people} height={height} width={width} />
      </BannerImage>
    </>
  );
};

export default Banner;
