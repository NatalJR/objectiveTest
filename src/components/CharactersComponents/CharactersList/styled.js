import styled from 'styled-components'
import COLORS from 'styles/colors'

export const Wrapper = styled.div`
  width: 100%;
`

export const Table = styled.div`
  width: 100%;
  display: flex;
  height: 384px;
  flex: 1 1 auto;
  overflow-y: auto;
  flex-direction: column;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-height: 667px) {
    height: 320px;
  }

  @media (max-height: 360px) {
    height: 80px;
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`

export const Row = styled.div`
  display: flex;
  height: 88px;
  padding: 20px 24px;
  background-color: #ffffff;
  justify-content: flex-start;
  margin-bottom: 8px;
  border-radius: 4px;
  box-shadow: 0px 0px 5px ${COLORS.shadowBoxColor};
`

export const InnerRow = styled.div`
  display: flex;
  align-items: center;
  vertical-align: middle;
`

export const HeaderRow = styled(Row)`
  height: auto;
  padding: 0 24px;
  background-color: transparent;
  margin-bottom: 9px;
  border-radius: unset;
  box-shadow: unset;
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
  @media (max-width: 600px) {
    ${({ required }) => !required && 'display:none'};
  }
`

export const Thumbnail = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 24px;
`
