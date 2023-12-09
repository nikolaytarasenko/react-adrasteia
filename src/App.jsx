import Navbar from './scenes/Navbar'
import Hero from './scenes/Hero'

function App() {
    return (
        <div className="app">
            <Navbar />
            <div className="w-full px-[20px] xl:px-[48px] xl:mt-[110px]">
                <Hero />
            </div>
        </div>
    )
}

export default App
