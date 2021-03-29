import {
  HeaderWrapper,
  LogoWrapper,
  MenuWrapper,
  Candidate,
  Service,
  Identification,
  Menu,
} from './styled'

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper src="/logo.png" alt="logo" />
      <MenuWrapper>
        <Identification>
          <Candidate>Natal Pereira Junior</Candidate>
          <Service>Teste de Front-End</Service>
        </Identification>
        <Menu>
          <p>CB</p>
        </Menu>
      </MenuWrapper>
    </HeaderWrapper>
  )
}

export default Header
