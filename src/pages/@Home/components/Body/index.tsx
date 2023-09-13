import { Minus, Plus, ShoppingCart } from 'phosphor-react'

interface BodyHomeProps {
  img: string
  name: string
  flavor: string
  description: string
}

export const BodyHome = ({ img, name, flavor, description }: BodyHomeProps) => {
  return (
    <>
      <img src={img} alt={description} />
      <h3>{name}</h3>
      <p>{flavor}</p>

      <div>
        <span>
          R$ <strong>9,90</strong>
        </span>
        <div>
          <Minus weight="bold" />
          <span>1</span>
          <Plus weight="bold" />
        </div>

        <span>
          <ShoppingCart weight="fill" />
        </span>
      </div>
    </>
  )
}
