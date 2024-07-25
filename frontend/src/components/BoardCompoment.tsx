import MembersComponent from "./MembersComponent";
import Img from '../images/board-members/vasilaki.jpg';
import Img2 from '../images/board-members/matej.jpg';
import Img3 from '../images/board-members/martina.jpg';
import Img4 from '../images/board-members/marina.jpg';
import Img5 from '../images/board-members/ivana.jpg';
import Img6 from '../images/board-members/toni.jpg';
import Img7 from '../images/board-members/kristina.jpg';

const BoardCompomemnt = () => {
    return(
      <>
      <div className="md:flex gap-20 justify-center">
            <MembersComponent img={Img} heading={"Vasilaki Tocili"} subheading={"Chairperson"} ></MembersComponent>
            <MembersComponent img={Img2} heading={"Matej Filipovski"} subheading={"Contact Person"} ></MembersComponent>
            <MembersComponent img={Img3} heading={"Martina Klimoska"} subheading={"Treasurer"} ></MembersComponent>
            <MembersComponent img={Img4} heading={"Marina Klimoska"} subheading={"PR Coordinator"} ></MembersComponent>
           
             </div>
        <div className="md:flex gap-20 justify-center">
            <MembersComponent img={Img5} heading={"Ivana Koceva"} subheading={"IT Coordinator"} ></MembersComponent>
            <MembersComponent img={Img6} heading={"Toni Hristovski"} subheading={"HR Coordinator"} ></MembersComponent>
            <MembersComponent img={Img7} heading={"Kristina Srbinoska"} subheading={"FR Coordinator"} ></MembersComponent>
        </div>

        </>
    );
}
export default BoardCompomemnt;