import { createContext, useState } from 'react'

interface CoffeeCardProps {
  img: string
  name: string
  flavor: string
  description: string
  typeOne: string
  typeTwo?: string
  typeTree?: string
  coffeId: number
}

interface AddToCarContextProps {
  coffeeCart: CoffeeCardProps[]
  setCoffeeCart: React.Dispatch<React.SetStateAction<CoffeeCardProps[]>>
}
export const AddToCarContext = createContext<AddToCarContextProps | undefined>(
  undefined,
)

export const AddToCarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [coffeeCart, setCoffeeCart] = useState<CoffeeCardProps[]>([])

  console.log(coffeeCart)

  return (
    <AddToCarContext.Provider value={{ coffeeCart, setCoffeeCart }}>
      {children}
    </AddToCarContext.Provider>
  )
}
