import { useState } from "react";
import { Play, Pause } from "lucide-react";

export default function Spotify() {
  const playlist = [
    {
      id: 1,
      title: "Love Yourself",
      artist: "Justin Bieber",
      cover: "https://i.scdn.co/image/ab67616d0000b273c8e1af3f32e8d3d16cbb3d6a",
    },
    {
      id: 2,
      title: "Night Changes",
      artist: "One Direction",
      cover: "https://i.scdn.co/image/ab67616d0000b273c043ff8250b70fdf5feba0be",
    },
    {
      id: 3,
      title: "Heat Waves",
      artist: "Glass Animals",
      cover: "https://i.scdn.co/image/ab67616d0000b273cbb582ebab5df4bd1a7c87bb",
    },
  ];

  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSong = (song) => {
    if (currentSong?.id === song.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-white p-8 flex flex-col gap-10">

      {/* Header */}
      <h1 className="text-3xl font-bold tracking-tight">My Spotify Playlist 🎵</h1>

      {/* Playlist Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {playlist.map((song) => (
          <div
            key={song.id}
            className="bg-zinc-900/70 p-4 rounded-xl hover:bg-zinc-800/70 transition cursor-pointer shadow-lg"
            onClick={() => playSong(song)}
          >
            <img
              src={song.cover}
              className="w-full h-48 object-cover rounded-lg mb-4"
              alt="cover"
            />

            <h2 className="text-xl font-semibold">{song.title}</h2>
            <p className="text-sm text-gray-400">{song.artist}</p>

            {/* Play / Pause Button */}
            <button className="mt-4 bg-green-500 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-green-600 transition">
              {currentSong?.id === song.id && isPlaying ? (
                <>
                  <Pause size={20} /> Pause
                </>
              ) : (
                <>
                  <Play size={20} /> Play
                </>
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Now Playing Bar */}
      {currentSong && (
        <div className="fixed bottom-0 left-0 w-full bg-zinc-900/90 backdrop-blur-lg p-4 flex items-center gap-4">
          <img
            src={currentSong.cover}
            className="w-14 h-14 object-cover rounded-lg"
            alt="cover"
          />

          <div className="flex flex-col">
            <p className="font-semibold text-white">{currentSong.title}</p>
            <p className="text-sm text-gray-400">{currentSong.artist}</p>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="ml-auto bg-white/10 rounded-full p-3 hover:bg-white/20 transition"
          >
            {isPlaying ? <Pause size={22} /> : <Play size={22} />}
          </button>
        </div>
      )}
    </div>
  );
}
