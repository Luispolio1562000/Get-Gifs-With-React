import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GiftExpertApp } from './GiftExpertApp'
import '../styles.css'



//* Se dispara dos veces porque: el strictmode en desarrollo identifica probblemas con el lifecycle de los componentes.
//* 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GiftExpertApp />
  </StrictMode>,
)
