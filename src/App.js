import {RouterProvider} from "react-router-dom";
import "./App.css";
import {route} from "./Layout/Layout";
import {Provider} from "react-redux";
import store from "./Reducer/Store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={route} />
      </Provider>
    </div>
  );
}

export default App;
