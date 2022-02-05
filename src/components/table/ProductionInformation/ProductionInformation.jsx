import { Input, Table, TableBody } from '@components/base'
import { CategoryRow, TagRow } from '@components/rows'
import { ImageContainer } from '@components/domain'

// import {
//   useTableDispatch,
//   useTableState,
// } from '@contexts/TableContext/TableProvider'

// import { CHANGE_PRODUCTION_INFORMATION } from '@contexts/TableContext/types'
// import { useState } from 'react'
import * as S from './Style'

import { useSelector, useDispatch } from 'react-redux'
import { changeProudctionInformation } from '../../../actions'

const ProductionInformation = ({}) => {
  const dispatch = useDispatch()

  const { production } = useSelector((state) => ({
    productionName: state.productionName,
    categories: state.categories,
    // productionDescribe: state.productionDescribe,
    // productionCode: state.productionCode,
    // thumbnail: state.thumbnail,
    // mainImages: state.mainImages,
  }))
  console.log(production, 777)

  // const { productionInformation } = useTableState()
  // const {
  //   productionName,
  //   productionDescribe,
  //   productionCode,
  //   thumbnail,
  //   mainImages,
  // } = productionInformation

  const handleChange = (e) => {
    const { name, value } = e.target

    dispatch(changeProudctionInformation({ name, value }))

    // dispatch({
    //   type: CHANGE_PRODUCTION_INFORMATION,
    //   payload: { [name]: value },
    // })
  }
  const setImage = (imageType) => {
    return (images) => {
      dispatch(changeProudctionImage({ imageType, images }))
      // dispatch({
      //   type: CHANGE_PRODUCTION_INFORMATION,
      //   payload: { [imageType]: images },
      // })
    }
  }

  return (
    <>
      <Table thead={'상품 기본 정보'}>
        <TableBody title={'카테고리*'} width="100%">
          {/* <CategoryRow production={production} /> */}
        </TableBody>
        <TableBody title={'필터 태그'}>{/* <TagRow /> */}</TableBody>
        <TableBody title={'상품명*'}>
          <S.Row>
            <Input
              placeholder={'상품명을 입력해 주세요.'}
              value={production}
              name={'productionName'}
              onChange={handleChange}
              width={250}
              required={true}
            />
            {/* <S.ProductionCode>
              <S.Head>상품 코드</S.Head>
              <S.Contents>{productionCode}</S.Contents>
            </S.ProductionCode> */}
          </S.Row>
        </TableBody>
        {/* <TableBody title={'상품 구성 소개 정보*'}>
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
        </TableBody> */}
      </Table>
    </>
  )
}

ProductionInformation.propTypes = {}

export default ProductionInformation
