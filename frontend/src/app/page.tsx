import JoinUsSectionComponent from "@/sections/JoinUsSectionComponent";
import FooterComponent from "@/components/FooterComponent";
import BlogComponent from "@/components/BlogComponent";
import BoardCompomemnt from "@/sections/BoardCompoment";
import KeyFeaturesComponent from "@/sections/KeyFeaturesComponent";
import MemoriesComponent from "@/sections/MemoriesComponent";
import MissionVisionComponent from "@/components/MissionVIsionComponent";
import SubheadingComponent from "@/components/SubheadingComponent";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <MissionVisionComponent></MissionVisionComponent>
      <KeyFeaturesComponent></KeyFeaturesComponent>
      <JoinUsSectionComponent></JoinUsSectionComponent>
      <MemoriesComponent></MemoriesComponent>
      <BoardCompomemnt></BoardCompomemnt>
      <FooterComponent></FooterComponent>
    </div>
  );
}
