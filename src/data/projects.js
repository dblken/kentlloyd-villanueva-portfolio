import burgerImg from '../assets/image/graphic design/Burger.png';
import perfumeImg from '../assets/image/graphic design/Perfume.png';
import sojoImg from '../assets/image/graphic design/Sojo.png';
import digitalImg from '../assets/image/digital/digital.png';
import sampleImg from '../assets/image/digital/sample.png';
import webImg from '../assets/image/digital/web.png';
import safeSpaceImg from '../assets/image/safe space.png';
import childrensRightsImg from '../assets/image/Children’S Rights.png';
import coloringBookImg from '../assets/image/coloring book.png';
import goldenMountainImg from '../assets/image/golden mountain.png';
import plannerPage1 from '../assets/image/book/successfull_planner/1.png';
import plannerPage2 from '../assets/image/book/successfull_planner/2.png';
import plannerPage3 from '../assets/image/book/successfull_planner/3.png';
import plannerPage4 from '../assets/image/book/successfull_planner/4.png';
import plannerPage5 from '../assets/image/book/successfull_planner/5.png';
import plannerPage6 from '../assets/image/book/successfull_planner/6.png';
import plannerPdf from '../assets/image/book/successfull_planner/Success_PLanner.pdf';

export const projects = [
  {
    id: 1,
    title: "Burger Visual",
    category: "Graphic Design",
    image: burgerImg,
    description: "Eye-catching food visual design crafted for marketing and branding."
  },
  {
    id: 2,
    title: "Perfume Ad Design",
    category: "Graphic Design",
    image: perfumeImg,
    description: "Elegant product advertisement design for a premium perfume brand."
  },
  {
    id: 3,
    title: "Sojo Creative",
    category: "Graphic Design",
    image: sojoImg,
    description: "Bold and creative visual identity design."
  },
  {
    id: 4,
    title: "Digital Art",
    category: "Digital",
    image: digitalImg,
    description: "A striking digital artwork showcasing creative illustration skills."
  },
  {
    id: 5,
    title: "Digital Sample",
    category: "Digital",
    image: sampleImg,
    description: "Digital design sample demonstrating layout and visual composition."
  },
  {
    id: 6,
    title: "Web Visual",
    category: "Digital",
    image: webImg,
    description: "Web-focused digital visual design for modern online platforms."
  },
  {
    id: 7,
    title: "Safe Space",
    category: "Graphic Design",
    image: safeSpaceImg,
    description: "A children's book layout designed to feel warm, reassuring, and visually engaging.",
    url: "https://canva.link/6j0h3ote8cwct45"
  },
  {
    id: 8,
    title: "Children's Rights",
    category: "Graphic Design",
    image: childrensRightsImg,
    description: "An educational children's book page focused on rights awareness through friendly visuals.",
    url: "https://canva.link/z2uwuw7rkcykxwt"
  },
  {
    id: 9,
    title: "Coloring Book",
    category: "Graphic Design",
    image: coloringBookImg,
    description: "A playful coloring book design created to encourage creativity and hands-on learning.",
    url: "https://canva.link/ffavupcpby9umcy"
  },
  {
    id: 10,
    title: "Golden Mountain",
    category: "Graphic Design",
    image: goldenMountainImg,
    description: "A storybook-style children's book visual with a bright, imaginative composition.",
    url: "https://canva.link/fsvgx7yyxsdqbk5"
  },
  {
    id: 11,
    title: "Successful Planner",
    category: "Workbook",
    image: plannerPage1,
    gallery: [
      plannerPage1,
      plannerPage2,
      plannerPage3,
      plannerPage4,
      plannerPage5,
      plannerPage6
    ],
    pdfUrl: plannerPdf,
    description: "A polished workbook planner layout with clean pages for practical goal setting and reflection."
  },
];
