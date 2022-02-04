import { Input, Table, TableBody } from '@components/base'
import { CategoryRow, TagRow } from '@components/rows'
import { ImageContainer } from '@components/domain'

import {
  useTableDispatch,
  useTableState,
} from '@contexts/TableContext/TableProvider'
import { CHANGE_PRODUCTION_INFORMATION } from '@contexts/TableContext/types'
import { useContext, useEffect, useState } from 'react'
import { OptionContext } from '@contexts/OptionContext/OptionProvider'
import * as S from './Style'

const ProductionInformation = ({}) => {
  const { productionInformation } = useTableState()
  const {
    productionName,
    productionDescribe,
    productionCode,
    thumbnail,
    mainImages,
  } = productionInformation
  const dispatch = useTableDispatch()
  const [stock, setStock] = useState(0)
  const { options } = useContext(OptionContext)

  useEffect(() => {
    if (options && options[0]) {
      setStock(options.reduce((acc, { totalStock }) => totalStock + acc, 0))
    }
  }, [options])

  const handleChange = (e) => {
    const { name, value } = e.target

    dispatch({
      type: CHANGE_PRODUCTION_INFORMATION,
      payload: { [name]: value },
    })
  }
  const setImage = (imageType) => {
    return (images) => {
      dispatch({
        type: CHANGE_PRODUCTION_INFORMATION,
        payload: { [imageType]: images },
      })
    }
  }

  return (
    <>
      <Table thead={'상품 기본 정보'}>
        <TableBody title={'카테고리*'} width="100%">
          <CategoryRow />
        </TableBody>
        <TableBody title={'필터 태그'}>
          <TagRow />
        </TableBody>
        <TableBody title={'상품명*'}>
          <S.Row>
            <Input
              placeholder={'상품명을 입력해 주세요.'}
              value={productionName}
              name={'productionName'}
              onChange={handleChange}
              width={250}
              required={true}
            />
            <S.ProductionCode>
              <S.Head>상품 코드</S.Head>
              <S.Contents>{productionCode}</S.Contents>
            </S.ProductionCode>
          </S.Row>
        </TableBody>
        <TableBody title={'상품 구성 소개 정보*'}>
          <Input
            onChange={handleChange}
            value={productionDescribe}
            name={'productionDescribe'}
            placeholder={'상품 구성 소개 정보를 입력해 주세요.'}
            required={true}
          />
        </TableBody>
        <TableBody title={'상품 썸네일'}>
          <ImageContainer
            isMultiple={false}
            itemList={thumbnail}
            setItemList={setImage('thumbnail')}
          />
        </TableBody>
        <TableBody title={'상품 상품 대표 이미지'}>
          <ImageContainer
            itemList={mainImages}
            setItemList={setImage('mainImages')}
          />
        </TableBody>
        <TableBody title={'상품 총 재고*'}>{stock}개</TableBody>
      </Table>
    </>
  )
}

ProductionInformation.propTypes = {}

export default ProductionInformation
