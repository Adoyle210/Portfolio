type Project = {
    name: string
    description: string
    link: string
    video: string
    image: string []
    skills?: string []
    language?: string []
    tools?: string []
    year: number
    pinned: boolean
    id: string
}
export const PROJECTS: Project[] = [
  {
    name: 'Microchip Explorer',
    description: 'This project is an NSF sponsored project that allows users to learn about microchips and how they work.',
    link: 'https://engineering.oregonstate.edu/all-stories/exploring-microchips-inside',
    video: 'https://www.google.com/',
    image: ['img/chip/ChipLayers.png', 'img/chip/IMG_0245.jpeg', 'img/chip/LogicGateTicTacToe.png', 'img/chip/Transistors.png', 'img/chip/FlipFlop.png', ],
    skills: ['Game Development', '3D Modeling', 'Animation'],
    language: ['C++'],
    year: 2026,
    pinned: true,
    id:'thesis-project'
  },
  {
    name: 'Iteractive Fractal Shader Visualization',
    description: 'Created an interactive shader-based visualization that generates mesmerizing animated fractal pattern using GLSL that change over time.',
    link: 'https://github.com/Adoyle210/GradPortfolio/tree/main/CS%20557%20-%20Computer%20Graphics%20Shaders/Final',
    video: 'https://www.google.com/',
    image: ['img/fractal/fractal3.png', 'img/fractal/fractal2.png'],
    skills: ['Shaders'],
    language: ['GLSL'],
    year: 2025,
    pinned: false,
    id: 'Project-fractal'
  },
  {
    name: 'Superman Flying',
    description: 'This is a mini project where I practiced animating characters in Unreal to give the appearance of flying.',
    link: 'https://www.google.com/',
    video: 'https://www.google.com/',
    image: ['img/flight/flight1.png', 'img/flight/flight2.png'],
    skills: ['Game Development'],
    language: ['C++'],
    tools: ['Unreal Engine 5'],
    year: 2025,
    pinned: false,
    id: 'project-flying'
  },
  {
    name: 'Porfolio Website',
    description: 'This project is a portfolio website. This was my first project building a portfolio website.',
    link: 'https://www.google.com/',
    video: 'https://www.google.com/',
    image: ['img/portfolio.png'],
    skills: ['Web Development'],
    language: ['HTML', 'CSS', 'JavaScript'],
    tools: ['Next.js', 'Tailwind CSS'],
    year: 2025,
    pinned: false,
    id: 'project-portfolio-website',
  },
  {
    name: 'Animating Cooking in Blender',
    description: 'This project is a animating cooking in Blender. In this project I simulated water, fire, frying,and smoke/steam effects.',
    link: 'https://www.youtube.com/watch?v=bODAEUhxELU&t=4s',
    video: 'https://www.youtube.com/watch?v=bODAEUhxELU&t=4s',
    image: ['img/kitchenModel.png'], // Using kitchen model as placeholder
    skills: [ '3D Modeling', 'Animation'],
    tools: ['Blender'],
    year: 2025,
    pinned: false,
    id: 'project-animating-cooking-in-blender',
  },
  {
    name: 'Modeling and Rigging a Bunny',
    description: 'This project is a modeling and rigging a bunny. This was my first project rigging in Blender.',
    link: 'https://www.google.com/',
    video: 'https://www.youtube.com/watch?v=tvSdmyS2vTc',
    image: ['img/BunnyRigging.png'],
    skills: ['3D Modeling', 'Rigging'],
    tools: ['Blender'],
    year: 2025,
    pinned: false,
    id: 'project-modeling-and-rigging-a-bunny',
  },
  {
    name: 'Isometric Kitchen Model',
    description: 'This project is a isometric kitchen model. This was my first project modeling in Blender.'
    , link: 'https://www.google.com/',
    video: 'video/kitchenModel.mp4',
    image: ['img/kitchenModel.png'],
    skills: ['3D Modeling'],
    tools: ['Blender'],
    year: 2025,
    pinned: false,
    id: 'project-isometric-kitchen-model',
  },  
  {
      name: 'OSU Virtual Reality Museum',
      description:
        'This project is a virtual reality museum about students at Oregon State University. In this immersive experience, you can listen to student stories narrated in their own voices, explore basic information about each student, and teleport into their world!',
      link: 'https://github.com/Pranj99/MUStudDivDisplay',
      video:
        'https://www.youtube.com/watch?v=xXWOZi6mr5w',
      image: ['img/kitchenModel.png'], // Placeholder image
      skills: ['VR/AR Development'],
      tools: ['Unreal Engine 5'],
      year: 2024,
      pinned: false,
        id: 'project1_osu_museum',
    },
    {
      name: 'Planen',
      description: "Planen, derived from the German verb \"to plan,\" is here to revolutionize the way you manage your tasks! This is my first crack at building a native Android app with Kotlin, so it's more of a learning experience than a finished product.",
      link: "https://github.com/shawn120/Planen-Android",
      video:
        'https://www.google.com/',
      skills: ['Mobile Development'],
      language: ['Kotlin'],
      image: ['img/planen/Planen1.jpeg', 'img/planen/Planen2.jpeg', 'img/planen/Planen3.jpeg', 'img/planen/Planen4.jpeg'],
      year: 2024,
      pinned: true,
      id: 'project2-planen',
    },
    {
      name: 'Weather App',
      description: 'This project is a weather app that allows you to search for weather information for a specific location.',
      link: 'https://www.google.com/',
      video: 'https://www.google.com/',
      image: ['img/portfolio.png'], // Placeholder image
      skills: ['Mobile Development'],
      language: ['Kotlin'],
      year: 2024,
      pinned: false,
      id: 'project3-weather-app-android',
    },
    {
      name: 'Tarpaulin API',
      description: 'Tarpaulin is a lightweight course management tool that\'s an "alternative" to Canvas.',
      link: 'https://github.com/Adoyle210/Tarpaulin_API',
      video: 'https://www.google.com/',
      image: ['img/portfolio.png'], // Placeholder image
      skills: ['API Development'],
      language: ['JavaScript'],
      tools: ['PostgreSQL'],
      year: 2024,
      pinned: false,
      id: 'project4-tarpaulin-api',
    }
  ]