"use client";
import Image from "next/image";

interface BoardProps {
    img: string,
    name: string,
    position: string,
}

const BoardComponent = ({ img, name, position } : BoardProps) => {
    return(
        <div className="grid justify-content-center">
            <Image src={img} alt="Board Member Image"></Image>
            <h6 className="font-eestec text-black capitalize">{name}</h6>
            <h6 className="font-eestec text-eestec uppercase">{position}</h6>
        </div>
    )
}
export default BoardComponent;