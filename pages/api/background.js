const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'University of West Of Scotland',
                degree: "Master's Degree, Computer System Engineering",
                detail: "Master's Degree in Computer System Engineering from University of West Of Scotland.",
                year: '2022-2024'
            },
            {
                id: 1,
                title: 'Arid Agriculture university',
                degree: 'Bachelor of Science',
                detail: "Completed Bachelor of Science from Arid Agriculture university.",
                year: '2019-2021'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Allusion Tech',
                role: 'Frontend Developer',
                url: 'https://jmm.ltd/',
                desc: 'As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.',
                year: '02/2023 - Present',
                location: 'Luton, UK'
            },
            {
                id: 2,
                title: 'Greegs',
                role: 'JR Frontend Developer',
                url: 'no website',
                desc: 'As a JR Frontend Developer, I learned how to use React & JavaScript to build interactive websites.',
                year: '19/2022 - 01/2023',
                location: 'London, UK'
            },
            {
                id: 3,
                title: 'Subway',
                role: 'Supervisor',
                url: 'https://www.encoderbytes.com/',
                desc: "Managed cash register operations, including handling transactions, providing accurate change, and balancing cash drawers",
                year: '04/2020 - 08/2021',
                location: 'London, UK'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
