import React, { createContext, useState } from 'react'

const FormContext = createContext()

export default function ContextForForm({children}) {
    
    const [userId, setUserId] = useState("")

  return (
    <FormContext.Provider value={{userId, setUserId}}>
        {children}
    </FormContext.Provider>
  )
}

export {FormContext}