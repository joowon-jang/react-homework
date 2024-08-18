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

interface todoListType {
  id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
}

const ENDPOINT = import.meta.env.VITE_PB_URL + "/api/collections/todoItem/records/";

function LoadingMessage() {
  return <p>데이터 로딩 중...</p>;
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoList, setTodoList] = useState<todoListType[]>([]);

  const dateOfToday = new Date();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    let ignore = false;
    setIsLoading(true);

    // todoList 불러오기
    const fetchTodoList = async () => {
      const response = await fetch(ENDPOINT);

      if (response.ok) {
        if (!ignore) {
          const responseData = await response.json();
          setTodoList(responseData.items);
          console.log(responseData.items);
        }
      } else {
        console.error("알 수 없는 오류로 데이터를 불러오지 못했습니다.");
      }

      setIsLoading(false);
    };

    fetchTodoList();

    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
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
        {isLoading ? (
          <LoadingMessage />
        ) : (
          todoList.map((listItem) => {
            return (
              <li key={listItem.id}>
                <DoIt
                  content={{
                    title: listItem.title,
                    description: listItem.description,
                    startTime: new Date(listItem.startTime),
                    endTime: new Date(listItem.endTime),
                  }}
                />
              </li>
            );
          })
        )}
      </ul>

      <ModalDialog isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
