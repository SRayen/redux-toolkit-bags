import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/CartSlice";
import { closeModal } from "../features/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside>
      <div className="modal-container">
        <div className="modal">
          <h4>remove all items from your shopping cart ?</h4>
          <div className="btn-container">
            <button
              type="button"
              className="btn confirm-btn"
              onClick={() => {
                dispatch(clearCart());
                dispatch(closeModal());
              }}
            >
              confirm
            </button>
            
          </div>
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-confirm"
              onClick={() => dispatch(closeModal())}
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
