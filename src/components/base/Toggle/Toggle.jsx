import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { useToggle } from '@hooks'
import { AlertModal } from '@components/domain'
import * as S from './Style'

const Toggle = forwardRef(
  ({ isToggle, disabled, onChange, name, ...props }, ref) => {
    const [checked, onToggle] = useToggle({ initialState: isToggle })
    const handleChange = (e) => {
      onToggle()
      onChange && onChange(e)
    }

    return (
      <S.ToggleContainer {...props}>
        <S.ToggleInput
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          ref={ref}
          name={name}
        />
        <S.ToggleSwitch />
      </S.ToggleContainer>
    )
  },
)

Toggle.displayName = 'Toggle'

Toggle.propTypes = {
  isToggle: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

Toggle.defaultProps = {
  isToggle: false,
  disabled: false,
}
export default Toggle
