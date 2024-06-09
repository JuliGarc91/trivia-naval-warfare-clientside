import RssFeed from "./RssFeed";

const TrainingGrounds = () => {
  return (
    <>
        <div className='h-screen flex items-center justify-center flex-col gap-4'>
        <div className='bg-forest/60 shadow-2xl backdrop-brightness-150 backdrop-blur-md bg-opacity-90 w-[65vw] h-auto relative z-10'>
            <h1 className="text-4xl text-white p-2 text-center border-2 border-black" style={{ fontFamily: "Black Ops One, system-ui", fontStyle: 'normal' }}>Training Grounds</h1>
        </div>
            <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted style={{ zIndex: -1 }}>
                {/* maybe a ternary to show alt background in case video doesn't work */}
                <source src="https://videos.pexels.com/video-files/854281/854281-hd_1280_720_25fps.mp4" />
                {/* <source src="https://videos.pexels.com/video-files/13740590/13740590-hd_1280_720_24fps.mp4" /> */}
                <p className='text-center text-white mt-10 text-3xl' style={{ fontFamily: "Kode Mono, monospace", fontStyle: 'normal' }}>Error: Your browser does not support the video tag.</p>
            </video>
            <div className='bg-forest/60 shadow-2xl backdrop-brightness-150 backdrop-blur-md bg-opacity-90 overflow-y-auto w-[65vw] relative z-10 h-[70vh] border-2 border-black'>
                <RssFeed/>
            </div>
        </div>
    </>
  )
}

export default TrainingGrounds