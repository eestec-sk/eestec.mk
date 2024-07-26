import Img from "../images/logos_icons/calendar.svg";
import SponsorsComponent from "../components/SponsorsComponent";

const SponsorsSupportersComponent = () => {
  return (
    <div className="md:flex grid gap-16 justify-center self-center">
      <SponsorsComponent
        heading={"Sponsors"}
        img={Img}
        name={"Name"}
        info={"Lorem Ipsum"}
        text={
          "Lorem ipsum dolor sit amet consectetur. Eu ligula tellus nisi nunc ut rhoncus. "
        }
      ></SponsorsComponent>
      <SponsorsComponent
        heading={"Supporters"}
        img={Img}
        name={"Name"}
        info={"Lorem Ipsum"}
        text={
          "Lorem ipsum dolor sit amet consectetur. Eu ligula tellus nisi nunc ut rhoncus. "
        }
      ></SponsorsComponent>
    </div>
  );
};
export default SponsorsSupportersComponent;
