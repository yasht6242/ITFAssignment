import Image from "next/image";
import Meteor from "../../svg/Meteor.png";
import {
  ShortenLinkImage,
  ShortenLinkInput,
  ShortenLinkContainer,
  ShortenLinkButton,
  DerivedLinks,
  FullLinks,
  CopyLinks,
  ShortenLinkOuterContainer,
  FullShortenLinkContainer,
  ShortenLinkImageLinkContainer,
} from "./styles/ShortenLink.styled";

const links = [
  {
    fulllink: "http://shevdhickmmkqkokodwdwd.io",
    derivedlink: "http://shevdhfsfsdfic.io",
    copybutton: "Copy",
  },
  {
    fulllink: "http://shevdhickmmkqkokodwdwd.io",
    derivedlink: "http://shevdhfsfsdfic.io",
    copybutton: "Copy",
  },
  {
    fulllink: "http://shevdhickmmkqkokodwdwd.io",
    derivedlink: "http://shevdhfsfsdfic.io",
    copybutton: "Copy",
  },
];

const ShortenLink = ({
  height = "150px",
  width = "1200px",
  border = "none",
}) => {
  return (
    <>
      <ShortenLinkImageLinkContainer>
        <ShortenLinkImage>
          <Image src={Meteor} height={height} width={width} />
        </ShortenLinkImage>
        <FullShortenLinkContainer>
          <ShortenLinkInput>
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <input
                placeholder="Shorten Your link here..."
                onChange={async (event) => {
                  const res = await fetch(
                    ` https://api.shrtco.de/v2/shorten?url=${event.target.value}`
                  );
                  const data = res.json();
                  console.log(data);
                }}
              ></input>
            </form>
          </ShortenLinkInput>
          <ShortenLinkButton>Shorten It!</ShortenLinkButton>
        </FullShortenLinkContainer>
      </ShortenLinkImageLinkContainer>
      <ShortenLinkOuterContainer>
        {links.map((data, key) => {
          return (
            <ShortenLinkContainer>
              <FullLinks>{data.fulllink}</FullLinks>
              <DerivedLinks>{data.derivedlink}</DerivedLinks>
              <CopyLinks>{data.copybutton}</CopyLinks>
            </ShortenLinkContainer>
          );
        })}
      </ShortenLinkOuterContainer>
    </>
  );
};

export default ShortenLink;
