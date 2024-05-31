import "./App.css";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import { List } from "./components/List/List";
import { Parrafo } from "./components/Parrafo/Parrafo";
function App() {
  return (
    <>
      <div className="flex space-x-4 flex-col">
        <div className="text-base">
          <Button />
        </div>
        <div className="text-base">
          <Input />
        </div>
        <div className="text-base">
          <List />
        </div>
        <div className="text-base">
          <Parrafo/>
        </div>
      </div>
    </>
  );
}

export default App;
