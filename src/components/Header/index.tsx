import Logo from '../../assets/Logo.svg'
import { defaultTheme } from '../styles/themes/default'
import {
  ButtonsContainer,
  HeaderInformation,
  SpanButtonMap,
  SpanButtonCart,
} from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

export const Header = () => {
  return (
    <>
      <header>
        <HeaderInformation>
          <img src={Logo} alt="Copo de café com escrita coffe delivery" />
          <ButtonsContainer>
            <SpanButtonMap>
              <MapPin />
              Aurora, CE
            </SpanButtonMap>

            <SpanButtonCart>
              <ShoppingCart color={defaultTheme['yellow-dark']} />
            </SpanButtonCart>
          </ButtonsContainer>
        </HeaderInformation>
      </header>
    </>
  )
}
