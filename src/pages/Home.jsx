import Hero from '../components/Hero';
import OurStory from '../components/OurStory';
import WhatWeDo from '../components/WhatWeDo';
import Videos from '../components/Videos';
import MapSection from '../components/MapSection';

function Home() {
  return (
    <div>
      <Hero />
      <OurStory />
      <WhatWeDo />
      {/* <Videos /> */}
      <MapSection />
    </div>
  );
}

export default Home;
