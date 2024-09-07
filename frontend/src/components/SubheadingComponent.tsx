"use client"

interface SubheadingProps {
    text: string
}

const SubheadingComponent = ({ text } : SubheadingProps) => {
    return(
        <h3 className="font-eestec text-center font-bold text-3xl text-black capitalize my-3">{text}</h3>
    );
}
export default SubheadingComponent;