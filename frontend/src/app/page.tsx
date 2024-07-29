import JoinUsSectionComponent from "@/sections/JoinUsSectionComponent";
import FooterComponent from "@/components/FooterComponent";
import BlogComponent from "@/components/BlogComponent";
import BoardCompomemnt from "@/sections/BoardCompoment";
import KeyFeaturesComponent from "@/sections/KeyFeaturesComponent";
import MemoriesComponent from "@/sections/MemoriesComponent";
import MissionVisionComponent from "@/components/MissionVIsionComponent";
import SubheadingComponent from "@/components/SubheadingComponent";
import Image from "next/image";
import SponsorsSupportersComponent from "@/sections/SponsorsSupportersComponent";
import HeaderComponent from "@/components/HeaderComponent";

export default function Home() {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <MissionVisionComponent></MissionVisionComponent>
      <KeyFeaturesComponent></KeyFeaturesComponent>
      <JoinUsSectionComponent></JoinUsSectionComponent>
      <MemoriesComponent></MemoriesComponent>
      <BoardCompomemnt></BoardCompomemnt>
      <SponsorsSupportersComponent></SponsorsSupportersComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
}
