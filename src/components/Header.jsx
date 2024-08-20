import { useState, useContext } from "react";  // Import useContext
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import logout from "../assets/logout.svg";
import user from "../assets/user.svg";
import Navbar from "./Navbar";
import { MdMenu, MdClose } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";
import { ShopContext } from '../Context/ShopContext';  // Import ShopContext

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  const toggleMenu = () => setMenuOpened(!menuOpened);
  const { getTotalCartItems } = useContext(ShopContext);  // Use useContext to get cart items

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <header className="fixed bg-white top-0 left-0 w-full ring-1 ring-slate-900/5 z-10">
      <div className="px-4 flex items-center justify-between py-3 max-xs:px-2">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="logo" height={66} width={88} />
          </Link>
        </div>

        {/* Navbar Desktop */}
        <Navbar containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"} />

        {/* Right Side - Cart and Login/Logout */}
        <div className="hidden md:flex items-center gap-x-6">
          <NavLink to={"cart-page"} className="flex">
            <FaOpencart className="p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full" />
            <span className="relative flexCenter w-5 h-5 bg-secondary rounded-full text-white medium-14 -top-2">{getTotalCartItems()}</span>
          </NavLink>

          {isLoggedIn ? (
            <NavLink to={'logout'} onClick={handleLogout} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}>
              <img src={logout} alt="logoutIcon" height={19} width={19} />Logout
            </NavLink>
          ) : (
            <NavLink to={'login'} onClick={handleLogin} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}>
              <img src={user} alt="userIcon" height={19} width={19} />Login
            </NavLink>
          )}
        </div>

        {/* Navbar Mobile */}
        <div className="md:hidden flex items-center">
          {!menuOpened ? (
            <MdMenu className="cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full hover:ring-secondary" onClick={toggleMenu} />
          ) : (
            <MdClose className="cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full hover:ring-secondary" onClick={toggleMenu} />
          )}
        </div>
      </div>

      {menuOpened && (
        <div className="md:hidden">
          <Navbar containerStyles={"flex flex-col gap-y-12 p-12 bg-white rounded-3xl shadow-md w-full medium-16 ring-1 ring-slate-900/5"} />
          <div className="flex items-center gap-x-6 mt-4 justify-center">
            <NavLink to={"cart-page"} className="flex">
              <FaOpencart className="p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full" />
              <span className="relative flexCenter w-5 h-5 bg-secondary rounded-full text-white medium-14 -top-2">0</span>
            </NavLink>

            {isLoggedIn ? (
              <NavLink to={'logout'} onClick={handleLogout} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}>
                <img src={logout} alt="logoutIcon" height={19} width={19} />Logout
              </NavLink>
            ) : (
              <NavLink to={'login'} onClick={handleLogin} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}>
                <img src={user} alt="userIcon" height={19} width={19} />Login
              </NavLink>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
