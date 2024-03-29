import { useState, useEffect, createContext } from 'react'
import { Navbar, Hero, About, Services, Work, Clients, Contacts, Footer } from './scenes'
import Modal from './components/Modal'

export const ModalContext = createContext([])

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [scrollTop, setScrollTop] = useState(0)
    const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(true)

    useEffect(() => {
        isModalOpen ?
            document.documentElement.classList.add('overflow-hidden') :
            document.documentElement.classList.remove('overflow-hidden')
    }, [isModalOpen])

    useEffect(() => {
        const onScroll = e => {
            setScrollTop(e.target.documentElement.scrollTop)

            scrollTop > 50 ?
                setIsScrollButtonVisible(false) :
                setIsScrollButtonVisible(true)
        }

        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    }, [scrollTop])

    return (
        <ModalContext.Provider value={[isModalOpen, setIsModalOpen]}>
            <div className="app">
                <Navbar />
                <div className="w-full px-[20px] xl:px-[48px] xl:mt-[110px]">
                    <Hero isScrollButtonVisible={isScrollButtonVisible} />
                    <About />
                    <Services />
                    <Work />
                </div>
                <Clients />
                <Contacts />
                <Footer />
                <Modal
                    isOpen={isModalOpen}
                    closeModal={() => setIsModalOpen(false)}
                />
            </div>
        </ModalContext.Provider>
    )
}

export default App