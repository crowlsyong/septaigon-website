import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import Hero from "../components/Hero.tsx";
import Infobox from "../components/Infobox.tsx";
import Notification_bar, { notificationBarText } from "../components/Notification_bar.tsx";
import Features from "../components/Features.tsx";
import Contact from "../islands/Contact.tsx";

export default function Home() {
  return (
    <>
    
      <Head>
        <title>Septaigon - A.I. Consulting</title>
      </Head>
      <style>
        {`
          body {
            background:
            radial-gradient(77.77% 50% at 50% 50%, #141417 61.54%, #17181F 100%);
            border-radius: 18px;
          }
        `}

      </style>
      <div>
        <Header />
      </div>
      <div class="pt-40 mx-auto max-w-screen-md">
        <img
          src="/spiderlog.svg"
          class="w-full h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
      </div>
        <Hero />
        <Infobox />
        
        <Footer />

  
    </>
  );
}
