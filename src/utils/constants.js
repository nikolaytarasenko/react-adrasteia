import serviceIcon1 from '../assets/services-icon-1.png'
import serviceIcon2 from '../assets/services-icon-2.png'
import serviceIcon3 from '../assets/services-icon-3.png'
import serviceIcon4 from '../assets/services-icon-4.png'
import serviceIcon5 from '../assets/services-icon-5.png'
import serviceIcon6 from '../assets/services-icon-6.png'
import { FaArrowRight, FaCheck } from 'react-icons/fa6'
import { LuClipboardCheck } from 'react-icons/lu'
import { PiMegaphoneBold } from 'react-icons/pi'
import { BiBriefcase } from 'react-icons/bi'
import { FaRegStar } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'

export const services = [
    {
        image: serviceIcon1,
        title: 'Робота з інформацією',
        list: ['Пошук та перевірка інформації', 'Складання персонального досьє', 'Робота з репутацією (захист персональних даних)', 'Інформація за номером телефону']
    },
    {
        image: serviceIcon2,
        title: 'Розшук',
        list: ['Розшук боржника/шахрая', 'Пошук зниклих людей', 'Пошук родичів', 'Пошук майна']
    },
    {
        image: serviceIcon3,
        title: 'Стеження та спостереження',
        list: ['Зовнішнє спостереження', 'Контрспостереження', 'Перевірка способу життя дитини']
    },
    {
        image: serviceIcon4,
        title: 'Бізнес-розвідка',
        list: ['Перевірка контрагентів', 'Досьє на компанію', 'Позаштатна служба безпеки', 'Корпоративне розслідування']
    },
    {
        image: serviceIcon5,
        title: 'Супровід цивільних та кримінальних справ',
        list: ['Надання юридичної допомоги', 'Приватне розслідування злочинів', 'Сприяння правоохоронним органам', 'Досудове врегулювання конфліктів']
    },
    {
        image: serviceIcon6,
        title: 'Захист',
        list: ['Захист при шантажі та погрозах', 'Безпека сім\'ї та дітей', 'Допомога у підготовці та супровід у поїздках']
    },
]

export const work = [
    {
        id: '01',
        icon: FaArrowRight,
        title: 'Розбираємось у ситуації'
    },
    {
        id: '02',
        icon: LuClipboardCheck,
        title: 'Складаємо план дій'
    },
    {
        id: '03',
        icon: FaCheck,
        title: 'Надаємо результат'
    },
]

export const clients = [
    {
        icon: PiMegaphoneBold,
        title: 'Політики'
    },
    {
        icon: BiBriefcase,
        title: 'Бізнес'
    },
    {
        icon: FaRegStar,
        title: 'Селебріті'
    },
    {
        icon: FiUser,
        title: 'Приватні особи'
    }
]