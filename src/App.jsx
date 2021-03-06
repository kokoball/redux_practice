import React, { useEffect } from 'react'
import { ThemeProvider } from '@emotion/react'
import { GlobalStyle } from '@style/GlobalStyle'
import theme from '@style/theme'
import { HomePage } from '@pages'
import { ProductionInformationPage } from '@pages'
import { OptionTablePage } from '@pages'
import { ItemInformationTablePage } from '@pages'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { loadProductions, loadTags } from './actions'

const App = () => {
  // const categories = fetchCategories()
  // console.log(categories)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadProductions())
    dispatch(loadTags())
  }, [])

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductionInformationPage />} />
            {/* <Route path="/option" element={<OptionTablePage />} />
            <Route path="/item" element={<ItemInformationTablePage />} /> */}
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
