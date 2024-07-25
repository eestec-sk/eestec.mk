import Image from "next/image";


const MemoriesComponent = () => {
    return(
        <section className="my-10 md:mx-28 mx-12">
            
        <div className="lg:px-36 md:px-16 px-4 grid justify-center items-center">
        <h3 className="text-black text-5xl text-bold">MAKING MEMORIES SINCE 2003</h3>
        </div>
        <div className="lg:flex justify-evenly items-center gap-14">
            <Image src={""} alt="Sponsor Logo" height={400} className="mt-8 mb-8 "></Image>
            <Image src={""} alt="Sponsor Logo" height={400} className="mt-8 mb-8 "></Image>
            <Image src={""} alt="Sponsor Logo" height={400} className="mt-8 mb-8 "></Image>
            <Image src={""} alt="Sponsor Logo" height={400} className="mt-8 mb-8 "></Image>
        </div>

        <div className="lg:flex justify-evenly items-center gap-14">
            <Image src={""} alt="Sponsor Logo" height={400} className="mt-8 mb-8 "></Image>
            <Image src={""} alt="Sponsor Logo" height={400} className="mt-8 mb-8 "></Image>
            <Image src={""} alt="Sponsor Logo" height={400} className="mt-8 mb-8 "></Image>
            <Image src={""} alt="Sponsor Logo" height={400} className="mt-8 mb-8 "></Image>
        </div>

    </section>
    );
}
export default MemoriesComponent;