import FeatureComponent from "./FeatureComponent";

const KeyFeaturesComponent = () => {
    return(
        <div className="md:flex gap-5 justify-center">
            <FeatureComponent img={""} heading={"100+"} subheading={"Events"} ></FeatureComponent>
            <FeatureComponent img={""} heading={"400+"} subheading={"Students"} ></FeatureComponent>
            <FeatureComponent img={""} heading={"30+"} subheading={"Partners"} ></FeatureComponent>
            <FeatureComponent img={""} heading={"5900"} subheading={"Memories"} ></FeatureComponent>
        </div>
    );
}
export default KeyFeaturesComponent;