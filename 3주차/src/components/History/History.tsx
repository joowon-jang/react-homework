import HistoryButton from "../HistoryButton/HistoryButton";
import CSS from "./History.module.css";

interface HistoryPropsType {
  gameHistory: PlayerType[][];
  gameIndex: number;
  handleClick: (index: number) => () => void;
}

const History = ({ gameHistory, gameIndex, handleClick }: HistoryPropsType) => {
  return (
    <div className={CSS.component}>
      <ol>
        {gameHistory.map((_, index) => {
          const buttonLabel = index === 0 ? "게임 시작" : `게임 #${index}`;
          const isDisabled = gameIndex === index;

          return (
            <li key={index}>
              <HistoryButton buttonLabel={buttonLabel} isDisabled={isDisabled} handleClick={handleClick(index)} />
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default History;
