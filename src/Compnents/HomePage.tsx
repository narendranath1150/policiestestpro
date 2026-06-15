import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate("/policies");
  };

  return (
    <div className="items-center">
    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded cursor-pointer" onClick={handleClick} >
      View Policies
    </button>
    </div>
  );
};

export default HomePage;