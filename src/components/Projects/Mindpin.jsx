export function Mindpin({ goBack }) {
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
          src="/projects/mind.png"
          alt="MindPin"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <div className="gap-2 flex items-center">
        <h1 className="text-3xl font-bold mb-2">MindPin:- </h1>
        <h3 className="text-3xl text-white/50 font-normal mb-2">
          Desktop Sticky Notes App
        </h3>
      </div>

      {/* Short Intro */}
      <p className="text-white/60 leading-relaxed mb-6">
        MindPin is a desktop sticky notes app built using Electron. It allows
        users to create notes that stay on their screen, and when not in use,
        the notes automatically become invisible. Data is stored locally, making
        it lightweight and fast. This project combines productivity and
        minimalism with unique visibility features.
      </p>

      {/* Info Boxes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-black/30 border border-white/10 rounded-xl">
          <p className="text-xs text-white/50">Frontend</p>
          <p className="font-medium">Electron, HTML, CSS, JS</p>
        </div>
        <div className="p-4 bg-black/30 border border-white/10 rounded-xl">
          <p className="text-xs text-white/50">Backend</p>
          <p className="font-medium">None (Local Storage)</p>
        </div>
        <div className="p-4 bg-black/30 border border-white/10 rounded-xl">
          <p className="text-xs text-white/50">Database</p>
          <p className="font-medium">Local Storage</p>
        </div>
        <div className="p-4 bg-black/30 border border-white/10 rounded-xl">
          <p className="text-xs text-white/50">Status</p>
          <p className="font-medium">completed 🟢</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mb-10">
        <button
          onClick={() => window.open("https://mindpin.vercel.app/")}
          className="px-5 py-2 bg-white/10 border border-white/10 rounded-lg hover:bg-white/20 transition"
        >
          🔗 Live Demo
        </button>
        <button
          onClick={() =>
            window.open("https://github.com/tanishtirpathi/First-desktop-app-")
          }
          className="px-5 py-2 bg-white/10 border border-white/10 rounded-lg hover:bg-white/20 transition"
        >
          💻 Source Code
        </button>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4 mb-4">
        {[
          "completed 🟢",
          "Desktop App",
          "Electron",
          "Frontend",
          "Productivity",
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
            MindPin is a desktop sticky notes app designed to boost productivity
            while staying minimalistic. Notes stay on the screen and become
            invisible when not in use. The app is fully frontend, using Electron
            with local storage, making it lightweight and easy to use. It’s
            designed for users who want a simple yet powerful note-taking
            experience without clutter.
          </p>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-3xl font-bold mb-2">Key Features</h2>
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li>
              <strong>Sticky Notes:</strong> Notes stay on screen for quick
              access.
            </li>
            <li>
              <strong>Auto-Invisibility:</strong> Notes become invisible when
              not actively used.
            </li>
            <li>
              <strong>Local Storage:</strong> All data is stored locally for
              privacy and speed.
            </li>
            <li>
              <strong>Desktop App:</strong> Built using Electron for
              cross-platform support.
            </li>
          </ul>
        </div>

        {/* Why I Built This */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Why I Built This</h2>
          <p className="text-white/60">
            I built MindPin to explore desktop app development for the first
            time and create a productivity tool with a unique twist. I wanted to
            challenge myself with Electron and learn how to manage local storage
            efficiently while keeping the app lightweight and responsive.
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Tech Stack</h2>
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li>
              <strong>Electron:</strong> Desktop app framework.
            </li>
            <li>
              <strong>HTML, CSS, JS:</strong> Frontend development and UI
              design.
            </li>
            <li>
              <strong>Local Storage:</strong> Store notes data persistently on
              the user’s device.
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
              <strong>Challenge:</strong> First-time desktop app development
              with Electron.
              <br />
              <strong>Solution:</strong> Learned from documentation, community
              forums, and Twitter developer community for guidance.
            </li>
            <li>
              <strong>Challenge:</strong> Making notes auto-hide when not in
              use.
              <br />
              <strong>Solution:</strong> Used focus/blur and visibility events
              in JS to control note opacity dynamically.
            </li>
          </ul>
        </div>

        {/* After Launch & Impact */}
        <div>
          <h2 className="text-2xl font-bold mb-2">After Launch & Impact</h2>
          <ul className="list-disc list-inside text-white/60 space-y-2">
            <li>
              Successfully reached <strong>140+ active users</strong>.
            </li>
            <li>
              Users loved the auto-invisibility feature for minimal distraction.
            </li>
            <li>
              App received positive feedback for simplicity and productivity
              enhancement.
            </li>
            <li>
              Validated the potential of turning this app into a SaaS product.
            </li>
          </ul>
        </div>

        {/* Future Plans */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Future Plans</h2>
          <p className="text-white/60">
            Plan to convert MindPin into a SaaS product with cloud syncing,
            cross-device access, and enhanced note management features.
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
