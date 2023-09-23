import { createContext } from 'react'

interface CoffeeCardContextProps {
  img: string
  name: string
  flavor: string
  description: string
  typeOne: string
  typeTwo?: string
  typeTree?: string
  coffeId: number
}

export const CoffeeCardContext = createContext<
  CoffeeCardContextProps | undefined
>(undefined)

export const CoffeCardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const CoffeeCard = {
    img: '',
    name: '',
    flavor: '',
    description: '',
    typeOne: '',
    typeTwo: '',
    typeTree: '',
    coffeId: 1,
  }

  return (
    <CoffeeCardContext.Provider value={CoffeeCard}>
      {children}
    </CoffeeCardContext.Provider>
  )
}
