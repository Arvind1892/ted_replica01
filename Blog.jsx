import React, { useEffect, useState } from "react";
import heroImg from "../../assets/img/Quantum Computing.jpg";
import officeImg from "../../assets/img/lab_cur.webp";
import teamImg from "../../assets/img/nations.jpg";

const subTopics = [
  {
    id: "lab-curiosity",
    title: "From Lab Curiosity to $10 Billion Companies",
    content: `Just a few years ago, quantum computing felt like a niche ground for researchers and physicists. 
Today, quantum startups are securing massive funding rounds and reaching billion-dollar valuations almost overnight.`,
    image: officeImg,
    quote:
      "These are not just abstract possibilities but real-world problems where quantum might hold the key.",
  },
  {
    id: "nations-going-all-in",
    title: "Nations Are Going All In",
    content: `It is not just the private sector fueling this momentum. Governments around the world are stepping up 
with billion-dollar national quantum programs, treating it as a matter of global competitiveness.`,
    image: teamImg,
    quote:
      "The race to lead in quantum computing is quickly becoming a matter of national strategy.",
  },
  {
    id: "beyond-hype",
    title: "Beyond the Hype: A Coming Transformation",
    content: `Yes, quantum computing still faces hurdles. But with trillions of dollars of potential value on the line, the momentum is undeniable.`,
    quote:
      "McKinsey estimates the global quantum sector could reach $97 billion by 2035 with quantum computing alone capturing a massive slice of that.",
  },
  {
    id: "better-qubits",
    title: "The Shift from “More Qubits” to “Better Qubits”",
    content: `In the early days, the quantum race was all about who could rack up the most qubits. 
But 2025 marks a turning point. The real challenge now is stability — making qubits reliable enough to handle complex tasks without error.`,
  },
  {
    id: "why-businesses",
    title: "Why Businesses Can’t Wait",
    content: `Quantum computing is no longer a distant concept. Organizations across industries are already exploring hybrid approaches combining classical and quantum techniques.`,
  },

  {
    id: "bottom-line",
    title: "The Bottom Line",
    content: `Quantum computing is no longer the future, it is the present in motion. 
2025 is the year it’s moving from research labs into real-world strategy.`,
  },
];

const BlogPage = () => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      subTopics.forEach((topic) => {
        const section = document.getElementById(topic.id);
        if (section && section.getBoundingClientRect().top <= 120) {
          current = topic.id;
        }
      });
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-white mt-4">
      {/* Hero Section */}
      <section className="relative w-full h-[600px]">
        <img
          src={heroImg}
          alt="Quantum Computing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-white uppercase font-bold text-lg mb-4">blog</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-relaxed">
              Quantum Computing in 2025: Why Now Is the Moment That Matters
            </h1>
            <p className="mt-4 text-gray-200 max-w-2xl">
              For decades, quantum computing has lived in the realm of sci-fi...
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16 flex flex-col lg:flex-row gap-12">
         <div className="blog-subTitle">
          <p className="ext-gray-700 leading-relaxed">For decades, quantum computing has lived in the realm of sci-fi and physics labs, wrapped in mysterious jargon about qubits, superposition, and entanglement. It felt distant, something future generations might experience once the bugs were worked out. But here we are in 2025, and suddenly, quantum computing is not only a wild idea in research papers. It is  hitting headlines, attracting billions in investment, and starting to reshape how industries and governments think about the future of technology.</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16 flex flex-col lg:flex-row gap-12">
        {/* Left: Blog Content */}
        <div className="flex-1 space-y-20">
          {subTopics.map((topic) => (
            <section key={topic.id} id={topic.id} className="scroll-mt-28">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                {topic.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {topic.content}
              </p>

              {/* Optional Quote */}
              {topic.quote && (
                <blockquote className="border-l-4 border-indigo-600 pl-4 italic text-gray-600 mb-6">
                  “{topic.quote}”
                </blockquote>
              )}

              {/* Optional Image */}
              {topic.image && (
                <div className="my-6">
                  <img
                    src={topic.image}
                    alt={topic.title}
                    className="rounded-xl shadow-md"
                  />
                  {/* <p className="text-sm text-gray-500 mt-2">
                    Illustration related to {topic.title}
                  </p> */}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Right: Sticky Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-28 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">
              On this page
            </h3>
            <ul className="space-y-2 text-sm list-none p-0 m-0">
              {subTopics.map((topic) => (
                <li key={topic.id}>
                  <a
                    href={`#${topic.id}`}
                    className={`block pl-3 transition-colors duration-200 border-l-2 ${
                      activeId === topic.id
                        ? "border-indigo-600 text-indigo-600 font-medium bg-indigo-50"
                        : "border-transparent text-gray-600 hover:text-indigo-500 hover:border-indigo-300"
                    }`}
                  >
                    {topic.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogPage;
