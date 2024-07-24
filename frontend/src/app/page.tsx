import JoinUsSectionComponent from "@/components/JoinUsSectionComponent";
import KeyFeaturesComponent from "@/components/KeyFeaturesComponent";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
    <KeyFeaturesComponent></KeyFeaturesComponent>
    <JoinUsSectionComponent></JoinUsSectionComponent>
    </div>
  );
}
