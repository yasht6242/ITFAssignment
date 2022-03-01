import { FullHeader } from "./styles/Header.styled";
import { Shortlytext } from "./styles/Header.styled";
import { Aftertext } from "./styles/Header.styled";
import { AfterShortly } from "./styles/Header.styled";
import Logo from "../../svg/logo.svg";

const Header = () => {
  return (
    <FullHeader>
      <div>
        {" "}
        <Logo />
      </div>

      <AfterShortly>
        <Aftertext>Features</Aftertext>
        <Aftertext>Pricing</Aftertext>
        <Aftertext>Resources</Aftertext>
      </AfterShortly>
    </FullHeader>
  );
};

export default Header;
