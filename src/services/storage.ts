import type { YouTubeTheme } from "../types/themes";
import { defaultThemes } from "../constants/themes";

const THEME_KEY = 'YoutubeSkin'

export const getTheme = async (): Promise<YouTubeTheme> => {
  const result = await chrome.storage.local.get(THEME_KEY);
  const storedTheme = result[THEME_KEY] as YouTubeTheme | undefined;
  return {
    ...defaultThemes[0],
    ...storedTheme
  };
};

export const saveTheme = async(theme:YouTubeTheme) =>{
    await chrome.storage.local.set({
        [THEME_KEY]: theme
    })
}

export const resetTheme = async() =>{
    await chrome.storage.local.set({
        [THEME_KEY]: null
    })
}

