// Підключаємо технологію express для back-end сервера
const { template } = require('@babel/core')
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Dmytro',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Ukraine, Kyiv',
}

var footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {
    layout: 'basic',
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
			  work on a new project I learn the domain and try to understand the idea of the project. Good team
			  player, every colleague is a friend to me.`,
      },

      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
			  tournament position, goals etc), analyzing by simple mathematics models and preparing probability
			  for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS code & NPM',
          point: 9,
          isTop: false,
        },
        {
          name: 'Git & Terminal',
          point: 7,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'hobby#1',
          isMain: true,
        },
        {
          name: 'hobby#2',
          isMain: false,
        },
        {
          name: 'hobby#3',
          isMain: false,
        },
      ],
    },

    footer,
  })
})

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      educations: [
        {
          name: 'УАБС НБУ',
          isEnd: true,
        },
        {
          name: 'КНЕУ',
          isEnd: true,
        },
        {
          name: 'IT Brains',
          isEnd: false,
        },
      ],

      certificates: [
        {
          name: 'certificate#1',
          id: 100,
        },
        {
          name: 'certificate#2',
          id: 200,
        },
        {
          name: 'certificate#3',
          id: 300,
        },
      ],
    },

    footer,
  })
})

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      work: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectsAmount: 3,
          projects: [
            {
              name: 'Resume',
              about:
                'Airbnb competitor. High-load application for searching apartments',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Nodejs',
                },
              ],
              stacksAmount: 3,
              awards: [
                {
                  name: 'Background verification - is a feature that provides users to prove that they are real persons',
                },
                {
                  name: 'Preparing SEO optimized pages. The automated process of getting data for the app from documents.',
                },
              ],
              awardsAmount: 2,
            },
          ],
        },
      ],
    },

    footer,
  })
})

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    // ↙ сюди вводимо JSON дані
    layout: 'basic',

    page: {
      title: 'Person page',
    },

    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engeneer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  gittitle:
                                    'software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/bio', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('bio', {
    layout: 'basic',

    page: {
      title: 'Bio page',
    },

    name: 'Albert Einstein',
    birthdate: 'March 14, 1879',
    birthplace:
      'Ulm, Kingdom of Württemberg, German Empire',
    deathdate: 'April 18, 1955',
    deathplace: 'Princeton, New Jersey, United States',
    nationality: 'Swiss, German, American',
    occupation: 'Theoretical Physicist',
    known_for: [
      'Theory of Relativity',
      'E=mc²',
      'Photoelectric Effect',
      'Brownian Motion',
    ],
    education: [
      {
        degree: 'Doctor of Philosophy',
        field: 'Physics',
        institution: 'University of Zurich',
        year: 1905,
      },
    ],
    notable_publications: [
      {
        title: 'On the Electrodynamics of Moving Bodies',
        year: 1905,
        publisher: 'Annalen der Physik',
      },
      {
        title:
          'Does the Inertia of a Body Depend Upon Its Energy Content?',
        year: 1905,
        publisher: 'Annalen der Physik',
      },
    ],
    partners: [
      {
        name: 'Mileva Marić',
        relationship: 'First wife',
        years: '1903-1919',
      },
      {
        name: 'Elsa Einstein',
        relationship:
          "Second wife, also Einstein's first cousin",
        years: '1919-1936',
      },
    ],
    awards: [
      {
        title: 'Nobel Prize in Physics',
        year: 1921,
        description:
          'Awarded for his explanation of the photoelectric effect',
      },
    ],
    influences: [
      'Isaac Newton',
      'James Clerk Maxwell',
      'Hermann Minkowski',
    ],
    influenced: [
      'Niels Bohr',
      'Erwin Schrödinger',
      'Werner Heisenberg',
      'Richard Feynman',
    ],
    quotes: [
      'Imagination is more important than knowledge.',
      'I have no special talent. I am only passionately curious.',
      'The important thing is not to stop questioning.',
      'The most beautiful thing we can experience is the mysterious. It is the source of all true art and all science.',
    ],
    major_discoveries: [
      {
        title: 'Photoelectric Effect',
        year: 1905,
        description:
          'Einstein explained the photoelectric effect, where electrons are emitted from a metal surface when it is illuminated by light.',
      },
    ],
    contributions: {
      title: 'Inventions',
      description:
        'Leonardo designed and invented a wide variety of machines and devices, including a helicopter, a diving suit, and a self-propelled cart. Many of his inventions were centuries ahead of their time.',
      year: 'Late 15th to early 16th century',
      field: 'Invention',
    },
  })
})

router.get('/program', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('program', {
    layout: 'basic',

    page: {
      title: 'Program page',
    },

    program: {
      excursion: {
        name: 'Cultural Tour',
        location: {
          city: 'Paris',
          country: 'France',
        },
        date: '2023-06-15',
        program: [
          {
            name: 'Museum Visit',
            type: 'Art',
            duration: 3,
            details: {
              museum: {
                name: 'The Louvre',
                location: {
                  address: 'Rue de Rivoli',
                  city: 'Paris',
                  country: 'France',
                },
                exhibits: [
                  {
                    name: 'Mona Lisa',
                    artist: 'Leonardo da Vinci',
                    description: 'Iconic portrait painting',
                    audio_guide: true,
                  },
                  {
                    name: 'Winged Victory of Samothrace',
                    artist: null,
                    description:
                      'Ancient Greek statue of Nike, the goddess of victory',
                    audio_guide: true,
                  },
                ],
              },
              guide: {
                name: 'Francois',
                language: 'French',
                rating: 4.8,
              },
            },
          },
          {
            name: 'Cultural Show',
            type: 'Music and Dance',
            duration: 2,
            details: {
              venue: {
                name: 'Moulin Rouge',
                location: {
                  address: '82 Boulevard de Clichy',
                  city: 'Paris',
                  country: 'France',
                },
              },
              performers: [
                {
                  name: 'Mireille Mathieu',
                  type: 'Chanson singer',
                },
                {
                  name: "Ballet de l'Opéra National de Paris",
                  type: 'Classical ballet company',
                },
              ],
              guide: {
                name: 'Sophie',
                language: 'English',
                rating: 4.6,
              },
            },
          },
        ],
      },
    },
  })
})

router.get('/web', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('web', {
    layout: 'basic',

    page: {
      title: 'Web page',
    },

    web: {
      languages: [
        {
          name: 'HTML',
          version: 'HTML5',
          description:
            'Hypertext Markup Language is the standard markup language for creating web pages and web applications.',
          elements: [
            {
              name: 'div',
              description:
                'Defines a division or a section in an HTML document.',
              attributes: [
                {
                  name: 'id',
                  description:
                    'Specifies a unique id for an HTML element.',
                },
                {
                  name: 'class',
                  description:
                    'Specifies one or more class names for an HTML element.',
                },
              ],
            },
            {
              name: 'p',
              description:
                'Defines a paragraph in an HTML document.',
              attributes: [
                {
                  name: 'id',
                  description:
                    'Specifies a unique id for an HTML element.',
                },
                {
                  name: 'class',
                  description:
                    'Specifies one or more class names for an HTML element.',
                },
              ],
            },
          ],
        },
        {
          name: 'CSS',
          version: 'CSS3',
          description:
            'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in HTML or XML.',
          properties: [
            {
              name: 'color',
              description: 'Sets the color of the text.',
              values: [
                {
                  value: 'red',
                  description:
                    'Sets the text color to red.',
                },
                {
                  value: 'blue',
                  description:
                    'Sets the text color to blue.',
                },
              ],
            },
            {
              name: 'background-color',
              description:
                'Sets the background color of an element.',
              values: [
                {
                  value: 'white',
                  description:
                    'Sets the background color to white.',
                },
                {
                  value: 'black',
                  description:
                    'Sets the background color to black.',
                },
              ],
            },
          ],
        },
        {
          name: 'JavaScript',
          version: 'ES6',
          description:
            'JavaScript is a programming language used to create interactive effects within web browsers.',
          functions: [
            {
              name: 'alert()',
              description:
                'Displays an alert box with a specified message and an OK button.',
              parameters: [
                {
                  name: 'message',
                  type: 'string',
                  description:
                    'The message to display in the alert box.',
                },
              ],
            },
            {
              name: 'getElementById()',
              description:
                'Returns the element with the specified ID.',
              parameters: [
                {
                  name: 'id',
                  type: 'string',
                  description:
                    'The ID of the element to find.',
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

router.get('/facebook', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('facebook', {
    layout: 'basic',

    page: {
      title: 'Facebook page',
    },

    name: 'Facebook',
    users: [
      {
        id: 1,
        name: 'John Doe',
        gender: 'Male',
        age: 30,
        friends: [
          {
            id: 2,
            name: 'Jane Smith',
            gender: 'Female',
            age: 27,
            mutual_friends: [
              {
                id: 4,
                name: 'Samantha Lee',
                gender: 'Female',
                age: 25,
              },
            ],
          },
          {
            id: 5,
            name: 'Mike Williams',
            gender: 'Male',
            age: 28,
            mutual_friends: [
              {
                id: 7,
                name: 'David Kim',
                gender: 'Male',
                age: 29,
              },
            ],
          },
        ],
        groups: [
          {
            id: 1,
            name: 'Hiking Enthusiasts',
            description:
              'A group for people who love hiking and the great outdoors',
            members: [
              {
                id: 8,
                name: 'Sarah Johnson',
                gender: 'Female',
                age: 25,
              },
            ],
          },
          {
            id: 2,
            name: 'Foodies United',
            description:
              'A group for food lovers to share recipes and restaurant recommendations',
            members: [
              {
                id: 5,
                name: 'Mike Williams',
                gender: 'Male',
                age: 28,
              },
              {
                id: 8,
                name: 'Sarah Johnson',
                gender: 'Female',
                age: 25,
              },
            ],
          },
        ],
      },
      {
        id: 16,
        name: 'Amy Lee',
        gender: 'Female',
        age: 30,
        friends: [
          {
            id: 15,
            name: 'Peter Kim',
            gender: 'Male',
            age: 32,
            mutual_friends: [
              {
                id: 17,
                name: 'David Chen',
                gender: 'Male',
                age: 33,
              },
              {
                id: 19,
                name: 'Erica Wong',
                gender: 'Female',
                age: 29,
                mutual_friends: [
                  {
                    id: 20,
                    name: 'Alex Lee',
                    gender: 'Male',
                    age: 31,
                  },
                ],
              },
            ],
          },
        ],
        groups: [
          {
            id: 3,
            name: 'Travel Addicts',
            description:
              'A group for people who love to travel and explore new places',
            members: [
              {
                id: 22,
                name: 'Jackie Chen',
                gender: 'Female',
                age: 26,
              },
            ],
          },
          {
            id: 4,
            name: 'Pet Lovers',
            description:
              'A group for people who love their furry friends',
            members: [
              {
                id: 16,
                name: 'Amy Lee',
                gender: 'Female',
                age: 30,
              },
              {
                id: 25,
                name: 'John Smith',
                gender: 'Male',
                age: 33,
              },
            ],
          },
        ],
      },
    ],
  })
})

router.get('/mac', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('mac', {
    layout: 'basic',

    page: {
      title: 'Mac page',
    },

    name: 'Apple MacBook Pro',
    description: 'The ultimate notebook for power users',
    price: 1999.99,
    category: 'Computers & Tablets',
    features: {
      processor: {
        brand: 'Intel',
        model: 'Core i9',
        speed: '2.3 GHz',
        cores: 8,
        cache: '16 MB',
      },
      memory: {
        type: 'DDR4',
        size: '32 GB',
        speed: '2666 MHz',
      },
      storage: {
        type: 'SSD',
        size: '1 TB',
      },
      display: {
        size: '16 inches',
        resolution: '3072x1920',
        technology: 'Retina',
        color_space: 'P3',
        brightness: '500 nits',
        refresh_rate: '60 Hz',
      },
      graphics: {
        brand: 'AMD',
        model: 'Radeon Pro 5500M',
        memory: '4 GB GDDR6',
      },
      ports: [
        {
          type: 'Thunderbolt 3',
          count: 4,
          features: [
            'Charging',
            'DisplayPort',
            'Thunderbolt (up to 40 Gbps)',
            'USB 3.1 Gen 2 (up to 10 Gbps)',
          ],
        },
        {
          type: 'HDMI',
          count: 1,
        },
      ],
      battery: {
        type: 'Lithium Polymer',
        capacity: '100 Wh',
        life: 'Up to 11 hours',
      },
      weight: '4.3 pounds',
      dimensions: {
        height: '0.64 inch',
        width: '14.09 inches',
        depth: '9.68 inches',
      },
      operating_system: 'macOS',
      accessories: [
        {
          name: 'Apple Magic Keyboard',
          price: 99.99,
        },
        {
          name: 'Apple Magic Mouse 2',
          price: 79.99,
        },
        {
          name: 'USB-C to USB Adapter',
          price: 19.99,
        },
      ],
    },
  })
})

router.get('/car', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('car', {
    layout: 'basic',

    page: {
      title: 'Car page',
    },

    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'silver',
    features: {
      interior: {
        seats: {
          material: 'leather',
          color: 'black',
          heated: true,
          ventilated: true,
        },
        dashboard: {
          material: 'plastic',
          color: 'black',
          display: {
            type: 'LCD',
            size: 10.1,
            resolution: '1280x720',
            touchscreen: true,
          },
        },
        audio: {
          system: 'JBL',
          speakers: 8,
          subwoofer: true,
          bluetooth: true,
          USB: true,
        },
      },
      exterior: {
        wheels: {
          size: 18,
          type: 'alloy',
          color: 'silver',
        },
        headlights: {
          type: 'LED',
          brightness: 'high',
          automatic: true,
        },
        sunroof: {
          type: 'panoramic',
          size: 'large',
          automatic: true,
        },
      },
      safety: {
        airbags: {
          front: 2,
          side: 2,
          knee: 2,
          rear: 2,
        },
        assistance: {
          blind_spot_monitoring: true,
          rear_cross_traffic_alert: true,
          lane_departure_warning: true,
          adaptive_cruise_control: true,
          collision_warning: true,
        },
      },
    },
    engine: {
      type: 'gasoline',
      displacement: 2.5,
      horsepower: 206,
      torque: 186,
      transmission: {
        type: 'automatic',
        gears: 8,
      },
    },
    fuel_economy: {
      city: 28,
      highway: 39,
      combined: 32,
    },
    price: {
      base: 25900,
      destination: 995,
      options: {
        navigation: 1200,
        moonroof: 800,
        premium_paint: 595,
      },
      total: 28990,
    },
  })
})

router.get('/js', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('js', {
    layout: 'basic',

    page: {
      title: 'JS page',
    },

    name: 'JavaScript',
    description:
      'JavaScript is a popular high-level, dynamic, and interpreted programming language.',
    history: {
      year: 1995,
      founder: 'Brendan Eich',
    },
    types: [
      'Number',
      'String',
      'Boolean',
      'Null',
      'Undefined',
      'Symbol',
      'Object',
    ],
    syntax: {
      variables: ['var', 'let', 'const'],
      functions: ['function'],
      conditionals: ['if', 'else', 'switch'],
      loops: ['for', 'while', 'do-while'],
      classes: ['class'],
    },
    features: [
      'First-class functions',
      'Closures',
      'Dynamic typing',
      'Prototype-based inheritance',
      'Asynchronous programming with Promises and async/await',
      'Modules with import/export statements',
    ],
    libraries: [
      'jQuery',
      'React',
      'Angular',
      'Vue',
      'Node.js',
      'Express.js',
      'Lodash',
      'Moment.js',
    ],
    tools: [
      'Babel',
      'Webpack',
      'ESLint',
      'Jest',
      'Mocha',
      'Chai',
      'Selenium',
      'Cypress',
    ],
    community: [
      {
        name: 'Stack Overflow',
        type: 'forum',
      },
      {
        name: 'JavaScript Weekly',
        type: 'newsletter',
      },
      {
        name: 'The Changelog',
        type: 'podcast',
      },
      {
        name: 'CSS-Tricks',
        type: 'blog',
      },
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/bootstrap', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('bootstrap', {
    layout: 'bootstrap',
  })
  //                  ↑↑ сюди вводимо JSON дані
})

router.get('/task21', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('task21', {
    layout: 'basic',

    page: {
      title: 'Task21 page',
    },

    heading: {
      main: {
        title: 'JavaScript',
        text: 'JavaScript is a popular high-level, dynamic, and interpreted programming language.',
        button_text: {
          solid: 'Open page',
          outline: 'Add to cart',
        },
      },
      second: {
        title: 'Stack Overflow',
        text: 'First-class functions',
        button_text: {
          solid: 'Open page',
          outline: 'Add to cart',
        },
      },
      subblock: {
        title: 'JavaScript Weekly',
        text: 'Prototype-based inheritance newsletter',
        button_text: {
          solid: 'Open page',
          outline: 'Add to cart',
        },
      },
    },
    nested_display: {
      title: 'HTML',
      children_display: {
        title: 'Outdated HTML tags',
        text: 'tags that have been identified as deprecated and not recommended for use in HTML version 5',
        button: {
          text: 'Орen',
        },
      },
      header_text: 'Sections',
      button: {
        text: 'Learn more',
      },
    },
    paragraph: {
      title: 'About modules',
      text: 'Modules with import/export statements',

      button: {
        text: 'Open link page',
        url: 'https://google.com',
      },
      list_name: [
        {
          text: 'Github',
          url: 'https://github.com/',
        },
        {
          text: 'Bootstrap',
          url: 'https://getbootstrap.com/',
        },
      ],
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/task22', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('task22', {
    layout: 'basic',

    page: {
      title: 'Task22 page',
    },

    page_header: {
      title: 'InnovaMind',
      description: 'Welcome to our wonderful community',
    },
    section: {
      about_us: {
        title_list: {
          main: 'InnovaMind',
          sub: 'InnovaMind is a forward-thinking startup focused on innovation. We are dedicated to creating efficient and powerful software through the use of first-class functions.',
        },
        button: { text: 'Show more' },
      },
      advantage: {
        title: 'Advantage',
        efficiency: {
          title: 'Efficiency',
          sub_title: 'Streamline your software development',
          description:
            'Streamline your software development with our innovative platform...',
          button: 'Show more',
        },
        innovation: {
          title: 'Innovation',
          sub_title:
            'Forward-thinking approach to programming',
          description:
            ' Stay ahead of the curve with our forward-thinking approach to programming...',
          button: 'Show more',
        },
        collaboration: {
          title: 'Collaboration',
          sub_title: 'Connect with like-minded developers',
          description:
            'Connect with a community of like-minded developers to share knowledge and insights...',
          button: 'Show more',
        },
      },
      agreement: {
        title: 'Terms of use',
        info: {
          sub_title: 'Check out our requirements',
          detail: {
            text: 'By using or accessing the service, you agree to be bound by the terms and conditions outlined in the agreement.',
            button: 'Аccept',
          },
        },
      },
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})

router.get('/task31', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('task31', {
    layout: 'basic',

    page: {
      title: 'Task31 page',
    },

    navigation: {
      links: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
      ],
      button: {
        text: 'Lets start',
        href: 'https://nodejs.org/en/',
      },
    },
    header: {
      title: 'Welcome to Our Website',
      description:
        'We offer innovative solutions to help grow your business. Our team of experts is committed to providing tailored strategies that deliver the best results.',
      button: {
        text: 'Learn More',
        link: 'https://www.youtube.com/',
      },
    },
    city: {
      title: 'City list',
      cards: [
        {
          picture: {
            src: 'https://picsum.photos/400/200',
            alt: 'New York',
          },
          title: 'New York City',
          description:
            'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park.',
          button: {
            text: 'Read',
            href: 'https://github.com/',
          },
        },
        {
          picture: {
            src: 'https://picsum.photos/400/200',
            alt: 'Paris',
          },
          title: 'Paris',
          description:
            "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy, and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture, haute couture fashion houses, and designer boutiques along the Rue du Faubourg Saint-Honoré.",
          button: {
            text: 'Read',
            href: 'https://github.com/',
          },
        },
        {
          picture: {
            src: 'https://picsum.photos/400/200',
            alt: 'Tokyo',
          },
          title: 'Tokyo',
          description:
            "Tokyo, Japan’s bustling capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city's many museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum).",
          button: {
            text: 'Reac',
            href: 'https://github.com/',
          },
        },
        {
          picture: {
            src: 'https://picsum.photos/400/200',
            alt: 'Sydney',
          },
          title: 'Sydney',
          description:
            "Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harborfront Opera House, with a distinctive sail-like design. Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life, with the arched Harbour Bridge and esteemed Royal Botanic Garden nearby. Sydney Tower’s outdoor platform, the Skywalk, offers 360-degree views of the city and suburbs.",
          button: {
            text: 'Reac',
            href: 'https://github.com/',
          },
        },
      ],
    },
    winner: {
      title: 'Our winners',
      table: {
        head: ['#', 'name', 'surname', 'nickname'],
        user: [
          {
            place: 1,
            name: 'Ada',
            surname: 'Lovelace',
            nickname: 'The Enchantress of Numbers',
          },
          {
            place: 2,
            name: 'Grace',
            surname: 'Hopper',
            nickname: 'Amazing Grace',
          },
          {
            place: 3,
            name: 'Katherine',
            surname: 'Johnson',
            nickname: 'The Human Computer',
          },
        ],
      },
    },
    gallery: {
      title: 'Picture history',
      cards: [
        {
          name: 'The Mona Lisa',
          items: [
            'Painting',
            'Oil on poplar panel',
            '1503-1519',
          ],
        },
        {
          name: 'The Persistence of Memory',
          items: ['Painting', 'Oil on canvas', '1931'],
        },
        {
          name: 'The Starry Night',
          items: ['Painting', 'Oil on canvas', '1889'],
        },
      ],
    },
    relaxion: {
      title: 'Relax',
      cards: [
        {
          header: 'Meditation',
          title: 'The Benefits of Meditation',
          description:
            'Meditation can help reduce stress, anxiety, and depression, and improve overall well-being. Studies have also shown that regular meditation practice can enhance cognitive function and even boost the immune system.',
        },
        {
          header: 'Hydration',
          title: 'The Importance of Hydration',
          description:
            'Drinking enough water is essential for good health. Dehydration can lead to a range of symptoms, including fatigue, headaches, and constipation. It can also increase the risk of kidney stones and other health problems.',
        },
        {
          header: 'Yoga',
          title: 'The Benefits of Yoga',
          description:
            'Yoga can improve flexibility, strength, and balance, and help reduce stress and anxiety. It has also been shown to improve heart health and promote a sense of well-being.',
        },
        {
          header: 'Sunscreen',
          title: 'The Importance of Sunscreen',
          description:
            "Protecting your skin from the sun's harmful rays is crucial for reducing the risk of skin cancer and premature aging. Experts recommend using a broad-spectrum sunscreen with an SPF of at least 30 and reapplying every two hours.",
        },
      ],
    },
    rest: {
      cards: [
        {
          header: 'Cooking',
          title: 'The Joy of Cooking',
          description:
            'Cooking is a creative outlet that can bring people together over delicious food.',
          button: 'Learn More',
          footer: 'Photo by Brooke Lark on Unsplash',
        },
        {
          header: 'Travel',
          title: 'The Benefits of Traveling',
          description:
            'Traveling broadens your perspective, provides new experiences, and creates lasting memories.',
          button: 'Explore',
          footer: 'Photo by Sime Basioli on Unsplash',
        },
      ],
    },
    proposition: {
      title: 'Proposition',
      card: [
        {
          header: 'Our Approach',
          title: 'Innovative Solutions for Your Business',
          description:
            'We create effective solutions that cater to your business needs.',
        },
        {
          header: 'Our Expertise',
          title: 'Trusted and Experienced Professionals',
          description:
            'Our team of experts delivers tailored strategies for best results.',
        },
      ],
    },
    footer: {
      title: 'Navigation',
      navigation: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
      ],
      socialMedia: [
        {
          name: 'Facebook',
          link: 'https://www.facebook.com/',
        },
        {
          name: 'Twitter',
          link: 'https://twitter.com/',
        },
        {
          name: 'Instagram',
          link: 'https://www.instagram.com/',
        },
      ],
      partners: [
        {
          name: 'Acme Inc.',
          link: 'https://www.acme.com/',
        },
        {
          name: 'Globex Corporation',
          link: 'https://www.globex.com/',
        },
        {
          name: 'Stark Industries',
          link: 'https://www.starkindustries.com/',
        },
      ],
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})

router.get('/bootstrap4', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('bootstrap4', {
    layout: 'bootstrap',
  })
  //                  ↑↑ сюди вводимо JSON дані
})

router.get('/list', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('list', {
    layout: 'Basic',

    page: {
      title: 'List page',
    },

    list: [
      { name: 'First Button' },
      { name: 'Secondary Button' },
      { name: 'Error Button' },
      { name: 'Submit Button' },
    ],

    user: {
      name: 'Ivan',
      role: 'Admin',
      isConfirm: true,
      age: 32,
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/shophome', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('shophome', {
    layout: 'shop',
    navigation: {
      links: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
      ],
    },

    newsBlock: {
      title: 'Latest News',
      cards: [
        {
          title: 'COVID-19 Vaccinations Begin in Europe',
          description:
            'As the world continues to grapple with the ongoing COVID-19 pandemic, Europe begins its vaccination rollout, with healthcare workers and the elderly among the first to receive the vaccine.',
          isTop: false,
          isNew: false,
        },
        {
          title: 'Tesla Stock Surges After Record Sales',
          description:
            "Tesla's stock price jumps 10% following the company's announcement of record sales in the last quarter, thanks in part to strong demand for its electric vehicles.",
          isTop: true,
          isNew: true,
        },
        {
          title:
            'New Study Shows Benefits of Meditation for Mental Health',
          description:
            'A new study published in the Journal of the American Medical Association finds that practicing mindfulness meditation can lead to improved mental health outcomes for people struggling with depression and anxiety.',
          isTop: false,
          isNew: false,
        },
        {
          title: 'NASA Launches New Mars Rover',
          description:
            "NASA's Perseverance rover successfully launches on a mission to explore Mars, with the goal of collecting samples of the planet's surface and searching for signs of ancient microbial life.",
          isTop: false,
          isNew: true,
        },
        {
          title:
            'GameStop Shares Soar as Reddit Traders Rally',
          description:
            'Shares of GameStop surge as amateur traders on the social media platform Reddit rally to drive up the price, in what some are calling a battle between Wall Street and Main Street.',
          isTop: false,
          isNew: false,
        },
        {
          title:
            'UK Announces Plan to Ban Sale of Gas-Powered Cars by 2030',
          description:
            'In an effort to combat climate change, the UK government announces a plan to ban the sale of new gas-powered cars and vans by 2030, with hybrid vehicles to follow in 2035.',
          isTop: true,
          isNew: false,
        },
        {
          title:
            'New Study Shows Link Between Exercise and Longevity',
          description:
            'A new study published in the Journal of the American Medical Association suggests that regular exercise can help people live longer, with participants who exercised regularly having a lower risk of premature death.',
          isTop: false,
          isNew: false,
        },
        {
          title: 'Amazon Expands Grocery Delivery Service',
          description:
            'Amazon announces an expansion of its grocery delivery service, with plans to offer free delivery to Prime members on orders over $35 and to expand its selection of fresh and organic produce.',
          isTop: false,
          isNew: true,
        },
      ],
    },

    goodsBlock: {
      tabs: [
        {
          isActive: true,
          isDisabled: false,
          text: 'Electronics',
        },
        {
          isActive: false,
          isDisabled: false,
          text: 'Home & Kitchen',
        },
        {
          isActive: false,
          isDisabled: false,
          text: 'Clothing & Accessories',
        },
        {
          isActive: false,
          isDisabled: true,
          text: 'Toys & Games',
        },
      ],
      cards: [
        {
          image: 'https://picsum.photos/400/200',
          title: 'iPhone 13',
          description:
            'The latest iPhone model features a new A15 Bionic chip, improved camera system, and longer battery life.',
          isHot: false,
          isNew: false,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'MacBook Pro',
          description:
            "Apple's high-end laptop features a 16-inch Retina display, powerful M1 Pro or M1 Max chip, and up to 64GB of RAM.",
          isHot: true,
          isNew: false,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'AirPods Pro',
          description:
            "Apple's premium wireless earbuds feature active noise cancellation, a customizable fit, and up to 4.5 hours of listening time.",
          isHot: false,
          isNew: false,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'Sony Bravia XR A90J',
          description:
            'This OLED TV boasts a 4K resolution, HDR support, and a high refresh rate for smooth motion handling.',
          isHot: false,
          isNew: true,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'Nintendo Switch OLED Model',
          description:
            'The latest iteration of the popular gaming console features a larger OLED screen and improved audio quality.',
          isHot: false,
          isNew: false,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'Bose SoundLink Revolve+',
          description:
            'This portable Bluetooth speaker features 360-degree sound, water-resistant construction, and up to 16 hours of battery life.',
          isHot: true,
          isNew: true,
        },
      ],
    },
    subscribe: {
      header: 'Unlock Premium Content',
      description:
        'Subscribe to access exclusive content and features.',
      buttons: [
        {
          text: 'Register Now',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Buy Subscription',
          link: 'https://www.youtube.com/',
        },
      ],
    },
    service: {
      title: 'Our Services',
      description:
        'We offer a variety of services to meet your needs, including web design, content creation, and social media management.',
      buttons: [
        {
          text: 'Show More',
          link: 'https://www.youtube.com/',
        },
      ],
    },

    footer: [
      [
        {
          text: 'Home',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Trending',
          link: 'https://www.youtube.com/feed/trending',
        },
        {
          text: 'Subscriptions',
          link: 'https://www.youtube.com/feed/subscriptions',
        },
        {
          text: 'Library',
          link: 'https://www.youtube.com/feed/library',
        },
      ],
      [
        {
          text: 'History',
          link: 'https://www.youtube.com/feed/history',
        },
        {
          text: 'Your Videos',
          link: 'https://www.youtube.com/feed/my_videos',
        },
        {
          text: 'Live',
          link: 'https://www.youtube.com/live',
        },
        {
          text: 'Settings',
          link: 'https://www.youtube.com/account',
        },
      ],
      [
        {
          text: 'Watch Later',
          link: 'https://www.youtube.com/playlist?list=WL',
        },
        {
          text: 'Liked Videos',
          link: 'https://www.youtube.com/playlist?list=LL',
        },
        {
          text: 'Music',
          link: 'https://www.youtube.com/music',
        },
        {
          text: 'Gaming',
          link: 'https://www.youtube.com/gaming',
        },
      ],
      [
        {
          text: 'Sports',
          link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
        },
        {
          text: 'News',
          link: 'https://www.youtube.com/news',
        },
        {
          text: 'Fashion & Beauty',
          link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
        },
        {
          text: 'Learning',
          link: 'https://www.youtube.com/learning',
        },
      ],
      [
        {
          text: 'Report History',
          link: 'https://www.youtube.com/feed/history/report_history',
        },
        {
          text: 'Help',
          link: 'https://support.google.com/youtube/?hl=en',
        },
        {
          text: 'Send Feedback',
          link: 'https://support.google.com/youtube/answer/4347644?hl=en',
        },
        {
          text: 'About',
          link: 'https://www.youtube.com/about/',
        },
      ],
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/shopproduct', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('shopproduct', {
    layout: 'shop',
    navigation: {
      links: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
      ],
    },

    breadcrumb: [
      { name: 'Home', url: 'https://github.com/' },
      { name: 'PC', url: 'https://www.google.com/' },
      { name: 'Windows', url: 'https://github.com/' },
      { name: 'Product PC #3123', url: null },
    ],

    productData: {
      img: 'https://picsum.photos/400/200',

      info: {
        title: 'Product PC Asus 331 BC 671',
        about:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: '1000$',

        category: [
          { name: 'HOT', isHot: true },
          { name: 'New', isNew: true },
          { name: 'Bonus', isBonus: true },
        ],
      },

      actionList: [
        { name: 'Buy', isWarning: true },
        { name: 'Add to cart', isError: true },
        { name: 'Like', isSuccess: true },
        { name: 'Share', isGood: true },
      ],

      item: {
        head: ['#', 'color', 'price'],

        body: [
          ['id312', 'red', '1100$'],
          ['id532', 'blue', '1050$'],
          ['id643', 'dark', '999$'],
        ],
      },

      param: {
        title: 'Product params',
        list: ['Экран 15.6', 'IPS (1920x1080)', 'Full HD'],
      },

      alert: {
        isError: true,
        text: 'Danger! This is a danger alert — check it out!',
      },
    },

    goodsOtherBlock: {
      title: 'See other products',
      cards: [
        {
          image: 'https://picsum.photos/400/200',
          title: 'iPhone 13',
          description:
            'The latest iPhone model features a new A15 Bionic chip, improved camera system, and longer battery life.',
          isHot: false,
          idNew: false,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'MacBook Pro',
          description:
            "Apple's high-end laptop features a 16-inch Retina display, powerful M1 Pro or M1 Max chip, and up to 64GB of RAM.",
          isHot: true,
          idNew: false,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'AirPods Pro',
          description:
            "Apple's premium wireless earbuds feature active noise cancellation, a customizable fit, and up to 4.5 hours of listening time.",
          isHot: false,
          idNew: false,
        },
      ],
    },

    service: {
      title: 'Our Services',
      description:
        'We offer a variety of services to meet your needs, including web design, content creation, and social media management.',
      buttons: [
        {
          text: 'Show More',
          link: 'https://www.youtube.com/',
          rel: 'show-more',
        },
      ],
    },

    footer: [
      [
        {
          text: 'Home',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Trending',
          link: 'https://www.youtube.com/feed/trending',
        },
        {
          text: 'Subscriptions',
          link: 'https://www.youtube.com/feed/subscriptions',
        },
        {
          text: 'Library',
          link: 'https://www.youtube.com/feed/library',
        },
      ],
      [
        {
          text: 'History',
          link: 'https://www.youtube.com/feed/history',
        },
        {
          text: 'Your Videos',
          link: 'https://www.youtube.com/feed/my_videos',
        },
        {
          text: 'Live',
          link: 'https://www.youtube.com/live',
        },
        {
          text: 'Settings',
          link: 'https://www.youtube.com/account',
        },
      ],
      [
        {
          text: 'Watch Later',
          link: 'https://www.youtube.com/playlist?list=WL',
        },
        {
          text: 'Liked Videos',
          link: 'https://www.youtube.com/playlist?list=LL',
        },
        {
          text: 'Music',
          link: 'https://www.youtube.com/music',
        },
        {
          text: 'Gaming',
          link: 'https://www.youtube.com/gaming',
        },
      ],
      [
        {
          text: 'Sports',
          link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
        },
        {
          text: 'News',
          link: 'https://www.youtube.com/news',
        },
        {
          text: 'Fashion & Beauty',
          link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
        },
        {
          text: 'Learning',
          link: 'https://www.youtube.com/learning',
        },
      ],
      [
        {
          text: 'Report History',
          link: 'https://www.youtube.com/feed/history/report_history',
        },
        {
          text: 'Help',
          link: 'https://support.google.com/youtube/?hl=en',
        },
        {
          text: 'Send Feedback',
          link: 'https://support.google.com/youtube/answer/4347644?hl=en',
        },
        {
          text: 'About',
          link: 'https://www.youtube.com/about/',
        },
      ],
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/shopnews', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('shopnews', {
    layout: 'shop',
    navigation: {
      links: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
      ],
    },

    breadcrumb: [
      { name: 'Home', url: 'https://github.com/' },
      { name: 'News', url: 'https://www.google.com/' },
      { name: 'Today', url: 'https://github.com/' },
      { name: 'About cats', url: null },
    ],

    newsData: {
      photo: 'https://picsum.photos/400/200',

      head: {
        heading: 'About cats',
        description:
          "Cats are adorable and beloved pets that have been domesticated for thousands of years. They are known for their independent and playful nature, as well as their agility and hunting skills. With their soft fur, purring, and cuddling, cats make great companions and can bring joy and relaxation to their owners. From domestic short-hairs to exotic breeds, cats come in many shapes, sizes, and colors, each with their own unique personalities. Whether they are napping in a sunny spot or chasing a toy, cats always bring a smile to their owner's faces.",
      },

      body: [
        {
          title: 'Cats have a keen sense of hearing',
          text: 'With their highly sensitive ears, cats can detect sounds that are too faint for humans to hear, including the ultrasonic calls of rodents and other small prey.',
        },
        {
          title: 'Cats are natural hunters',
          text: 'Thanks to their sharp claws, quick reflexes, and stealthy movements, cats are excellent hunters. They can catch mice, rats, birds, and other prey with ease.',
        },
        {
          title: 'Cats are independent creatures',
          text: "Cats are known for their independent nature, and unlike dogs, they don't require constant attention and affection from their owners. They are perfectly content to entertain themselves with toys and explore their surroundings on their own.",
        },
        {
          title: 'Cats have a unique way of communicating',
          text: 'From meows and purrs to chirps and trills, cats use a variety of sounds to communicate with their owners and other cats. They also use body language, such as tail movements and ear positions, to convey their moods and intentions.',
        },
        {
          title: 'Cats are good for your health',
          text: 'Studies have shown that owning a cat can have numerous health benefits, including lower stress levels, reduced risk of heart disease and stroke, and improved mental health. Plus, cats make great companions and can provide a source of comfort and emotional support.',
        },
      ],
    },

    newsOtherBlock: {
      title: 'See other news',
      cards: [
        {
          title: 'NASA Launches New Mars Rover',
          description:
            "NASA's Perseverance rover successfully launches on a mission to explore Mars, with the goal of collecting samples of the planet's surface and searching for signs of ancient microbial life.",
          isTop: false,
          isNew: true,
        },
        {
          title:
            'GameStop Shares Soar as Reddit Traders Rally',
          description:
            'Shares of GameStop surge as amateur traders on the social media platform Reddit rally to drive up the price, in what some are calling a battle between Wall Street and Main Street.',
          isTop: false,
          isNew: false,
        },
        {
          title:
            'New Study Shows Link Between Exercise and Longevity',
          description:
            'A new study published in the Journal of the American Medical Association suggests that regular exercise can help people live longer, with participants who exercised regularly having a lower risk of premature death.',
          isTop: false,
          isNew: false,
        },
        {
          title: 'Amazon Expands Grocery Delivery Service',
          description:
            'Amazon announces an expansion of its grocery delivery service, with plans to offer free delivery to Prime members on orders over $35 and to expand its selection of fresh and organic produce.',
          isTop: false,
          isNew: true,
        },
      ],
    },

    service: {
      title: 'Our Services',
      description:
        'We offer a variety of services to meet your needs, including web design, content creation, and social media management.',
      buttons: [
        {
          text: 'Show More',
          link: 'https://www.youtube.com/',
        },
      ],
    },

    footer: [
      [
        {
          text: 'Home',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Trending',
          link: 'https://www.youtube.com/feed/trending',
        },
        {
          text: 'Subscriptions',
          link: 'https://www.youtube.com/feed/subscriptions',
        },
        {
          text: 'Library',
          link: 'https://www.youtube.com/feed/library',
        },
      ],
      [
        {
          text: 'History',
          link: 'https://www.youtube.com/feed/history',
        },
        {
          text: 'Your Videos',
          link: 'https://www.youtube.com/feed/my_videos',
        },
        {
          text: 'Live',
          link: 'https://www.youtube.com/live',
        },
        {
          text: 'Settings',
          link: 'https://www.youtube.com/account',
        },
      ],
      [
        {
          text: 'Watch Later',
          link: 'https://www.youtube.com/playlist?list=WL',
        },
        {
          text: 'Liked Videos',
          link: 'https://www.youtube.com/playlist?list=LL',
        },
        {
          text: 'Music',
          link: 'https://www.youtube.com/music',
        },
        {
          text: 'Gaming',
          link: 'https://www.youtube.com/gaming',
        },
      ],
      [
        {
          text: 'Sports',
          link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
        },
        {
          text: 'News',
          link: 'https://www.youtube.com/news',
        },
        {
          text: 'Fashion & Beauty',
          link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
        },
        {
          text: 'Learning',
          link: 'https://www.youtube.com/learning',
        },
      ],
      [
        {
          text: 'Report History',
          link: 'https://www.youtube.com/feed/history/report_history',
        },
        {
          text: 'Help',
          link: 'https://support.google.com/youtube/?hl=en',
        },
        {
          text: 'Send Feedback',
          link: 'https://support.google.com/youtube/answer/4347644?hl=en',
        },
        {
          text: 'About',
          link: 'https://www.youtube.com/about/',
        },
      ],
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

router.get('/bootstrap5', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('bootstrap5', {
    layout: 'bootstrap',
  })
  //                  ↑↑ сюди вводимо JSON дані
})

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/shoporder', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('shoporder', {
    layout: 'shop',
    navigation: {
      links: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
        {
          text: 'Exit',
          href: null,
        },
      ],
    },

    header: 'Оформлення замовлення',
    contacts_data: {
      title: 'Контактні дані',

      buttons: [
        {
          text: 'Я новий покупець',
          isPrimary: true,
        },
        {
          text: 'Я постійний покупець',
          isOutline: true,
        },
      ],
      form: {
        input: {
          surname: {
            label: 'Прізвище',
            placeholder: 'Іванов',
            caption: 'Введіть прізвище',
          },
          name: {
            label: 'Ім’я',
            placeholder: 'Іван',
            caption: 'Введіть Ім’я',
          },
          phone: {
            label: 'Мобільний телефон',
            placeholder: '+38 (XXX) XXX XX XX',
            caption: 'Введіть телефон',
          },
          email: {
            label: 'Пошта',
            placeholder: 'ivanivanov@ukr.net',
            caption: 'Введіть Пошту',
          },
        },
        switch: [
          {
            text: 'Отримувати інформацію про новинки',
            isActive: false,
          },
          {
            text: 'Отримувати інформацію про знижки',
            isActive: true,
          },
        ],
      },
    },
    action_block: [
      { text: 'Швидке замовлення', isSuccess: true },
      { text: 'Видалити', isDanger: true },
      { text: 'Детальніше', isInfo: true },
    ],
    total: {
      title: 'Всього',
      item_list: [
        { name: 'Ноут', price: '25 000 ₴' },
        { name: 'Мишка', price: '25 000 ₴' },
        { name: 'Клава', price: '25 000 ₴' },
      ],
      additional_info: [
        { text: 'Всього товарів', value: '75 000 ₴' },
        { text: 'Купони', value: 'Немає' },
        { text: 'Доставка', value: 'Безкоштовно' },
      ],
      total_price: {
        text: 'Всього товарів',
        value: '75 000 ₴',
      },
      button: [
        {
          text: 'Підтвердити замовлення',
          isPrimary: true,
        },
        {
          text: 'Відмінити купони',
          isOutline: true,
        },
      ],
    },
    delivery: {
      title: 'Доставка',
      select: [
        {
          label: 'Місто доставки',
          placeholder: 'Оберіть місто доставки',
          options: [
            { value: '1', text: 'Київ' },
            { value: '2', text: 'Харків' },
            { value: '3', text: 'Одеса' },
            { value: '4', text: 'Львів' },
            { value: '5', text: 'Дніпро' },
            { value: '6', text: 'Донецьк' },
          ],
        },
        {
          label: 'Район доставки',
          placeholder: 'Оберіть район доставки',
          options: [
            { value: '1', text: 'Голосіївський' },
            { value: '2', text: 'Оболонський' },
            { value: '3', text: 'Печерський' },
            { value: '4', text: 'Дарницький' },
            { value: '5', text: 'Деснянський' },
            { value: '6', text: 'Подільський' },
          ],
        },
      ],
      delivery_type: [
        {
          type: 'Самовивіз з відділення Нової пошти',
        },
        {
          type: 'Кур’єром Нової пошти',
        },
        {
          type: 'Самовивіз з магазину',
        },
        {
          type: 'Доставка закордон',
        },
      ],
      payment: {
        title: 'Оплата',
        list: [
          {
            type: 'Оплата при отриманні',
            description: 'За тарифами перевізника',
          },
          {
            type: 'Оплатити зараз',
          },
        ],
      },
      contact: {
        title: 'Контактні дані отримувача',
        surname: {
          label: 'Прізвище',
          placeholder: 'Іванов',
          caption: 'Введіть прізвище',
        },
        name: {
          label: 'Ім’я',
          placeholder: 'Іван',
          caption: 'Введіть Ім’я',
        },
        phone: {
          label: 'Мобільний телефон',
          placeholder: '+38 (XXX) XXX XX XX',
          caption: 'Введіть телефон',
        },
        email: {
          label: 'Пошта',
          placeholder: 'ivanivanov@ukr.net',
          caption: 'Введіть Пошту',
        },
      },
      coment: {
        label: 'Коментар',
        placeholder: 'Я хочу, щоб',
      },
    },
    coupon: {
      title: 'Купони',
      select: {
        availabel_coupon: {
          label: 'Наявні купони',
          placeholder: 'Виберіть купон',
          options: [
            { value: '1', text: 'SEEYALATER' },
            { value: '2', text: 'HOTEL10' },
            { value: '3', text: 'DOWNLOAD25' },
          ],
        },
        friend_coupon: {
          label: 'Купони за запрошених друзів',
          placeholder: 'Виберіть купон',
          options: [
            { value: '1', text: 'TRAVEL5' },
            { value: '2', text: '75VACA' },
            { value: '3', text: '150VACA' },
          ],
        },
      },
      add: {
        friend: {
          label: 'Запросіть друзів та отримайте ще купонів',
          placeholder:
            'Введіть контактні дані друзів через ;',
          caption:
            'Напишіть електронні адреси/телефон друзів через “;”',
        },
        colleague: {
          label: 'Запросити колег',
          placeholder:
            'Введіть контактні дані колег через ;',
          caption:
            'Напишіть електронні адреси/телефон колег через “;”',
        },
      },
    },
    quiz: {
      title: 'Домоможи краще нам тебе зрозуміти',
      preference: {
        title:
          'Який тип обладнання ви зацікавлені в придбанні?',
        options: [
          'Смартфони',
          'Ноутбуки',
          'Планшети',
          'ПК',
          'Телевізори',
        ],
      },
      your_expirience: {
        label: 'Який у Вас досвід користування ПК',
      },
      purchase_frequency: {
        label: 'Як часто ви купуєте обладнання?',
        placeholder: 'Оберіть варіант',
        options: [
          { value: '1', text: 'Раз в тиждень' },
          { value: '2', text: 'Раз в місяць' },
          { value: '3', text: 'Раз в рік' },
        ],
      },
      factors: {
        title:
          'Які з наведених нижче факторів є для вас важливими при купівлі обладнання?',
        options: [
          'Ціна',
          'Репутація бренду',
          'Якість',
          'Особливості',
          'Гарантія',
          'Доступність',
          'Обслуговування клієнтів',
        ],
      },
    },
    footer: [
      [
        {
          text: 'Home',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Trending',
          link: 'https://www.youtube.com/feed/trending',
        },
        {
          text: 'Subscriptions',
          link: 'https://www.youtube.com/feed/subscriptions',
        },
        {
          text: 'Library',
          link: 'https://www.youtube.com/feed/library',
        },
      ],
      [
        {
          text: 'History',
          link: 'https://www.youtube.com/feed/history',
        },
        {
          text: 'Your Videos',
          link: 'https://www.youtube.com/feed/my_videos',
        },
        {
          text: 'Live',
          link: 'https://www.youtube.com/live',
        },
        {
          text: 'Settings',
          link: 'https://www.youtube.com/account',
        },
      ],
      [
        {
          text: 'Watch Later',
          link: 'https://www.youtube.com/playlist?list=WL',
        },
        {
          text: 'Liked Videos',
          link: 'https://www.youtube.com/playlist?list=LL',
        },
        {
          text: 'Music',
          link: 'https://www.youtube.com/music',
        },
        {
          text: 'Gaming',
          link: 'https://www.youtube.com/gaming',
        },
      ],
      [
        {
          text: 'Sports',
          link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
        },
        {
          text: 'News',
          link: 'https://www.youtube.com/news',
        },
        {
          text: 'Fashion & Beauty',
          link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
        },
        {
          text: 'Learning',
          link: 'https://www.youtube.com/learning',
        },
      ],
      [
        {
          text: 'Report History',
          link: 'https://www.youtube.com/feed/history/report_history',
        },
        {
          text: 'Help',
          link: 'https://support.google.com/youtube/?hl=en',
        },
        {
          text: 'Send Feedback',
          link: 'https://support.google.com/youtube/answer/4347644?hl=en',
        },
        {
          text: 'About',
          link: 'https://www.youtube.com/about/',
        },
      ],
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

router.get('/bootstrap7', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('bootstrap7', {
    layout: 'default',
  })
  //                  ↑↑ сюди вводимо JSON дані
})

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/shopprofile', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('shopprofile', {
    layout: 'shop',
    navigation: {
      links: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
      ],
    },

    header: 'Мої замовлення',

    purchase: {
      tabs: ['Всі замовлення', 'Гарантія та повернення'],
      actionBlock: {
        input: { placeholder: 'Placeholder' },
        buttons: [
          {
            text: 'Знайти',
            link: 'https://www.youtube.com/',
            isSuccess: true,
          },
          {
            text: 'Виділити все',
            link: 'https://www.youtube.com/',
            isOutline: true,
          },
          {
            text: 'Очистити все',
            link: 'https://www.youtube.com/',
            isDanger: true,
          },
        ],
      },
      itemList: [
        {
          number: '№12587463 від 01.01.2023',
          status: 'Виконано',
          amount: { title: 'Сума', value: '25 000 ₴' },
          images: ['https://picsum.photos/110/100'],
          button: {
            text: 'Детальніше',
            link: 'https://www.youtube.com/',
            isPrimary: true,
          },
        },
        {
          number: '№12587463 від 01.01.2023',
          status: 'Виконано',
          amount: { title: 'Сума', value: '25 000 ₴' },
          images: [
            'https://picsum.photos/110/100',
            'https://picsum.photos/110/100',
            'https://picsum.photos/110/100',
          ],
          button: {
            text: 'Детальніше',
            link: 'https://www.youtube.com/',
            isPrimary: true,
          },
        },
        {
          number: '№12587463 від 01.01.2023',
          status: 'Виконано',
          amount: { title: 'Сума', value: '25 000 ₴' },
          images: [
            'https://picsum.photos/110/100',
            'https://picsum.photos/110/100',
          ],
          button: {
            text: 'Детальніше',
            link: 'https://www.youtube.com/',
            isPrimary: true,
          },
        },
      ],
    },
    userInfo: {
      title: 'Особиста інформація',
      profileData: {
        title: 'Особисті дані',
        fullName: {
          surname: {
            title: 'Прізвище',
            value: 'Іванов',
          },
          name: {
            title: 'Ім’я',
            value: 'Іван',
          },
          middleName: {
            title: 'По-батькові',
            value: 'Іванович',
          },
        },
        otherInfo: {
          birthday: {
            title: 'Дата народження',
            value: '01.01.2000',
          },
          sex: {
            title: 'Стать',
            value: 'Чоловіча',
          },
          language: {
            title: 'Мова',
            value: 'Українська',
          },
        },
      },
      buttons: [
        {
          text: 'Редагувати',
          link: 'https://www.youtube.com/',
          isPrimary: true,
        },
        {
          text: 'Очистити',
          link: 'https://www.youtube.com/',
          isSecondary: true,
        },
        {
          text: 'Видалити',
          link: 'https://www.youtube.com/',
          isDanger: true,
        },
      ],
      recipients: {
        title: 'Отримувачі',
        users: [
          {
            name: 'Іванов Іван Іванович',
            phone: '+38 (098) 222 22 22',
            button: {
              text: 'Редагувати',
              link: 'https://www.youtube.com/',
            },
          },
          {
            name: 'Петров Петро Петрович',
            phone: '+38 (098) 111 11 11',
            button: {
              text: 'Редагувати',
              link: 'https://www.youtube.com/',
            },
          },
        ],
      },
      contacts: {
        title: 'Контакти',
        contactData: [
          {
            title: 'Номер телефону',
            value: '+38 (098) 222 22 22',
            button: {
              text: 'Редагувати',
              link: 'https://www.youtube.com/',
              isPrimary: true,
            },
          },
          {
            title: 'Додатковий номер телефону',
            value: '+38 (098) 111 11 11',
            button: {
              text: 'Очистити',
              link: 'https://www.youtube.com/',
              isSecondary: true,
            },
          },
          {
            title: 'Електронна адреса',
            value: 'ivanivanov@ukr.net',
            button: {
              text: 'Видалити',
              link: 'https://www.youtube.com/',
              isDanger: true,
            },
          },
        ],
      },
    },

    footer: [
      [
        {
          text: 'Home',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Trending',
          link: 'https://www.youtube.com/feed/trending',
        },
        {
          text: 'Subscriptions',
          link: 'https://www.youtube.com/feed/subscriptions',
        },
        {
          text: 'Library',
          link: 'https://www.youtube.com/feed/library',
        },
      ],
      [
        {
          text: 'History',
          link: 'https://www.youtube.com/feed/history',
        },
        {
          text: 'Your Videos',
          link: 'https://www.youtube.com/feed/my_videos',
        },
        {
          text: 'Live',
          link: 'https://www.youtube.com/live',
        },
        {
          text: 'Settings',
          link: 'https://www.youtube.com/account',
        },
      ],
      [
        {
          text: 'Watch Later',
          link: 'https://www.youtube.com/playlist?list=WL',
        },
        {
          text: 'Liked Videos',
          link: 'https://www.youtube.com/playlist?list=LL',
        },
        {
          text: 'Music',
          link: 'https://www.youtube.com/music',
        },
        {
          text: 'Gaming',
          link: 'https://www.youtube.com/gaming',
        },
      ],
      [
        {
          text: 'Sports',
          link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
        },
        {
          text: 'News',
          link: 'https://www.youtube.com/news',
        },
        {
          text: 'Fashion & Beauty',
          link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
        },
        {
          text: 'Learning',
          link: 'https://www.youtube.com/learning',
        },
      ],
      [
        {
          text: 'Report History',
          link: 'https://www.youtube.com/feed/history/report_history',
        },
        {
          text: 'Help',
          link: 'https://support.google.com/youtube/?hl=en',
        },
        {
          text: 'Send Feedback',
          link: 'https://support.google.com/youtube/answer/4347644?hl=en',
        },
        {
          text: 'About',
          link: 'https://www.youtube.com/about/',
        },
      ],
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/shopcart', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('shopcart', {
    layout: 'shop',
    navigation: {
      links: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
      ],
    },

    header: {
      title: 'Кошик',
      button: {
        text: 'Продовжити покупки',
        link: 'https://www.youtube.com/',
      },
    },

    goodsBlock: [
      {
        image: 'https://picsum.photos/110/110',
        name: 'Samsung Galaxy S21 Ultra ',
        description:
          'екран 6.8", процесор Exynos 2100/Snapdragon 888, 12 ГБ ОЗУ, камера 108 МП, акумулятор 5000 мАг',
        price: { title: 'Ціна', value: '25 000 ₴' },
        amount: '1 шт.',
        buttons: [
          { text: 'Додати', isPrimary: true },
          { text: 'Видалити', isDanger: true },
        ],
      },
      {
        image: 'https://picsum.photos/110/110',
        name: 'Ноутбук Dell XPS 13',
        description:
          'екран 13.3", процесор Intel Core i7-1165G7, 16 ГБ ОЗУ, SSD на 512 ГБ, вага 1.2 кг.',
        price: { title: 'Ціна', value: '25 000 ₴' },

        amount: '1 шт.',
        buttons: [
          { text: 'Додати', isPrimary: true },
          { text: 'Видалити', isDanger: true },
        ],
      },
      {
        image: 'https://picsum.photos/110/110',
        name: 'Телевізор LG OLED CX',
        description:
          'екран 55", роздільна здатність 4K, Smart TV, HDR, звук Dolby Atmos, 4 HDMI порти, 3 USB порти.',
        price: { title: 'Ціна', value: '25 000 ₴' },

        amount: '1 шт.',
        buttons: [
          { text: 'Додати', isPrimary: true },
          { text: 'Видалити', isDanger: true },
        ],
      },
      {
        image: 'https://picsum.photos/110/110',
        name: 'Навушники Sony WH-1000XM4',
        description:
          'Bluetooth 5.0, активне шумозаглушення, 30 годин автономної роботи, сенсорне управління, вага 254 г.',
        price: { title: 'Ціна', value: '25 000 ₴' },

        amount: '1 шт.',
        buttons: [
          { text: 'Додати', isPrimary: true },
          { text: 'Видалити', isDanger: true },
        ],
      },
    ],

    total: {
      title: 'Сума замовлення',
      amount: '75 000 ₴',
      delivery: 'Без доставки',
      buttons: [
        {
          text: 'Оформити замовлення',
          link: 'https://www.youtube.com/',
          isSuccess: true,
        },
        {
          text: 'Офрмити кредит',
          link: 'https://www.youtube.com/',
          isOutline: true,
        },
      ],
    },

    goodsOtherBlock: {
      title: 'See other products',
      cards: [
        {
          image: 'https://picsum.photos/400/200',
          title: 'iPhone 13',
          description:
            'The latest iPhone model features a new A15 Bionic chip, improved camera system, and longer battery life.',
          isHot: false,
          idNew: false,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'MacBook Pro',
          description:
            "Apple's high-end laptop features a 16-inch Retina display, powerful M1 Pro or M1 Max chip, and up to 64GB of RAM.",
          isHot: true,
          idNew: false,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'AirPods Pro',
          description:
            "Apple's premium wireless earbuds feature active noise cancellation, a customizable fit, and up to 4.5 hours of listening time.",
          isHot: false,
          idNew: false,
        },
      ],
    },

    subscribe: {
      header: 'Unlock Premium Content',
      description:
        'Subscribe to access exclusive content and features.',
      buttons: [
        {
          text: 'Register Now',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Buy Subscription',
          link: 'https://www.youtube.com/',
        },
      ],
    },

    footer: [
      [
        {
          text: 'Home',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Trending',
          link: 'https://www.youtube.com/feed/trending',
        },
        {
          text: 'Subscriptions',
          link: 'https://www.youtube.com/feed/subscriptions',
        },
        {
          text: 'Library',
          link: 'https://www.youtube.com/feed/library',
        },
      ],
      [
        {
          text: 'History',
          link: 'https://www.youtube.com/feed/history',
        },
        {
          text: 'Your Videos',
          link: 'https://www.youtube.com/feed/my_videos',
        },
        {
          text: 'Live',
          link: 'https://www.youtube.com/live',
        },
        {
          text: 'Settings',
          link: 'https://www.youtube.com/account',
        },
      ],
      [
        {
          text: 'Watch Later',
          link: 'https://www.youtube.com/playlist?list=WL',
        },
        {
          text: 'Liked Videos',
          link: 'https://www.youtube.com/playlist?list=LL',
        },
        {
          text: 'Music',
          link: 'https://www.youtube.com/music',
        },
        {
          text: 'Gaming',
          link: 'https://www.youtube.com/gaming',
        },
      ],
      [
        {
          text: 'Sports',
          link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
        },
        {
          text: 'News',
          link: 'https://www.youtube.com/news',
        },
        {
          text: 'Fashion & Beauty',
          link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
        },
        {
          text: 'Learning',
          link: 'https://www.youtube.com/learning',
        },
      ],
      [
        {
          text: 'Report History',
          link: 'https://www.youtube.com/feed/history/report_history',
        },
        {
          text: 'Help',
          link: 'https://support.google.com/youtube/?hl=en',
        },
        {
          text: 'Send Feedback',
          link: 'https://support.google.com/youtube/answer/4347644?hl=en',
        },
        {
          text: 'About',
          link: 'https://www.youtube.com/about/',
        },
      ],
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/shopreview', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('shopreview', {
    layout: 'shop',
    navigation: {
      links: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
      ],
    },

    formBlock: {
      header: 'Відгуки покупців про Ноут',
      rating: {
        title: 'Оцінка',
        value: '4.5/5',
      },
      actionBlock: {
        tabs: [
          { text: 'Про товар' },
          { text: 'Характеристики' },
          { text: 'Відгуки', isActive: true },
        ],
        report: {
          title: 'Залиште відгук про товар',
          button: {
            text: 'Написати відгук',
            link: 'https://www.youtube.com/',
          },
        },
      },
      feedbackBlock: {
        title:
          'Хочете поділитись своєю думкою про наш магазин?',
        buttons: [
          {
            text: 'Додати відгук',
            isWarning: true,
            link: 'https://www.youtube.com/',
          },
          {
            text: 'Позитивні відгуки',
            isSuccess: true,
            link: 'https://www.youtube.com/',
          },
          {
            text: 'Негативні відгуки',
            isDanger: true,
            link: 'https://www.youtube.com/',
          },
        ],
      },
      goodsInfo: {
        photo: 'https://picsum.photos/110/100',
        name: 'Ноут Asus',
        price: '25 000 ₴',
        inMarket: true,
        buttons: [
          {
            text: 'Купити',
            isPrimary: true,
            link: 'https://www.youtube.com/',
          },
          {
            text: 'Купити в кредит',
            isSecondary: true,
            link: 'https://www.youtube.com/',
          },
        ],
        seller: {
          title: 'Продавець',
          value: 'Machinery',
        },
      },
    },

    reviewList: [
      {
        title: {
          userName: 'Іван Іванов',
          caption: 'Відгук покупця',
          date: '1 січня 2023',
        },
        reviewBody: {
          seller: {
            title: 'Продавець',
            value: 'Machinery',
          },
          rating: {
            title: 'Оцінка',
            value: '5/5',
          },
          text: [
            "Цей ноутбук має гарний дизайн та добре виконує свої основні функції. Швидкість роботи та продуктивність в цілому є на задовільному рівні. Крім того, присутній достатній обсяг пам'яті та потужність акумулятора.",
            ' Однак, можливі проблеми з перегрівом під час тривалого використання, та може бути недостатньої ємності жорсткого диска для потреб користувача. Крім того, ціна може бути дещо високою порівняно з аналогічними моделями.',
          ],
          advantages: {
            title: 'Переваги',
            text: 'Дизайн, швидкість роботи, обсяг пам’яті, акумулятор',
          },
          disadvantages: {
            title: 'Недоліки',
            text: 'Перегрів, ємкість жосткого диску',
          },
          images: [
            'https://picsum.photos/110/100',
            'https://picsum.photos/110/100',
            'https://picsum.photos/110/100',
          ],
          coments: [
            {
              userName: 'Користувач',
              date: '1 січня 2023',
              text: 'Дякую за відгук, я подумаю про недоліки, про які ви згадували, перш ніж зробити покупку.',
            },
            {
              userName: 'Користувач',
              date: '3 січня 2023',
              text: 'Дякую за корисний відгук! Це допомогло мені зробити вибір щодо покупки ноутбука.',
            },
            {
              userName: 'Користувач',
              date: '10 січня 2023',
              text: 'Дякую за відгук, але я хотів би дізнатися більше деталей про проблеми з перегрівом, щоб зробити зважений вибір перед покупкою.',
            },
          ],
        },
      },
      {
        title: {
          userName: 'Петро Петров',
          caption: 'Відгук покупця',
          date: '1 січня 2023',
        },
        reviewBody: {
          seller: {
            title: 'Продавець',
            value: 'Machinery',
          },
          rating: {
            title: 'Оцінка',
            value: '5/5',
          },
          text: [
            "Цей ноутбук має гарний дизайн та добре виконує свої основні функції. Швидкість роботи та продуктивність в цілому є на задовільному рівні. Крім того, присутній достатній обсяг пам'яті та потужність акумулятора.",
          ],
          advantages: {
            title: 'Переваги',
            text: 'Обсяг пам’яті, акумулятор',
          },
          disadvantages: {
            title: 'Недоліки',
            text: 'Не виявлено',
          },
          images: ['https://picsum.photos/110/100'],
          coments: [
            {
              userName: 'Користувач',
              date: '1 січня 2023',
              text: 'Дякую за відгук, я подумаю про недоліки, про які ви згадували, перш ніж зробити покупку.',
            },
          ],
        },
      },
    ],

    service: {
      title: 'Our Services',
      description:
        'We offer a variety of services to meet your needs, including web design, content creation, and social media management.',
      buttons: [
        {
          text: 'Show More',
          link: 'https://www.youtube.com/',
        },
      ],
    },

    footer: [
      [
        {
          text: 'Home',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Trending',
          link: 'https://www.youtube.com/feed/trending',
        },
        {
          text: 'Subscriptions',
          link: 'https://www.youtube.com/feed/subscriptions',
        },
        {
          text: 'Library',
          link: 'https://www.youtube.com/feed/library',
        },
      ],
      [
        {
          text: 'History',
          link: 'https://www.youtube.com/feed/history',
        },
        {
          text: 'Your Videos',
          link: 'https://www.youtube.com/feed/my_videos',
        },
        {
          text: 'Live',
          link: 'https://www.youtube.com/live',
        },
        {
          text: 'Settings',
          link: 'https://www.youtube.com/account',
        },
      ],
      [
        {
          text: 'Watch Later',
          link: 'https://www.youtube.com/playlist?list=WL',
        },
        {
          text: 'Liked Videos',
          link: 'https://www.youtube.com/playlist?list=LL',
        },
        {
          text: 'Music',
          link: 'https://www.youtube.com/music',
        },
        {
          text: 'Gaming',
          link: 'https://www.youtube.com/gaming',
        },
      ],
      [
        {
          text: 'Sports',
          link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
        },
        {
          text: 'News',
          link: 'https://www.youtube.com/news',
        },
        {
          text: 'Fashion & Beauty',
          link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
        },
        {
          text: 'Learning',
          link: 'https://www.youtube.com/learning',
        },
      ],
      [
        {
          text: 'Report History',
          link: 'https://www.youtube.com/feed/history/report_history',
        },
        {
          text: 'Help',
          link: 'https://support.google.com/youtube/?hl=en',
        },
        {
          text: 'Send Feedback',
          link: 'https://support.google.com/youtube/answer/4347644?hl=en',
        },
        {
          text: 'About',
          link: 'https://www.youtube.com/about/',
        },
      ],
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/shopcatalog', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('shopcatalog', {
    layout: 'shop',
    navigation: {
      links: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
      ],
    },
    breadcrumb: [
      { name: 'Головна', url: 'https://github.com/' },
      {
        name: "Комп'ютери та ноутбуки",
        url: 'https://www.google.com/',
      },
      { name: 'Ноутбуки', url: null },
    ],
    header: 'Ноутбуки',
    sortBlock: [
      {
        placeholder: 'За ціною',
        options: [
          { value: '1', text: 'За зростанням' },
          { value: '2', text: 'За спаданням' },
        ],
      },
      {
        placeholder: 'За новизною',
        options: [
          { value: '1', text: 'Спочатку нові' },
          { value: '2', text: 'Спочатку старі' },
        ],
      },
      {
        placeholder: 'За рейтингом',
        options: [
          { value: '1', text: 'За зростанням' },
          { value: '2', text: 'За спаданням' },
        ],
      },
    ],
    filterBlock: {
      sellers: {
        title: 'Продавець',
        list: [{ value: 'Machinery' }, { value: 'інші' }],
      },
      brands: {
        title: 'Бренд',
        input: {
          placeholder: 'Пошук',
        },
        options: [
          { value: 'Acer' },
          { value: 'Apple' },
          { value: 'Asus' },
          { value: 'Dell' },
        ],
      },
      price: {
        title: 'Ціна',
        range: {
          from: '8 000',
          to: '30 000',
        },
        button: {
          text: 'OK',
          link: 'https://www.youtube.com/',
        },
      },

      filterList: [
        {
          title: 'Готов к отправке',
          options: [{ value: 'Готов к отправке' }],
        },
        {
          title: 'Процесор',
          options: [
            { value: 'Intel Core i7' },
            { value: 'Intel Core i5' },
            { value: 'Intel Core i3' },
            { value: 'AMD Ryzen 9' },
          ],
        },
        {
          title: 'Діагональ екрану',
          options: [
            { value: '13' },
            { value: '14' },
            { value: '15-16' },
            { value: '17-18' },
            { value: '9 - 12.5' },
          ],
        },
        {
          title: 'Оперативна пам’ять',
          options: [
            { value: '10 - 12ГБ' },
            { value: '16 - 24ГБ' },
            { value: '32ГБ і більше' },
            { value: '4ГБ' },
            { value: '6 - 8ГБ' },
          ],
        },
        {
          title: 'Операційна система',
          options: [
            { value: 'Chrome OS' },
            { value: 'Linux' },
            { value: 'Windows' },
            { value: 'Mac OS' },
            { value: 'Без ОС' },
          ],
        },
      ],
    },
    goodsList: [
      {
        img: 'https://picsum.photos/400/200',
        isHot: true,
        isNew: true,
        isFast: true,
        isFree: true,
        name: 'Ноут',
        review: {
          amount: 13,
          text: 'відгуків',
        },
        price: '25 000 ₴',
        delivery: 'Готовий до відправки',
        buttons: [
          {
            text: 'Купити зараз',
            link: 'https://www.youtube.com/',
            isPrimary: true,
          },
          {
            text: 'Купити в кредит',
            link: 'https://www.youtube.com/',
            isSecondary: true,
          },
        ],
        characteristics: [
          { title: 'Діагональ', value: '15,6' },
          { title: 'Екран', value: 'IPS' },
          {
            title: 'Процесор',
            value: 'Intel Core i5-1135G7',
          },
          { title: 'Оперативна пам’ять', value: '8 ГБ' },
        ],
      },
      {
        img: 'https://picsum.photos/400/200',
        isFree: true,
        name: 'Ноут',
        review: {
          amount: 13,
          text: 'відгуків',
        },
        price: '25 000 ₴',
        delivery: 'Готовий до відправки',
        buttons: [
          {
            text: 'Купити зараз',
            link: 'https://www.youtube.com/',
            isPrimary: true,
          },
          {
            text: 'Купити в кредит',
            link: 'https://www.youtube.com/',
            isSecondary: true,
          },
        ],
        characteristics: [
          { title: 'Діагональ', value: '15,6' },
          { title: 'Екран', value: 'IPS' },
          {
            title: 'Процесор',
            value: 'Intel Core i5-1135G7',
          },
          { title: 'Оперативна пам’ять', value: '8 ГБ' },
        ],
      },
      {
        img: 'https://picsum.photos/400/200',
        isHot: true,
        isFree: true,
        name: 'Ноут',
        review: {
          amount: 13,
          text: 'відгуків',
        },
        price: '25 000 ₴',
        delivery: 'Готовий до відправки',
        buttons: [
          {
            text: 'Купити зараз',
            link: 'https://www.youtube.com/',
            isPrimary: true,
          },
          {
            text: 'Купити в кредит',
            link: 'https://www.youtube.com/',
            isSecondary: true,
          },
        ],
        characteristics: [
          { title: 'Діагональ', value: '15,6' },
          { title: 'Екран', value: 'IPS' },
          {
            title: 'Процесор',
            value: 'Intel Core i5-1135G7',
          },
          { title: 'Оперативна пам’ять', value: '8 ГБ' },
        ],
      },
      {
        img: 'https://picsum.photos/400/200',
        isHot: true,
        isFast: true,
        name: 'Ноут',
        review: {
          amount: 13,
          text: 'відгуків',
        },
        price: '25 000 ₴',
        delivery: 'Готовий до відправки',
        buttons: [
          {
            text: 'Купити зараз',
            link: 'https://www.youtube.com/',
            isPrimary: true,
          },
          {
            text: 'Купити в кредит',
            link: 'https://www.youtube.com/',
            isSecondary: true,
          },
        ],
        characteristics: [
          { title: 'Діагональ', value: '15,6' },
          { title: 'Екран', value: 'IPS' },
          {
            title: 'Процесор',
            value: 'Intel Core i5-1135G7',
          },
          { title: 'Оперативна пам’ять', value: '8 ГБ' },
        ],
      },
    ],
    service: {
      title: 'Our Services',
      description:
        'We offer a variety of services to meet your needs, including web design, content creation, and social media management.',
      buttons: [
        {
          text: 'Show More',
          link: 'https://www.youtube.com/',
        },
      ],
    },

    footer: [
      [
        {
          text: 'Home',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Trending',
          link: 'https://www.youtube.com/feed/trending',
        },
        {
          text: 'Subscriptions',
          link: 'https://www.youtube.com/feed/subscriptions',
        },
        {
          text: 'Library',
          link: 'https://www.youtube.com/feed/library',
        },
      ],
      [
        {
          text: 'History',
          link: 'https://www.youtube.com/feed/history',
        },
        {
          text: 'Your Videos',
          link: 'https://www.youtube.com/feed/my_videos',
        },
        {
          text: 'Live',
          link: 'https://www.youtube.com/live',
        },
        {
          text: 'Settings',
          link: 'https://www.youtube.com/account',
        },
      ],
      [
        {
          text: 'Watch Later',
          link: 'https://www.youtube.com/playlist?list=WL',
        },
        {
          text: 'Liked Videos',
          link: 'https://www.youtube.com/playlist?list=LL',
        },
        {
          text: 'Music',
          link: 'https://www.youtube.com/music',
        },
        {
          text: 'Gaming',
          link: 'https://www.youtube.com/gaming',
        },
      ],
      [
        {
          text: 'Sports',
          link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
        },
        {
          text: 'News',
          link: 'https://www.youtube.com/news',
        },
        {
          text: 'Fashion & Beauty',
          link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
        },
        {
          text: 'Learning',
          link: 'https://www.youtube.com/learning',
        },
      ],
      [
        {
          text: 'Report History',
          link: 'https://www.youtube.com/feed/history/report_history',
        },
        {
          text: 'Help',
          link: 'https://support.google.com/youtube/?hl=en',
        },
        {
          text: 'Send Feedback',
          link: 'https://support.google.com/youtube/answer/4347644?hl=en',
        },
        {
          text: 'About',
          link: 'https://www.youtube.com/about/',
        },
      ],
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

router.get('/css1', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('css1', {
    layout: 'bootstrap',
  })
  //                  ↑↑ сюди вводимо JSON дані
})

router.get('/css2', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('css2', {
    layout: 'bootstrap',
  })
  //                  ↑↑ сюди вводимо JSON дані
})

router.get('/css3', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('css3', {
    layout: 'bootstrap',
  })
  //                  ↑↑ сюди вводимо JSON дані
})

router.get('/homeworkCSS1', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('homeworkCSS1', {
    layout: 'css_homework',
  })
  //                  ↑↑ сюди вводимо JSON дані
})

router.get('/homeworkCSS2', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('homeworkCSS2', {
    layout: 'css_homework2',
  })
  //                  ↑↑ сюди вводимо JSON дані
})

router.get('/lesson8CSS', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('lesson8CSS', {
    layout: 'css_lesson8',
  })
  //                  ↑↑ сюди вводимо JSON дані
})

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/template-1', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('template-1', {
    layout: 'template-1',

    page: {
      title: 'Template 1 page',
    },
    header: [
      {
        text: 'Features',
        url: 'https://example.com/home',
      },
      {
        text: 'Enterprise',
        url: 'https://example.com/about',
      },
      {
        text: 'Support',
        url: 'https://example.com/services',
      },
    ],
    hero: {
      title: 'Pricing',
      text: "Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.",
    },
    plans: [
      {
        name: 'Free',
        price: 0,
        features: [
          '10 users included',
          '2 GB of storage',
          'Email support',
          'Help center access',
        ],
        button: 'Sign up for free',
      },
      {
        name: 'Pro',
        price: 15,
        features: [
          '20 users included',
          '4 GB of storage',
          'Priority email support',
          'Help center access',
        ],
        button: 'Get started',
      },
      {
        name: 'Enterprise',
        price: 30,
        features: [
          '30 users included',
          '15 GB of storage',
          'Phone and email support',
          'Help center access',
        ],
        button: 'Contact us',
      },
    ],
    footer: [
      {
        title: 'Features',
        links: [
          {
            text: 'Cool stuff',
            url: 'https://example.com/cool-stuff',
          },
          {
            text: 'Random feature',
            url: 'https://example.com/random-feature',
          },
          {
            text: 'Team feature',
            url: 'https://example.com/team-feature',
          },
          {
            text: 'Stuff for developers',
            url: 'https://example.com/stuff-for-developers',
          },
        ],
      },
      {
        title: 'Resources',
        links: [
          {
            text: 'Resource name',
            url: 'https://example.com/resource-name',
          },
          {
            text: 'Another resource',
            url: 'https://example.com/another-resource',
          },
          {
            text: 'Final resource',
            url: 'https://example.com/final-resource',
          },
        ],
      },
      {
        title: 'About',
        links: [
          {
            text: 'Team',
            url: 'https://example.com/team',
          },
          {
            text: 'Locations',
            url: 'https://example.com/locations',
          },
          {
            text: 'Privacy',
            url: 'https://example.com/privacy',
          },
          {
            text: 'Terms',
            url: 'https://example.com/terms',
          },
        ],
      },
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/template-2', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('template-2', {
    layout: 'template-2',

    page: {
      title: 'Template 2',
    },
    header: [
      {
        text: 'Features',
        url: 'https://example.com/home',
      },
      {
        text: 'Enterprise',
        url: 'https://example.com/about',
      },
      {
        text: 'Support',
        url: 'https://example.com/services',
      },
    ],
    hero: {
      title: 'Pricing',
      text: "Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.",
      button: {
        text: 'Get started',
        url: 'https://example.com/get-started',
      },
    },
    preview: [
      {
        date: 'Oct 24',
        title: 'Latest post',
        text: 'This is a wider card with supporting text below as a natural lead-in to additional content',
        category: [
          {
            id: 1,
            text: 'World',
          },
          {
            id: 3,
            text: 'Hot',
          },
        ],
      },
      {
        date: 'Oct 26',
        title: 'Featured story',
        text: 'This is a wider card with supporting text below as a natural lead-in to additional content',
        category: [
          {
            id: 2,
            text: 'Sport',
          },
        ],
      },
      {
        date: 'Oct 28',
        title: 'Popular post',
        text: 'This is a wider card with supporting text below as a natural lead-in to additional content',
        category: [
          {
            id: 3,
            text: 'Hot',
          },
        ],
      },
      {
        date: 'Oct 30',
        title: 'Trending topic',
        text: 'This is a wider card with supporting text below as a natural lead-in to additional content',
        category: [
          {
            id: 4,
            text: 'Fashion',
          },
        ],
      },
    ],
    categories: [
      {
        id: 1,
        text: 'World',
      },
      {
        id: 2,
        text: 'Sport',
      },
      {
        id: 3,
        text: 'Hot',
      },
      {
        id: 4,
        text: 'Fashion',
      },
    ],
    news: [
      {
        title: 'New blog post',
        date: 'February 14',
        author: 'John',
        description:
          'This blog post discusses various topics related to web development and design, including best practices and emerging trends.',
      },
      {
        title: 'Latest blog post',
        date: 'March 1',
        author: 'Emily',
        description:
          'This blog post covers a range of topics, from productivity tips to personal development strategies, with the aim of helping readers lead more fulfilling lives.',
      },
      {
        title: 'Popular blog post',
        date: 'April 7',
        author: 'David',
        description:
          'This blog post focuses on the importance of networking and building relationships in business, providing tips and insights for professionals of all levels.',
      },
      {
        title: 'Top blog post',
        date: 'May 12',
        author: 'Sophie',
        description:
          'This blog post examines the latest trends and innovations in the field of marketing, with a particular focus on social media and content marketing strategies.',
      },
    ],
    about:
      'We are a dynamic team of experienced journalists, dedicated to delivering the latest news and up-to-date analysis on a range of topics. With our finger on the pulse of global affairs, we strive to provide an objective and insightful perspective on the events shaping our world. Our team comprises individuals with diverse backgrounds and expertise, allowing us to provide comprehensive coverage across all sectors.',
    archive: [
      {
        text: 'March 2014',
        url: 'https://example.com/march-2014',
      },
      {
        text: 'February 2014',
        url: 'https://example.com/february-2014',
      },
      {
        text: 'January 2014',
        url: 'https://example.com/january-2014',
      },
      {
        text: 'December 2013',
        url: 'https://example.com/december-2013',
      },
      {
        text: 'November 2013',
        url: 'https://example.com/november-2013',
      },
      {
        text: 'October 2013',
        url: 'https://example.com/october-2013',
      },
      {
        text: 'September 2013',
        url: 'https://example.com/september-2013',
      },
    ],
    social: [
      {
        text: 'Instagram',
        url: 'https://www.instagram.com/',
      },
      {
        text: 'Facebook',
        url: 'https://www.facebook.com/',
      },
      {
        text: 'Google',
        url: 'https://www.instagram.com/',
      },
    ],
    footer: [
      {
        title: 'Features',
        links: [
          {
            text: 'Cool stuff',
            url: 'https://example.com/cool-stuff',
          },
          {
            text: 'Random feature',
            url: 'https://example.com/random-feature',
          },
          {
            text: 'Team feature',
            url: 'https://example.com/team-feature',
          },
          {
            text: 'Stuff for developers',
            url: 'https://example.com/stuff-for-developers',
          },
        ],
      },
      {
        title: 'Resources',
        links: [
          {
            text: 'Resource name',
            url: 'https://example.com/resource-name',
          },
          {
            text: 'Another resource',
            url: 'https://example.com/another-resource',
          },
          {
            text: 'Final resource',
            url: 'https://example.com/final-resource',
          },
        ],
      },
      {
        title: 'About',
        links: [
          {
            text: 'Team',
            url: 'https://example.com/team',
          },
          {
            text: 'Locations',
            url: 'https://example.com/locations',
          },
          {
            text: 'Privacy',
            url: 'https://example.com/privacy',
          },
          {
            text: 'Terms',
            url: 'https://example.com/terms',
          },
        ],
      },
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

router.get('/css_p_1', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('css_p_1', {
    layout: 'css_p_1',
  })
  //                  ↑↑ сюди вводимо JSON дані
})

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/template-3', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('template-3', {
    layout: 'template-3',

    page: {
      title: 'Template 3 CSS',
    },

    header: [
      {
        text: 'Features',
        url: 'https://example.com/home',
      },
      {
        text: 'Enterprise',
        url: 'https://example.com/about',
      },
      {
        text: 'Support',
        url: 'https://example.com/services',
      },
    ],

    hero: {
      title:
        'First featurette heading. It’ll blow your mind.',
      text: 'Some great placeholder content for the first featurette here. Imagine some exciting prose here.',
      photo: 'https://picsum.photos/500/500',
    },

    blog: [
      {
        title: 'Latest post',
        text: 'This is a wider card with supporting text below as a natural lead-in to additional content',
        button: 'View details',
        href: 'https://example.com/',
        img: 'https://picsum.photos/140/140',
      },
      {
        title: 'Featured story',
        text: 'This is a wider card with supporting text below as a natural lead-in to additional content',
        button: 'View details',
        href: 'https://example.com/',
        img: 'https://picsum.photos/140/140',
      },
      {
        title: 'Popular post',
        text: 'This is a wider card with supporting text below as a natural lead-in to additional content',
        button: 'View details',
        href: 'https://example.com/',
        img: 'https://picsum.photos/140/140',
      },
    ],

    form: {
      title: 'Sign up form',
      info: 'Some placeholder content in a paragraph below the heading and date.',
      button: 'Sign up',
      href: 'https://example.com/',
    },

    footer: [
      {
        title: 'Features',
        links: [
          {
            text: 'Cool stuff',
            url: 'https://example.com/cool-stuff',
          },
          {
            text: 'Random feature',
            url: 'https://example.com/random-feature',
          },
          {
            text: 'Team feature',
            url: 'https://example.com/team-feature',
          },
          {
            text: 'Stuff for developers',
            url: 'https://example.com/stuff-for-developers',
          },
        ],
      },
      {
        title: 'Resources',
        links: [
          {
            text: 'Resource name',
            url: 'https://example.com/resource-name',
          },
          {
            text: 'Another resource',
            url: 'https://example.com/another-resource',
          },
          {
            text: 'Final resource',
            url: 'https://example.com/final-resource',
          },
        ],
      },
      {
        title: 'About',
        links: [
          {
            text: 'Team',
            url: 'https://example.com/team',
          },
          {
            text: 'Locations',
            url: 'https://example.com/locations',
          },
          {
            text: 'Privacy',
            url: 'https://example.com/privacy',
          },
          {
            text: 'Terms',
            url: 'https://example.com/terms',
          },
        ],
      },
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/template-4', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('template-4', {
    layout: 'template-4',
    page: {
      title: 'Template 4',
    },

    header: [
      {
        text: 'Features',
        url: 'https://example.com/home',
      },
      {
        text: 'Enterprise',
        url: 'https://example.com/about',
      },
      {
        text: 'Support',
        url: 'https://example.com/services',
      },
    ],

    main: {
      heading: 'Oh yeah, it’s that good. See for yourself.',
      description:
        'Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.',
      image: 'https://picsum.photos/500/500',
      button: 'View details',
      href: 'https://example.com/',
    },

    featured: [
      {
        heading: 'Featured title',
        info: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
        linkText: 'Call to action',
        linkUrl: 'https://example.com/',
        photo: 'https://picsum.photos/64/64',
      },
      {
        heading: 'Featured title',
        info: 'This is a wider card with supporting text below as a natural lead-in to additional content',
        linkText: 'Call to action',
        linkUrl: 'https://example.com/',
        photo: 'https://picsum.photos/64/64',
      },
      {
        heading: 'Featured title',
        info: 'This is a wider card with supporting text below as a natural lead-in to additional content',
        linkText: 'Call to action',
        linkUrl: 'https://example.com/',
        photo: 'https://picsum.photos/64/64',
      },
    ],

    actions: [
      {
        heading: 'Checkout form',
        text: 'Checkout',
        url: 'https://example.com/',
      },
      {
        heading: 'Login form',
        text: 'Login',
        url: 'https://example.com/',
      },
      {
        heading: 'Sign up form',
        text: 'Sign up',
        url: 'https://example.com/',
      },
    ],

    footer: [
      {
        title: 'Features',
        links: [
          {
            text: 'Cool stuff',
            url: 'https://example.com/cool-stuff',
          },
          {
            text: 'Random feature',
            url: 'https://example.com/random-feature',
          },
          {
            text: 'Team feature',
            url: 'https://example.com/team-feature',
          },
          {
            text: 'Stuff for developers',
            url: 'https://example.com/stuff-for-developers',
          },
        ],
      },
      {
        title: 'Resources',
        links: [
          {
            text: 'Resource name',
            url: 'https://example.com/resource-name',
          },
          {
            text: 'Another resource',
            url: 'https://example.com/another-resource',
          },
          {
            text: 'Final resource',
            url: 'https://example.com/final-resource',
          },
        ],
      },
      {
        title: 'About',
        links: [
          {
            text: 'Team',
            url: 'https://example.com/team',
          },
          {
            text: 'Locations',
            url: 'https://example.com/locations',
          },
          {
            text: 'Privacy',
            url: 'https://example.com/privacy',
          },
          {
            text: 'Terms',
            url: 'https://example.com/terms',
          },
        ],
      },
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/template-5', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('template-5', {
    page: {
      title: 'Template 5',
    },

    layout: 'template-5',

    header: [
      {
        text: 'Features',
        url: 'https://example.com/home',
      },
      {
        text: 'Enterprise',
        url: 'https://example.com/about',
      },
      {
        text: 'Support',
        url: 'https://example.com/services',
      },
    ],

    form: {
      title: 'Please sign in',

      inputs: [
        {
          id: 1,
          name: 'emailAddress',
          placeholder: 'Email address',
          type: 'email',
        },
        {
          id: 2,
          name: 'userPassword',
          placeholder: 'Password',
          type: 'password',
        },
      ],

      checkbox: {
        label: 'Remember me',
        name: 'remember',
      },

      button: 'Sign in',

      info: 'Stay updated on new releases and features, guides, and case studies.',
    },

    messages: {
      title: 'List groups',
      list: [
        {
          name: 'Tom',
          message:
            'I just got back from a trip to Europe. It was amazing!...',
          day: 'Tue',
        },
        {
          name: 'Emily',
          message:
            "I can't wait for the weekend. I'm planning to go hiking with some friends...",
          day: 'Wed',
        },
      ],
    },

    advantages: [
      {
        title: '24/7 Availability',
        text: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the.',
      },
      {
        title: '10 Years of Expertise',
        text: 'Fill out all required fields using real data on the checkout page.',
      },
      {
        title: 'Loyalty Program',
        text: 'While you were paying, we had already prepared access to our Member Area, where you can read more about the status of your order.',
      },
    ],

    footer: [
      {
        title: 'Features',
        links: [
          {
            text: 'Cool stuff',
            url: 'https://example.com/cool-stuff',
          },
          {
            text: 'Random feature',
            url: 'https://example.com/random-feature',
          },
          {
            text: 'Team feature',
            url: 'https://example.com/team-feature',
          },
          {
            text: 'Stuff for developers',
            url: 'https://example.com/stuff-for-developers',
          },
        ],
      },
      {
        title: 'Resources',
        links: [
          {
            text: 'Resource name',
            url: 'https://example.com/resource-name',
          },
          {
            text: 'Another resource',
            url: 'https://example.com/another-resource',
          },
          {
            text: 'Final resource',
            url: 'https://example.com/final-resource',
          },
        ],
      },
      {
        title: 'About',
        links: [
          {
            text: 'Team',
            url: 'https://example.com/team',
          },
          {
            text: 'Locations',
            url: 'https://example.com/locations',
          },
          {
            text: 'Privacy',
            url: 'https://example.com/privacy',
          },
          {
            text: 'Terms',
            url: 'https://example.com/terms',
          },
        ],
      },
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/template-6', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('template-6', {
    layout: 'template-6',
    page: {
      title: 'TEMPLATE 6',
    },
    header: [
      {
        text: 'Features',
        url: 'https://example.com/home',
      },
      {
        text: 'Enterprise',
        url: 'https://example.com/about',
      },
      {
        text: 'Support',
        url: 'https://example.com/services',
      },
    ],
    info: {
      title: 'Vertically centered hero sign-up form',
      description:
        'Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation',
    },
    form: {
      inputs: [
        {
          id: 1,
          name: 'emailAddress',
          placeholder: 'Email address',
          type: 'email',
        },
        {
          id: 2,
          name: 'userPassword',
          placeholder: 'Password',
          type: 'password',
        },
      ],
      checkbox: {
        label: 'Remember me',
        name: 'remember',
      },
      button: 'Sign in',
      info: 'By clicking Sign up, you agree to the terms of use.',
    },
    updates: {
      title: 'Recent updates',
      list: [
        {
          nickname: 'Techie',
          description:
            'The latest software update includes several new features and performance improvements, making it faster and easier to use...',
        },
        {
          nickname: 'Traveler',
          description:
            "We've added new destinations to our travel packages, including exotic locations and off-the-beaten-path adventures...",
        },
        {
          nickname: 'Foodie',
          description:
            'Our new menu features a variety of delicious dishes inspired by cuisines from around the world, with options for every taste and dietary preference...',
        },
      ],
      show_all: {
        text: 'All updates',
        url: 'https://example.com/updates',
      },
    },
    expirience: {
      title: 'We have a lot of experience',
      badge: 'hot!',
      list: [
        {
          name: 'John Doe',
          details:
            'In the last month, the site received a total of 10,000 unique visitors. The majority of the traffic came from search engines, with Google being the top source. The bounce rate was 45%, which is within the acceptable range.',
        },
        {
          name: 'Jane Smith',
          details:
            "The site's average page load time was 3.5 seconds, which is slower than the recommended 2 seconds. The site's performance score is 80 out of 100, which is good but could be improved. There were no major errors or issues identified during the analysis.",
        },
        {
          name: 'Bob Johnson',
          details:
            "The site's SSL certificate is valid and up-to-date. There were no known security vulnerabilities or issues found during the analysis. All user data is encrypted and protected using industry-standard methods.",
        },
      ],
    },
    footer: [
      {
        title: 'Features',
        links: [
          {
            text: 'Cool stuff',
            url: 'https://example.com/cool-stuff',
          },
          {
            text: 'Random feature',
            url: 'https://example.com/random-feature',
          },
          {
            text: 'Team feature',
            url: 'https://example.com/team-feature',
          },
          {
            text: 'Stuff for developers',
            url: 'https://example.com/stuff-for-developers',
          },
        ],
      },
      {
        title: 'Resources',
        links: [
          {
            text: 'Resource name',
            url: 'https://example.com/resource-name',
          },
          {
            text: 'Another resource',
            url: 'https://example.com/another-resource',
          },
          {
            text: 'Final resource',
            url: 'https://example.com/final-resource',
          },
        ],
      },
      {
        title: 'About',
        links: [
          {
            text: 'Team',
            url: 'https://example.com/team',
          },
          {
            text: 'Locations',
            url: 'https://example.com/locations',
          },
          {
            text: 'Privacy',
            url: 'https://example.com/privacy',
          },
          {
            text: 'Terms',
            url: 'https://example.com/terms',
          },
        ],
      },
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

//           ↙ тут вводимо шлях (PATH) до сторінки

router.get('/template-7', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('template-7', {
    page: {
      title: 'Template 7',
    },

    layout: 'template-7',

    header: {
      brandName: 'Logo',
      userOnline: 10,

      ad: {
        text: 'Best service to Boost your priority faster',
        url: 'www.example.com',
      },

      links: [
        {
          url: 'www.example.com',
          text: 'Home',
        },
        {
          url: 'www.example.com/about',
          text: 'About Us',
        },
        {
          url: 'www.example.com/services',
          text: 'Services',
        },
        {
          url: 'www.example.com/contact',
          text: 'Contact Us',
        },
        {
          url: 'www.example.com/blog',
          text: 'Blog',
        },
      ],
    },

    hero: {
      title: 'The most professional service',
      description:
        'I am incredibly grateful for the outstanding work done by this team. Their promptness and attention to detail',
      button: {
        url: 'www.example.com/buy',
        text: 'Go to shop',
      },
    },

    about: {
      heading: 'About shop',
      info: "Lorem Ipsum is not an actual shop, but rather a type of dummy text used as a placeholder in designs to simulate the appearance of written content. It's often used by designers and developers as a temporary substitute for actual text while they're working on a project. The Lorem Ipsum text is derived from a Latin passage by Cicero, but it's been modified and scrambled so that it's no longer legible. The purpose of using Lorem Ipsum is to give designers an idea of how their designs will look when filled with text, without being distracted by the actual content of the text itself.",
    },

    articles: [
      {
        id: 1,
        photo: 'https://picsum.photos/400/200',
        name: 'Lorem Ipsum',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id dolor eget sapien lobortis finibus. Fusce euismod, ipsum sit amet pulvinar imperdiet, sapien nunc viverra nulla, vel pulvinar velit leo sed velit.',
      },
      {
        id: 2,
        isNew: true,
        photo: 'https://picsum.photos/400/200',
        name: 'Dolor Sit Amet',
        description:
          'Etiam luctus ante eget ante convallis iaculis. Nunc viverra quam vel libero accumsan, non malesuada neque vestibulum. Curabitur malesuada, velit ut pretium ullamcorper, lacus elit vehicula sapien, ut sollicitudin quam metus eget sapien.',
      },
      {
        id: 3,
        photo: 'https://picsum.photos/400/200',
        name: 'Ipsum Dolor',
        description:
          'Sed euismod risus sit amet sapien fermentum, vitae scelerisque lectus hendrerit. Integer at velit tristique, varius dolor in, gravida est. Nunc sagittis justo vel velit tempor, eget faucibus nulla posuere.',
      },
    ],

    footer: {
      copyright:
        '© Copyrights Shop 2022-2023. All rights reserved',
      pages: [
        {
          path: 'www.example.com/terms',
          name: 'Terms of Use',
        },
        {
          path: 'www.example.com/privacy',
          name: 'Privacy Policy',
        },
        {
          path: 'www.example.com/refund',
          name: 'Refund Policy',
        },
      ],
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/dashboard', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('dashboard', {
    layout: null,
  })
  //                  ↑↑ сюди вводимо JSON дані
})

router.get('/slack', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('slack', {
    layout: null,
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
