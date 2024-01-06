import Navbar from './scenes/Navbar'
import Hero from './scenes/Hero'
import About from './scenes/About'
import Services from './scenes/Services'
import Work from './scenes/Work'

function App() {
    return (
        <div className="app">
            <Navbar />
            <div className="w-full px-[20px] xl:px-[48px] xl:mt-[110px]">
                <Hero />
                <About />
                <Services />
                <Work />
            </div>
        </div>
    )
}

export default App
