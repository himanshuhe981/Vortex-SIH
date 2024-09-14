import bg from './bg.mp4'; 
import './bg.css';
const BackgroundVideo = () => {
  return (
    <div className="relative h-screen">
     
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bg}// Replace with the actual video path
        autoPlay
        loop
        muted
      />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h8 className="text-white text-4xl font-Zen Kaku Gothic Antique"> |  ONE  STOP  SOLUTION  |</h8>
        <br></br>
        <h1 className=  " vortex text-white text-8xl font-yaldevi font-bold"> V O R T E X </h1>
        <p className="text-white mt-4 font-Zen Kaku Gothic Antique"  >TUNNEL FAN MONITORING SYSTEM</p>
        <p className="text-white mt-4 font-Zen Kaku Gothic Antique">TRACK | & | TACKLE</p>
      </div>

      {/* Optional Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0"></div>
    </div>
  );
};

export default BackgroundVideo;
