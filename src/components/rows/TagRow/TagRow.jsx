import { FilterInput, TagList } from '@components/domain'
import {
  useTableDispatch,
  useTableState,
} from '@contexts/TableContext/TableProvider'
import { CHANGE_PRODUCTION_INFORMATION } from '@contexts/TableContext/types'

import { useDispatch } from 'react-redux'
import { changeProductionsTags } from '../../../actions'

const TagRow = ({ tags }) => {
  const dispatch = useDispatch()

  const removeTag = (e) => {
    const removedTag = e.target.innerHTML
    const changeTags = tags.filter((tag) => tag !== removedTag)

    dispatch(changeProductionsTags(changeTags))
  }

  return (
    <>
      <FilterInput selectedTags={tags} removeTag={removeTag} />
      <TagList tags={tags} removeTag={removeTag} />
    </>
  )
}
export default TagRow
