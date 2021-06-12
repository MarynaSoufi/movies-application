import React from 'react'
import {
  NavLink,
} from "react-router-dom";
import * as Routes from '../../routes'
import logo from '../../assets/film-roll.svg'
import styles from './MainNav.module.scss';
const MainNav = () => {
  return (
    <nav className={styles.navigation}>
    <ul className={styles.navigation__list}>
    <li className={styles.navigation__list__item}>
        <NavLink exact to={Routes.HOME}>
        <img className={styles.navigation__list__item__icon} src={logo} alt="logo"></img>
        </NavLink>
      </li>
      <li className={styles.navigation__list__item}>
        <NavLink exact to={Routes.HOME} activeClassName="active" >
        Home
        </NavLink>
      </li>
      <li className={styles.navigation__list__item}>
        <NavLink exact to={Routes.MOVIES} activeClassName="active">Movies</NavLink>
      </li>
      <li className={styles.navigation__list__item}>
        <NavLink exact to={Routes.SHOWS} activeClassName="active" >TV-Shows</NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default MainNav;
