import MembersComponent from "../components/MembersComponent";
import SubheadingComponent from "@/components/SubheadingComponent";

const BoardCompomemnt = () => {
  return (
    <div className="my-5">
      <SubheadingComponent
        text={"BOARD MEMBERS 2024/25"}
        img={"/images/logos_icons/red_line_full.svg"}
      />

      <div className="lg:flex gap-20 justify-center">
        <MembersComponent
          img={"/images/board-members/teovel.jpg"}
          heading={"Teodor Krstevski"}
          subheading={"Chairperson"}
        />
        <MembersComponent
          img={"/images/board-members/angela.jpg"}
          heading={"Angela Milenkoska"}
          subheading={"Contact Person"}
        />
        <MembersComponent
          img={"/images/board-members/bojan.jpg"}
          heading={"Bojan Naumovski"}
          subheading={"PR Coordinator"}
        />
      </div>
      <div className="lg:flex gap-20 justify-center">
        <MembersComponent
          img={"/images/board-members/jovan.jpg"}
          heading={"Jovan Aleksandroski"}
          subheading={"HR Coordinator"}
        />
        <MembersComponent
          img={"/images/board-members/paulina.jpg"}
          heading={"Paulina Kiprevska"}
          subheading={"FR Coordinator"}
        />
      </div>
    </div>
  );
};
export default BoardCompomemnt;
