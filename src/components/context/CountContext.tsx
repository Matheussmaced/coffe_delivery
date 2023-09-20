import { createContext, useState } from 'react'

export interface CountContextType {
  globalCount: number
  setGlobalCount: (count: number) => void
}

export const CountContext = createContext<CountContextType | undefined>(
  undefined,
)

interface childrenProps {
  children: React.ReactNode
}

export const CountProvider = ({ children }: childrenProps) => {
  const [globalCount, setGlobalCount] = useState(1)

  return (
    <CountContext.Provider value={{ globalCount, setGlobalCount }}>
      {children}
    </CountContext.Provider>
  )
}
