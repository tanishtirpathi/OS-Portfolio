export function Portfolio({ goBack }) {
  return (
    <div className="max-w-6xl mx-auto px-12 py-10 text-white bg-black/50 rounded-xl shadow-2xl">
      {/* Back Button */}
      <button
        onClick={goBack}
        className="text-sm text-white/70 hover:text-white bg-gray-800/60 px-4 py-1 rounded-md shadow-lg mb-6"
      >
        ← Back to Projects
      </button>

      {/* Banner */}
      <div className="w-full h-80 rounded-xl overflow-hidden mb-6">
        <img
          src="/projects/OS.png"
          alt="MacOS Portfolio"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <div className="flex items-center gap-2 mb-4">
        <h1 className="text-4xl font-bold">MacOS Style Portfolio</h1>
        <h3 className="text-xl text-white/50 font-normal">
          Interactive & Functional
        </h3>
      </div>

      {/* Short Intro */}
      <p className="text-white/60 leading-relaxed mb-6">
        A fully functional macOS-inspired portfolio built with React,
        TailwindCSS, and ShadCN UI. The portfolio features draggable windows,
        interactive workspaces, a dock, animations, and a working AI assistant
        that responds to user input. It showcases projects, skills, experiences,
        and allows live interactions with the AI assistant.
      </p>

      {/* Info Boxes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-black/30 border border-white/10 rounded-xl">
          <p className="text-xs text-white/50">Frontend</p>
          <p className="font-medium">React, TailwindCSS, ShadCN UI</p>
        </div>
        <div className="p-4 bg-black/30 border border-white/10 rounded-xl">
          <p className="text-xs text-white/50">Backend</p>
          <p className="font-medium">Node.js / Optional APIs</p>
        </div>
        <div className="p-4 bg-black/30 border border-white/10 rounded-xl">
          <p className="text-xs text-white/50">Integration</p>
          <p className="font-medium">AI Assistant, Draggable Components</p>
        </div>
        <div className="p-4 bg-black/30 border border-white/10 rounded-xl">
          <p className="text-xs text-white/50">Status</p>
          <p className="font-medium">Completed 🟢</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mb-10">
        <button
          onClick={() => window.open("https://tanishtirpathi.vercel.app")}
          className="px-5 py-2 bg-white/10 border border-white/10 rounded-lg hover:bg-white/20 transition"
        >
          🔗 Live Portfolio
        </button>
        <button
          onClick={() =>
            window.open("https://github.com/tanishtirpathi/OS-portfolio")
          }
          className="px-5 py-2 bg-white/10 border border-white/10 rounded-lg hover:bg-white/20 transition"
        >
          💻 Source Code
        </button>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4 mb-4">
        {[
          "React",
          "TailwindCSS",
          "ShadCN UI",
          "AI Assistant",
          "macOS UI",
          "Interactive",
        ].map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-white/70 bg-gray-800/50 border border-white/60 text-sm rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* MAIN ARTICLE */}
      <section className="space-y-6">
        {/* Overview */}
        <div>
          <h2 className="text-4xl font-bold mb-2">Overview</h2>
          <p className="text-white/60 leading-relaxed">
            This portfolio replicates macOS aesthetics with functional windows,
            draggable workspaces, a dock, animations, and interactive
            components. The highlight is the integrated AI assistant that
            responds to user queries in real-time, enhancing interactivity.
          </p>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-3xl font-bold mb-2">Key Features</h2>
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li>macOS-style UI with draggable windows and dock</li>
            <li>
              Functional workspaces for Projects, Skills, About, and Contact
            </li>
            <li>AI assistant integration for live interactions</li>
            <li>Responsive design with smooth animations and transitions</li>
            <li>Showcases multiple projects and skills interactively</li>
            <li>Fully frontend-based with optional API integration for AI</li>
          </ul>
        </div>

        {/* Why I Built */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Why I Built This</h2>
          <p className="text-white/60">
            I wanted to showcase my projects in a fun and interactive way while
            demonstrating advanced frontend skills. This portfolio combines a
            macOS-inspired design with interactive AI elements to create a
            unique personal branding experience.
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Tech Stack</h2>
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li>
              <strong>React:</strong> For building interactive and stateful UI
              components.
            </li>
            <li>
              <strong>TailwindCSS:</strong> Styling and responsive layout.
            </li>
            <li>
              <strong>ShadCN UI:</strong> Prebuilt components for macOS-like UI.
            </li>
            <li>
              <strong>AI Assistant:</strong> Integrated using custom or
              API-powered logic.
            </li>
            <li>
              <strong>Framer Motion / Animations:</strong> Smooth transitions
              and draggable windows.
            </li>
          </ul>
        </div>

        {/* Challenges & Solutions */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Challenges & Solutions</h2>
          <ul className="list-disc list-inside text-white/70 space-y-2">
            <li>
              <strong>Challenge:</strong> Creating a fully interactive
              macOS-like UI.
              <br />
              <strong>Solution:</strong> Used ShadCN UI + TailwindCSS for
              consistent design and draggable components.
            </li>
            <li>
              <strong>Challenge:</strong> Integrating a working AI assistant in
              frontend.
              <br />
              <strong>Solution:</strong> Connected AI logic via React state
              management and APIs.
            </li>
            <li>
              <strong>Challenge:</strong> Smooth animations with multiple
              draggable windows.
              <br />
              <strong>Solution:</strong> Used Framer Motion and custom z-index
              management for layering.
            </li>
          </ul>
        </div>

        {/* After Launch & Impact */}
        <div>
          <h2 className="text-2xl font-bold mb-2">After Launch & Impact</h2>
          <ul className="list-disc list-inside text-white/60 space-y-2">
            <li>
              Fully interactive portfolio received positive feedback for design
              and functionality.
            </li>
            <li>
              AI assistant added a unique interactive experience for visitors.
            </li>
            <li>
              Demonstrates advanced frontend skills and project showcase
              effectively.
            </li>
            <li>
              Encourages longer engagement due to interactivity and animations.
            </li>
          </ul>
        </div>

        {/* Future Plans */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Future Plans</h2>
          <p className="text-white/60">
            Expand AI assistant capabilities, add more functional mini-apps
            inside the portfolio, and optimize for mobile while maintaining the
            macOS-style experience.
          </p>
        </div>

        {/* Next Project */}
        <div className="flex justify-center items-center mt-4">
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
