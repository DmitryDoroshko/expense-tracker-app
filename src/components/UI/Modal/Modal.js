import "./Modal.css";
import {MODAL_ROOT} from "../../../utils/constants";
import * as ReactDOM from "react-dom";

const Modal = ({showModal, titleContent, bodyContent, footerContent, onHideModal}) => {
  if (!showModal) {
    return null;
  }

  return ReactDOM.createPortal((
    <div className="modal">
      <div className="modalContent">
        <div className="modalHeader">
          <h4 className="modalTitle">
            {titleContent || "Error"}
          </h4>
        </div>
        <div className="modalBody">
          {bodyContent || "Error occurred..."}
        </div>
        <div className="modalFooter">
          <button className="button" onClick={() => onHideModal()}>
            {footerContent || "Cancel"}
          </button>
        </div>
      </div>
    </div>), MODAL_ROOT);
};

export default Modal;