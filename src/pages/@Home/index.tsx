import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  HomeContainer,
  TitleAndSubTitleContainer,
  InformationContainer,
  IconCart,
  IconTimer,
  IconPackage,
  IconCoffe,
  ColumOne,
  ColumTwo,
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

          <ColumOne>
            <IconCart>
              <ShoppingCart weight="fill" />
            </IconCart>
            <span>Compra simples e segura</span>

            <IconPackage>
              <Package weight="fill" />
            </IconPackage>
            <span>Embalagem mantém o café intacto</span>
          </ColumOne>

          <ColumTwo>
            <IconTimer>
              <Timer weight="fill" />
            </IconTimer>
            <span>Entrega rápida e rastreada</span>

            <IconCoffe>
              <Coffee weight="fill" />
            </IconCoffe>
            <span>O café chega fresquinho até você</span>
          </ColumTwo>
        </InformationContainer>

        <img src={ImgCoffe} alt="Imagem de um café escrito coffe delivery" />
      </HomeContainer>
    </>
  )
}
