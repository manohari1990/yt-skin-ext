import { useState, useEffect } from "react";
import ThemeSelector from "./components/ThemeSelector";
// import ColorSelector from "./components/ColorSelector";
import { defaultThemes } from "./constants/themes";
import type { BackgroundOption, YouTubeTheme } from "./types/themes";
import { getTheme, resetTheme, saveTheme } from "./services/storage";
import BackgroundSelector from "./components/BackgroundSelector";
import { BackgroundOptions } from "./constants/backgrounds";

function App() {
  const [theme, setTheme] = useState<YouTubeTheme>(defaultThemes[0]);
  const [backgroundType, setBackgroundType] = useState<"color" | "image">("color");
  // let tempTheme = {}

  const selectTheme = async (selectedTheme: YouTubeTheme) => {
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

  const changeBackgroundType = (
    type: "color" | "image"
  ) => {
    setBackgroundType(type)
    // updateTheme("backgroundType", type);
  };


  // const updateTheme = async<K extends keyof YouTubeTheme>(
  //   key: K,
  //   value: YouTubeTheme[K]
  // ) => {
  //   const updatedTheme = {
  //     ...theme,
  //     [key]: value,
  //   };
  //   setTheme((prev) => {
  //     return {
  //       ...prev,
  //       ...updatedTheme
  //     }
  //   });
  //   await saveTheme(updatedTheme);
  // };

  const handleReset = async () => {
    await resetTheme();
    setTheme(defaultThemes[0])
  }

  const updateBackground = async (option: BackgroundOption) => {
    const tempOptions: YouTubeTheme = {
      ...theme,
      "NavHeaderTextColor": option.textColor,
      "NavHeaderBgColor": option.accent,
      "id": option.id,
      "backgroundImage": option.value,
      "backgroundType": 'image',
    }
    await saveTheme(tempOptions);
    setTheme(tempOptions)
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
        <div className="mt-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold">
              Background
            </h3>

            <div className="flex rounded-lg bg-slate-100 p-1">
              <button
                type="button"
                onClick={() => changeBackgroundType("color")}
                className={`rounded-md px-3 py-1 text-xs font-medium ${backgroundType === "color"
                    ? "bg-white shadow"
                    : "text-slate-500"
                  }`}
              >
                Color
              </button>

              <button
                type="button"
                onClick={() => changeBackgroundType("image")}
                className={`rounded-md px-3 py-1 text-xs font-medium ${backgroundType === "image"
                    ? "bg-white shadow"
                    : "text-slate-500"
                  }`}
              >
                Image
              </button>
            </div>
          </div>

          {backgroundType === "color" ? (
            <ThemeSelector
              themes={defaultThemes}
              selectedTheme={theme ? theme.id : ''}
              onSelect={selectTheme}
            />
          ) : (
            <BackgroundSelector
              options={BackgroundOptions}
              selected={theme && theme.id ? theme.id : ""}
              onSelect={updateBackground}
            />
          )}
        </div>
        {/* Select Background image */}
        {/* <BackgroundSelector 
          options={BackgroundOptions}
          selected={theme ? theme.id : null}
          onSelect={selectTheme}
        /> */}

        {/* Select Background Effects */}
      </div>

      <div className="mt-2 border-b border-slate-300 pb-3 dark:border-neutral-700">
        {/* Manage Page Content */}
        {/* Hide Shorts */}

        {/* Hide Comments */}

        {/* Hide Recommendations */}

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

      <div className="mt-4">
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