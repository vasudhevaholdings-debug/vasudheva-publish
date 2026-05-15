import HeroSection from '../sections/HeroSection';
import WhyWeExist from '../sections/WhyWeExist';
import EcosystemModel from '../sections/EcosystemModel';
import WhatWePublish from '../sections/WhatWePublish';
import ForAuthors from '../sections/ForAuthors';
import ForReaders from '../sections/ForReaders';
import ForInstitutions from '../sections/ForInstitutions';
import IntegratedGroup from '../sections/IntegratedGroup';
import FeaturedPublications from '../sections/FeaturedPublications';
import InsightsPreview from '../sections/InsightsPreview';
import FinalCTA from '../sections/FinalCTA';

const Home = () => {
  return (
    <>
      <HeroSection />
      <WhyWeExist />
      <EcosystemModel />
      <WhatWePublish />
      <ForAuthors />
      <ForReaders />
      <ForInstitutions />
      <IntegratedGroup />
      <FeaturedPublications />
      <InsightsPreview />
      <FinalCTA />
    </>
  );
};

export default Home;