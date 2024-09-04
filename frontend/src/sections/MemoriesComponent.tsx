import Image from "next/image";

import Img from '../images/memories/memory1.jpg'
import Img2 from '../images/memories/memory2.jpg'
import Img3 from '../images/memories/memory3.jpg'
import Img4 from '../images/memories/memory4.jpg'
import Img5 from '../images/memories/memory5.jpg'
import Img6 from '../images/memories/memory6.jpg'
import MemoriesImagesComponent from "@/components/MemoriesImagesComponent";

const MemoriesComponent = () => {
    return(
        <section className="my-10 md:mx-28 mx-12">
            
        <div className="lg:px-36 md:px-16 px-4 grid justify-center items-center">
        <h3 className="text-black text-2xl text-bold text-center">MAKING MEMORIES SINCE 2003</h3>
        </div>
        <div className="lg:flex justify-center items-center gap-20 p-3">
        <MemoriesImagesComponent img={Img.src} text={"test"}></MemoriesImagesComponent>
        <MemoriesImagesComponent img={Img2.src} text={"test"}></MemoriesImagesComponent>
        <MemoriesImagesComponent img={Img3.src} text={"test"}></MemoriesImagesComponent>
        </div>

        <div className="lg:flex justify-center items-center gap-20 p-3">
        <MemoriesImagesComponent img={Img4.src} text={"test"}></MemoriesImagesComponent>
        <MemoriesImagesComponent img={Img5.src} text={"test"}></MemoriesImagesComponent>
        <MemoriesImagesComponent img={Img6.src} text={"test"}></MemoriesImagesComponent>
        </div>
    </section>
    );
}
export default MemoriesComponent;