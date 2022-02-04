import React, { useContext, useState } from 'react'
import * as S from './Style'
import { OptionTable } from '@components/table'

const OptionTablePage = () => {
  return (
    <>
      <S.PageWrapper>
        <OptionTable />
      </S.PageWrapper>
    </>
  )
}

export default OptionTablePage
