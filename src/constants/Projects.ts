import type { ProjectItem } from '../types/ProjectItem';

export const projects: ProjectItem[] = [
    {
        title: 'My Portfolio',
        description:
            "Personal portfolio site built with Vue 3 showcasing the timeline of my career and projects I've been a part of.",
        startDate: '',
        endDate: '2024',
        link: ''
    },
    {
        title: 'Please The Gods',
        description:
            'Turn-based indie RPG developed during and after Oulu Game Lab which was a part of my engineering studies.',
        startDate: '2018-01-01',
        endDate: '2019-01-01',
        link: 'https://store.steampowered.com/app/1040080/Please_The_Gods/',
        company: 'OGL | Surma Games'
    },
    {
        title: 'Polar Ignite, Unite, Vantage M/V, Grit X',
        description: 'Feature development and testing for multiple Polar watches.',
        startDate: '2018-01-01',
        endDate: '2020-01-01',
        link: 'https://www.polar.com/fi/vantage-series',
        company: 'Polar Electro Oy'
    },
    {
        title: 'Polar Flow web service',
        description: 'Feature development for Polar Flow service. Maps, charts, EU GDPR and other features and fixes.',
        startDate: '',
        endDate: '2021',
        link: 'https://flow.polar.com/',
        company: 'Polar Electro Oy'
    },
    {
        title: 'Blog post: Pointer events for smart TVs',
        description:
            "A blog post on Sofia Digital's site telling about pointer events on smart TV applications and also featuring a small tutorial.",
        startDate: '',
        endDate: '2023',
        link: 'https://sofiadigital.com/pointer-events-for-smart-tv-applications/',
        company: 'Sofia Digital'
    },
    {
        title: 'Thesis',
        description: `Thesis I did as a part of my studies at Oulu University of Applied Sciences
        "Tuotantosuunnitelman laatiminen pienelle peliyritykselle"`,
        startDate: '',
        endDate: '2019',
        link: 'https://urn.fi/URN:NBN:fi:amk-2019053113739',
        academia: true
    }
];
