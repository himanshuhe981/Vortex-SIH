import  {  useState } from 'react';
import './RealTimeData.css';

import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerHalf, faMicrochip, faTachometerAlt, faClock } from '@fortawesome/free-solid-svg-icons';

// import axios  from "axios";
// import { getDatabase,ref,child,get } from 'firebase/database';
// import {app} from "../firebase.config"
//  const database = getDatabase(app);

function RealTimeData() {
  // Step 1: Set up state to store data from the API
  const [data, setData] = useState({
 
    // speed: 'N/A',
    // ehumidity: 'N/A',
    // etemperature: 'N/A',
    // mtemperature: 'N/A',
    // current:'N/A',
    // voltage:'N/A',
    // vibration:'N/A',

    speed: '23',
    ehumidity: '24',
    etemperature: '25',
    mtemperature: '45',
    current:'43',
    voltage:'98',
    vibration:'4',


  });


//   Step 2: Fetch data from the API
  
    // useEffect(() => {
    //   get(child(ref(database),'/UsersData/2vavNwv0OYSOGEQHbCSNI4QQZMQ2')).then( async (snapshot)=>{
    //     if (snapshot.exists()){
    //       let data = await snapshot.val();
    //       console.log(data);
    //       setData(data);
    //        try {
    //          const res =await axios.post('http://localhost:4000/api/machines/update',data,{
    //           headers:{'Content-Type':'application/json'}
    //          });
    //          console.log(res);
    //        } catch (error) {
    //         console.log(`Error in sending to mongoDb ${error}`);
    //        }
    //     }else{
    //       console.log("error");
    //     }
    //   })
    //   .catch((err)=>{
    //     console.log(err);
    //   });
    // }, [data]);

  return (
  

      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <Card title=" ENVIRONMENT TEMPERATURE" value={`${data.etemperature}°C`} icon={<FontAwesomeIcon icon={faThermometerHalf}  />} />
        <Card title=" MOTOR TEMPERATURE" value={`${data.mtemperature}°C`} icon={<FontAwesomeIcon icon={faThermometerHalf} />}    />
        <Card title=" HUMIDITY" value={data.ehumidity} icon={<FontAwesomeIcon icon={faClock} />}  />
        {/* <Card title="Sensors Active" value={data.sensorsActive} icon={<FontAwesomeIcon icon={faMicrochip} />} /> */}
        <Card title="RPM" value={`${data.speed} rpm`} icon={<FontAwesomeIcon icon={faTachometerAlt} />} />
        <Card title="CURRENT" value={`${data.current} A`} icon={<FontAwesomeIcon icon={faTachometerAlt} />} />
        <Card title="VOLTAGE" value={`${data.voltage}V`} icon={<FontAwesomeIcon icon={faClock} />} />
      </div>
 
  );
  }
  export default RealTimeData;