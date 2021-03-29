import styled from 'styled-components'
import COLORS from 'styles/colors'

export const Wrapper = styled.div`
  width: 100%;
`

export const Card = styled.div`
  display: flex;
  cursor: pointer;
  padding: 20px 24px;
  background-color: ${COLORS.white};
  margin-bottom: 8px;
  box-shadow: 0px 0px 5px ${COLORS.shadowBoxColor};
  transition: all 0.5s ease;
  justify-content: flex-start;
  border-radius: 4px;
  ${({ expanded }) =>
    expanded
      ? `
    cursor: default;
    overflow-y: auto;
    position: absolute;
    top: 66px;
    right: 0px;
    flex-direction: column;
    width: 50%;
    height: calc(100% - 69px - 79px);
    @media (max-width: 700px) {
      box-shadow: none;
      height: calc(100% - 69px);
      width: 100%;
    }
    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${COLORS.smoke};
    }
  `
      : `
    height: 88px;
    
    @media (max-width: 700px) {
      height: 72px;
      padding: 12px 16px;
    }`}
`

export const InnerRow = styled.div`
  display: flex;
  align-items: center;
  ${({ justifyBetween }) => justifyBetween && 'justify-content:space-between;'}
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
  flex: 1;
  text-align: left;
  flex-direction: column;
  ${({ required, expanded }) =>
    required &&
    expanded &&
    `
    width:100%;
    margin-bottom: 10px;
  `};
  @media (max-width: 700px) {
    ${({ required }) => !required && 'display:none'};
  }
`
export const ExpandedCardCol = styled(Col)`
  flex: 0 1 auto;
`

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
`

export const CloseWrapper = styled.div`
  letter-spacing: 0px;
  height: 100%;
  color: ${({ header }) => (header ? COLORS.smoke : COLORS.darkSmoke)};
  white-space: nowrap;
  cursor: pointer;
`

export const ThumbWrapper = styled.div`
  margin-right: 24px;
  ${({ size = 256 }) => `
    width: ${size}px;
    height: ${size}px;
    @media (max-width: 700px) {
      width: ${size / 2}px;
      height: ${size / 2}px;
    }
  `}
`
export const Thumbnail = styled.img`
  ${({ size = 48 }) => `
    width: ${size}px;
    height: ${size}px;  
  `}
  margin-right: 24px;
  border-radius: 4px;
`

export const ExpandedCardThumbnail = styled(Thumbnail)`
  ${({ size = 48 }) => `
    @media (max-width: 700px) {
      width: ${size / 2}px;
      height: ${size / 2}px;
    };
  `}
`
