import JoinUsSectionComponent from "@/sections/JoinUsSectionComponent";
import FooterComponent from "@/components/FooterComponent";
import BoardCompomemnt from "@/sections/BoardCompoment";
import KeyFeaturesComponent from "@/sections/KeyFeaturesComponent";
import MemoriesComponent from "@/sections/MemoriesComponent";
import MissionVisionComponent from "@/sections/MissionVIsionComponent";
import HeroComponent from "@/sections/HeroComponent";
import HeaderComponent from "@/components/HeaderComponent";
import { EmblaCarousel } from "@/sections/EmblaCarousel";

export default function Home() {
  return (
    <div>
      <HeaderComponent />
      <HeroComponent />
      <MissionVisionComponent />
      <KeyFeaturesComponent />
      <JoinUsSectionComponent />
      <MemoriesComponent />
      <BoardCompomemnt />
      <EmblaCarousel />
      <FooterComponent />
    </div>
  );
}
