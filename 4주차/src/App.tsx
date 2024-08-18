import { useEffect, useState } from "react";
import "./App.scss";
import Logo from "./components/Logo/Logo";
import formatDate from "./utils/formatDate";
import Button from "./components/Button/Button";
import PlusImage from "/plus.svg";
import Status from "./components/Status/Status";
import DoIt from "./components/DoIt/DoIt";
import Divider from "./components/Divider/Divider";
import ModalDialog from "./components/ModalDialog/ModalDialog";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dateOfToday = new Date();

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
    <div id="app" className="doit-app">
      <Logo type="stereo" style={{ marginBottom: "44px" }} />

      <h1 className="doit-app__title">우리, 오늘 뭐할까?</h1>
      <time className="doit-app__date">{formatDate(dateOfToday)}</time>

      <Button modifier="primary" onClick={openModal} style={{ marginBottom: "32px" }}>
        <img src={PlusImage} alt="플러스" /> 생각났어?
      </Button>

      <ul className="doit-app-status-list">
        <li>
          <Status count={0} defaultChecked={true}>
            모두
          </Status>
        </li>
        <Divider type="vertical" style={{ height: "12px" }} />
        <li>
          <Status count={0}>할일</Status>
        </li>
        <li>
          <Status count={0}>한일</Status>
        </li>
        <li>
          <Status count={0}>보관</Status>
        </li>
      </ul>

      <ul className="doit-app-doit-list">
        <li>
          <DoIt
            content={{
              title: "동네 주민 모임",
              description: "동네 주민 정기 모임일. 저녁 식사 후, 모임 회의 가질 예정.",
              noon: "오후",
              startTime: "07:00",
              endTime: "09:30",
            }}
          />
        </li>
        <li>
          <DoIt
            content={{
              title: "동네 주민 모임",
              description: "동네 주민 정기 모임일. 저녁 식사 후, 모임 회의 가질 예정.",
              noon: "오후",
              startTime: "07:00",
              endTime: "09:30",
            }}
          />
        </li>
        <li>
          <DoIt
            content={{
              title: "동네 주민 모임",
              description: "동네 주민 정기 모임일. 저녁 식사 후, 모임 회의 가질 예정.",
              noon: "오후",
              startTime: "07:00",
              endTime: "09:30",
            }}
          />
        </li>
      </ul>

      <ModalDialog isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
