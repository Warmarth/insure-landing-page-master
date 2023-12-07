import Navbar from "../component/Navbar";
import PageHero from "../component/PageHero";
import Proceedure from "../component/Proceedure";
import { Hero, proceedure } from "../component/data";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <main className={``}>
      <Navbar />
      <PageHero props={Hero} />
      <Proceedure props={proceedure} />
      <Footer props={proceedure} />
    </main>
  );
};

export default Home;
