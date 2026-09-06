import { useState, useEffect } from "react";
import ThemeSelector from "./components/ThemeSelector";
// import ColorSelector from "./components/ColorSelector";
import { defaultThemes } from "./constants/themes";
import type { YouTubeTheme } from "./types/themes";
import { getTheme, resetTheme, saveTheme } from "./services/storage";

function App() {
  const [theme, setTheme] = useState<YouTubeTheme | null>(null);

  const selectTheme = async(selectedTheme: YouTubeTheme) => {
    setTheme(selectedTheme);
    await saveTheme(selectedTheme);
  };

  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await getTheme();
      setTheme(savedTheme);
    };
    loadTheme();
  }, []);


  // const updateTheme = async<K extends keyof YouTubeTheme>(
  //   key: K,
  //   value: YouTubeTheme[K]
  // ) => {
  //   const updatedTheme = {
  //     ...theme,
  //     [key]: value,
  //   };
  //   setTheme(updatedTheme);
  //   await saveTheme(updatedTheme);
  // };

   const handleReset = async() =>{
    await resetTheme();
    setTheme(null)
  }

  // const applyTheme = async() => {
  //   saveTheme(theme)
  // };

  return (
    <div
      id="main-modal"
      className="flex w-full flex-col p-5"
    >
      <div className="mb-3 border-b border-slate-300 pb-3 dark:border-neutral-700">
        <h5 className="text-xl font-bold">
          YouTube Skin Manager
        </h5>

        <p className="mt-1 text-sm text-slate-500">
          Customize your YouTube experience
        </p>
      </div>

      <div className="mt-2 border-b border-slate-300 pb-3 dark:border-neutral-700">
        {/* Select Skin Color */}
        <ThemeSelector
          themes={defaultThemes}
          selectedTheme={theme ? theme.id : null}
          onSelect={selectTheme}
        />
      </div>

      <div className="mt-2 border-b border-slate-300 pb-3 dark:border-neutral-700">
        {/* Hide Shorts */}
      </div>

      {/* <div className="mt-6">
        <ColorSelector
          title="Accent"
          options={accentOptions}
          selected={theme.accentColor}
          onSelect={(value) =>
            updateTheme("accentColor", value)
          }
        />
      </div> */}

      <div  className="mt-4">
        {/* <button 
          type="button"
          onClick={applyTheme}
          className="px-3.5 py-1 text-white text-xs cursor-pointer bg-[#333] hover:bg-[#222] border border-[#333] rounded-full transition-colors">
          Apply
        </button> */}

        <button 
          type="button"
          onClick={handleReset}
          className="px-3.5 py-1 text-white text-xs cursor-pointer bg-[#333] hover:bg-[#222] border border-[#333] rounded-full transition-colors">
          Reset
        </button> 
      </div>
    </div>
  );
}

export default App;