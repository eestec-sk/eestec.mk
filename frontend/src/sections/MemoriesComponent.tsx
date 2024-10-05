import Image from "next/image";

import MemoriesImagesComponent from "@/components/MemoriesImagesComponent";
import SubheadingComponent from "@/components/SubheadingComponent";

const MemoriesComponent = () => {
    return(
        <section className="my-10 md:mx-28 mx-12">
            
        <div className="lg:px-36 md:px-16 px-4 grid justify-center items-center">
            <SubheadingComponent text={"MAKING MEMORIES SINCE 2003"} img={"/images/logos_icons/red_line_right.svg"}></SubheadingComponent>
        </div>
        <div className="lg:flex justify-center items-center gap-20 p-3">
        <MemoriesImagesComponent img={"/images/memories/memory1.jpg"} text={"test"}/>
        <MemoriesImagesComponent img={"/images/memories/memory2.jpg"} text={"test"}/>
        <MemoriesImagesComponent img={"/images/memories/memory3.jpg"} text={"test"}/>
        </div>

        <div className="lg:flex justify-center items-center gap-20 p-3">
        <MemoriesImagesComponent img={"/images/memories/memory4.jpg"} text={"test"}/>
        <MemoriesImagesComponent img={"/images/memories/memory5.jpg"} text={"test"}/>
        <MemoriesImagesComponent img={"/images/memories/memory6.jpg"} text={"test"}/>
        </div>
    </section>
    );
}
export default MemoriesComponent;