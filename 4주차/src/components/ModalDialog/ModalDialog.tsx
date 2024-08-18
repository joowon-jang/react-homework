import { useId } from "react";
import ReactModal from "react-modal";
import Button from "../Button/Button";
import Select from "../Select/Select";
import TextInput from "../TextInput/TextInput";
import Time from "../Time/Time";
import "./ModalDialog.scss";

interface ModalDialogPropsType {
  isOpen: boolean;
  onSubmit?: () => void;
  onClose: () => void;
}

const ModalDialog = ({ isOpen, onSubmit, onClose }: ModalDialogPropsType) => {
  const titleId = useId();
  const descriptionId = useId();

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="등록할 오늘 할 일을 입력하세요."
      overlayClassName="modal-overlay"
      className="modal-content">
      <form className="modal-content-form">
        <div>
          <label htmlFor={titleId} className="modal-content-form__label">
            오늘 뭐할래?
          </label>
          <TextInput type="text" placeholder="오늘 할 일 제목" id={titleId} />
        </div>

        <div>
          <label htmlFor={descriptionId} className="modal-content-form__label">
            간단히 적어볼까?
          </label>
          <TextInput
            type="textarea"
            placeholder="오늘 할 일 내용을 입력합니다. 할 일 내용은 가급적 간결하고 이해하기 쉽게 요약해서 작성합니다."
            id={descriptionId}
          />
        </div>

        <fieldset>
          <legend className="modal-content-form__label">언제 할거야?</legend>
          <div role="group" className="modal-content-form-time">
            <Select />
            <Time />
          </div>
        </fieldset>

        <div className="modal-content-form-button-wrapper">
          <Button modifier="primary" type="submit" onClick={onSubmit} style={{ flexGrow: 1 }}>
            저장
          </Button>
          <Button modifier="secondary" onClick={onClose} style={{ flexGrow: 1 }}>
            취소
          </Button>
        </div>
      </form>
    </ReactModal>
  );
};

export default ModalDialog;
