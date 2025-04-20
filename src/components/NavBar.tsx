import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-anisoul-dark border-b border-anisoul-purple-deep/30 backdrop-blur-sm bg-opacity-80">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-anisoul-purple-light to-anisoul-purple-neon text-transparent bg-clip-text">
              AniSoul
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-anisoul-purple-neon transition-colors">
              Главная
            </Link>
            <Link to="/catalog" className="text-white hover:text-anisoul-purple-neon transition-colors">
              Каталог
            </Link>
            <Link to="/new" className="text-white hover:text-anisoul-purple-neon transition-colors">
              Новинки
            </Link>
            <Link to="/top" className="text-white hover:text-anisoul-purple-neon transition-colors">
              Топ-100
            </Link>
          </div>

          {/* Search and User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className={`relative transition-all duration-300 ${isSearchOpen ? "w-64" : "w-10"}`}>
              {isSearchOpen ? (
                <Input
                  type="text"
                  placeholder="Поиск аниме..."
                  className="bg-anisoul-gray-dark border-anisoul-purple-medium/50 text-white focus:border-anisoul-purple-neon"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
              ) : (
                <Search
                  className="w-5 h-5 text-white hover:text-anisoul-purple-neon cursor-pointer"
                  onClick={() => setIsSearchOpen(true)}
                />
              )}
            </div>
            <Link to="/favorites">
              <Heart className="w-5 h-5 text-white hover:text-anisoul-purple-neon transition-colors" />
            </Link>
            <Link to="/login">
              <Button variant="outline" className="border-anisoul-purple-medium hover:bg-anisoul-purple-medium/20 text-white">
                Войти
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Search
              className="w-5 h-5 text-white mr-4"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />
            <button
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="md:hidden mt-4 pb-2">
            <Input
              type="text"
              placeholder="Поиск аниме..."
              className="bg-anisoul-gray-dark border-anisoul-purple-medium/50 text-white"
              autoFocus
            />
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link to="/" className="block text-white hover:text-anisoul-purple-neon">
              Главная
            </Link>
            <Link to="/catalog" className="block text-white hover:text-anisoul-purple-neon">
              Каталог
            </Link>
            <Link to="/new" className="block text-white hover:text-anisoul-purple-neon">
              Новинки
            </Link>
            <Link to="/top" className="block text-white hover:text-anisoul-purple-neon">
              Топ-100
            </Link>
            <Link to="/favorites" className="block text-white hover:text-anisoul-purple-neon">
              Избранное
            </Link>
            <Link to="/login">
              <Button variant="outline" className="w-full border-anisoul-purple-medium hover:bg-anisoul-purple-medium/20 text-white">
                Войти
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
