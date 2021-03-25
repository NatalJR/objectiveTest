import styled from 'styled-components'
import COLORS from 'styles/colors'

export const ButtonsWrapper = styled.div`
  display: flex;
`

export const ButtonWrapper = styled.div`
  height: 32px;
  width: 40px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;
  color: ${({ selected }) => (selected ? COLORS.white : COLORS.darkSmoke)};
  background: ${({ selected }) =>
    selected ? COLORS.darkBlue : COLORS.darkSnow};
  &:hover {
    background: ${COLORS.darkBlueTransparent};
    color: ${COLORS.white};
  }
`
