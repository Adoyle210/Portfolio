type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  description: string []
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

type TechnicalSkills = {
  category: string
  skills: string []
  id: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Project one',
    description:
      'Description of project one.',
    link: 'https://www.google.com/',
    video:
      'https://www.google.com/',
    id: 'project1',
  },
  {
    name: 'Project two',
    description: 'project two description',
    link: 'https://www.google.com/',
    video:
      'https://www.google.com/',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Oregon State University',
    title: 'Graduate Research Assistant',
    start: '2024',
    end: 'Present',
    link: 'https://www.raffaeledeamicis.com/virtual-augmented-reality-class',
    description: ['Spearheading development of innovative educational game using VR, large-screen, and mobile platforms to teach microelectronics to children',
      'Leveraging Unreal Engine 5 to craft immersive 3D environments that enhance user engagement and learning outcomes',
      'Enhancing existing virtual forest tour project with advanced 3D modeling techniques for improved accuracy and realism',
      'Conducting ongoing research on cognitive load, usability, and user experience to iteratively refine applications',
    ],
    id: 'work1',
  },
  {
    company: 'Genentech',
    title: 'Automation Engineer',
    start: 'June 2023',
    end: 'December 2023',
    link: 'https://www.gene.com/',
    description: ['Enhanced production efficiency and minimized product waste through expertise in Programmable Logic Controllers (PLCs), Human-Machine Interface (HMI), and control systems',
      'Eliminated product waste and aligned with continuous improvement initiatives',
      'Achieved streamlined processes, reduced downtime, and improved output rates, resulting in an efficient and cost-effective manufacturing operation',
    ],
    id: 'work2',
  },
  {
    company: 'Daimler Trucks North America',
    title: 'Product Validation Engineering Intern',
    start: 'March 2022',
    end: 'August 2022',
    link: 'https://northamerica.daimlertruck.com/', 
    description: ['Developed robust full-stack web applications for efficient data analysis from truck testing',
      'Streamlined processes, saving users valuable time by centralizing data retrieval',
      'Enhanced accessibility and usability through migration, updates, and repair of web pages, improving overall data accessibility and efficiency',
    ],
    id: 'work3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/Adoyle210',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/alexis-doyle-13059b224/',
  },
]

export const TECHNICAL_SKILLS: TechnicalSkills[] = [
  {
    category: 'Programming Languages',
    skills: ['C', 'C++', 'Python', 'JavaScript', 'Kotlin', 'Next.js', 'React'],
    id: 'tech1',
  },
  {
    category: 'Development Tools',
    skills: ['Unreal Engine 5', 'Git', 'Docker', 'Blender', 'PiXYZ'],
    id: 'tech2',
  },
  {
    category: 'Technical Skills',
    skills: ['Web Development', 'Data Analysis', 'Full-Stack Development', 'VR/AR Development', '3D Modeling'],
    id: 'tech3',
  },
  {
    category: 'Soft Skills',
    skills: ['Project Management', 'Teamwork', 'Problem-Solving', 'Leadership'],
    id: 'tech4',
  },
  {
    category: 'Languages',
    skills: ['English (Native)', 'Spanish (Proficient)'],
    id: 'tech5',
  },
]
export const EMAIL = 'doylalex@oregonstate.edu'
