import Minilogo from "../components/Minilogo.tsx"


export default function Footer() {
  const menus = [
    {
      title: "Documentation",
      children: [
        { name: "Getting Started", href: "#" },
        { name: "Guide", href: "#" },
        { name: "API", href: "#" },
        { name: "Showcase", href: "#" },
        { name: "Pricing", href: "#" },
      ],
    },
    {
      title: "Community",
      children: [
        { name: "Forum", href: "#" },
        { name: "Discord", href: "#" },
      ],
    },
  ];

  return (
    <div class="w-full">
      <div class="flex flex-col md:flex-row w-full max-w-screen-lg gap-8 md:gap-16 px-8 py-8 text-sm mx-auto border-t-[1px] border-gray-500">
        <div class="flex-1">
          <div class="flex items-center gap-1 text-white">
            <Minilogo />
            <div class="font-bold text-2xl text-white">Septaigon</div>
          </div>
          <div class="text-gray-500">Full A.I. Stack</div>
        </div>

        {menus.map((item) => (
          <div class="mb-4" key={item.title}>
            <div class="font-bold text-white">{item.title}</div>
            <ul class="mt-2">
              {item.children.map((child) => (
                <li class="mt-2" key={child.name}>
                  <a class="text-gray-500 hover:text-gray-700" href={child.href}>
                    {child.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div class="text-gray-500 space-y-2">
          <div class="text-xs">
            Copyright © 2023 Septaigon
            <br />
            All right reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
