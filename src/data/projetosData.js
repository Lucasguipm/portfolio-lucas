import placeholderImg from '../assets/arnold-img.jpg'
import albumFinderCover from '../assets/album-finder-cover.png'
import priceSimulatorCover from '../assets/price-simulator-cover.png'

export const meusProjetos = [
  {
    id: 1,
    title: "Album Finder",
    description: "Web App Full Stack para busca de álbuns utilizando a API do Last.fm. Desenvolvido com React no frontend e Python (Flask e BeautifulSoup) no backend.",
    image: albumFinderCover,
    liveLink: "https://album-finder-lgpm.vercel.app/",
    githubLink: "https://github.com/Lucasguipm/album-finder"
  },
  {
    id: 2,
    title: "Price Simulator",
    description: "Simulador que combina web scraping com geração de histórico simulado de preços. O backend em Python/Flask processa e modela os dados da Amazon Brasil, enquanto a interface em React exibe gráficos interativos (Recharts) do produto.",
    image: priceSimulatorCover,
    liveLink: "https://price-simulator-lgpm.vercel.app/",
    githubLink: "https://github.com/Lucasguipm/price-simulator"
  },
  {
    id: 3,
    title: "Projeto 3: Em Desenvolvimento",
    description: "Desculpe, este projeto está em reunião.",
    image: placeholderImg,
    liveLink: "#",
    githubLink: "https://github.com/seu-usuario/python-scraper"
  },
  {
    id: 4,
    title: "Projeto 4: Em Desenvolvimento",
    description: "Carregando... 0% concluído, 100% de esperança.",
    image: placeholderImg,
    liveLink: "#",
    githubLink: "https://github.com/seu-usuario/python-scraper"
  },
  {
    id: 5,
    title: "Projeto 5: Em Desenvolvimento",
    description: "Não está pronto, mas já é lindo.",
    image: placeholderImg,
    liveLink: "#",
    githubLink: "https://github.com/seu-usuario/python-scraper"
  },
  {
    id: 6,
    title: "Projeto 6: Em Desenvolvimento",
    description: "Compilando... 99% (mentira, é 0%).",
    image: placeholderImg,
    liveLink: "#",
    githubLink: "https://github.com/seu-usuario/python-scraper"
  },
  // Quando tiver mais projetos (até os 6 que você quer), é só ir jogando aqui embaixo!
];