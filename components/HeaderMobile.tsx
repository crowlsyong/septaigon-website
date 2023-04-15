import { useState } from "preact/hooks";
import LemonIcon from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/lemon-2.tsx";
import StartButton from "../islands/StartButton.tsx";
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";
import IconHome from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/home.tsx";
import IconSolutions from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/rocket.tsx";
import IconPricing from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/coin.tsx";
import IconContact from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/mail.tsx";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const menus = [
    { name: "Home", href: "/", icon: <IconHome />, color: "text-white" },
    { name: "Solutions", href: "/components", icon: <IconSolutions />, color: "text-blue-300" },
    { name: "Pricing", href: "/audioplayerpage", icon: <IconPricing />, color: "text-pink-300" },
    { name: "Contact", href: "/audioplayerpage", icon: <IconContact />, color: "text-green-300" },
    { name: "Github", href: "https://github.com/denoland", icon: <IconBrandGithub />, color: "text-yellow-300" },
  ];

  return (
    <div className="w-full max-w-screen-lg py-6 px-8 flex flex-col md:flex-row gap-4 mx-auto">
      <div className="flex items-center flex-1 text-white">
        <LemonIcon />
        <div className="text-2xl ml-1 font-bold">Fresh</div>
      </div>
      <div className="md:flex items-center gap-6 hidden">
        {menus.map((menu) => (
          <a
            key={menu.href}
            href={menu.href}
            className={`${menu.color} py-2 px-2 border-gray-500 flex items-center gap-2 transition-colors duration-300 hover:text-white hover:bg-gray-500 hover:bg-opacity-25 rounded-md`}
          >
            {menu.icon}
            <span>{menu.name}</span>
          </a>
        ))}
        <StartButton>
          Get Started
        </StartButton>
      </div>
      <div className="md:hidden">
        <button
          className="text-gray-100 hover:text-white focus:outline-none"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            {showMobileMenu ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
         
          </svg>
        </button>
        {showMobileMenu && (
          <div className="flex flex-col items-center gap-4 mt-4">
            {menus.map((menu) => (
              <a
                key={menu.href}
                href={menu.href}
                className={`${menu.color} py-2 px-2 border-gray-500 flex items-center gap-2 transition-colors duration-300 hover:text-white hover:bg-gray-500 hover:bg-opacity-25 rounded-md`}
              >
                {menu.icon}
                <span>{menu.name}</span>
              </a>
            ))}
            <StartButton>
              Get Started
            </StartButton>
          </div>
        )}
      </div>
    </div>
  );
}
