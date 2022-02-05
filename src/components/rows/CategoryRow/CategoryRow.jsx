import * as S from './Style'
import { CheckBox, Box } from '@components/base'

import { useDispatch } from 'react-redux'
import { setProductions } from '../../../actions'

const CategoryRow = ({ categories }) => {
  const dispatch = useDispatch()

  const removeCategory = (name) => {
    const nextCategories = categories.map((category) =>
      category.name !== name
        ? category
        : { ...category, checked: !category.checked },
    )

    dispatch(setProductions(nextCategories))
  }

  return (
    <S.CategoryRowWrapper>
      <Box width={'50%'} height={300}>
        <CheckBox categories={categories} />
      </Box>
      <Box width={'50%'} height={300}>
        <S.SelectedCategories>
          {categories.map(
            ({ name, checked }) =>
              checked && (
                <li key={name} onClick={() => removeCategory(name)}>
                  {name}
                </li>
              ),
          )}
        </S.SelectedCategories>
      </Box>
    </S.CategoryRowWrapper>
  )
}

CategoryRow.propTypes = {}

export default CategoryRow
