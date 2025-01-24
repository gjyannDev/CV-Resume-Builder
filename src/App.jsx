import Header from './components/Header'
import GeneralInformation from './components/GeneralInfo'
import Education from './components/Education'
import Experience from './components/Experience'

function App() {
  return (
    <div className="main__container">
      <Header />
      <main className="main__contents">
        <section className='input__form-container'>
          <GeneralInformation />
          <Education />
          <Experience />
        </section>
      </main>
    </div>
  )
}

export default App
