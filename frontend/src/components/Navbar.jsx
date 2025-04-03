import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import avatarImg from "../assets/avatar.png";
import { useState, useEffect} from "react";
import { useAuth } from "../context/AuthContext";

const navigation = [
  { name: "About Us", href: "/about" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Rooms", href: "/rooms" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Orders", href: "/orders" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHeartDropdownOpen, setIsHeartDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentUser, logout } = useAuth();
  const handleLogOut = () => {
    logout();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`mx-auto py-6 fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <nav className="flex lg:justify-around px-4 justify-between items-center">
        {/* Left Side */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/" className="uppercase text-3xl tracking-wide font-primary font-semibold text-green-400">
            RoyalStay
          </Link>
        </div>

        {/* Middle Part */}
        <div className="hidden lg:flex gap-5 text-xl text-white font-semibold">
          <Link>Home</Link>
          <Link>About Us</Link>
          <Link>Rooms</Link>
          <Link>Testimonials</Link>
          <Link>Blogs</Link>
        </div>

        {/* Right Side */}
        <div className="relative flex items-center md:space-x-8 space-x-2">
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img
                    src={avatarImg}
                    alt=""
                    className={`size-7 rounded-full ${currentUser ? "ring-2 ring-blue-500" : ""}`}
                  />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                    <ul className="py-2">
                      {navigation.map((item) => (
                        <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                          <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <button
                          onClick={handleLogOut}
                          className="block w-full px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          LogOut
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <FiUser className="size-8" color="white" />
              </Link>
            )}
          </div>

          <button
            onClick={() => setIsHeartDropdownOpen(!isHeartDropdownOpen)}
            className="block lg:hidden"
          >
            <FiHeart className="size-6" color="white" />
          </button>

          <Link
            to="/cart"
            className="bg-[#8BB68A] p-1 sm:px-5 sm:py-2 px-2 flex text-xl items-center rounded-2xl text-white font-semibold"
          >
            Book Now
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation Links with Slide Animation */}
      <div className={`lg:hidden mt-6 fixed left-0 h-full w-full bg-black z-40 transition-transform duration-700 ease-in-out ${isHeartDropdownOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="px-5">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block px-4 py-4 text-lg text-white font-semibold transition duration-1000 ease-in-out hover:bg-white hover:text-black border-t border-gray-800"
              onClick={() => setIsHeartDropdownOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isHeartDropdownOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsHeartDropdownOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;