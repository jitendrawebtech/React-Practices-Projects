import './App.css'
import ContactContent from './components/contactContent/ContactContent'
import ContactForm from './components/ContactForm/ContactForm'
import Header from './components/Header'

function App() {
  return (
    <div className='container'>
      <Header />
      <ContactContent />
      <ContactForm />
    </div>
  )
}

export default App
