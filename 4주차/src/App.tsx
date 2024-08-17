import "./App.scss";
import Button from "./components/Button/Button";
import Checkbox from "./components/Checkbox/Checkbox";
import Archive from "./components/Archive/Archive";
import Logo from "./components/Logo/Logo";

function App() {
  return (
    <div>
      <Button type="primary">레이블</Button>
      <Button type="secondary">레이블</Button>
      <Button type="disabled">레이블</Button>
      <Checkbox />
      <Archive />
      <Logo type="mono" />
      <Logo type="stereo" />
    </div>
  );
}

export default App;
