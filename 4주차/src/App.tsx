import "./App.scss";
import Button from "./components/Button/Button";
import Checkbox from "./components/Checkbox/Checkbox";
import Archive from "./components/Archive/Archive";
import Status from "./components/Status/Status";
import Logo from "./components/Logo/Logo";
import TextInput from "./components/TextInput/TextInput";

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
      <ul>
        <li>
          <Status count={3}>모두</Status>
        </li>
        <li>
          <Status count={0}>모두</Status>
        </li>
        <li>
          <Status count={1}>모두</Status>
        </li>
        <li>
          <Status count={2}>모두</Status>
        </li>
      </ul>
      <TextInput type="text" placeholder="오늘 할 일 제목" />
      <TextInput
        type="textarea"
        placeholder="오늘 할 일 내용을 입력합니다. 할 일 내용은 가급적 간결하고 이해하기 쉽게 요약해서 작성합니다."
      />
    </div>
  );
}

export default App;
