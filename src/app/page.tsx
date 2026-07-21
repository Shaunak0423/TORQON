import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyTorqon from "./components/WhyTorqon";
import EventFlow from "./components/EventFlow";
import Categories from "./components/Categories";
import TargetAudience from "./components/TargetAudience";
import Sponsorship from "./components/Sponsorship";
import Team from "./components/Team";
import CTAFooter from "./components/CTAFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyTorqon />
        <EventFlow />
        <Categories />
        <TargetAudience />
        <Sponsorship />
        <About />
        <Team />
      </main>
      <CTAFooter />
    </>
  );
}
