import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/chevron-right.tsx";

export default function Hero() {
  return (
    <div
      className="w-full max-w-screen-lg flex px-8 justify-center items-center flex-col gap-8 rounded-xl text-white w-4/5 mx-auto"

    >
      <div className="space-y-4 text-center">
        <h1 className="text-4xl inline-block font-bold">The AI Consulting Company</h1>
        <p className="text-xl max-w-lg text-blue-100">
        prioritizing education, safety, security, and ethical responsibility with AI integrations
        </p>
      </div>

      <div>
        <a
          href="#"
          className="block mt-4 text-blue-500 cursor-pointer inline-flex items-center group text-blue-800 bg-white px-8 py-2 rounded-md hover:bg-blue-50 font-bold"
        >
          Sign Up{" "}
        </a>
        <a
          href="#"
          className="block mt-4 transition-colors text-blue-400 cursor-pointer inline-flex items-center group px-4 py-2 hover:text-blue-100"
        >
          Documentation{" "}
          <IconChevronRight className="inline-block w-5 h-5 transition group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}
