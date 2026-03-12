import { Link } from 'react-scroll';
import { FiFacebook, FiMail, FiPhone } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-outfit font-bold">
            <span className="gradient-text">KENT</span>LLOYD
          </div>

          <div className="flex space-x-8">
            <Link to="home" smooth={true} offset={-70} className="text-gray-400 hover:text-white cursor-pointer transition-colors">Home</Link>
            <Link to="about" smooth={true} offset={-70} className="text-gray-400 hover:text-white cursor-pointer transition-colors">About</Link>
            <Link to="portfolio" smooth={true} offset={-70} className="text-gray-400 hover:text-white cursor-pointer transition-colors">Work</Link>
            <Link to="contact" smooth={true} offset={-70} className="text-gray-400 hover:text-white cursor-pointer transition-colors">Contact</Link>
          </div>

          <div className="flex space-x-6">
            <a href="https://www.facebook.com/share/17ucTuG1Gx/" target="_blank" rel="noreferrer" className="text-xl text-gray-400 hover:text-primary transition-colors">
              <FiFacebook />
            </a>
            <a href="mailto:kentlloydvillanueva@gmail.com" className="text-xl text-gray-400 hover:text-primary transition-colors">
              <FiMail />
            </a>
            <a href="tel:+639300610038" className="text-xl text-gray-400 hover:text-primary transition-colors">
              <FiPhone />
            </a>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          &copy; {currentYear} Kentlloyd Villanueva. All Rights Reserved. Built with React & Tailwind.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
