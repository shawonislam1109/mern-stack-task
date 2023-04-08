
import Food from "./Food/Food";
import Carsoual from "./Food/Carsoual";
import { Link, Outlet } from "react-router-dom";

const HOme = () => {


  return (
    <div>
      <div>
        <Carsoual />
        <div className="flex">
          <h1 className="w-9/12 mx-auto font text-3xl font-serif text-orange-500 py-5">
            THIS IS OUR FOOD{" "}
          </h1>
          <div className="mr-10 flex justify-around items-center">
            <h1 className="text-3xl text-orange-500 mr-2 font-bold">Catagory : </h1>
            <select className="select select-secondary rounded-md ">
              <option disabled selected className=" font-serif text-black">
                Pick your favorite Food 
              </option>
            <option className=" font-serif text-black"><Link>Barger</Link></option>
            <option className=" font-serif text-black"><Link>Barger</Link></option>
            <option className=" font-serif text-black"><Link>Barger</Link></option>
            <option className=" font-serif text-black"><Link>Barger</Link></option>
            <option className=" font-serif text-black"><Link>Barger</Link></option>
            <option className=" font-serif text-black"><Link>Barger</Link></option>
            </select>
          </div>
        </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default HOme;
