import {RouterProvider} from "react-router-dom";
import "./App.css";
import {route} from "./Layout/Layout";
import {Provider} from "react-redux";
import store from "./Reducer/Store";
import {Toaster} from "react-hot-toast";

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={route} />
        <Toaster position="top-center" reverseOrder={false} />
      </Provider>
    </div>
  );
}

export default App;
