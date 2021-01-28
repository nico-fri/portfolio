import Portfolio1 from '../assets/portfolio_1.png'
import Portfolio2 from '../assets/portfolio_2.png'
import Portfolio3 from '../assets/portfolio_3.png'

const data = [
  {
    title: 'Responsive Landing Page',
    subtitle: 'STYLED COMPONENTS',
    text: 'Diese Website wurde mit React und Styled Components erstellt. ',
    image: Portfolio1,
    color: '#FF0066',
    link: 'https://styled-components.netlify.app',
    github: 'https://github.com/nico-fri/styled_components',
    react: true,
    styled: true,
  },
  {
    title: 'Firebase Auth Dashboard',
    subtitle: 'WEB APP',
    text:
      'Die Web App wurde mit React erstellt und enthält eine Authentifizierung über Firebase',
    image: Portfolio2,
    color: '#4665ED',
    link: 'https://webapp-1.netlify.app',
    github: 'https://github.com/nico-fri/webApp_1',
    react: true,
    dashboard: true,
  },
  {
    title: 'Material UI Dashboard',
    subtitle: 'WEB APP',
    text:
      'Basierend auf Angular und Angular Material ist dieses Dashboard entstanden',
    image: Portfolio3,
    color: '#CA0813',
    link: 'https://smartbp-dcd6e.web.app',
    github: 'https://github.com/nico-fri/webApp_2',
    angular: true,
    dashboard: true,
  },
]

export default data
