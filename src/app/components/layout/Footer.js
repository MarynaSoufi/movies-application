import React from 'react'
import styles from './Footer.module.scss';
import classNames from 'classnames'
import { useThemeContext } from '../../contexts'
const Footer = () => {
  const {isDarkMode} = useThemeContext();
  return (
    <footer className={classNames(styles.footer, `${isDarkMode ? styles.footer__dark : styles.footer__light}`)}>
        <p className={styles.footer__text}>&copy; Maryna Soufi</p>
    </footer>
  )
}

export default Footer;
