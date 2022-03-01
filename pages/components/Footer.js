import {
  FooterContainer,
  FooterLogo,
  FooterLogoMediaContainer,
  MediaLogos,
  FaceLogo,
  Logo,
  FooterFeaturesContainer,
  FooterFeatureText,
  FeatureContents,
  FeatureSubContent,
  ResourcesContents,
  ResourcesubContent,
  FooterResourcesContainer,
  FooterResourcesText,
  FooterCompanyContainer,
  FooterCompanyText,
  CompanyContents,
  CompanySubContent,
} from "./styles/Footer.styled";
import Facebook from "../../svg/icon-facebook.svg";
import Twitter from "../../svg/icon-twitter.svg";
import Pinterest from "../../svg/icon-pinterest.svg";
import Instagram from "../../svg/icon-instagram.svg";

const Footer = () => {
  return (
    <>
      '
      <FooterContainer>
        <FooterLogoMediaContainer>
          <FooterLogo>Shortly</FooterLogo>
          <MediaLogos>
            <FaceLogo>
              <Facebook />
            </FaceLogo>
            <Logo>
              <Twitter />
            </Logo>
            <Logo>
              <Pinterest />
            </Logo>
            <Logo>
              <Instagram />
            </Logo>
          </MediaLogos>
        </FooterLogoMediaContainer>
        <FooterFeaturesContainer>
          <FooterFeatureText>Features</FooterFeatureText>
          <FeatureContents>
            <FeatureSubContent>Link Shortening</FeatureSubContent>
            <FeatureSubContent>Brand Links</FeatureSubContent>
            <FeatureSubContent>Analytics</FeatureSubContent>
          </FeatureContents>
        </FooterFeaturesContainer>
        <FooterResourcesContainer>
          <FooterResourcesText>Resources</FooterResourcesText>
          <CompanyContents>
            <ResourcesubContent>Blog</ResourcesubContent>
            <ResourcesubContent>Developers</ResourcesubContent>
            <ResourcesubContent>Support</ResourcesubContent>
          </CompanyContents>
        </FooterResourcesContainer>
        <FooterCompanyContainer>
          <FooterCompanyText>Company</FooterCompanyText>
          <CompanyContents>
            <CompanySubContent>About</CompanySubContent>
            <CompanySubContent>Our Team</CompanySubContent>
            <CompanySubContent>Careers</CompanySubContent>
            <CompanySubContent>Contact</CompanySubContent>
          </CompanyContents>
        </FooterCompanyContainer>
      </FooterContainer>
    </>
  );
};

export default Footer;
