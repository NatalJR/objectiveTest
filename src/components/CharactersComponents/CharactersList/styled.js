import styled from 'styled-components'

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
  width: 100%;
  height: 88px;
  padding: 20px 24px;
  background-color: #ffffff;
  justify-content: flex-start;
  margin-bottom: 8px;
  border-radius: 4px;
`

export const HeaderRow = styled(Row)`
  height: auto;
  padding: 0 24px;
  background-color: transparent;
  margin-bottom: 9px;
  border-radius: unset;
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

export const Wrapper = styled.div`
  width: 100%;
`
