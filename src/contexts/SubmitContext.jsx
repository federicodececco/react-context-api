import { createContext, useState, useContext } from 'react'

const SubmitContext = createContext(false)

function SubmitProvider({ children }) {
  const [trigger, setTrigger] = useState(false)
  return (
    <SubmitContext.Provider value={{ trigger, setTrigger }}>
      {children}
    </SubmitContext.Provider>
  )
}
function useSubmitProvider() {
  const context = useContext(SubmitContext)
  return context
}

export { SubmitProvider, useSubmitProvider }
