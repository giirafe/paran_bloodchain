import React,{useEffect} from "react";
import disableScroll from 'disable-scroll';

//로그인 모달창
function Modal(props) {
 
    function closeModal() {
        props.closeModal();
    }


 
  return (
    <div className="Modal" onClick={closeModal}>
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <button id="modalCloseBtn" onClick={closeModal}>
          ✖
        </button>
        {props.children}
      </div>
    </div>
  );
}
 
export default Modal;