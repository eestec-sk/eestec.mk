import BoardCompomemnt from "@/components/BoardCompoment";
import FooterComponent from "@/components/FooterComponent";
import JoinUsSectionComponent from "@/components/JoinUsSectionComponent";
import KeyFeaturesComponent from "@/components/KeyFeaturesComponent";
import MemoriesComponent from "@/components/MemoriesComponent";
import MissionVisionComponent from "@/components/MissionVIsionComponent";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
    <MissionVisionComponent></MissionVisionComponent>
    <KeyFeaturesComponent></KeyFeaturesComponent>
    <JoinUsSectionComponent></JoinUsSectionComponent>
    <MemoriesComponent></MemoriesComponent>
    <BoardCompomemnt></BoardCompomemnt>
    <FooterComponent></FooterComponent>
    </div>
  );
}
