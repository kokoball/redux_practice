import React, { useContext, useState } from 'react'
import * as S from './Style'
import { ItemInformationTable } from '@components/table'

const ItemInformationTablePage = () => {
  return (
    <>
      <S.PageWrapper>
        <ItemInformationTable />
      </S.PageWrapper>
    </>
  )
}

export default ItemInformationTablePage
