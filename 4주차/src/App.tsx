import Checkbox from "./components/Checkbox/Checkbox";
import "./App.scss";
import Button from "./components/Button/Button";

function App() {
  return (
    <div>
      <Button type="primary">레이블</Button>
      <Button type="secondary">레이블</Button>
      <Button type="disabled">레이블</Button>
      <Checkbox />
    </div>
  );
}

export default App;
