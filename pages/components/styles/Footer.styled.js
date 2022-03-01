import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #232127;
  height: 300px;
  margin-top: -174px;
  @media (max-width: 663px) {
    height: 700px;
    width: 404%;
  }
`;

export const FooterLogo = styled.div`
  font-size: 30px;
  font-family: "Poppins", sans-serif;
  color: white;
  font-weight: 700;
`;

export const FooterLogoMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 184px;
  position: relative;
  top: 60px;
  @media (max-width: 663px) {
    margin-left: 61rem;
  }
`;
export const MediaLogos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const FaceLogo = styled.div`
  height: 20px;
  width: 20px;
`;

export const Logo = styled.div`
  height: 20px;
  width: 20px;
  margin-left: 20px;
`;

export const FooterFeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-right: 268px;
  top: -15px;
  &:hover {
    color: #2acfcf;
    cursor: pointer;
  }
  @media (max-width: 663px) {
    margin-left: 49rem;
    top: 111px;
  }
`;

export const FooterFeatureText = styled.div`
  font-size: 20px;
  color: white;
  font-weight: 700;
  &:hover {
    color: #2acfcf;
    cursor: pointer;
  }
`;
export const FeatureContents = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 25px;
  &:hover {
    color: #2acfcf;
    cursor: pointer;
  }
`;

export const FeatureSubContent = styled.div`
  font-size: 15px;
  color: white;
  margin-top: 5px;
  &:hover {
    color: #2acfcf;
    cursor: pointer;
  }
`;

export const FooterResourcesContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-left: 76px;
  top: -137px;
  &:hover {
    color: #2acfcf;
    cursor: pointer;
  }
  @media (max-width: 663px) {
    margin-left: 33rem;
    top: 143px;
  }
}
`;

export const FooterResourcesText = styled.div`
  font-size: 20px;
  color: white;
  font-weight: 700;
`;
export const ResourcesContents = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: -18px;
`;

export const ResourcesubContent = styled.div`
  font-size: 15px;
  color: white;
  margin-top: 5px;
`;

export const FooterCompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-left: 463px;
  top: -258px;
  &:hover {
    color: #2acfcf;
    cursor: pointer;
  }
  @media (max-width: 663px) {
    margin-left: 33rem;
    top: 170px;
  }
}
`;

export const FooterCompanyText = styled.div`
  font-size: 20px;
  color: white;
  font-weight: 700;
  &:hover {
    color: #2acfcf;
    cursor: pointer;
  }
`;
export const CompanyContents = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: -18px;
  &:hover {
    color: #2acfcf;
  }
`;

export const CompanySubContent = styled.div`
  font-size: 15px;
  color: white;
  margin-top: 5px;
  &:hover {
    color: #2acfcf;
    cursor: pointer;
  }
`;
