import './Card.css'
const Card = ({ title, value, icon }) => {
    return (
      <div className=" status-card text-white p-20  shadow-lg m-10 w-full md:w-11/12 ">
        <h2 className="text-xl font-bold" >{title} {icon && <span>{icon}</span>}</h2>
        <p  className="text-3xl my-2">{value}</p>
      </div>
    );
  };
  
  export default Card;