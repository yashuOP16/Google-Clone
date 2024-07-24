import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ViewData from './Components/ViewContacts/ViewData'
import Header from './Components/Header/Header'
import { Route, Routes } from 'react-router'
import AddContact from './Components/AddContacts/AddContact'
import EditContacts from './Components/EditContacts/EditContacts'
import Form from './Components/Form/Form.jsx'




function App() {
  

  return (
    <>
      <Header />

      <Routes >
        <Route path="/" element={<AddContact />} />
        <Route path="/viewData" element={<ViewData />} />
        <Route path='/Form' element={<Form />} />
        <Route path="/edit" element={<EditContacts /> } />
      </Routes>
    </>
  )
}

export default App
