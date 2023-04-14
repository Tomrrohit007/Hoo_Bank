import { FC, lazy } from "react";
import styles from "./utils/styles";
import "./index.css";

const Stats = lazy(()=>import( "./components/Stats"))
const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const Feedback = lazy(() => import("./components/Feedback"));
const Billing = lazy(() => import("./components/Billing"));
const Bussiness = lazy(() => import("./components/Bussiness"));
const Footer = lazy(() => import("./components/Footer"));
const CTA = lazy(() => import("./components/CTA"));
const Client = lazy(() => import("./components/Client"));
const CardDeal = lazy(() => import("./components/CardDeal"));

const App: FC = () => {
  return (
    <div className="bg-primary w-full">
          <Navbar />
      <div className={`${styles.flexStart} bg-primary  pt-14`}>
        <div className={`${styles.boxWidth} mt-16`}>
          <Hero />
        </div>
      </div>
      <div className={`${styles.flexStart} ${styles.paddingX} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Bussiness />
          <Billing />
          <CardDeal />
          <Feedback />
          <Client />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
