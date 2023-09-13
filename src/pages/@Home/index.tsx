import { ShoppingCart } from 'phosphor-react'
import {
  HomeContainer,
  TitleAndSubTitleContainer,
  InformationContainer,
} from './styles'

import ImgCoffe from '../../assets/Imagem-coffe.svg'

export const Home = () => {
  return (
    <>
      <HomeContainer>
        <InformationContainer>
          <TitleAndSubTitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </TitleAndSubTitleContainer>
          <div>
            <ShoppingCart />
            <span>Compra simples e segura</span>

            <ShoppingCart />
            <span>Entrega rápida e rastreada</span>

            <ShoppingCart />
            <span>Embalagem mantém o café intacto</span>

            <ShoppingCart />
            <span>O café chega fresquinho até você</span>
          </div>
        </InformationContainer>
        <img src={ImgCoffe} alt="Imagem de um café escrito coffe delivery" />
      </HomeContainer>
    </>
  )
}
