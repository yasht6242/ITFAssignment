import styled from "styled-components";
import Brand from "../../svg/icon-brand-recognition.svg";

const AdvancedStatisticsHeading = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #232127;
  margin-top: 20px;
  @media (max-width: 663px) {
    margin-left: 36rem;
    width: 100%;
  }
`;

const AboutAdvancedStatistics = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #bfbfbf;
  text-align: -webkit-center;
  margin-top: -30px;
  @media (max-width: 663px) {
    margin-left: 36rem;
    width: 79%;
  }
`;

const BrandRecognitionOuterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top:100px;
  padding: 0px 40px 0px 40px;
  @media (max-width: 663px) {
    flex-direction:column;
    margin-left:36rem;
  }
}
`;

const BrandRecognitionInnerContainer = styled.div`
  height: 237px;
  width: 371px;
  background: grey;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding-right: 27px;
  padding-left: 27px;
`;

const BrandLogo = styled.div`
  height: 78px;
  width: 83px;
  background: #3b3054;
  border-radius: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -67px;
  right: 114px;
  margin-bottom: -50px;
`;
const BrandHeading = styled.div`
  font-size: 20px;
  color: #232127;
  padding-right: 128px;
  font-weight: 700;
`;
const Aboutbrand = styled.div`
  font-size: 17px;
  color: #bfbfbf;
  width: 296px;
`;

const NeonLine = styled.div`
  width: 100%;
  height: 20px;
  background: #2acfcf;
  &:nth-child(6) {
    display: none;
  }
  @media (max-width: 663px) {
    width: 7%;
    height: 40px;
  }
`;

const stats = [
  {
    brandlogo: <Brand />,
    brandheading: "Brand recognition",
    aboutbrand:
      "Boost your brand recoginition with each click. Generic links don't mean a thing.Branded links help instil confidence in your content",
  },
  {
    brandlogo: <Brand />,
    brandheading: "Brand recognition",
    aboutbrand:
      "Boost your brand recognition with each click. Generic links don't mean a thing.Branded links help instil confidence in your content",
  },
  {
    brandlogo: <Brand />,
    brandheading: "Brand recognition",
    aboutbrand:
      "Boost your brand recognition with each click. Generic links don't mean a thing.Branded links help instil confidence in your content",
  },
];

function AdvancedStatistics() {
  return (
    <>
      <AdvancedStatisticsHeading>
        <h1>Advanced Statistics</h1>
      </AdvancedStatisticsHeading>
      <AboutAdvancedStatistics>
        <p>
          Track How Links Are performing across the web with<br></br> our
          advanced statistics dashboard.
        </p>
      </AboutAdvancedStatistics>

      <BrandRecognitionOuterContainer>
        {stats.map((data, key) => {
          return (
            <>
              <BrandRecognitionInnerContainer>
                <BrandLogo>{data.brandlogo}</BrandLogo>
                <BrandHeading>{data.brandheading}</BrandHeading>
                <Aboutbrand>{data.aboutbrand}</Aboutbrand>
              </BrandRecognitionInnerContainer>
              <NeonLine></NeonLine>
            </>
          );
        })}
      </BrandRecognitionOuterContainer>
    </>
  );
}
export default AdvancedStatistics;
