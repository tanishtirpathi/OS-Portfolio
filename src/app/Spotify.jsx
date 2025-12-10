import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { RiHome4Fill } from "react-icons/ri";

export default function Spotify() {
  const playlist = [
    {
      id: 1,
      title: "Kya bat hai ",
      artist: "Hardy sandhu ",
      cover: "/icons/SpotifyOne.png",
      src: "/music/Wanna.mp3", // <-- your mp3 file here
    },
    {
      id: 2,
      title: "Devil in Disguise",
      artist: "glass animal ",
      cover: "/icons/SpotifyTwo.png",
      src: "/music/Devil.mp3",
    },
    {
      id: 3,
      title: "Die with Smile",
      artist: "Glass Animals",
      cover: "/icons/SpotifyThree.jpg",
      src: "/music/DIE.mp3",
    },
  ];

  const audioRef = useRef(new Audio());
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Update time in seek bar
  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };

    audio.addEventListener("timeupdate", updateProgress);

    return () => audio.removeEventListener("timeupdate", updateProgress);
  }, []);

  // Play selected song
  const playSong = (song) => {
    const audio = audioRef.current;

    if (currentSong?.id === song.id) {
      // Same song toggle
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      // New song
      setCurrentSong(song);
      audio.src = song.src;
      audio.play();
      setIsPlaying(true);
      setProgress(0);
    }
  };

  // Seek bar control
  const handleSeek = (e) => {
    const audio = audioRef.current;
    const value = e.target.value;
    audio.currentTime = (audio.duration * value) / 100;
    setProgress(value);
  };

  return (
    <div className="min-h-screen w-full bg-black/70 text-white p-8 flex flex-col gap-10">
      {/* Header */}
      <div className="flex justify-between  items-center">
        {" "}
        <h3 className="text-4xl font-bold tracking-tight">
          Last 3 Songs I Listened
        </h3>
        <img
          src="/icons/spotify.jpg"
          onClick={() =>
            window.open(
              "https://open.spotify.com/user/31e4gw52aovhujbazvpyeqdzzb24"
            )
          }
          className="w-10 h-10 cursor-pointer rounded-full"
          alt=""
        />
      </div>

      {/* Playlist Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {playlist.map((song) => (
          <div
            key={song.id}
            className="bg-black/60 p-4 rounded-xl transition-all border border-black/20 duration-300 hover:bg-black hover:border-white/40 hover:text-white shadow-lg cursor-pointer"
            onClick={() => playSong(song)}
          >
            <img
              src={song.cover}
              className="w-full h-48 object-cover rounded-lg mb-4"
              alt="cover"
            />

            <h2 className="text-xl font-semibold">{song.title}</h2>
            <h4 className="text-sm text-gray-400">{song.artist}</h4>

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
        <div className=" cursor-pointer fixed bottom-0 left-0 w-full bg-white/15 backdrop-blur-lg px-4 py-1 flex items-center gap-4 border-t border-white/10">
          <img
            src={currentSong.cover}
            className="w-10 h-10 object-cover rounded-lg"
            alt="cover"
          />

          {/* Song Info */}
          <div className="flex items-center justify-center">
            <div>
              {" "}
              <p className="font-semibold">{currentSong.title}</p>
              <p className="text-sm text-white/30">{currentSong.artist}</p>
            </div>

            {/* Seek Bar */}
            <input
              type="range"
              value={progress}
              onChange={handleSeek}
              className="w-64 mt-1 mx-10 slider"
            />
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={() => {
              if (isPlaying) audioRef.current.pause();
              else audioRef.current.play();

              setIsPlaying(!isPlaying);
            }}
            className="ml-auto bg-trasparent rounded-full p-3 hover:bg-white/5 transition"
          >
            {isPlaying ? <Pause size={22} /> : <Play size={22} />}
          </button>
        </div>
      )}
    </div>
  );
}
