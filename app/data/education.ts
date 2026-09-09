type Education = {
    id: string
    degree: string
    institution: string
    start: string
    end: string
    link?: string
    details?: string[]
  }
  
  type Publication = {
    id: string
    title: string
    venue: string
    type: 'thesis' | 'conference-poster'
    year: number
    link?: string
  }
  
  export const EDUCATION: Education[] = [
    {
      id: 'edu-osu-ms',
      degree: 'M.S. in Computer Science Focused on Computer Graphics',
      institution: 'Oregon State University',
      start: '2024',
      end: '2026',
      // link: 'https://engineering.oregonstate.edu/...', 
      details: [
        // Optional bullets
      ],
    },
    {
      id: 'edu-undergrad', 
      degree: 'B.S. in Computer Science Focused on Artificial Intelligence', 
      institution: 'Oregon State University',
      start: '2019',
      end: '2024',
    },
  ]
  
  export const PUBLICATIONS: Publication[] = [
    {
      id: 'pub-thesis',
      title: 'An Exploration of Game-based Learning in Microelectronics', 
      venue: 'Oregon State University, M.S. Thesis',
      type: 'thesis',
      year: 2026,
      link: 'https://ir.library.oregonstate.edu/concern/graduate_thesis_or_dissertations/ht24wt42w?locale=en',
    },
    {
      id: 'pub-psych-conference',
      title: 'Virtual Reality as a Tool to Reduce Task-Related Interference.',
      venue: 'Human Factors and Ergonomics Society (HFES) ASPIRE International Annual Meeting — Poster Presentation',
      type: 'conference-poster',
      year: 2026,
      //link: 'https://www.hfes.org/aspire/aspire-international/aspire-2026/posters', 
    },
  ]