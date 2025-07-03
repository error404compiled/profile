import React, { useState } from "react";
import profile from "../../public/Hritik.jpg";
import Header from "../Header/Header";
import workData from "../data/career.json";
import eduData from "../data/education.json";
import {
  Linkedin,
  Github,
  Mail,
  FileDown,
} from "lucide-react";
import Projects from "../compoment/Projects.jsx";

const HRITIK_BIRTH_YEAR = 2000;
const age = new Date().getFullYear() - HRITIK_BIRTH_YEAR;

export default function Home() {
  const [activeTab, setActiveTab] = useState("work");

const renderCard = (item, idx, isLast) => (
  <div key={idx} className="relative pl-20 pb-16">

    {/* Central Logo Circle */}
    <div className="absolute left-0 top-1 w-16 h-16 rounded-full bg-gray-950 dark:bg-gray-900 flex items-center justify-center border-2 border-gray-400 dark:border-gray-600 z-10">
      <img
        src={item.logo}
        alt={item.name}
        className="w-10 h-10 object-contain rounded-full"
      />
    </div>

    {/* Card */}
    <div className="bg-gray-100 dark:bg-[#121212] border border-gray-200 dark:border-gray-700 rounded-xl p-6 ml-4">
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
        {item.start} {item.end ? `- ${item.end}` : ""}
      </p>
      <h3 className="text-base font-semibold text-black dark:text-white">{item.name}</h3>
      <p className="text-sm italic text-gray-600 dark:text-gray-300">{item.title}</p>

      <ul className="list-disc list-inside mt-2 text-sm text-gray-800 dark:text-gray-200 space-y-1">
        {item.description?.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>

      {item.button?.label && (
        <a
          href={item.button.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-3 text-xs font-medium px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 text-black dark:text-white"
        >
          🌐 {item.button.label}
        </a>
      )}
    </div>
  </div>
);





  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white px-6 md:px-20 py-10 font-sans flex items-center justify-center">
        <div className="w-full max-w-3xl">
          {/* Hero */}
<section className="flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left py-8">
  <div className="flex-1">
    <h1 className="text-5xl font-extrabold leading-tight">
      Hello, I'm <span className="text-black dark:text-white">Hritik</span>
      <span className="inline-block animate-wave ml-2">👋</span>
    </h1>
    <p className="mt-4 text-xl font-medium text-gray-900 dark:text-gray-200">
      A {age}-year-old Machine Learning Engineer from India 🇮🇳
    </p>
    <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
      I specialize in building intelligent systems — making machines smarter, one model at a time.
    </p>
  </div>

  <div className="flex-shrink-0 transform rotate-3 hover:rotate-0 transition-transform duration-500">
    <img
      src={profile}
      alt="Hritik's Profile"
      className="rounded-2xl w-48 h-64 object-cover shadow-lg"
    />
  </div>
</section>




<p className="mt-3 text-lg text-gray-800 dark:text-gray-200">
  Making machines smarter, one model at a time.
</p>

<section className="mt-6 flex flex-wrap items-center gap-4 justify-center md:justify-start">
  <a
    href="/resume.pdf"
    target="_blank"
    className="flex items-center gap-2 px-4 py-2 border rounded-md text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800"
  >
    Resume <FileDown className="w-4 h-4" />
  </a>
  <a
    href="https://www.linkedin.com/in/hrithiksharma900/"
    target="_blank"
    aria-label="LinkedIn"
    className="text-gray-500 hover:text-black dark:hover:text-white"
  >
    <Linkedin className="w-5 h-5" />
  </a>
  <a
    href="https://github.com/error404compiled"
    target="_blank"
    aria-label="GitHub"
    className="text-gray-500 hover:text-black dark:hover:text-white"
  >
    <Github className="w-5 h-5" />
  </a>
  <a
    href="mailto:Hrithiksharma900@gmail.com"
    aria-label="Email"
    className="text-gray-500 hover:text-black dark:hover:text-white"
  >
    <Mail className="w-5 h-5" />
  </a>
</section>


          {/* Tab Switcher */}
          <div className="mt-20">
            <div className="flex w-fit w-full max-w-3xl mx-auto border dark:border-gray-700 rounded-full overflow-hidden mb-6 justify-center items-center">
              <button
                onClick={() => setActiveTab("work")}
                className={`px-6 py-2 font-semibold ${activeTab === "work" ? "bg-white dark:bg-gray-900 text-black dark:text-white" : "text-gray-400 dark:text-gray-500"}`}
              >
                Work
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`px-6 py-2 font-semibold ${activeTab === "education" ? "bg-white dark:bg-gray-900 text-black dark:text-white" : "text-gray-400 dark:text-gray-500"}`}
              >
                Education
              </button>
            </div>

            <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-gray-300 dark:border-gray-700 ml-6">
  {(activeTab === "work" ? workData : eduData).map((item, idx, arr) =>
    renderCard(item, idx, idx === arr.length - 1)
  )}
</div>


            </div>
          </div>
        </div>
      </main>
      <Projects/>
    </>
  );
}
