import FeaturedProperties from "@/components/FeaturedProperties";
import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
import InfoBoxes from "@/components/InfoBoxes";
export const metadata = {
  verification: {
    google: 'Tmtj5yyUkAKLOOJ93UF5a-uDmAHeY4rOdAMF_a4Xlfs',
  },
};
const HomePage = () => {
  return (
    <div>
     <Hero />
      <InfoBoxes />
      <FeaturedProperties />
      <HomeProperties />
    </div>
  );
};

export default HomePage;
