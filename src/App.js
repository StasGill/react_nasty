import { useState } from "react";
import "./App.scss";
import MainScreen from "./components/main_screen/MainScreen";
import SideBar from "./components/side_bar/SideBar";
import { module_data } from "./data/data";

function App() {
  const [isActive, setActive] = useState(true);
  const [data, setData] = useState([...module_data]);

  return (
    <div className="App">
      <SideBar
        isActive={isActive}
        setActive={setActive}
        data={data}
        setData={setData}
      />
      <MainScreen
        isActive={isActive}
        setActive={setActive}
        data={data}
        setData={setData}
      />
    </div>
  );
}

export default App;
