import styles from "../styles/Home.module.css";
import AdvancedStatistics from "./components/AdvancedStatistics";
import Banner from "./components/Banner";
import BoosLinks from "./components/BoostLinks";
import Header from "./components/Header";
import ShortenLink from "./components/ShortenLink";
import { ShortlyPage } from "./components/styles/ShortlyPage.styled";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <ShortlyPage>
      <Header />
      <Banner />
      <ShortenLink />
      <AdvancedStatistics />
      <BoosLinks />
      <Footer />
    </ShortlyPage>
  );
}
