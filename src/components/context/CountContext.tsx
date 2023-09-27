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
  const counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  // iniciar com 0
  const [globalCount, setGlobalCount] = useState(counts)

  return (
    <CountContext.Provider value={{ globalCount, setGlobalCount }}>
      {children}
    </CountContext.Provider>
  )
}
