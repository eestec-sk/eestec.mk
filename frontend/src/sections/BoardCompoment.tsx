import MembersComponent from "../components/MembersComponent";
import SubheadingComponent from "@/components/SubheadingComponent";

const BoardCompomemnt = () => {
  return (
    <div className="my-5">
      <SubheadingComponent
        text={"BOARD MEMBERS 2023/24"}
        img={"/images/logos_icons/red_line_full.svg"}
      />

      <div className="lg:flex gap-20 justify-center">
        <MembersComponent
          img={"/images/board-members/vasilaki.jpg"}
          heading={"Vasilaki Tocili"}
          subheading={"Chairperson"}
        />
        <MembersComponent
          img={"/images/board-members/matej.jpg"}
          heading={"Matej Filipovski"}
          subheading={"Contact Person"}
        />
        <MembersComponent
          img={"/images/board-members/martina.jpg"}
          heading={"Martina Klimoska"}
          subheading={"Treasurer"}
        />
        <MembersComponent
          img={"/images/board-members/marina.jpg"}
          heading={"Marina Klimoska"}
          subheading={"PR Coordinator"}
        />
      </div>
      <div className="lg:flex gap-20 justify-center">
        <MembersComponent
          img={"/images/board-members/ivana.jpg"}
          heading={"Ivana Koceva"}
          subheading={"IT Coordinator"}
        />
        <MembersComponent
          img={"/images/board-members/toni.jpg"}
          heading={"Toni Hristovski"}
          subheading={"HR Coordinator"}
        />
        <MembersComponent
          img={"/images/board-members/kristina.jpg"}
          heading={"Kristina Srbinoska"}
          subheading={"FR Coordinator"}
        />
      </div>
    </div>
  );
};
export default BoardCompomemnt;
