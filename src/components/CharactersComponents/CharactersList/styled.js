import styled from 'styled-components'
import COLORS from 'styles/colors'

export const Wrapper = styled.div`
  width: 100%;
`

export const Table = styled.div`
  width: 100%;
  display: flex;
  height: 88px;
  flex: 1 1 auto;
  overflow-y: scroll;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${COLORS.smoke};
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`

export const HeaderRow = styled.div`
  display: flex;
  justify-content: flex-start;
  height: fit-content;
  padding: 0 24px;
  margin-bottom: 9px;
  @media (max-width: 700px) {
    margin-left: 64px;
  }
`

export const Text = styled.p`
  text-align: left;
  ${({ header, characterName }) => {
    const lineHeight = `${characterName ? 22 : 16}px`
    const fontSize = `${header ? 12 : characterName ? 16 : 14}px`
    const font = `font: normal normal ${
      characterName ? 'bold' : 'normal'
    } ${fontSize}/${lineHeight} PT Sans;`
    return font
  }}
  letter-spacing: 0px;
  color: ${({ header }) => (header ? COLORS.smoke : COLORS.darkSmoke)};
`

export const Col = styled.div`
  display: flex;
  width: 33%;
  text-align: left;
  flex: 1;
  flex-direction: column;
  @media (max-width: 700px) {
    ${({ required }) => !required && 'display:none'};
  }
`
