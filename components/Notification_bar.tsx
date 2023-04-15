import LemonIcon from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/lemon-2.tsx";

type Props = {
  message: string;
};

//Hey there! This is the notification bar component. 
//This is where you can update the text of the notification bar
export const notificationBarText = "🍋 Big sale";

export default function NotificationBar({ message }: Props) {
  return (
    <div className="w-full py-4 px-8 flex items-center justify-center">
      <div className="text-2xl font-bold text-white">
        {message}
      </div>
    </div>
  );
}
