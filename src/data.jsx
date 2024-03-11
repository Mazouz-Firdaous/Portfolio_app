import{
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
} from 'react-icons/fa';
import{ FiFileText, FiUser, FiExternalLink} from 'react-icons/fi';
import { FaHandPointRight } from "react-icons/fa";


import Theme1 from './assets/violet.jpg';
import Theme2 from './assets/red.jpg';
import Theme3 from './assets/blue.jpg';
import Theme4 from './assets/blueciel.jpg';
import Theme5 from './assets/green.jpg';
import Theme6 from './assets/grey.png';
import Theme7 from './assets/orange.jpeg';
import Theme8 from './assets/redvio.jpg';
import Theme9 from './assets/rose.jpg';
import Theme10 from './assets/yellow.jpeg';

import Work1 from '../src/assets/Work1.png';
import Work2 from '../src/assets/Work2.PNG';
import Work3 from '../src/assets/Work3.PNG';
import Work4 from '../src/assets/Work4.PNG';
import Work5 from '../src/assets/Work5.png';

export const links = [
    {
        id: 1,
        name: 'Home',
        icon: <FaHome className='nav__icon' />,
        path: '',
    },
    {
        id: 2,
        name: 'About',
        icon: <FaUser className='nav__icon' />,
        path: 'about',
    },
    {
        id: 3,
        name: 'Portfolio',
        icon: <FaFolderOpen className='nav__icon' />,
        path: 'portfolio',
    },
    {
        id: 4,
        name: 'Contact',
        icon: <FaEnvelopeOpen className='nav__icon' />,
        path: 'contact',
    },
];
export const personalInfo = [
    {
        id: 1,
        title: 'First Name: ',
        description: 'Firdaous',
    },
    {
        id: 2,
        title: 'Last Name: ',
        description: 'Mazouz',
    },
    {
        id: 3,
        title: 'Age: ',
        description: '21 Years',
    },
    {
        id: 4,
        title: 'Nationality: ',
        description: 'Morrocan',
    },{
        id: 5,
        title: 'Freelance: ',
        description: 'Available',
    },{
        id: 6,
        title: 'Address: ',
        description: 'Tangier',
    },
    {
        id: 7,
        title: 'Phone: ',
        description: '+212 694831846',
    },
    {
        id: 8,
        title: 'Email: ',
        description: 'mzfirdaws1@gmail.com',
    },
    {
        id: 9,
        title: 'Skype: ',
        description: 'Mazouz.Firdaous',
    },
    {
        id: 10,
        title: 'Languages: ',
        description: 'Arabe, French, English, Italien',
    },

];

export const stats = [
    {
        id: 1,
        no: '2+',
        title: 'Years of <br/> Experience',
    },
    {
        id: 2,
        no: '4+',
        title: 'Completed <br/> Projects',
    },
    {
        id: 3,
        no: '18+',
        title: 'Happy <br/> Customers',
    },
    {
        id: 4,
        no: '0+',
        title: 'Awards <br/> Won',
    },
    
];
export const skills = [
    {
        id: 1,
        title: 'Html',
        percentage: '99',
    },
    {
        id: 2,
        title: 'Css',
        percentage: '70',
    },
    {
        id: 3,
        title: 'Javascript',
        percentage: '50',
    },
    {
        id: 4,
        title: 'PHP',
        percentage: '66',
    },
    {
        id: 5,
        title: 'Python',
        percentage: '50',
    },
    {
        id: 6,
        title: 'Wordpress',
        percentage: '90',
    },
    {
        id: 7,
        title: 'Jquery',
        percentage: '30',
    },
    {
        id: 8,
        title: 'Laravel',
        percentage: '80',
    },
    {
        id: 9,
        title: 'React',
        percentage: '80',
    },
    {
        id: 10,
        title: 'Vue.js',
        percentage: '55',
    },
];
export const resume = [
    {
        id: 1,
        category: 'experience',
        icon: <FaBriefcase/>,
        year: '2023-2024',
        title: 'Web Developer <span> Envato </span>',
        desc: 'Lorem ipsum dolorsit amet , consecteur tempor incidenti ut laborel adipiscing elit',
    },
    {
        id: 2,
        category: 'experience',
        icon: <FaBriefcase/>,
        year: '2022-2023',
        title: 'UI/UX Designer <span> ThemeBoxing </span>',
        desc: 'Lorem dolorsit amet , consecteur tempor incidenti ut laborel adipiscing elit , tempor inchidute',
    },
    {
        id: 3,
        category: 'experience',
        icon: <FaBriefcase/>,
        year: '2021-2022',
        title: 'Web Developer <span> Envato </span>',
        desc: 'Lorem ipsum dolorsit amet , consecteur tempor incidenti ut laborel adipiscing elit',
    },
    {
        id: 4,
        category: 'education',
        icon: <FaGraduationCap/>,
        year: '2022-2024',
        title: 'Specialized Development Technician Diploma Digital Option Web Full Stack<span> ISTA ISMONTIC Tanger</span>',
        desc: 'Lorem ipsum dolorsit amet ',
    },
    {
        id:5,
        category: 'education',
        icon: <FaGraduationCap/>,
        year: '2021-2022',
        title: 'BAC+1 Option Sciences Physics <span> Faculty Of Sciences Tetouan</span>',
        desc: 'Lorem ipsum dolorsit amet ',
    },
    {
        id: 6,
        category: 'education',
        icon: <FaGraduationCap/>,
        year: '2020-2021',
        title: 'Baccalaureate In Physical Sciences French Option <span> Abi Abbas El Sebti High School Tangier </span>',
        desc: 'Lorem ipsum dolorsit amet ',
    },
];
export const portfolio = [
    {
        id:1,
        img: Work1,
        title: 'Portfolio',
        lien: 'https://Mazouz-Firdaous.github.io/Portfolio_app',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project :',
                desc: 'Web Site',
            },
            {
                icon: <FiUser/>,
                title: 'Client :',
                desc: 'Dribble',
            },
            {
                icon: <FaCode/>,
                title: 'Language :',
                desc: 'React Js , Html, Css, Bootstrap',
            },
            {
                icon: <FaCode/>,
                title: 'Preview :',
                desc: 'www.dribble.com',
            },
            
        ]
    },
    {
        id:2,
        img: Work2,
        title: 'Shopping Web Site',
        lien: '#',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project :',
                desc: 'Web Site',
            },
            {
                icon: <FiUser/>,
                title: 'Client :',
                desc: 'Dribble',
            },
            {
                icon: <FaCode/>,
                title: 'Language :',
                desc: 'Laravel , Html, Css, Bootstrap, Javascript',
            },
            {
                icon: <FaCode/>,
                title: 'Preview :',
                desc: 'www.dribble.com',
            },
            
        ]
    },
    {
        id:3,
        img: Work3,
        title: 'Shopping Web Site (Wordpress) ',
        lien: 'http://fm-shop.great-site.net/',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project :',
                desc: 'Web Site',
            },
            {
                icon: <FiUser/>,
                title: 'Client :',
                desc: 'Dribble',
            },
            {
                icon: <FaCode/>,
                title: 'Language :',
                desc: 'Laravel , Html, Css, Bootstrap, Javascript',
            },
            {
                icon: <FaCode/>,
                title: 'Preview :',
                desc: 'www.dribble.com',
            },
            
        ]
    },
    {
        id:4,
        img: Work4,
        title: 'Kick-Boxing Web Site',
        lien: 'https://Mazouz-Firdaous.github.io/KickBoxing_ap',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project :',
                desc: 'Web Site',
            },
            {
                icon: <FiUser/>,
                title: 'Client :',
                desc: 'Dribble',
            },
            {
                icon: <FaCode/>,
                title: 'Language :',
                desc: 'React Js, Html, Css, Bootstrap, Javascript',
            },
            {
                icon: <FaCode/>,
                title: 'Preview :',
                desc: 'www.dribble.com',
            },
            
        ]
    },
    {
        id:5,
        img: Work5,
        title: 'Contact Page',
        lien: 'https://Mazouz-Firdaous.github.io/CC1_react',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project :',
                desc: 'Web Site',
            },
            {
                icon: <FiUser/>,
                title: 'Client :',
                desc: 'Dribble',
            },
            {
                icon: <FaCode/>,
                title: 'Language :',
                desc: 'React Js , Html, Css, Bootstrap, Javascript',
            },
            {
                icon: <FaCode/>,
                title: 'Preview :',
                desc: 'www.dribble.com',
            },
           
        ]
    },
    {
        id:1,
        img: Work1,
        title: 'Portfolio Web Site',
        lien: 'https://Mazouz-Firdaous.github.io/Portfolio_app',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project :',
                desc: 'Web Site',
            },
            {
                icon: <FiUser/>,
                title: 'Client :',
                desc: 'Dribble',
            },
            {
                icon: <FaCode/>,
                title: 'Language :',
                desc: 'React Js , Html, Css, Bootstrap, Javascript',
            },
            {
                icon: <FaCode/>,
                title: 'Preview :',
                desc: 'www.dribble.com',
            },
            
        ]
    },
];
export const themes =[
    {
        id: 1,
        img: Theme1,
        color: 'hsl(252, 35%, 51%)',
    },
    {
        id: 2,
        img: Theme2,
        color: 'hsl(4, 93%, 54%)',
    },
    {
        id: 3,
        img: Theme3,
        color: 'hsl(225, 73%, 57%)',
    },
    {
        id: 4,
        img: Theme4,
        color: 'hsl(43, 74%, 49%)',
    },
    {
        id: 5,
        img: Theme5,
        color: 'hsl(339, 81%, 66%)',
    },
    {
        id: 6,
        img: Theme6,
        color: 'rgb(209, 209, 177)',
    },
    {
        id: 7,
        img: Theme7,
        color: 'hsl(80, 61%, 50%)',
    },
    {
        id: 8,
        img: Theme8,
        color: 'hsl(271, 76%, 53%)',
    },
    {
        id: 9,
        img: Theme9,
        color: 'hsl(252, 35%, 51%)',
    },
    {
        id: 10,
        img: Theme10,
        color: 'hsl(19, 96%, 52%)',
    },
]