import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { SIGN_IN, SIGN_UP } from "../../utils/constants";
import styles from "./index.module.scss";

export default function Header(props) {
  
  return (
    <nav className={styles.navBar}>
      <Link
        to={""}
        onClick={() => props.toggleAuth(SIGN_UP)}
        className={`${styles.navBarLink}`}
      >
        Sign up
      </Link>
      <Link
        onClick={() => props.toggleAuth(SIGN_IN)}
        to={""} className={styles.navBarLink}>
        Sign in
      </Link>
    </nav>
  );
}

Header.propTypes = {
  toggleAuth: PropTypes.func
}