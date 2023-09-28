import { NavLink } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'
import { defaultTheme } from '../styles/themes/default'
import {
  ButtonsContainer,
  HeaderInformation,
  SpanButtonMap,
  SpanButtonCart,
  Count,
} from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CountContext } from '../context/CountContext'

export const Header = () => {
  const globalCountContext = useContext(CountContext)

  if (!globalCountContext) {
    return null
  }

  const { globalCount } = globalCountContext

  const totalCount = globalCount.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
  )

  console.log(totalCount)

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
                  {totalCount > 0 ? <Count> {totalCount} </Count> : null}
                </NavLink>
              </SpanButtonCart>
            </ButtonsContainer>
          </HeaderInformation>
        </nav>
      </header>
    </>
  )
}
