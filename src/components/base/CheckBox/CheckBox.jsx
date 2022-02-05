import PropTypes from 'prop-types'
import * as S from './Style'

import { useDispatch } from 'react-redux'
import { setProductions } from '../../../actions'

const CheckBox = ({ categories }) => {
  const dispatch = useDispatch()

  const checkHandler = ({ target }) => {
    const nextCategories = categories.map((category) =>
      category.name === target.value
        ? { ...category, checked: !category.checked }
        : category,
    )
    console.log(nextCategories)

    dispatch(setProductions(nextCategories))
  }

  return (
    <>
      {categories.map(({ name, checked }) => (
        <S.CheckBoxWrapper key={name}>
          <label className="innerBox">
            <input
              type="checkbox"
              value={name}
              checked={checked}
              onChange={checkHandler}
            />
            <S.SpanItem>{name}</S.SpanItem>
          </label>
        </S.CheckBoxWrapper>
      ))}
    </>
  )
}

CheckBox.propTypes = {
  categories: PropTypes.array,
  setCategories: PropTypes.func,
}

export default CheckBox
