import React from "react";

const About_Mission = () => {
  return (
    <div className="">
      {/* div for background video*/}
      {/* <div className="flex-shrink-0 flex items-center justify-center w-[65vw] bg-burgandy">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          style={{ zIndex: -1 }}
        >
          <source
            src="https://videos.pexels.com/video-files/6333333/6333333-hd_1280_720_24fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* first landing page content */}
      {/* </div>  */}
      {/* https://res.cloudinary.com/dwygxzqku/image/upload/v1717947883/battleship%20app/water.jpg */}
      <div className="">
        <div className="flex flex-row items-center justify-center mx-5 sm:mx-24 lg:mx-48">
          <div className="border-4 border-black rounded-full p-5"></div>
          <hr className="border-2 border-black w-24" />
          <h1 className=" text-black font-bold text-4xl md:text-5xl lg:text-6xl my-12 py-5 border-4 px-5 border-black text-center">
            The Mission
          </h1>
          <hr className="border-2 border-black w-24" />
          <div className="border-4 border-black rounded-full p-5"></div>
        </div>
        <div className="mx-5 sm:mx-10 md:mx-24 lg:mx-48 px-10 border-4 border-black mb-48" style={{ fontFamily: "Kode Mono, monospace", fontStyle: 'normal' }}>
          <h2 className="text-4xl pt-16 pb-5 font-semibold">Briefing:</h2>
          <hr className="border-2" />
          <p className="text-xl lg:text-3xl py-8">
            Trivia Naval Warfare (TNW) was crafted with the aim of delivering an
            immersive experience, inviting readers of all ages to enhance their
            tactical skills and broaden their knowledge base through the NYT
            API. Our mission during the NYT 2024 Hackathon was to introduce a
            fresh gaming concept to their existing lineup, reimagining familiar
            ideas to deliver a thrilling and engaging experience.
          </p>
          <p className="text-xl lg:text-3xl pb-10">
            TNW is the culmination of our team's diverse inspirations, driven by
            a passion for continuous learning, spirited competition, and a
            tribute to the indomitable human spirit that refuses to yield in the
            face of daunting challenges - a philosophy perfectly suited for a
            hackathon! We appreciate your interest in our application and
            welcome you to connect with us as we continue to innovate, crafting
            practical yet enjoyable solutions for life's varied demands.
          </p>
          <p className="font-semibold text-xl sm:text-2xl lg:text-4xl py-8 mb-16 text-center text-white bg-black ">
            "With determination in our hearts, let's sail onward!"
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About_Mission;
