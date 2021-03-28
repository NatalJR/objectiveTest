import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  @media (max-width: 700px) {
    margin-bottom: 32px;
    align-items: center;
  }
`
export const Label = styled.div`
  text-align: left;
  font: normal normal bold 16px/24px 'PT Sans Caption';
  letter-spacing: 0px;
  color: #555555;
  margin-bottom: 8px;
  @media (max-width: 700px) {
    font-size: 14px;
    line-height: 16px;
    text-align: center;
  }
`

export const SearchInputWrapper = styled.div`
  width: 295px;
  display: flex;
  height: 32px;
  align-items: center;
  padding: 4px 16px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;

  input {
    border: 0;
    outline: 0;
    width: 255px;
    line-height: 17px;
    font: normal normal normal 14px/19px 'PT Sans';
    ::placeholder {
      text-align: left;
      font-style: italic;
      letter-spacing: 0px;
      color: #8e8e8e;
    }
  }
`
