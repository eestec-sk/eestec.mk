import FeatureComponent from "../components/FeatureComponent";
import Img from '../images/logos_icons/calendar.svg';
import Img2 from '../images/logos_icons/students.svg';
import Img3 from '../images/logos_icons/handshake.svg';
import Img4 from '../images/logos_icons/glass.svg';

const KeyFeaturesComponent = () => {
    return(
        <div className="md:flex grid gap-16 justify-center self-center mt-8 mb-8">
            <FeatureComponent img={Img} heading={"+"} id={130} subheading={"Events"} ></FeatureComponent>
            <FeatureComponent img={Img2} heading={"+"} id={600} subheading={"Students"} ></FeatureComponent>
            <FeatureComponent img={Img3} heading={"+"} id={310} subheading={"Partners"} ></FeatureComponent>
            <FeatureComponent img={Img4} heading={"+"} id={900} subheading={"Memories"} ></FeatureComponent>
        </div>
    );
}
export default KeyFeaturesComponent;