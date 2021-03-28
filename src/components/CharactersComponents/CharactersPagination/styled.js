import styled from 'styled-components'
import COLORS from 'styles/colors'

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: calc((40px + 16px) * 9);
  border: none;
  @media (max-width: 700px) {
    width: calc(32px * 9);
  }
`

//MUST FIX THIS
export const ButtonWrapper = styled.div`
  height: 32px;
  width: 40px;
  display: flex;
  visibility: ${({ shouldRender = true }) =>
    shouldRender ? 'visible' : 'hidden'};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  @media (max-width: 700px) {
    width: 32px;
  }
  p {
    color: ${COLORS.smoke};
    font-family: PT Sans;
    font-weight: bold;
    font-size: 16px;
    :hover {
      color: ${COLORS.darkBlue};
    }
  }
`

export const PageButtonWrapper = styled(ButtonWrapper)`
  visibility: visible;
`

//MAYBE BUTTON EXTENSIONS?
export const Button = styled.button`
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 4px;
  border-color: transparent;
  outline-color: ${COLORS.darkBlue};
  color: ${({ selected }) => (selected ? COLORS.white : COLORS.darkSmoke)};
  background: ${({ selected }) =>
    selected ? COLORS.darkBlue : COLORS.darkSnow};
  &:hover {
    background: ${COLORS.darkBlueTransparent};
    color: ${COLORS.white};
    outline-color: ${COLORS.darkBlue};
  }
  &:active {
    border: 1px solid ${COLORS.darkBlue};
    outline-color: ${COLORS.darkBlue};
  }
`
