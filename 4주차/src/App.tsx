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

function PrintError({ error }: { error: Error }) {
  return (
    <p role="alert">
      오류 발생! <span style={{ fontWeight: 500, color: "red" }}>"{error.message}"</span>
    </p>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
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
      const responseData = await response.json();

      try {
        if (response.ok) {
          if (!ignore) {
            setTodoList(responseData.items);
            console.log(responseData.items);
          }
        } else {
          throw new Error(responseData.message);
        }
      } catch (error) {
        setError(error as Error);
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

  const renderTodoList = () => {
    if (isLoading) return <LoadingMessage />;
    if (error) return <PrintError error={error} />;
    return todoList.map((listItem) => {
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
    });
  };

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
          <Status count={todoList.length} defaultChecked={true}>
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

      <ul className="doit-app-doit-list">{renderTodoList()}</ul>

      <ModalDialog isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
