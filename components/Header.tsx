import LemonIcon from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/lemon-2.tsx";
import StartButton from "../islands/StartButton.tsx";
import SearchBar from "../islands/SearchBar.tsx";
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";
import IconHome from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/home.tsx";
import IconSolutions from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/rocket.tsx";
import IconPricing from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/coin.tsx";
import IconContact from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/mail.tsx";
import IconBoxSeam from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/box-seam.tsx"
import IconAlignBoxLeftMiddle from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/align-box-left-middle.tsx"
import Minilogo from "../components/Minilogo.tsx"

export default function Header() {
  const menus = [
    { name: "Ethics", href: "/ethics", icon: <IconAlignBoxLeftMiddle class="w-5 h-5" />, color: "text-white" },
    { name: "Impliment", href: "/impliment", icon: <IconSolutions class="w-5 h-5"/>, color: "text-blue-300" },
    { name: "Solutions", href: "/solutions", icon: <IconBoxSeam class="w-5 h-5"/>, color: "text-pink-300" },
    { name: "Pricing", href: "/pricing", icon: <IconPricing class="w-5 h-5"/>, color: "text-green-300" },
    { name: "Contact", href: "/contact", icon: <IconContact class="w-5 h-5"/>, color: "text-yellow-300" },
  ];

  return (
    <div className="w-full py-6 px-8 flex flex-col md:flex-row gap-4 mx-auto">
      <div className="flex items-center flex-1 text-white">
        <Minilogo />
        <div className="text-2xl ml-1 font-bold">SEPTAIGON</div>
      </div>

      <ul className="flex items-center gap-2">
        {menus.map((menu) => (
          <li key={menu.href}>
            <a
              href={menu.href}
              className={`${menu.color} py-2 px-2 border-gray-500 flex items-center gap-2 transition-colors duration-300 hover:text-white hover:bg-gray-500 hover:bg-opacity-25 rounded-md`}
            >
              {menu.icon}
              <span>{menu.name}</span>
            </a>
          </li>
        ))}
        <li>
          <StartButton>
            Get Started
          </StartButton>

        </li>
      </ul>
    </div>
  );
}