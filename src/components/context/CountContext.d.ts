declare module './components/context/CountContext'
export interface CountContextType {
  count: number
  setCount: (count: number) => void
}

export const CountContext: React.Context<CountContextType>
export const CountProvider: React.FC

export default CountContext
