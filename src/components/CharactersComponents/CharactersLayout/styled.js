import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 83.5%;
  height: 100%;
  display: flex;
  padding: 40px 0 16px 0;
  flex-direction: column;

  @media (max-height: 667px) {
    padding: 24px 0 24px 0;
  }
`
export const HeaderWrapper = styled.div`
  flex: 0 1 auto;
`
export const BodyWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Header = styled.h1`
  text-align: left;
  font: normal normal bold 32px/30px 'PT Sans Caption';
  letter-spacing: 0px;
  color: #555555;
  margin-bottom: 16px;
  @media (max-width: 600px) {
    font-size: 27px;
    line-height: 24px;
  }
`

export const Pagination = styled.div`
  height: 79px;
  width: 100%;
  flex: 1 1 90px;
  background: #ffffff;
`
