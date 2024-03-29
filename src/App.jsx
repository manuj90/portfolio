import React, { useEffect, useState } from "react";
import light from "../src/assets/darkMode/light.webp";
import dark from "../src/assets/darkMode/dark.webp";
import Footer from "./components/Footer.component.jsx";
import HeroSection from "./pages/HeroSection.page.jsx";
import AboutMe from "./pages/AboutMe.page.jsx";
import ContactMe from "./pages/ContactMe.page.jsx";
import TimeLine from "./components/TimeLine.component";
import Abilities from "./pages/Abilities.page.jsx";
import Navigation from "./components/Navigation.component.jsx";

function MyExperience() {
  return null;
}

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className="fixed bottom-2 lg:top-2 lg:bottom-auto right-3 z-10 flex flex-col md:flex-row gap-3 ">
        <button
          className="rounded-full bg-black p-1 transition duration-1000 dark:border-white dark:bg-white text-sm text-white dark:text-black group h-12 w-12 flex items-center justify-center"
          aria-label="CV download button"
        >
          <a
            href="https://drive.google.com/file/d/1PvPlaL2k4s8wlU6GrCm-qajGpRRpO7sq/view?usp=share_link"
            target="_blank"
            className="flex flex-col justify-center"
            aria-label="Link to my Curriculum Vitae"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 group-hover:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="px-1 text-sm text-center hidden group-hover:block">
              CV
            </p>
          </a>
        </button>
        <button
          type="button"
          aria-label="dark mode button"
          onClick={handleTheme}
          className="rounded-full bg-black p-1 transition duration-1000 flex items-center justify-center dark:border-white dark:bg-white h-12 w-12"
        >
          {theme === "dark" ? (
            <img src={light} alt="" className="h-8 w-8" />
          ) : (
            <img src={dark} alt="" className="h-8 w-9 invert" />
          )}
        </button>
      </div>

      <div className="cursor-default overflow-hidden antialiased bg-open dark:bg-closed">
        <div className="container mx-auto grid w-11/12 max-w-5xl gap-20">
          <HeroSection />
          <Abilities />
          <AboutMe />
          <TimeLine />
          <ContactMe />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
