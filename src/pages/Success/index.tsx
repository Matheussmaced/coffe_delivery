import { InformsUser } from './components/InformsUser'
import Ilustration from '../../assets/Illustration.svg'
import { InformsUserContainer, SuccessContainer } from './styles'

export const Success = () => {
  return (
    <SuccessContainer>
      <h2>Uhu! Pedido confirmado</h2>
      <h5>Agora é só aguardar que logo o café chegará até você</h5>
      <InformsUserContainer>
        <InformsUser />
        <img src={Ilustration} alt="Homem em uma moto" />
      </InformsUserContainer>
    </SuccessContainer>
  )
}
