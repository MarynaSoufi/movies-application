import React from 'react'
import { MainNav, SubNav } from './'
import { useThemeContext } from '../../contexts'
import styles from './Header.module.scss';
import classNames from 'classnames'
const Header = ({children}) => {
  const {isDarkMode} = useThemeContext();
  return ( 
  <header className={classNames(styles.header, `${isDarkMode ? styles.header__dark : styles.header__light}`)}>
        <div className={styles.header__wrapper}>
          <MainNav/>
          <SubNav/>
          {children}
      </div>
  </header>
  
)

}

export default Header;
