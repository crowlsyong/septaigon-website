import { useState } from "preact/hooks";


export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <div className="flex items-center justify-center w-full h-96 bg-gray-100 rounded-xl text-white">
        <div className="flex flex-col items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-gray-300">
            <img
              src="/logo.svg"
              alt="Audio Thumbnail"
              className="w-full h-full rounded-full"
            />
          </div>

          <div className="mt-4">
            <h1 className="text-4xl text-red-500 font-bold">Audio Title</h1>
            <p className="text-xl text-red-500">Artist Name</p>
          </div>

          <div className="mt-8">
          <audio src="static/audio/short.mp3" type="audio/mpeg" controls></audio>

          </div>

          <div className="mt-8">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={togglePlay}
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
