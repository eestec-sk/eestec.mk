import React from "react";

const MissionVisionComponent = () => {
  return (
    <div className="md:flex gap-5 justify-center">
      <article className="md:grid justify-items-center text-center flex m-3 my-5">
        {/* <Image src={""} alt="Feature Image" className="p-3 m-2"></Image>  */}
        <div>
          <h3 className="text-5xl text-eestec font-bold">Our Mission</h3>
          <h6 className="text-black text-sm">
            Connecting EECS students and supporting them in their professional,
            academic and personal growth.
          </h6>
        </div>
      </article>
      <article className="md:grid justify-items-center text-center flex m-3 my-5">
        {/* <Image src={""} alt="Feature Image" className="p-3 m-2"></Image>  */}
        <div>
          <h3 className="text-5xl text-eestec font-bold">Our Vision</h3>
          <h6 className="text-black text-sm">
            Empowering EECS students across Europe to reach their full potential
            in their academic, professional and social lives in a strong and
            recognizable network.
          </h6>
        </div>
      </article>
    </div>
  );
};
export default MissionVisionComponent;
