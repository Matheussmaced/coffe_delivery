declare module './components/context/CountContext'
export interface CountContextType {
  globalCount: number
  setGlobalCount: (count: number) => void
}

export const CountContext: React.Context<CountContextType>
export const CountProvider: React.FC

export default CountContext
