import React, { createContext, useState } from 'react'

const FormContext = createContext()

export default function ContextForForm({children}) {
    
    const [userId, setUserId] = useState("")

    const basePhotoPath = 'http://localhost:8000'

  return (
    <FormContext.Provider value={{userId, setUserId, basePhotoPath}}>
        {children}
    </FormContext.Provider>
  )
}

export {FormContext}