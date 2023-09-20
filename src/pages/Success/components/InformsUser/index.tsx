import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  Element,
  IconPin,
  IconTimer,
  InformsUserContainer,
  SecoundElement,
  ThirdElement,
} from './styles'

export const InformsUser = () => {
  return (
    <InformsUserContainer>
      <Element>
        <IconPin>
          <MapPin weight="fill" />
        </IconPin>
        <div>
          <p>
            Entrega em <strong>Rua João Daniel Martinelli, 102 </strong>
          </p>
          <p>Farrapos - Porto Alegre, RS</p>
        </div>
      </Element>

      <SecoundElement>
        <IconTimer>
          <Timer weight="fill" />
        </IconTimer>
        <div>
          <p>Previsão de entrega</p>
          <strong>20 min - 30 min</strong>
        </div>
      </SecoundElement>

      <ThirdElement>
        <IconTimer>
          <CurrencyDollar weight="fill" />
        </IconTimer>
        <div>
          <p>Pagamento na entrega</p>
          <strong>Cartão de Crédito</strong>
        </div>
      </ThirdElement>
    </InformsUserContainer>
  )
}
