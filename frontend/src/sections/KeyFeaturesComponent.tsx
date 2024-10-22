import FeatureComponent from "../components/FeatureComponent";

const KeyFeaturesComponent = () => {
  return (
    <div className="md:flex grid gap-16 justify-center self-center mt-8 mb-8">
      <FeatureComponent
        img={"/images/logos_icons/calendar.svg"}
        heading={"+"}
        id={130}
        subheading={"Events"}
      />
      <FeatureComponent
        img={"/images/logos_icons/students.svg"}
        heading={"+"}
        id={600}
        subheading={"Students"}
      />
      <FeatureComponent
        img={"/images/logos_icons/handshake.svg"}
        heading={"+"}
        id={310}
        subheading={"Partners"}
      />
      <FeatureComponent
        img={"/images/logos_icons/glass.svg"}
        heading={"+"}
        id={900}
        subheading={"Memories"}
      />
    </div>
  );
};
export default KeyFeaturesComponent;
