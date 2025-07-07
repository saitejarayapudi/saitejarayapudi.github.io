import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaAws } from 'react-icons/fa';

const navLinks = [
  { id: 'about', text: 'About' },
  { id: 'experience', text: 'Experience' },
  { id: 'skills', text: 'Skills' },
  { id: 'education', text: 'Education' },
  { id: 'contact', text: 'Contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const el = section as HTMLElement;
        const sectionTop = el.offsetTop;
        const sectionHeight = el.offsetHeight;
        const sectionId = el.id;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });

      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full z-10 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="https://www.credly.com/badges/e8031bdc-ab3c-4aba-8aba-bf88c3917f9d/public_url"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-orange-600 font-semibold text-base sm:text-lg md:text-xl transition"
        >
          <FaAws className="w-6 h-6" />
          <span>AWS Certified Solutions Architect</span>
        </a>
        <div className="hidden md:flex space-x-8">
          {navLinks.map(({ id, text }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`capitalize font-medium transition-all ${
                activeSection === id
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {text}
            </button>
          ))}
        </div>
        <button
          className="md:hidden text-gray-700 hover:text-blue-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 py-4 px-6 bg-white rounded-lg shadow-lg">
          {navLinks.map(({ id, text }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`block w-full text-left py-2 capitalize font-medium transition-all ${
                activeSection === id
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              {text}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
