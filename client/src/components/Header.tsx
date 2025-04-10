import { useState, useEffect } from "react";
import { Link } from "wouter";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-charcoal-900/80 backdrop-blur-md border-b border-[hsl(var(--border))]" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="name-gradient text-2xl md:text-3xl font-bold tracking-tight">
          Pavan Dasari
        </Link>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a 
                href="#hero" 
                className="text-white font-bold hover:text-[hsl(var(--primary))] hover:shadow-glow transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="text-white font-bold hover:text-[hsl(var(--primary))] hover:shadow-glow transition-all duration-300"
              >
                About Me
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className="text-white font-bold hover:text-[hsl(var(--primary))] hover:shadow-glow transition-all duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className="text-white font-bold hover:text-[hsl(var(--primary))] hover:shadow-glow transition-all duration-300"
              >
                Skills
              </a>
            </li>
          </ul>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          type="button" 
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-[hsl(var(--card))] border-t border-[hsl(var(--border))]">
          <a 
            href="#hero" 
            className="block px-3 py-2 text-white font-bold hover:text-[hsl(var(--primary))] hover:shadow-glow rounded transition-all duration-300"
            onClick={closeMobileMenu}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="block px-3 py-2 text-white font-bold hover:text-[hsl(var(--primary))] hover:shadow-glow rounded transition-all duration-300"
            onClick={closeMobileMenu}
          >
            About Me
          </a>
          <a 
            href="#projects" 
            className="block px-3 py-2 text-white font-bold hover:text-[hsl(var(--primary))] hover:shadow-glow rounded transition-all duration-300"
            onClick={closeMobileMenu}
          >
            Projects
          </a>
          <a 
            href="#skills" 
            className="block px-3 py-2 text-white font-bold hover:text-[hsl(var(--primary))] hover:shadow-glow rounded transition-all duration-300"
            onClick={closeMobileMenu}
          >
            Skills
          </a>
        </div>
      </div>
    </header>
  );
}
