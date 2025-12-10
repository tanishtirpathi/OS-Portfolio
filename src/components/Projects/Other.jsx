export function Jarvis({ goBack }) {
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
          src="/projects/jarvis.jpg"
          alt="Jarvis AI"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <div className="gap-2 flex items-center">
        <h1 className="text-3xl font-bold mb-2">Jarvis:- </h1>
        <h3 className="text-3xl text-white/50 font-normal mb-2">
          Voice AI Assistant
        </h3>
      </div>

      {/* Short Intro */}
      <p className="text-white/60 leading-relaxed mb-6">
        Jarvis AI is a personal voice assistant inspired by popular AI
        assistants, capable of performing tasks via voice commands. I built it
        by learning from tutorials and extended its functionality to integrate
        with my smart home, controlling devices and automating tasks. The
        assistant uses natural language processing and voice recognition for
        smooth interactions.
      </p>

      {/* Info Boxes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-black/30 border border-white/10 rounded-xl">
          <p className="text-xs text-white/50">Type</p>
          <p className="font-medium">Desktop / Smart Home AI</p>
        </div>
        <div className="p-4 bg-black/30 border border-white/10 rounded-xl">
          <p className="text-xs text-white/50">Technology</p>
          <p className="font-medium">Python, SpeechRecognition, pyttsx3</p>
        </div>
        <div className="p-4 bg-black/30 border border-white/10 rounded-xl">
          <p className="text-xs text-white/50">Integration</p>
          <p className="font-medium">Home Automation Devices</p>
        </div>
        <div className="p-4 bg-black/30 border border-white/10 rounded-xl">
          <p className="text-xs text-white/50">Status</p>
          <p className="font-medium">Completed 🟢</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mb-10">
        <button className="px-5 py-2 bg-white/10 border border-white/10 rounded-lg hover:bg-white/20 transition">
          🔗 Demo Video
        </button>
        <button
          onClick={() =>
            window.open(
              "https://github.com/tanishtirpathi/real-life-jarvis-from-iron-man-"
            )
          }
          className="px-5 py-2 bg-white/10 border border-white/10 rounded-lg hover:bg-white/20 transition"
        >
          💻 Source Code
        </button>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4 mb-4">
        {[
          "Completed 🟢",
          "AI",
          "Voice Assistant",
          "Python",
          "Home Automation",
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
            Jarvis AI is an advanced voice-controlled assistant capable of
            performing multiple tasks including information retrieval, media
            control, and smart home automation. Unlike beginner-level voice
            assistants, this AI can handle complex commands, execute automated
            sequences, and respond contextually to user queries.
          </p>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-3xl font-bold mb-2">Key Features</h2>
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li>
              <strong>Voice Commands:</strong> Execute tasks using natural voice
              input.
            </li>
            <li>
              <strong>Home Automation:</strong> Control smart devices, lights,
              and appliances.
            </li>
            <li>
              <strong>Information Retrieval:</strong> Search online, fetch
              weather, news, and other data.
            </li>
            <li>
              <strong>Context Awareness:</strong> Handles multi-step commands
              and conversations.
            </li>
            <li>
              <strong>Custom Automation:</strong> Trigger personalized routines
              and sequences.
            </li>
          </ul>
        </div>

        {/* Why I Built This */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Why I Built This</h2>
          <p className="text-white/60">
            I built Jarvis AI to explore voice-based AI development, integrate
            smart home automation, and create a functional assistant beyond
            beginner tutorials. The project helped me understand voice
            recognition, Python automation, and IoT device control in a
            practical way.
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Tech Stack</h2>
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li>
              <strong>Python:</strong> Core programming language for logic and
              integration.
            </li>
            <li>
              <strong>SpeechRecognition & pyttsx3:</strong> Voice input and
              output handling.
            </li>
            <li>
              <strong>IoT / Home Automation APIs:</strong> Device control and
              integration.
            </li>
            <li>
              <strong>Scheduler & Automation:</strong> Task management for
              multi-step commands.
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
              <strong>Challenge:</strong> Integrating voice commands with home
              automation devices.
              <br />
              <strong>Solution:</strong> Learned device APIs and created a
              modular command handler.
            </li>
            <li>
              <strong>Challenge:</strong> Handling multi-step or contextual
              voice queries.
              <br />
              <strong>Solution:</strong> Built a command parser and action queue
              to manage tasks sequentially.
            </li>
          </ul>
        </div>

        {/* After Launch & Impact */}
        <div>
          <h2 className="text-2xl font-bold mb-2">After Launch & Impact</h2>
          <ul className="list-disc list-inside text-white/60 space-y-2">
            <li>
              Successfully built a functional AI assistant capable of complex
              commands.
            </li>
            <li>Integrated smart home devices to automate daily tasks.</li>
            <li>
              Received positive feedback from peers for practical usability and
              advanced capabilities.
            </li>
          </ul>
        </div>

        {/* Future Plans */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Future Plans</h2>
          <p className="text-white/60">
            Expand Jarvis AI with natural language learning, more device
            integrations, and potentially create a SaaS version for personal and
            home automation use.
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
