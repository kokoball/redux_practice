import React, { useContext, useState } from 'react'
import * as S from './Style'
import { ProductionInformation } from '@components/table'

const ProductionInformationPage = () => {
  return (
    <>
      <S.PageWrapper>
        <ProductionInformation />
      </S.PageWrapper>
    </>
  )
}

export default ProductionInformationPage
