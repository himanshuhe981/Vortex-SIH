
// import bg from '.../public/bg.mp4'
// const Section1 = () => {
//   return (
//     <div className="section section-1">
  
// <video className='videoTag' autoPlay loop muted>
//     <source src={bg} type='video/mp4' />
// </video>
      
//       Uncomment this block if you want the overlay text
//       <div className="cen"></div>
//       <p>| ONE STOP SOLUTION |</p>
//       <hr />
//       <p>VORTEX</p>
//       <hr />
     
//     </div>
//   );
// };

// export default Section1;
import bg from './bg.mp4';  // Adjust the path if needed

const Body = () => {
  return (
    <div className="section section-1 relative">
      
      <video className="videoTag absolute top-0 left-0 w-[800px] h-[600px] object-cover" autoPlay loop muted>
        <source src={bg} type="video/mp4" />
      
      </video>
      
      {/* Overlay Text */}
      <div className="cen absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
        <p className="text-xl">| ONE STOP SOLUTION |</p>
        <hr className="my-2 w-1/4 border-white" />
        <p className="text-4xl">VORTEX</p>
        <hr className="my-2 w-1/4 border-white" />
      </div>
    </div>
  );
};

export default Body;
