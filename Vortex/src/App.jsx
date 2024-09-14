
import './App.css'
// import RealTimeData from './components/RealTimeData'
import Navbar from './components/NavBar'
// import Body from './components/Body'
import BackGroundVideo from './components/BackGroundVideo'
//  import Graph from "./components/Graph"
import RealTimeData from './components/RealTimeData'
// import BackGroundVideo from './components/BackGroundVideo'
function App() {


  return (
    <div className="App bg-black w-[1600px]">
<Navbar />
{/* <Body /> */}
<BackGroundVideo />
<RealTimeData />
</div>
  )
}

export default App
