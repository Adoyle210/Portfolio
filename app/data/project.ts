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
    description: 'Developed an interactive educational simulation in Unreal Engine that helps users learn how microchips work through 3D visualization, animation, and hands-on exploration.',
    link: 'https://engineering.oregonstate.edu/all-stories/exploring-microchips-inside',
    video: 'https://www.google.com/',
    image: ['img/chip/ChipLayers.png', 'img/chip/IMG_0245.jpeg', 'img/chip/LogicGateTicTacToe.png', 'img/chip/Transistors.png', 'img/chip/FlipFlop.png', ],
    skills: ['Game Development', '3D Modeling', 'Animation', 'Simulation Systems'],
    language: ['C++'],
    tools: ['Unreal Engine 5'],
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
    tools: ['WebGL'],
    year: 2025,
    pinned: false,
    id: 'Project-fractal'
  },
  {
    name: 'Character Flight Animation Study',
    description: 'Built a small Unreal Engine project focused on character animation and movement to simulate the visual effect of flight.',
    link: 'https://www.google.com/',
    video: 'https://www.google.com/',
    image: ['img/flight/flight1.png', 'img/flight/flight2.png'],
    skills: ['Game Development', 'Animation'],
    language: ['C++'],
    tools: ['Unreal Engine 5'],
    year: 2025,
    pinned: false,
    id: 'project-flying'
  },
  {
    name: 'Porfolio Website',
    description: 'Designed and built a personal portfolio website using Next.js and TypeScript to showcase projects, experience, and technical skills.',
    link: 'https://adoyle.vercel.app/',
    video: 'https://www.google.com/',
    image: ['img/portfolio.png'],
    skills: ['Web Development', 'UI Development'],
    language: ['TypeScript', 'JavaScript', 'HTML', 'CSS'],
    tools: ['Next.js', 'Tailwind CSS', 'Vercel'],
    year: 2025,
    pinned: false,
    id: 'project-portfolio-website',
  },
  {
    name: 'Animating Cooking in Blender',
    description: 'Created a Blender animation scene simulating water, fire, frying, and smoke effects to practice visual storytelling and motion design.',
    link: 'https://www.youtube.com/watch?v=bODAEUhxELU&t=4s',
    video: 'https://www.youtube.com/watch?v=bODAEUhxELU&t=4s',
    image: ['img/kitchenModel.png'], // Using kitchen model as placeholder
    skills: [ '3D Modeling', 'Animation', 'Visual Effects'],
    tools: ['Blender'],
    year: 2025,
    pinned: false,
    id: 'project-animating-cooking-in-blender',
  },
  {
    name: 'Modeling and Rigging a Bunny',
    description: 'Modeled and rigged a bunny in Blender as an introduction to character setup, deformation, and animation workflow.',
    link: 'https://www.youtube.com/watch?v=tvSdmyS2vTc',
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
    description: 'Built my first Blender environment model as a stylized isometric kitchen scene focused on composition and spatial modeling.', 
    link: 'https://www.google.com/',
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
      description:'Developed an immersive VR museum in Unreal Engine that showcases student stories at Oregon State University through interactive storytelling and spatial navigation.',
      link: 'https://github.com/Pranj99/MUStudDivDisplay',
      video:
        'https://www.youtube.com/watch?v=xXWOZi6mr5w',
      image: ['img/kitchenModel.png'], // Placeholder image
      skills: ['VR/AR Development','Interactive Storytelling'],
      tools: ['Unreal Engine 5'],
      year: 2024,
      pinned: false,
        id: 'project1_osu_museum',
    },
    {
      name: 'Planen',
      description: "Built a native Android planning app in Kotlin to help users manage tasks and deadlines with a learning focus on mobile development fundamentals.",
      link: "https://github.com/shawn120/Planen-Android",
      video:
        'https://www.google.com/',
      skills: ['Mobile Development', 'UI Development'],
      language: ['Kotlin'],
      tools: ['Android Studio'],
      image: ['img/planen/Planen1.jpeg', 'img/planen/Planen2.jpeg', 'img/planen/Planen3.jpeg', 'img/planen/Planen4.jpeg'],
      year: 2024,
      pinned: true,
      id: 'project2-planen',
    },
    {
      name: 'Weather App',
      description: 'Built a mobile weather app in Kotlin that fetches location-based forecasts, handles API-driven data, and presents weather information in a clean user interface.',
      link: 'https://www.google.com/',
      video: 'https://www.google.com/',
      image: ['img/portfolio.png'], // Placeholder image
      skills: ['Mobile Development', 'API Integration'],
      language: ['Kotlin'],
      tools: ['Android Studio', 'OpenWeather API'],
      year: 2024,
      pinned: false,
      id: 'project3-weather-app-android',
    },
    {
      name: 'Tarpaulin API',
      description: 'Developed a lightweight course management API as an alternative to Canvas, focusing on backend structure, data handling, and application design.',
      link: 'https://github.com/Adoyle210/Tarpaulin_API',
      video: 'https://www.google.com/',
      image: ['img/portfolio.png'], // Placeholder image
      skills: ['API Development'],
      language: ['JavaScript'],
      tools: ['PostgreSQL', 'Node.js'],
      year: 2024,
      pinned: false,
      id: 'project4-tarpaulin-api',
    },
    {
      name: 'Pokédex Database',
      description: 'Designed a relational database for aspiring Pokémon trainers to track Pokémon names, types, IDs, origin, and win-loss records, then refined the schema based on peer feedback to improve usability and data management.',
      link: 'https://github.com/Adoyle210/UndergradPortfolio/tree/main/CS340-DataBases/Project',
      video: 'https://www.google.com/',
      image: ['img/pokedex.png'],
      skills: ['Database Design', 'SQL', 'Data Modeling'],
      language: ['SQL'],
      tools: ['PostgreSQL'],
      year: 2023,
      pinned: false,
      id: 'project-pokedex-database',
    }
  ]