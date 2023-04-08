import Carsoual from "./Food/Carsoual";
import {Link, Outlet} from "react-router-dom";
import { AiFillCaretDown } from 'react-icons/ai';

const HOme = () => {
  return (
    <div>
      <div>
        <Carsoual />
        <div className="md:flex">
          <h1 className="w-9/12 mx-auto font text-3xl font-serif text-orange-500 py-5">
            THIS IS OUR FOOD{" "}
          </h1>
          <div className="mr-10">
            <div className=" ml-20 md:ml-0 dropdown dropdown-hover mr-10">
              <label tabIndex={0} className="btn btn-error rounded-md text-black ">
               Catagory
               <AiFillCaretDown className="ml-5"/>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow font-bold mt-1 bg-orange-500 text-black rounded-box w-52">
                <li>
                 <Link to='/'>Buger</Link>
                </li>
                <li>
                <Link to='/breads'>Breads</Link>
                </li>
                <li>
                <Link to='/icccream'>Icc Cream</Link>
                </li>
                <li>
                <Link to='/pizza'>Pizza</Link>
                </li>
                <li>
                <Link to='/chicken'>Chiken</Link>
                </li>
                <li>
                <Link to='/sandwich'>Sandwich</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default HOme;
