import "./App.scss";
import Button from "./components/Button/Button";
import Checkbox from "./components/Checkbox/Checkbox";
import Archive from "./components/Archive/Archive";
import Status from "./components/Status/Status";
import Logo from "./components/Logo/Logo";
import TextInput from "./components/TextInput/TextInput";
import Time from "./components/Time/Time";
import DoIt from "./components/DoIt/DoIt";
import Select from "./components/Select/Select";
import ModalDialog from "./components/ModalDialog/ModalDialog";
import { useEffect, useId, useState } from "react";

function App() {
  const id1 = useId();
  const id2 = useId();
  const [isModalOpen, setIsModalOpen] = useState(true);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <div id="app">
      <Button modifier="primary">레이블</Button>
      <Button modifier="secondary">레이블</Button>
      <Button modifier="disabled">레이블</Button>
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
      <TextInput type="text" placeholder="오늘 할 일 제목" id={id1} />
      <TextInput
        type="textarea"
        placeholder="오늘 할 일 내용을 입력합니다. 할 일 내용은 가급적 간결하고 이해하기 쉽게 요약해서 작성합니다."
        id={id2}
      />
      <Time />
      <DoIt
        content={{
          title: "할 일",
          description: "할 일 내용을 작성합니다.",
          noon: "오전",
          startTime: "07:30",
          endTime: "09:00",
        }}
      />
      <Select />
      <ModalDialog isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
