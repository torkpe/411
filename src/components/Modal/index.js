import React from "react";
import PropTypes from 'prop-types';
import styles from "./index.module.scss";
import OutsideClickHandler from "react-outside-click-handler";

export default function Modal(props) {
  return (
    <div
      className={
        props.showModal
          ? `${styles.modalContainer} ${styles.modalContainer__visible}`
          : styles.modalContainer
      }
    >
      <OutsideClickHandler onOutsideClick={() => props.closeModal()}>
        <div className={styles.modalContent}>
          {props.children}
        </div>
      </OutsideClickHandler>
    </div>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func,
  showModal: PropTypes.bool,
  children: PropTypes.object,
}