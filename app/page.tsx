import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import OurStory from "@/components/OurStory";
import Gallery from "@/components/Gallery";
import EventDetails from "@/components/EventDetails";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Countdown />
      <OurStory />
      <Gallery />
      <EventDetails />
      <RSVP />
      <Footer />
    </main>
  );
}
