export function LeetLow({ goBack }) {
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
          src="/projects/Leet.png"
          alt="LeetLow"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <div className="gap-2 flex items-center">
        <h1 className="text-3xl font-bold mb-2">LeetLow:- </h1>
        <h3 className="text-3xl text-white/50 font-normal mb-2">
          LeetCode Type but in my version{" "}
        </h3>
      </div>

      {/* Short Intro */}
      <p className="text-white/60 leading-relaxed mb-6">
        LeetLow is a backend-first clone of LeetCode where users can solve
        actual coding questions, track their progress, and submit code for
        evaluation. The frontend is still under development, but the backend is
        powered by Express, Prisma, Redis, Judge0, and Docker.
      </p>

      {/* Info Boxes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-black/30 border border-white/10 rounded-xl">
          <p className="text-xs text-white/50">Frontend</p>
          <p className="font-medium">Not yet</p>
        </div>
        <div className="p-4 bg-black/30 border border-white/10 rounded-xl">
          <p className="text-xs text-white/50">Backend</p>
          <p className="font-medium">Express, Prisma, Redis, Docker, Judge0</p>
        </div>
        <div className="p-4 bg-black/30 border border-white/10 rounded-xl">
          <p className="text-xs text-white/50">Database</p>
          <p className="font-medium">PostgreSQL (via Prisma)</p>
        </div>
        <div className="p-4 bg-black/30 border border-white/10 rounded-xl">
          <p className="text-xs text-white/50">Status</p>
          <p className="font-medium">In Progress 🔴</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mb-10">
        <button className="px-5 py-2 bg-white/10 border border-white/10 rounded-lg hover:bg-white/20 transition">
          🔗 Live Demo
        </button>
        <button  onClick={() => window.open("https://github.com/tanishtirpathi/Leetlow")}  className="px-5 py-2 bg-white/10 border border-white/10 rounded-lg hover:bg-white/20 transition">
          💻 Source Code
        </button>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4 mb-4">
        {[
          "In Progress 🔴",
          "Backend",
          "Fullstack",
          "Docker",
          "Judge0",
          "Redis",
        ].map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-white/70 bg-black/50 border border-white/60 text-sm rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* MAIN ARTICLE */}
      <section className="space-y-6">
        {/* Overview */}
        <div>
          <h2 className="text-5xl font-bold mb-2">Overview</h2>
          <p className="text-white/60 leading-relaxed">
            LeetLow is a coding practice platform modeled after LeetCode. Users
            can solve real coding problems, submit code for evaluation via
            Judge0, and track progress. The platform aims to provide a complete
            algorithm and coding challenge experience with a fully functional
            backend.
          </p>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-3xl font-bold mb-2">Key Features</h2>
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li>
              <strong>Problem Solving:</strong> Users can solve coding questions
              similar to LeetCode.
            </li>
            <li>
              <strong>Code Evaluation:</strong> Uses Judge0 API to compile and
              run code submissions.
            </li>
            <li>
              <strong>Progress Tracking:</strong> Tracks solved problems and
              scores.
            </li>
            <li>
              <strong>Backend Infrastructure:</strong> Uses Redis caching,
              Prisma ORM, and Docker for containerized deployment.
            </li>
          </ul>
        </div>

        {/* Why I Built This */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Why I Built This</h2>
          <p className="text-white/60">
            I built LeetLow to showcase my backend skills to my college and
            create a functional LeetCode-like platform. The focus was on backend
            architecture, code evaluation, and database management, while
            frontend will come later.
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Tech Stack (Detailed)</h2>
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li>
              <strong>Express:</strong> Backend framework for API and routing.
            </li>
            <li>
              <strong>Prisma:</strong> ORM for database management with
              PostgreSQL.
            </li>
            <li>
              <strong>Redis:</strong> Caching layer for fast data access and
              session management.
            </li>
            <li>
              <strong>Judge0:</strong> Code execution engine for compiling and
              running user submissions.
            </li>
            <li>
              <strong>Docker:</strong> Containerized backend environment for
              easier deployment.
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
              <strong>Challenge:</strong> Running Judge0 on Windows and
              integrating with backend.
              <br />
              <strong>Solution:</strong> Configured Docker to run Judge0
              container and connected it via API to Express backend.
            </li>
            <li>
              <strong>Challenge:</strong> Managing efficient code evaluation and
              submission handling.
              <br />
              <strong>Solution:</strong> Used Redis caching and async job
              handling for submissions to prevent bottlenecks.
            </li>
          </ul>
        </div>

        {/* Future Plans */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Future Plans</h2>
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li>Build frontend using Next.js for a full SaaS experience.</li>
            <li>Enable real-time progress tracking and leaderboards.</li>
            <li>Add user authentication and subscription-based features.</li>
            <li>Deploy as a cloud-based coding practice platform.</li>
          </ul>
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
