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
              <button type="button" disabled={isDisabled} onClick={handleClick(index)}>
                {buttonLabel}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default History;
