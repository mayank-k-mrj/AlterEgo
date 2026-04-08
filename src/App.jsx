import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import OpeningPage from './components/OpeningPage'
import FormPage from './components/FormPage'
import Chat from './components/Chat'
import MainBox from './components/MainBox'
import { useState, useEffect } from 'react'
import About from './components/About'
import MainBody from './components/MainBody'
import Contact from './components/Contact'
import ContactMe from './components/ContactMe'

function App() {

  const [name, setName] = useState('XYZ');
  const [tone, setTone] = useState('funny');
  const [lang, setLang] = useState('hinglish');
  const [more, setMore] = useState('');

  const route = createBrowserRouter([
    {
      path: "/",
      element: <OpeningPage />,
      children: [
        {
          index: true,
          element: <div>
            <MainBody/>
            <Contact/>
          </div>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/contact",
          element: <ContactMe/>
        }
      ]
    },
    {
      path: "/form",
      element: <FormPage tone={tone} setTone={setTone} lang={lang} setLang={setLang} more={more} setMore={setMore} name={name} setName={setName} />
    },
    {
      path: "/chat",
      element: <MainBox tone={tone} lang={lang} more={more} name={name} />
    }
  ])


  return (
    <div>
      <RouterProvider router={route} />
    </div>
  )
}

export default App