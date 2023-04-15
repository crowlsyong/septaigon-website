import IconAlarm from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/alarm.tsx";
import IconAirBalloon from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/air-balloon.tsx";
import IconArmchair from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/armchair.tsx";
import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/chevron-right.tsx";

export default function Features() {
  const featureItems = [
    {
      icon: IconAlarm,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam",
      link: "#",
    },
    {
      icon: IconAirBalloon,
      description:
        "Nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, ",
    },
    {
      icon: IconArmchair,
      description: "Eget aliquam nisl nisl sit amet lorem.",
      link: "#",
    },
  ];

  return (
    <div className="flex max-w-screen-lg flex-col md:flex-row gap-8 py-20 px-8 mx-auto">
      {featureItems.map((item) => {
        return (
          <div className="flex-1 space-y-2">
            <div className="bg-blue-600 inline-block p-3 rounded-xl text-white">
              <item.icon className="w-10 h-10" />
            </div>
            <p className="text-xl text-white">
              {item.description}
            </p>

            {item.link &&
              (
                <a className="block" href={item.link}>
                  <p className="text-blue-500 cursor-pointer hover:underline inline-flex items-center group">
                    Read More{" "}
                    <IconChevronRight className="inline-block w-5 h-5 transition group-hover:translate-x-0.5" />
                  </p>
                </a>
              )}
          </div>
        );
      })}
    </div>
  );
}
