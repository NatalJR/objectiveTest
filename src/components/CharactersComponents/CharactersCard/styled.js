import styled from 'styled-components'
import COLORS from 'styles/colors'

export const Wrapper = styled.div`
  width: 100%;
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
  @media (max-width: 700px) {
    height: 72px;
    padding: 12px 16px;
  }
`

export const InnerRow = styled.div`
  display: flex;
  align-items: center;
  vertical-align: middle;
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

export const Thumbnail = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 24px;
  border-radius: 4px;
`
