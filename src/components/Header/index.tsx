import { NavLink } from 'react-router-dom'
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
        <nav>
          <HeaderInformation>
            <NavLink to="/" title="Coffe Delivery">
              <img src={Logo} alt="Copo de café com escrita coffe delivery" />
            </NavLink>

            <ButtonsContainer>
              <SpanButtonMap>
                <MapPin weight="fill" />
                Aurora, CE
              </SpanButtonMap>

              <SpanButtonCart>
                <NavLink to="/checkout" title="Ver carrinho">
                  <ShoppingCart
                    color={defaultTheme['yellow-dark']}
                    weight="fill"
                  />
                </NavLink>
              </SpanButtonCart>
            </ButtonsContainer>
          </HeaderInformation>
        </nav>
      </header>
    </>
  )
}
