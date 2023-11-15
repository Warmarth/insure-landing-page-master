import Navbar from "../component/Navbar";
import PageHero from "../component/PageHero";
import Proceedure from "../component/Proceedure";
import { Hero, proceedure } from "../component/data";

const Home = () => {
  return (
    <main className={``}>
      <Navbar />
      <PageHero props={Hero} />
      <Proceedure props={proceedure} />
    </main>
  );
};

export default Home;
