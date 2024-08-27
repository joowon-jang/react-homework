import { FormEvent, useEffect, useState } from "react";
import "./App.scss";
import Button from "./components/Button/Button";
import DoIt from "./components/DoIt/DoIt";
import Logo from "./components/Logo/Logo";
import ModalDialog from "./components/ModalDialog/ModalDialog";
import StatusList from "./components/StatusList/StatusList";
import ENDPOINT from "./constants";
import formatDate from "./utils/formatDate";
import timeStringToDate from "./utils/timeStringToDate";
import PlusImage from "/plus.svg";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoList, setTodoList] = useState<TodoListType[]>([]);
  const [status, setStatus] = useState<StatusType>("모두");
  const [filteredList, setFilteredList] = useState<TodoListType[]>(todoList);

  /* ------------------------------------ ㅡ ----------------------------------- */
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      (deferredPrompt as BeforeInstallPromptEvent).prompt();
      (deferredPrompt as BeforeInstallPromptEvent).userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        setDeferredPrompt(null);
      });
    }
  };

  /* ------------------------------------ ㅡ ----------------------------------- */

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

  useEffect(() => {
    switch (status) {
      case "모두":
        setFilteredList(todoList);
        break;
      case "할일":
        setFilteredList(todoList.filter((item) => !item.done));
        break;
      case "한일":
        setFilteredList(todoList.filter((item) => item.done));
        break;
      case "보관":
        setFilteredList(todoList.filter((item) => item.archived));
        break;

      default:
        break;
    }
  }, [status, todoList]);

  const handleStatus = (status: StatusType) => () => {
    setStatus(status);
  };

  const handleCreate = async (bodyData: object) => {
    setIsLoading(true);

    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });
    const responseData = await response.json();

    if (response.ok) {
      setIsLoading(false);
      return responseData;
    } else {
      setIsLoading(false);
      throw new Error(responseData.message);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);

    const title = formData.get("text-input");
    const description = formData.get("textarea-input");
    const noon = formData.get("noon");
    const startTime = String(formData.get("start-time"));
    const endTime = String(formData.get("end-time"));

    const bodyData = {
      title,
      description,
      startTime: timeStringToDate(startTime, noon as NoonType).toISOString(),
      endTime: timeStringToDate(endTime, noon as NoonType).toISOString(),
    };

    handleCreate(bodyData)
      .then((res) => {
        setTodoList([...todoList, res]);
        closeModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleUpdate = async (
    index: number,
    id: string,
    { done, archived }: { done?: boolean; archived?: boolean }
  ) => {
    const url = `${ENDPOINT}${id}`;

    // 낙관적 업데이트
    setTodoList((prevList) => {
      const newList = prevList.slice();
      if (done !== undefined) newList[index].done = done;
      if (archived !== undefined) newList[index].archived = archived;

      return newList;
    });

    await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ done, archived }),
    });
  };

  const renderTodoList = () => {
    if (isLoading) return <LoadingMessage />;
    if (error) return <PrintError error={error} />;
    return filteredList.map(({ id, title, description, startTime, endTime, done, archived }, index) => {
      return (
        <li key={id}>
          <DoIt
            content={{
              title,
              description,
              startTime: new Date(startTime),
              endTime: new Date(endTime),
              done,
              archived,
            }}
            onUpdate={handleUpdate.bind(null, index, id)}
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

      <Button modifier={isLoading ? "disabled" : "primary"} onClick={openModal} style={{ marginBottom: "32px" }}>
        <img src={PlusImage} alt="플러스" /> 생각났어?
      </Button>

      <StatusList list={todoList} onChange={handleStatus} />

      <ul className="doit-app-doit-list">{renderTodoList()}</ul>

      <ModalDialog isLoading={isLoading} isOpen={isModalOpen} onSubmit={handleSubmit} onClose={closeModal} />

      <button
        style={{
          marginBlock: "20px",
          padding: "8px",
          borderRadius: "8px",
          backgroundColor: "#e2ebfaff",
          color: "#0760fbff",
        }}
        onClick={handleInstallClick}>
        홈 화면에 추가
      </button>
    </div>
  );
}

/* ----------------------------------------------------------------------- */

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

export default App;
