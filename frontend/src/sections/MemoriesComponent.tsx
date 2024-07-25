import Image from "next/image";

import Img from '../images/memories/memory1.jpeg'
import Img2 from '../images/memories/memory2.jpeg'
import Img3 from '../images/memories/memory3.jpeg'
import Img4 from '../images/memories/memory4.jpeg'
import Img5 from '../images/memories/memory5.jpeg'
import Img6 from '../images/memories/memory6.jpeg'
import Img7 from '../images/memories/memory1.jpeg'
import Img8 from '../images/memories/memory1.jpeg'
import SubheadingComponent from "@/components/SubheadingComponent";

const MemoriesComponent = () => {
    return(
        <section className="my-10 md:mx-28 mx-12">
            
        <div className="lg:px-36 md:px-16 px-4 grid justify-center items-center">
        <SubheadingComponent text="MAKING MEMORIES SINCE 2003"/>
        </div>
        <div className="lg:flex justify-evenly items-center gap-14">
            <Image src={Img} alt="Sponsor Logo" height={400}  width={400} className="mt-8 mb-8 "></Image>
            <Image src={Img2} alt="Sponsor Logo" height={400} width={400} className="mt-8 mb-8 "></Image>
            <Image src={Img3} alt="Sponsor Logo" height={400} width={400} className="mt-8 mb-8 "></Image>
        </div>
        <div className="lg:flex justify-evenly items-center gap-14">
            <Image src={Img4} alt="Sponsor Logo" height={400} width={400} className="mt-8 mb-8 "></Image>
            <Image src={Img5} alt="Sponsor Logo" height={400} width={400} className="mt-8 mb-8 "></Image>
            <Image src={Img6} alt="Sponsor Logo" height={400} width={400} className="mt-8 mb-8 "></Image>
        </div>
    </section>
    );
}
export default MemoriesComponent;