type WorkExperience = {
    company: string
    title: string
    start: string
    end: string
    link: string
    description: string []
    id: string
}

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Oregon State University',
    title: 'Graduate Research Assistant',
    start: 'December 2024',
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