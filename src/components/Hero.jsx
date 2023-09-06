import video from "../assets/videos/video01.mp4"

function Hero() {
  return (
    <div className="b-container">
      <div className="b-video">
        <video loop muted autoPlay >
          <source src={video}/>
        </video>
<div className="b-video-center">
  <div className="b-center-content flex-col"> 
  <div className="b-headings">
  <h3 className="font-red">Perfect Blend of Technology & Creativity!</h3>
  <h4 className="py-3">Top-Notch App Development Company</h4>
  </div>
  <div className="flex b-buttons">
    <button className="b-button-1 bg-red py-3 text-white color-transition-button ">HAVE AN IDEA, LETS TALK</button>
    <button className="b-button-2 py-3 bg-black text-white color-transition-button2">GET QUOTE</button>
    


  </div>
  </div>
</div>

        <div className="b-video-bottom ">
          <div className="flex justify-between  w-75 mx-auto">
            <img className="b-bottom-image"  src="https://www.appverticals.com/_next/image?url=%2Fnext%2Fhome%2Fbanner%2F01.webp&w=256&q=75"/>
            <img className="b-bottom-image" src="https://www.appverticals.com/_next/image?url=%2Fnext%2Fhome%2Fbanner%2F02.webp&w=256&q=75"/>
            <img className="b-bottom-image" src="https://www.appverticals.com/_next/image?url=%2Fnext%2Fhome%2Fbanner%2F03.webp&w=256&q=75"/>
            <img className="b-bottom-image" src="https://www.appverticals.com/_next/image?url=%2Fnext%2Fhome%2Fbanner%2F04.webp&w=256&q=75"/>
            <img className="b-bottom-image" src="https://www.appverticals.com/_next/image?url=%2Fnext%2Fhome%2Fbanner%2F05.webp&w=256&q=75"/>
          </div>
        </div>
      
      </div>

    </div>
  )
}

export default Hero