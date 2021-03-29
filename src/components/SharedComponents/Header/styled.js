import styled from 'styled-components'
import COLORS from 'styles/colors'

export const HeaderWrapper = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  padding: 20px 24px;
  justify-content: space-between;
`

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Candidate = styled.p`
  text-align: left;
  font: normal normal bold 14px/20px PT Sans Caption;
  letter-spacing: 0px;
  margin-right: 5px;
  color: ${COLORS.darkSmoke};
  @media (max-width: 700px) {
    font: normal normal bold 12px/16px PT Sans Caption;
  }
`

export const Identification = styled.div`
  display: flex;
  margin-right: 5px;
  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  background: ${COLORS.snow};
  border-radius: 4px;
  p {
    font: normal normal bold 15px/10px PT Sans Caption;
    letter-spacing: 0px;
    color: ${COLORS.darkSmoke};
  }
`

export const Service = styled.p`
  text-align: left;
  font: normal normal normal 14px/20px PT Sans Caption;
  letter-spacing: 0px;
  color: ${COLORS.darkSmoke};
  @media (max-width: 700px) {
    font: normal normal normal 12px/16px PT Sans Caption;
  }
`

export const LogoWrapper = styled.img`
  width: 96px;
  height: 24px;
`
