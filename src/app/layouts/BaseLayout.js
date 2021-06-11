import React from 'react'
import { Header, Footer } from '../components/layout'
import  { TheThemeToggle } from '../components/theme'
import { ThemeProvider } from '../contexts'
const BaseLayout = ({children}) => {
  return (
    <>
     <ThemeProvider>
        <Header>
        <TheThemeToggle/>
        </Header>
        
        <main>
          {children}
        </main>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default BaseLayout;
