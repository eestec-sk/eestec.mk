import BlogComponent from "@/components/BlogComponent";
import JoinUsSectionComponent from "@/components/JoinUsSectionComponent";
import KeyFeaturesComponent from "@/components/KeyFeaturesComponent";
import SubheadingComponent from "@/components/SubheadingComponent";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <SubheadingComponent text={"Board 23/24"}></SubheadingComponent>
      <KeyFeaturesComponent></KeyFeaturesComponent>
      <JoinUsSectionComponent></JoinUsSectionComponent>
      <BlogComponent img={""} heading={"Lorem ipsum"} text={"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa"}></BlogComponent>
      </div>
  );
}
