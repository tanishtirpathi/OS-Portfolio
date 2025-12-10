export function Crushsync({ goBack }) {
  return (
    <div className="max-w-4xl mx-auto px-17 py-10 text-white bg-black/50">
      {/* Back Button */}
      <button
        onClick={goBack}
        className="text-sm text-white/70 hover:text-white bg-black/60 px-4 py-1 rounded-md shadow-2xl mb-6"
      >
        ← Back to Projects
      </button>

      {/* Banner Image */}
      <div className="w-full h-70 rounded-xl overflow-hidden mb-6">
        <img
          src="/projects/crush.png"
          alt="CrushSync"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <div className="gap-2 flex mb-2 items-center ">
        <h1 className="text-3xl font-bold mb-2">CrushSync:- </h1>
        <h3 className="text-3xl text-white/50 font-normal mb-2">
          GitHub Relationship Analyzer
        </h3>
      </div>

      {/* Short Intro */}
      <p className="text-white/60 leading-relaxed mb-6">
        CrushSync is a fun, frontend-only website that checks your GitHub
        profile alongside your crush’s GitHub profile and analyzes compatibility
        or “relationship chances.” Inspired by Facebook’s early fun comparison
        websites, this project is purely experimental and built for enjoyment.
      </p>

      {/* Info Boxes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-black/30 border border-white/10 rounded-xl">
          <p className="text-xs text-white/50">Frontend</p>
          <p className="font-medium">React, TailwindCSS</p>
        </div>
        <div className="p-4 bg-black/30 border border-white/10 rounded-xl">
          <p className="text-xs text-white/50">Backend</p>
          <p className="font-medium">None</p>
        </div>
        <div className="p-4 bg-black/30 border border-white/10 rounded-xl">
          <p className="text-xs text-white/50">Database</p>
          <p className="font-medium">None</p>
        </div>
        <div className="p-4 bg-black/30 border border-white/10 rounded-xl">
          <p className="text-xs text-white/50">Status</p>
          <p className="font-medium">Completed 🟢</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mb-10">
        <button
          onClick={() => window.open("https://crushsync.vercel.app")}
          className="px-5 py-2 bg-white/10 border border-white/10 rounded-lg hover:bg-white/20 transition"
        >
          🔗 Live Demo
        </button>
        <button
          onClick={() =>
            window.open("https://github.com/tanishtirpathi/Crushsync")
          }
          className="px-5 py-2 bg-white/10 border border-white/10 rounded-lg hover:bg-white/20 transition"
        >
          💻 Source Code
        </button>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4 mb-4">
        {["Completed 🟢", "Web", "Frontend", "Fun Project", "GitHub"].map(
          (tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-white/70 bg-black/50 border border-white/60 text-sm rounded-md"
            >
              {tag}
            </span>
          )
        )}
      </div>

      {/* MAIN ARTICLE */}
      <section className="space-y-6">
        {/* Overview */}
        <div>
          <h2 className="text-5xl font-bold mb-2">Overview</h2>
          <p className="text-white/60 leading-relaxed">
            CrushSync is a frontend-only website that compares two GitHub
            profiles and calculates compatibility or “relationship chances.” It
            uses a custom algorithm to analyze contributions, activity,
            languages, and repositories of both users, giving a fun
            compatibility score. The project is purely experimental and built
            for fun, inspired by early Facebook comparison websites.
          </p>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-3xl font-bold mb-2">Key Features</h2>
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li>
              <strong>GitHub Analysis:</strong> Compare your GitHub with your
              crush’s.
            </li>
            <li>
              <strong>Custom Algorithm:</strong> Calculates a compatibility
              score based on activity and repositories.
            </li>
            <li>
              <strong>Fun & Experimental:</strong> Built for enjoyment, inspired
              by old Facebook comparison tools.
            </li>
            <li>
              <strong>Frontend Only:</strong> No backend required—entirely in
              React and TailwindCSS.
            </li>
          </ul>
        </div>

        {/* Why I Built This */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Why I Built This</h2>
          <p className="text-white/60">
            I built CrushSync for fun and learning. Inspired by playful
            comparison websites like Facebook’s old projects, I wanted to
            experiment with creating a frontend algorithm to analyze GitHub
            profiles and provide entertaining “relationship chances.” It was a
            personal challenge and a fun coding experiment.
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Tech Stack</h2>
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li>
              <strong>React:</strong> For building interactive UI and
              components.
            </li>
            <li>
              <strong>TailwindCSS:</strong> Styling and responsive layout.
            </li>
            <li>
              <strong>Custom Algorithm:</strong> JS-based scoring algorithm for
              GitHub analysis.
            </li>
          </ul>
        </div>

        {/* Challenges & Solutions */}
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Challenges & How I Solved Them
          </h2>
          <ul className="list-disc list-inside text-white/70 space-y-2">
            <li>
              <strong>Challenge:</strong> Creating a meaningful “relationship
              score” algorithm.
              <br />
              <strong>Solution:</strong> Developed a custom scoring algorithm
              considering repos, languages, and activity patterns.
            </li>
            <li>
              <strong>Challenge:</strong> Handling profile comparison entirely
              on frontend.
              <br />
              <strong>Solution:</strong> Optimized JS functions and caching to
              ensure smooth user experience.
            </li>
          </ul>
        </div>

        {/* After Launch & Impact */}
        <div>
          <h2 className="text-2xl font-bold mb-2">After Launch & Impact</h2>
          <ul className="list-disc list-inside text-white/60 space-y-2">
            <li>
              Successfully reached <strong>150 active users</strong> on initial
              launch.
            </li>
            <li>
              Users enjoyed comparing their GitHub profiles with friends or
              crushes.
            </li>
            <li>
              The algorithm-based scoring was well-received and sparked fun
              discussions.
            </li>
            <li>
              Served as a fun project to experiment with frontend algorithm
              design.
            </li>
          </ul>
        </div>

        {/* Future Plans */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Future Plans</h2>
          <p className="text-white/60">
            No specific future plans yet; built purely for fun and learning.
          </p>
        </div>

        {/* Next Project */}
        <div className="flex justify-center items-center">
          <button
            onClick={goBack}
            className="hover:bg-white/15 cursor-pointer px-5 py-1 rounded-md bg-white/10 border border-white/70"
          >
            View all projects
          </button>
        </div>
      </section>

      <br />
      <br />
    </div>
  );
}
