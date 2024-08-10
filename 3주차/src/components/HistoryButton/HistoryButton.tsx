import CSS from "./HistoryButton.module.css";

interface HistoryButtonPropsType {
  buttonLabel: string;
  isDisabled: boolean;
  handleClick: () => void;
}

const HistoryButton = ({ buttonLabel, isDisabled, handleClick }: HistoryButtonPropsType) => {
  return (
    <button className={CSS.component} type="button" disabled={isDisabled} onClick={handleClick}>
      {buttonLabel}
    </button>
  );
};

export default HistoryButton;
